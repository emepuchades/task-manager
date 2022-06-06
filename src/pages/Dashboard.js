import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { BsPlus } from "react-icons/bs";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { BsX } from "react-icons/bs";
import firebase from 'firebase/app'

function Dashboard() {
    const [open, setOpen] = useState(false);
    const [boards, setBoards] = useState([]);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    useEffect(() => {
        async function getBoards() {
            const todo = []
            const response = firebase.firestore().collection("boards");
            const data = await response.get();
            data.docs.map(item => {
                todo.push(item.data())
                setBoards(todo);
                //boards ? setBoards([...boards, item.data()])
            })
        }
        getBoards()
    }, [])


    return (
        <Block>
            <Text>
                👋 ¡Hola $user, empieza a rear tareas con Task Manager!
            </Text>
            <CardEmpty onClick={handleOpen}>
                <BsPlus className='icon-plus' />
                <CardText>Crea un nuevo projecto</CardText>
            </CardEmpty>
            {boards.map((board) =>
                <CardEmpty key={board.name} onClick={handleOpen}>
                    <BsPlus className='icon-plus' />
                    <CardText>{board.name}</CardText>
                </CardEmpty>
            )}
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
                        <InputModal type="text" placeholder="Titulo del proyecto" />
                        <ButtonModal>Crear</ButtonModal>
                    </Typography>
                </Box>
            </Modal>
        </Block>
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

const Text = styled.div`
    font-size: 28px;
    margin-top: 40px;
`;
const CardText = styled.div`
    display: flex;
    align-items: center;
    font-size: 18px;
    margin-left: 20px;
`;
const CardEmpty = styled.div`
    display: flex;    
    background-color: #FFFFFF;
    border-radius: 10px;
    margin-top: 50px;
    padding: 40px;
    width: 250px;
    border-radius: 10px;
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
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    padding: '40px',
    borderRadius: '10px'
};
export default Dashboard