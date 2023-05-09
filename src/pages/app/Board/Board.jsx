import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import { AppContext } from '../../../App'

import { v4 as uuid } from "uuid";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import styled from 'styled-components'

import InputContainer from "../../../components/app/InputContainer/InputContainer";
import List from "../../../components/app/List/List";

import StoreApi from "../../../utils/storeApi";
import "./board.styles.css";
import { useContext } from 'react'

import { db, timestamp } from "../../../firebase";
import {
  addDoc,
  arrayUnion,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
  updateDoc,
} from "firebase/firestore";

import NavLeft from '../../../components/NavLeft'
import NavTop from '../../../components/NavTop'

export default function Board() {
  const [lists, setLists] = useState([]);
  const { id } = useParams()
  const { expand } = useContext(AppContext)

  useEffect(() => {
    const q = query(collection(db, "lists"), orderBy("timestamp", "asc"));
    onSnapshot(q, (snapShot) => {
      setLists(
        snapShot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        })
      );
    });
  }, []);

  const addMoreCard = async (title, listId) => {
    if (!title) {
      return;
    }
    const newCardId = uuid();
    const newCard = {
      id: newCardId,
      title,
    };
    const listRef = doc(db, "lists", listId);

    await updateDoc(listRef, {
      cards: arrayUnion(newCard),
    });
  };

  const removeCard = async (index, listId, cardId) => {
    const listRef = doc(db, "lists", listId);

    lists.forEach(async (list) => {
      if (list.id === listId) {
        list.cards.splice(index, 1);
        await updateDoc(listRef, {
          cards: list.cards.filter((card) => card.id !== cardId),
        });
      }
      return list;
    });
  };

  const updateCardTitle = (title, index, listId, cardId) => {
    const listRef = doc(db, "lists", listId);

    lists.forEach(async (list) => {
      if (list.id === listId) {
        list.cards[index].title = title;
        await updateDoc(listRef, {
          cards: list.cards.map((card) => {
            if (card.id === cardId) {
              card.title = title;
              return card;
            }
            return card;
          }),
        });
      }
      return list;
    });
  };

  const addMoreList = async (title) => {
    if (!title) {
      return;
    }
    await addDoc(collection(db, "lists"), {
      title,
      cards: [],
      timestamp,
    });
  };

  const updateListTitle = (title, listId) => {
    const listRef = doc(db, "lists", listId);

    lists.forEach(async (list) => {
      if (list.id === listId) {
        list.title = title;
        await updateDoc(listRef, {
          title: title,
        });
      }
      return list;
    });
  };

  const deleteList = async (listId) => {
    await deleteDoc(doc(db, "lists", listId));
  };

  const onDragEnd = async (result) => {
    const { destination, source, draggableId, type } = result;

    if (!destination) {
      return;
    }

    if (type === "list") {
      const destinationRef = doc(db, "lists", lists[destination.index].id);
      const sourceRef = doc(db, "lists", lists[source.index].id);
      await updateDoc(destinationRef, {
        timestamp: lists[source.index].timestamp,
      });
      await updateDoc(sourceRef, {
        timestamp: lists[destination.index].timestamp,
      });
      return;
    }

    if (source.droppableId === destination.droppableId) {
      const list = lists.find((list) => list.id === source.droppableId);

      const updatedCards = list.cards.map((card, index) => {
        if (index === source.index) {
          return list.cards[destination.index];
        }
        if (index === destination.index) {
          return list.cards[source.index];
        }
        return card;
      });
      const listRef = doc(db, "lists", destination.droppableId);
      await updateDoc(listRef, {
        cards: updatedCards,
      });
    } else {
      const sourceList = lists.find((list) => list.id === source.droppableId);
      const destinationList = lists.find(
        (list) => list.id === destination.droppableId
      );
      const draggingCard = sourceList.cards.filter(
        (card) => card.id === draggableId
      )[0];

      const sourceListRef = doc(db, "lists", source.droppableId);

      sourceList.cards.splice(source.index, 1);
      await updateDoc(sourceListRef, {
        cards: sourceList.cards,
      });

      const destinationListRef = doc(db, "lists", destination.droppableId);
      destinationList.cards.splice(destination.index, 0, draggingCard);

      await updateDoc(destinationListRef, {
        cards: destinationList.cards,
      });
    }
  };
  return (
    <Block>
      <NavLeft/>
      <NavTop />
      <Title className={expand ? 'expand' : 'container'}>Proyecto: {id}</Title>
      <ContainerTask className={expand ? 'expand' : 'container'}>
        <StoreApi.Provider
          value={{
            addMoreCard,
            addMoreList,
            updateListTitle,
            removeCard,
            updateCardTitle,
            deleteList,
          }}
        >
          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="app" type="list" direction="horizontal">
              {(provided) => (
                <div
                  className="wrapper"
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  {lists.map((list, index) => {
                    return <List list={list} key={list.id} index={index} />;
                  })}
                  <div>
                    <InputContainer type="list" />
                  </div>
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
        </StoreApi.Provider>
      </ContainerTask>

    </Block>
  );
}

const Block = styled.div``
const Title = styled.h3`
    margin-left: 121px;

    &.container {
      margin-left: 122px
    }

    &.expand {
      margin-left: 256px;
    }
`

const ContainerTask = styled.div`

    &.container {
        margin-left: 5px;
    }

    &.expand {
        margin-left: 140px;
    }
`