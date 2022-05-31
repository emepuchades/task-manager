import React, { useState } from 'react'
import styled from 'styled-components'
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faUser, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'


function NavTop() {
    const [search, setSearch] = useState('')

    const handleInputChange = (event) => {
        setSearch(event.target.value)
    }

    return (
        <Block>
            <Route>Inicio</Route>
            <RigthBlock>
                <Search>
                    <Paper
                        component="form"
                        className='paper'
                        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 250, height: 30, boxShadow: 'none' }}
                    >
                        <InputBase
                            sx={{ ml: 1, flex: 1 }}
                            placeholder="Buscar"
                        />
                        <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                            <FontAwesomeIcon className="icon-search" icon={faMagnifyingGlass} />
                        </IconButton>
                    </Paper>
                </Search>
                <Notifications>
                    <FontAwesomeIcon icon={faBell} />
                </Notifications>
                <User>
                    <FontAwesomeIcon icon={faUser} />
                </User>
            </RigthBlock>
        </Block>
    )
}

const Block = styled.div`
    display: flex;
    align-items: center;
    height: 80px;
`;

const Route = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    padding: 0px 34px;
    font-size: 26px;
    font-weight: bold;
`;

const RigthBlock = styled.div`
    display: flex;
    float: rigth;
`;
const Search = styled.div`
    margin-right: 60px;

    .icon-search{
        width: 18px;
    }
`;
const Notifications = styled.div`
    display: flex;
    align-items: center;
    margin-right: 60px;
`;
const User = styled.div`
    display: flex;
    align-items: center;
    margin-right: 60px;
`;

export default NavTop