import { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../App'
import styled from 'styled-components'

import { db, timestamp } from '../../firebase'
import { collection, getDocs, addDoc, doc, updateDoc } from 'firebase/firestore'
import { useAuth } from '../auth/AuthContext'

import NavLeft from '../../components/NavLeft'
import NavTop from '../../components/NavTop'
import Home from './Home/Home'
import Board from './Boards/Boards'
import Favorites from './Favorites/Favorites'
import Profile from './Profile/Profile'

const defaultLists = ['Por hacer', 'En curso', 'Hecho']

function Main() {
    const { menuState, expand } = useContext(AppContext)
    const { user } = useAuth()

    const [boards, setBoards] = useState([])
    const [open, setOpen] = useState(false)
    const [newProject, setNewProject] = useState({ name: '', fav: false })

    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    useEffect(() => {
        async function getBoards() {
            const getGamesbd = await getDocs(
                collection(db, 'userBoards', user.uid, 'boards')
            )
            setBoards(
                getGamesbd.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data(),
                }))
            )
        }
        getBoards()
    }, [user.uid])

    async function addTodo() {
        const boardsRef = collection(db, 'userBoards')
        const boardRef = await addDoc(
            collection(boardsRef, user.uid, 'boards'),
            {
                name: newProject.name,
                fav: false,
            }
        )
        for (const title of defaultLists) {
            await addDoc(collection(boardRef, 'lists'), {
                title,
                cards: [],
                timestamp,
            })
        }
        getBoards()
        handleClose()
    }

    async function getBoards() {
        const getGamesbd = await getDocs(
            collection(db, 'userBoards', user.uid, 'boards')
        )
        setBoards(
            getGamesbd.docs.map(doc => ({
                id: doc.id,
                ...doc.data(),
            }))
        )
    }

    async function fav(boardInfo, isFav) {
        const boardRef = doc(db, 'userBoards', user.uid, 'boards', boardInfo.id)
        await updateDoc(boardRef, {
            name: boardInfo.name,
            fav: isFav,
        })
        getBoards()
    }

    function renderBody(param) {
        switch (param) {
            case 1:
                return (
                    <Board
                        boards={boards}
                        open={open}
                        handleOpen={handleOpen}
                        handleClose={handleClose}
                        newProject={newProject}
                        setNewProject={setNewProject}
                        addTodo={addTodo}
                        fav={fav}
                    />
                )
            case 2:
                return <Favorites boards={boards} fav={fav} />
            case 3:
                return <Profile />
            default:
                return (
                    <Home
                        boards={boards}
                        open={open}
                        handleOpen={handleOpen}
                        handleClose={handleClose}
                        newProject={newProject}
                        setNewProject={setNewProject}
                        addTodo={addTodo}
                        fav={fav}
                    />
                )
        }
    }

    return (
        <>
            <NavLeft />
            <NavTop />
            <Block className={expand ? 'expand' : ''}>
                {renderBody(menuState)}
            </Block>
        </>
    )
}

const Block = styled.div`
    min-height: calc(100vh - var(--top-height) - var(--gap-panel) * 2);
    margin: 0 var(--gap-panel) var(--gap-panel) var(--nav-width);
    padding: 28px 32px 40px;
    background-color: var(--color-surface);
    border-radius: 0 0 var(--radius-panel) var(--radius-panel);
    transition: margin-left 0.15s ease;
    &.expand {
        margin-left: var(--nav-width-expand);
    }
    .bsx {
        position: absolute;
        top: 0;
        right: 0;
        width: 31px;
        height: 31px;
    }
`

export default Main
