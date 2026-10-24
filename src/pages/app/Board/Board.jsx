import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../../../App'

import { v4 as uuid } from "uuid";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import styled from 'styled-components'
import { BsTrash } from 'react-icons/bs'

import InputContainer from "../../../components/app/InputContainer/InputContainer";
import List from "../../../components/app/List/List";
import ModalDelete from "../../../components/app/ModalDelete/ModalDelete";

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
  writeBatch,
} from "firebase/firestore";

import NavLeft from '../../../components/NavLeft'
import NavTop from '../../../components/NavTop'
import { useAuth } from '../../auth/AuthContext'

export default function Board() {
  const [lists, setLists] = useState([]);
  const [boardName, setBoardName] = useState("");
  const [openDelete, setOpenDelete] = useState(false);
  const { id } = useParams()
  const navigate = useNavigate();
  const { expand } = useContext(AppContext)
  const { user } = useAuth();
  const listsRef = collection(
    db,
    "userBoards",
    user.uid,
    "boards",
    id,
    "lists"
  );

  useEffect(() => {
    const unsubscribeBoard = onSnapshot(
      doc(db, "userBoards", user.uid, "boards", id),
      (board) => {
        setBoardName(board.exists() ? board.data().name : "");
      }
    );
    const q = query(
      collection(db, "userBoards", user.uid, "boards", id, "lists"),
      orderBy("timestamp", "asc")
    );
    const unsubscribeLists = onSnapshot(q, (snapShot) => {
      setLists(
        snapShot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        })
      );
    });
    return () => {
      unsubscribeBoard();
      unsubscribeLists();
    };
  }, [user.uid, id]);

  const addMoreCard = async (title, listId) => {
    if (!title) {
      return;
    }
    const newCardId = uuid();
    const newCard = {
      id: newCardId,
      title,
    };
    const listRef = doc(listsRef, listId);

    await updateDoc(listRef, {
      cards: arrayUnion(newCard),
    });
  };

  const removeCard = async (index, listId, cardId) => {
    const listRef = doc(listsRef, listId);

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
    const listRef = doc(listsRef, listId);

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
    await addDoc(listsRef, {
      title,
      cards: [],
      timestamp,
    });
  };

  const updateListTitle = (title, listId) => {
    const listRef = doc(listsRef, listId);

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

  const deleteProject = async () => {
    const batch = writeBatch(db);
    lists.forEach((list) => {
      batch.delete(doc(listsRef, list.id));
    });
    batch.delete(doc(db, "userBoards", user.uid, "boards", id));
    await batch.commit();
    navigate("/");
  };

  const deleteList = async (listId) => {
    await deleteDoc(doc(listsRef, listId));
  };

  const onDragEnd = async (result) => {
    const { destination, source, draggableId, type } = result;

    if (!destination) {
      return;
    }

    if (type === "list") {
      const destinationRef = doc(listsRef, lists[destination.index].id);
      const sourceRef = doc(listsRef, lists[source.index].id);
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
      const listRef = doc(listsRef, destination.droppableId);
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

      const sourceListRef = doc(listsRef, source.droppableId);

      sourceList.cards.splice(source.index, 1);
      await updateDoc(sourceListRef, {
        cards: sourceList.cards,
      });

      const destinationListRef = doc(listsRef, destination.droppableId);
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
      <Title className={expand ? 'expand' : 'container'}>
        <TitleText>Proyecto: {boardName}</TitleText>
        <ButtonDelete type="button" onClick={() => setOpenDelete(true)}>
          <BsTrash />
          Eliminar proyecto
        </ButtonDelete>
      </Title>
      <ModalDelete
        open={openDelete}
        handleClose={() => setOpenDelete(false)}
        projectName={boardName}
        deleteProject={deleteProject}
      />
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
const Title = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    margin: 0 var(--gap-panel) 0 var(--nav-width);
    padding: 24px 32px 4px;
    background-color: var(--color-surface);
    transition: margin-left 0.15s ease;

    &.container {
      margin-left: var(--nav-width);
    }

    &.expand {
      margin-left: var(--nav-width-expand);
    }
`

const TitleText = styled.h3`
    min-width: 0;
    margin: 0;
    overflow: hidden;
    font-size: 24px;
    font-weight: 700;
    white-space: nowrap;
    text-overflow: ellipsis;
`

const ButtonDelete = styled.button`
    display: flex;
    align-items: center;
    gap: 8px;
    flex-shrink: 0;
    height: 38px;
    padding: 0 14px;
    background-color: transparent;
    border: 1px solid var(--color-border);
    border-radius: var(--radius-md);
    font-size: 14px;
    font-weight: 600;
    color: var(--color-text-muted);
    cursor: pointer;
    transition: color 0.15s, background-color 0.15s, border-color 0.15s;

    svg {
      width: 15px;
      height: 15px;
    }

    :hover {
      color: var(--color-danger);
      background-color: var(--color-coral-soft);
      border-color: var(--color-coral-soft);
    }

    :focus-visible {
      outline: 2px solid var(--color-danger);
      outline-offset: 2px;
    }
`

const ContainerTask = styled.div`
    min-height: calc(100vh - var(--top-height) - var(--gap-panel) * 2 - 64px);
    margin: 0 var(--gap-panel) var(--gap-panel) 0;
    background-color: var(--color-surface);
    border-radius: 0 0 var(--radius-panel) var(--radius-panel);
    transition: margin-left 0.15s ease;

    &.container {
        margin-left: var(--nav-width);
    }

    &.expand {
        margin-left: var(--nav-width-expand);
    }
`