import React from 'react'
import { Link } from "react-router-dom";

import { BsX, BsHeart, BsHeartFill } from "react-icons/bs";
import { BsPlus } from "react-icons/bs";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import {
  Block,
  BlockBoard,
  Text,
  CardText,
  CardEmpty,
  InputModal,
  ButtonModal,
  Icon,
  style
} from './home.style'

function Home({ boards,
  open,
  handleOpen,
  handleClose,
  newProject,
  setNewProject,
  addTodo,
  fav }) {
  return (
    <>
      <Block>
        <Text>
          👋 ¡Hola, empieza a crear tareas con Task Manager!
        </Text>
        <BlockBoard>
          <CardEmpty onClick={() => handleOpen()}>
            <BsPlus className='icon-plus' />
            <CardText>Nuevo projecto</CardText>
          </CardEmpty>
          {boards ? boards.map((board, index) =>
            <>
              <Link className='card' to={`/project/${board.name}`} key={index}>
                <CardText>{board.name}</CardText>
              </Link>
              {board.fav ?
                <BsHeartFill className="heartfill iconheart" onClick={() => fav(board, false)} />
                : <BsHeart className='iconheart' onClick={() => fav(board, true)} />}
            </>
          ) : null}

          <Modal
            open={open}
            onClose={() => handleClose()}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            className="add-task"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Crear tablero
                <Icon onClick={() => handleClose()}>
                  <BsX />
                </Icon>
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                <InputModal
                  type="text"
                  placeholder="Titulo del proyecto"
                  value={newProject.name}
                  onChange={event => setNewProject({ name: event.target.value, fav: false })}
                />
                <ButtonModal onClick={() => addTodo()}>Crear</ButtonModal>
              </Typography>
            </Box>
          </Modal>
        </BlockBoard>
      </Block>
    </>
  )
}

export default Home
