import { Link } from 'react-router-dom'

import { BsX, BsHeart, BsHeartFill, BsPlus } from 'react-icons/bs'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'

import {
    Block,
    Header,
    BlockBoard,
    Text,
    TextList,
    CardBoard,
    CardCover,
    CardIcon,
    CardText,
    CardEmpty,
    ButtonNew,
    InputModal,
    ButtonModal,
    Icon,
    style,
} from './home.style'

function Home({
    boards,
    open,
    handleOpen,
    handleClose,
    newProject,
    setNewProject,
    addTodo,
    fav,
}) {
    return (
        <>
            <Block>
                <Header>
                    <Text>👋 ¡Hola, empieza a crear tareas con Task Manager!</Text>
                    <ButtonNew onClick={() => handleOpen()}>
                        <BsPlus className='icon-plus' />
                        Nuevo proyecto
                    </ButtonNew>
                </Header>
                <TextList>
                    Proyectos <span>{boards.length}</span>
                </TextList>
                <BlockBoard>
                    {boards && boards.length > 0
                        ? boards.map((board, index) => (
                              <CardBoard
                                  key={index}
                                  className={`color-${index % 6}`}
                              >
                                  <Link
                                      className='card'
                                      to={`/project/${board.id}`}
                                  >
                                      <CardCover>
                                          <CardIcon>{board.name[0]}</CardIcon>
                                      </CardCover>
                                      <CardText>{board.name}</CardText>
                                  </Link>
                                  {board.fav ? (
                                      <BsHeartFill
                                          className='heartfill iconheart'
                                          onClick={() => fav(board, false)}
                                      />
                                  ) : (
                                      <BsHeart
                                          className='iconheart'
                                          onClick={() => fav(board, true)}
                                      />
                                  )}
                              </CardBoard>
                          ))
                        : (
                              <CardEmpty>
                                  Aún no tienes proyectos. Crea el primero con
                                  «Nuevo proyecto».
                              </CardEmpty>
                          )}

                    <Modal
                        open={open}
                        onClose={() => handleClose()}
                        aria-labelledby='modal-modal-title'
                        aria-describedby='modal-modal-description'
                        className='add-task'
                    >
                        <Box sx={style}>
                            <Typography
                                id='modal-modal-title'
                                variant='h6'
                                component='h2'
                            >
                                Crear tablero
                                <Icon onClick={() => handleClose()}>
                                    <BsX />
                                </Icon>
                            </Typography>
                            <Typography
                                id='modal-modal-description'
                                sx={{ mt: 2 }}
                            >
                                <InputModal
                                    type='text'
                                    placeholder='Título del proyecto'
                                    value={newProject.name}
                                    onChange={event =>
                                        setNewProject({
                                            name: event.target.value,
                                            fav: false,
                                        })
                                    }
                                />
                                <ButtonModal onClick={() => addTodo()}>
                                    Crear
                                </ButtonModal>
                            </Typography>
                        </Box>
                    </Modal>
                </BlockBoard>
            </Block>
        </>
    )
}

export default Home
