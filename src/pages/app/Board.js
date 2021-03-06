import React, { useState, useEffect, useContext } from 'react'
import { doc, setDoc, onSnapshot, collection, addDoc, getDocs, updateDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { useAuth } from "../auth/AuthContext";
import styled from 'styled-components'
import { Link } from "react-router-dom";
import { BsPlus } from "react-icons/bs";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { BsX, BsHeart, BsHeartFill } from "react-icons/bs";

function Board() {
    const [open, setOpen] = useState(false);
    const [boards, setBoards] = useState([]);
    const [newProject, setNewProject] = useState({ name: '', fav: false });
    const { logout, user } = useAuth();

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    useEffect(() => {
        async function getBoards() {
            const subColRef = collection(db, "userBoards", user.uid, "boards")
            onSnapshot(subColRef, (querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    setBoards(boards => [...boards, { id: doc.id, name: doc.data().name, fav: doc.data().fav }]);                   
                });
            });
        }
        getBoards()
    }, [])

    async function addTodo() {
        const boardsRef = collection(db, "userBoards");
        await addDoc(collection(boardsRef, user.uid, 'boards'), {
            name: newProject.name,
            fav: false
        });

        handleClose()
    }

    const fav = async (boardInfo, isFav) => {
        const boardRef = doc(db, "userBoards", user.uid, "boards", boardInfo.id);
        await updateDoc(boardRef, {
            name: boardInfo.name,
            fav: isFav
        });
        {console.log("boads", boards)}
    };

    return (
        <>
            <Block>
                <BlockBoard>
                    <CardEmpty onClick={handleOpen}>
                        <BsPlus className='icon-plus' />
                        <CardText>Nuevo projecto</CardText>
                    </CardEmpty>
                    {boards ? boards.map((board, index) =>
                        <>
                            <Link className='card' to={`/project/${board.id}`}>
                                <CardText>{board.name}</CardText>
                            </Link>
                            {board.fav ?
                                <BsHeartFill className="heartfill iconheart" onClick={() => fav(board, false)} />
                                : <BsHeart className='iconheart' onClick={() => fav(board, true)} />}
                        </>
                    ) : null}
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                                Crear tablero
                                <Icon onClick={handleClose}>
                                    <BsX />
                                </Icon>
                            </Typography>
                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                <InputModal type="text" placeholder="Titulo del proyecto" value={newProject.name} onChange={event => setNewProject({ name: event.target.value, fav: false })} />
                                <ButtonModal onClick={() => addTodo()}>Crear</ButtonModal>
                            </Typography>
                        </Box>
                    </Modal>
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
const CardEmpty = styled.div`
    display: flex;    
    background-color: #FFFFFF;
    border-radius: 10px;
    margin-top: 50px;
    padding: 40px;
    width: 220px;
    border-radius: 10px;
    margin: 15px;
    .icon-plus{
        width: 40px;
        height: 40px;
    }
    :hover {
        background-color:  #F0F0F3;
    }
`;

const InputModal = styled.input`
    resize: none;
    border: none;
    background: #F6F6F6;
    border-radius: 10px;
    font-size: 16px;
    height: 40px;
    width: 200px;
    margin-bottom: 40px;
`;
const ButtonModal = styled.button`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 30px;
    background-color: #FFFFFF;
    border: none;
    border-radius: 10px;
    font-size: 16px;
    box-shadow: 0px -4px 3px #f3f3f3
`;

const Icon = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    padding: 25px;
    svg {
        width: 30px;
        height: 30px;
    }
`;

const style = {
    position: 'absolute',
    backgroundColor: '#FFFFFF',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    boxShadow: 24,
    p: 4,
    padding: '40px',
    borderRadius: '10px'
};
export default Board