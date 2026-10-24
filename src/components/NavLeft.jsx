import { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import { AppContext } from '../App'
import { Link, useParams } from 'react-router-dom'
import { collection, onSnapshot } from 'firebase/firestore'
import { db } from '../firebase'
import { useAuth } from '../pages/auth/AuthContext'
import logo from '../assets/images/logo.png'
import Skeleton from './app/Skeleton/Skeleton'
import {
    BsHouse,
    BsHeart,
    BsCollection,
    BsArrowBarLeft,
    BsArrowBarRight,
    BsPerson,
} from 'react-icons/bs'

function NavLeft() {
    const { changeExpand, expand, setMenuState, menuState } =
        useContext(AppContext)
    const { user } = useAuth()
    const { id } = useParams()
    const [boards, setBoards] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const unsubscribe = onSnapshot(
            collection(db, 'userBoards', user.uid, 'boards'),
            snapShot => {
                setBoards(
                    snapShot.docs.map(doc => ({
                        id: doc.id,
                        ...doc.data(),
                    }))
                )
                setLoading(false)
            }
        )
        return () => unsubscribe()
    }, [user.uid])

    return (
        <Nav className={expand ? 'expand' : ''}>
            <MenuTop>
                <Image src={logo} alt='Logo' />
                <Brand className='brand'>Task Manager</Brand>
                <Arrow onClick={() => changeExpand()}>
                    {expand ? (
                        <BsArrowBarLeft className='icon-sccore' />
                    ) : (
                        <BsArrowBarRight className='icon-sccore' />
                    )}
                </Arrow>
            </MenuTop>
            <Menu>
                <Li
                    to='/'
                    onClick={() => setMenuState(0)}
                    className={menuState === 0 && !id ? 'focus' : null}
                >
                    <BsHouse className='icon-search' />
                    <Text>Inicio</Text>
                </Li>
                <Li
                    to='/'
                    onClick={() => setMenuState(1)}
                    className={menuState === 1 && !id ? 'focus' : null}
                >
                    <BsCollection className='icon-search' />
                    <Text>Tableros</Text>
                </Li>
                <Li
                    to='/'
                    onClick={() => setMenuState(2)}
                    className={menuState === 2 && !id ? 'focus' : null}
                >
                    <BsHeart className='icon-search' />
                    <Text>Favoritos</Text>
                </Li>
                <Li
                    to='/'
                    onClick={() => setMenuState(3)}
                    className={menuState === 3 && !id ? 'focus' : null}
                >
                    <BsPerson className='icon-search' />
                    <Text>Perfil</Text>
                </Li>
            </Menu>
            {loading ? (
                <Projects aria-busy='true'>
                    <TextSection className='brand'>Proyectos</TextSection>
                    {[0, 1, 2].map(index => (
                        <ProjectSkeleton key={index} />
                    ))}
                </Projects>
            ) : boards.length > 0 ? (
                <Projects>
                    <TextSection className='brand'>Proyectos</TextSection>
                    {boards.map((board, index) => (
                        <Link
                            key={board.id}
                            className={`project color-${index % 6} ${
                                id === board.id ? 'focus' : ''
                            }`}
                            to={`/project/${board.id}`}
                        >
                            <ProjectIcon>{board.name[0]}</ProjectIcon>
                            <Text>{board.name}</Text>
                        </Link>
                    ))}
                </Projects>
            ) : null}
        </Nav>
    )
}

const Nav = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 30;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    background: var(--color-background);
    height: 100vh;
    transition: width 0.15s ease, box-shadow 0.15s ease;
    width: var(--nav-width);
    min-width: var(--nav-width);
    color: var(--color-text-muted);
    &.expand {
        width: var(--nav-width-expand);
        min-width: var(--nav-width-expand);
        .icon-sccore {
            display: flex;
        }
    }
    :hover {
        width: var(--nav-width-expand);
        min-width: var(--nav-width-expand);
        cursor: default;
        .icon-sccore {
            display: flex;
        }
    }
    :hover:not(.expand) {
        box-shadow: var(--shadow-pop);
    }
    :not(.expand):not(:hover) {
        .brand {
            opacity: 0;
        }
    }
`

const Image = styled.img`
    margin-left: 18px;
    height: 40px;
    width: 40px;
    min-width: 40px;
`

const Brand = styled.div`
    margin-left: 12px;
    font-size: 16px;
    font-weight: 700;
    color: var(--color-text);
    white-space: nowrap;
    transition: opacity 0.15s;
`

const Menu = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding-top: 12px;
`

const MenuTop = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    height: var(--top-height);
    min-height: var(--top-height);
    margin-top: var(--gap-panel);
    .icon-sccore {
        position: absolute;
        top: 50%;
        right: 14px;
        display: none;
        align-items: center;
        justify-content: center;
        width: 30px;
        height: 30px;
        margin-top: -15px;
        padding: 6px;
        border-radius: var(--radius-sm);
        color: var(--color-text-muted);
        cursor: pointer;
        :hover {
            background-color: var(--color-hover);
            color: var(--color-text);
        }
    }
`

const Li = styled(Link)`
    display: flex;
    align-items: center;
    overflow: hidden;
    height: 44px;
    margin: 0 12px;
    padding: 0 16px;
    border-radius: 12px;
    color: inherit;
    text-decoration: none;
    cursor: pointer;
    transition: background-color 0.15s, color 0.15s;
    .icon-search {
        overflow: visible;
        width: 20px;
        height: 20px;
        min-width: 20px;
    }
    :hover {
        color: var(--color-text);
        background-color: var(--color-hover);
    }
    :focus-visible {
        outline: 2px solid var(--color-primary);
        outline-offset: -2px;
    }
    &.focus {
        color: var(--color-primary);
        background-color: var(--color-surface);
        box-shadow: var(--shadow-card);
        > div {
            color: var(--color-text);
            font-weight: 600;
        }
    }
`
const Text = styled.div`
    margin-left: 16px;
    overflow: hidden;
    font-size: 14.5px;
    font-weight: 500;
    white-space: nowrap;
    text-overflow: ellipsis;
`

const Projects = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
    margin-top: 28px;
    padding-bottom: 24px;
    overflow-y: auto;
    .project {
        display: flex;
        align-items: center;
        overflow: hidden;
        height: 40px;
        margin: 0 12px;
        padding: 0 14px;
        border-radius: 12px;
        color: var(--color-text);
        text-decoration: none;
        :hover {
            background-color: var(--color-hover);
        }
        &.focus {
            font-weight: 600;
            background-color: var(--color-surface);
            box-shadow: var(--shadow-card);
        }
    }
`

const ProjectSkeleton = styled(Skeleton)`
    height: 40px;
    margin: 0 12px;
    border-radius: 12px;
`

const TextSection = styled.div`
    margin: 0 0 8px 28px;
    font-size: 13px;
    font-weight: 600;
    color: var(--color-text-faint);
    white-space: nowrap;
    transition: opacity 0.15s;
`

const ProjectIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    min-width: 24px;
    border-radius: 7px;
    background-color: var(--color-tag-soft);
    color: var(--color-tag);
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
`

const Arrow = styled.a``

export default NavLeft
