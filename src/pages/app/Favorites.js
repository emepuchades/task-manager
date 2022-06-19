import React, { useState, useEffect, useContext } from 'react'
import { doc, setDoc, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase";
import { useAuth } from "../auth/AuthContext";
import styled from 'styled-components'
import { Link } from "react-router-dom";
import { BsHeartFill } from "react-icons/bs";

function Favorites() {
    const [boards, setBoards] = useState([]);
    const { logout, user } = useAuth();

    useEffect(() => {
        async function getBoards() {
            onSnapshot(doc(db, "userBoards", user.uid), (doc) => {
                setBoards(doc.data().boards)
            });
        }
        getBoards()
    }, [])

    const fav = async (index, isFav) => {
        boards[index].fav = isFav

        const userBoardsRef = doc(db, "userBoards", user.uid);
        await setDoc(userBoardsRef, {
            boards
        })
    };

    return (
        <>
            <Block>
                <BlockBoard> 
                    {boards ? boards.map((board, index) =>
                        board.fav ?
                            <>
                                <Link className='card' to="/project" key={index}>
                                    <CardText>{board.name}</CardText>
                                </Link>
                                <BsHeartFill className="heartfill iconheart" onClick={() => fav(index, false)} />
                            </>
                            : null
                    ) : null}
                </BlockBoard>
            </Block>
        </>
    )
}

const Block = styled.div`
    margin-left: 90px;
    padding: 0px 34px;
    .bsx {
        position: absolute;
        top: 0;
        right: 0;
        width: 31px;
        height: 31px;
    }
`;

const BlockBoard = styled.div`
    font-size: 28px;
    margin-top: 40px;
    width: auto;
    display: table;
    .card {
        display: flex;    
        background-color: #FFFFFF;
        border-radius: 10px;
        margin-top: 50px;
        padding: 40px;
        width: 220px;
        border-radius: 10px;
        margin: 15px;
        text-decoration: none;
        color: #111111;
        display: inline-table;
        :hover {
            background-color:  #F0F0F3;
    
        }
    }
    .heartfill {
        color: red;
    }
    .iconheart{
        position: relative;
        right: 60px;
        width: 20px;
        top: 40px;
        :hover {
            color: red;
        }
    }
`;

const CardText = styled.div`
    display: flex;
    align-items: center;
    font-size: 18px;
    margin-left: 20px;
    width: 100%;
`;

const Text = styled.div`
    font-size: 28px;
    margin-top: 40px;
`;
export default Favorites