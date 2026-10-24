import { Link } from 'react-router-dom'

import { BsHeart, BsHeartFill, BsPlus } from 'react-icons/bs'

import ModalProject from '../../../components/app/ModalProject/ModalProject'

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
} from './boards.style'

function Boards({
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

                    <ModalProject
                        open={open}
                        handleClose={handleClose}
                        newProject={newProject}
                        setNewProject={setNewProject}
                        addTodo={addTodo}
                    />
                </BlockBoard>
            </Block>
        </>
    )
}

export default Boards
