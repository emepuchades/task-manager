import { useState, useContext, useEffect } from 'react'
import { doc, onSnapshot, getDocs, collection } from 'firebase/firestore'
import { db } from '../firebase'
import styled from 'styled-components'
import Paper from '@mui/material/Paper'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import Divider from '@mui/material/Divider'
import InputBase from '@mui/material/InputBase'
import { AppContext } from '../App'
import IconButton from '@mui/material/IconButton'
import { Link, useParams } from 'react-router-dom'
import { BsPerson, BsSearch } from 'react-icons/bs'
import { useAuth } from '../pages/auth/AuthContext'
import Avatar from '@mui/material/Avatar'

function NavTop() {
    const { menuState, expand } = useContext(AppContext)
    const { logout, user } = useAuth()
    const { id } = useParams()
    const [boards, setBoards] = useState([])
    const [isSearch, setIsSearch] = useState('')
    const [isProfile, setIsProfile] = useState('')
    const [profileUser, setProfileUser] = useState([])
    const [filteredContacts, setFilteredContacts] = useState([])

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
        async function getProfile() {
            onSnapshot(doc(db, 'usersProfile', user.uid), doc => {
                setProfileUser(doc.data())
            })
        }
        getProfile()
    }, [user.uid])

    useEffect(() => {
        setFilteredContacts(
            boards.filter(board =>
                board.name.toLowerCase().includes(isSearch.toLowerCase())
            )
        )
    }, [isSearch, boards])

    const handleLogout = async () => {
        try {
            await logout()
        } catch (error) {
            console.error(error.message)
        }
    }

    const profile = async () => {
        isProfile ? setIsProfile(false) : setIsProfile(true)
    }

    function renderSwitch(param) {
        switch (param) {
            case 1:
                return 'Tableros'
            case 2:
                return 'Favoritos'
            case 3:
                return 'Perfil'
            case 4:
                return 'Configuración'
            default:
                return 'Inicio'
        }
    }

    return (
        <Block className={expand ? 'expand' : ''}>
            <Route>{id ? 'Tableros' : renderSwitch(menuState)}</Route>
            <RigthBlock>
                <Search>
                    <Paper
                        component='form'
                        className='paper'
                        sx={{
                            p: '0 4px 0 6px',
                            display: 'flex',
                            alignItems: 'center',
                            width: { xs: 170, md: 260 },
                            height: 40,
                            borderRadius: '10px',
                            border: '1px solid var(--color-border)',
                            backgroundColor: 'var(--color-field)',
                            boxShadow: 'none',
                        }}
                    >
                        <InputBase
                            className='input-search'
                            sx={{ ml: 1, flex: 1 }}
                            onChange={e => setIsSearch(e.target.value)}
                            placeholder='Buscar'
                        />
                        <IconButton
                            type='submit'
                            sx={{
                                p: '6px',
                                fontSize: 14,
                                color: 'var(--color-text-faint)',
                            }}
                            aria-label='search'
                        >
                            <BsSearch />
                        </IconButton>
                    </Paper>
                    <SearchFilter>
                        {isSearch ? (
                            filteredContacts.length > 0 ? (
                                filteredContacts.map(filterContact => (
                                    <Boards key={filterContact.name}>
                                        <Link className='card' to={`/project/${filterContact.name}`}>
                                            {' '}
                                            {filterContact.name}{' '}
                                        </Link>
                                    </Boards>
                                ))
                            ) : (
                                <Boards>
                                    No hay ningún proyecto con este nombre
                                </Boards>
                            )
                        ) : null}
                    </SearchFilter>
                </Search>
                <User>
                    <Avatar className='avatar' onClick={() => profile()}>
                        {user.email[0]}
                    </Avatar>
                    {isProfile ? (
                        <ProfileSettings>
                            <List>
                                <ListItem disablePadding>
                                    <BsPerson className='icon-person' />
                                    <ListItemText
                                        primary={
                                            profileUser
                                                ? profileUser.userName
                                                    ? profileUser.userName
                                                    : null
                                                : user.email
                                        }
                                    />
                                </ListItem>
                                <Divider />
                                <ListItemButton>
                                    <Button
                                        className='icon-user'
                                        onClick={handleLogout}
                                    >
                                        {' '}
                                        cerrar sesion{' '}
                                    </Button>
                                </ListItemButton>
                            </List>
                        </ProfileSettings>
                    ) : null}
                </User>
            </RigthBlock>
        </Block>
    )
}

const Block = styled.div`
    position: sticky;
    top: 0;
    z-index: 20;
    display: flex;
    align-items: center;
    margin: var(--gap-panel) var(--gap-panel) 0 var(--nav-width);
    height: var(--top-height);
    background-color: var(--color-surface);
    border-bottom: 1px solid var(--color-border);
    border-radius: var(--radius-panel) var(--radius-panel) 0 0;
    box-shadow: 0 calc(var(--gap-panel) * -1) 0 0 var(--color-background);
    transition: margin-left 0.15s ease;

    &.expand {
        margin-left: var(--nav-width-expand);
    }

    .input-search {
        background-color: transparent;
        height: 38px;
        font-size: 14px;
    }

    input {
        text-indent: 4px;
    }
`

const Route = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    padding: 0px 32px;
    font-size: 19px;
    font-weight: 700;
`

const RigthBlock = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
    padding-right: 28px;
    .icon-bell {
        width: 24px;
        height: 24px;
    }
`
const SearchFilter = styled.div`
    position: absolute;
    top: 46px;
    left: 0;
    width: 100%;
    padding: 6px;
    background: var(--color-surface);
    border-radius: 12px;
    box-shadow: var(--shadow-pop);
    :empty {
        display: none;
    }
`
const Boards = styled.div`
    font-size: 14px;
    color: var(--color-text-muted);
    padding: 9px 10px;
    border-radius: var(--radius-sm);
    :hover {
        background-color: var(--color-hover-light);
    }
    a {
        display: block;
        text-decoration: none;
        color: var(--color-text);
    }
`

const Search = styled.div`
    position: relative;
`
const User = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    .avatar {
        width: 38px;
        height: 38px;
        font-size: 15px;
        font-weight: 600;
        text-transform: uppercase;
        background-color: var(--color-primary);
        cursor: pointer;
        transition: box-shadow 0.15s;
        :hover {
            box-shadow: 0 0 0 4px var(--color-primary-soft);
        }
    }
`

const ProfileSettings = styled.div`
    position: absolute;
    top: 48px;
    right: 0;
    width: 230px;
    padding: 6px;
    background: var(--color-surface);
    border-radius: 12px;
    box-shadow: var(--shadow-pop);
    .MuiList-root {
        padding: 0;
    }
    .MuiListItem-root {
        padding: 9px 10px;
    }
    .MuiListItemText-primary {
        font-family: inherit;
        font-size: 14px;
        font-weight: 600;
    }
    .MuiDivider-root {
        margin: 4px 0;
        border-color: var(--color-border);
    }
    .MuiListItemButton-root {
        padding: 0;
        border-radius: var(--radius-sm);
    }
    .icon-person {
        width: 18px;
        height: 18px;
        margin-right: 10px;
        color: var(--color-text-muted);
    }
`

const Button = styled.div`
    width: 100%;
    padding: 9px 10px;
    font-size: 14px;
    color: var(--color-danger);
    border-radius: var(--radius-sm);
    cursor: pointer;
    :hover {
        background-color: var(--color-hover-light);
    }
`

export default NavTop
