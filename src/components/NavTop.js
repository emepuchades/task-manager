import React, { useState, useContext } from 'react'
import styled from 'styled-components'
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import { AppContext } from "../App";
import IconButton from '@mui/material/IconButton';
import { BsBell, BsPerson, BsSearch } from "react-icons/bs";
import { useAuth } from "../pages/auth/AuthContext";

function NavTop() {
    const { expand } = useContext(AppContext);
    const { logout, user } = useAuth();

    const handleLogout = async () => {
        try {
            await logout();
        } catch (error) {
            console.error(error.message);
        }
    };

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
                            <BsSearch />
                        </IconButton>
                    </Paper>
                </Search>
                <Notifications>
                    <BsBell className='icon-bell' />
                </Notifications>
                <User>
                    <Button className='icon-user'  onClick={handleLogout} > cerrar sesion </Button>
                </User>
            </RigthBlock>
        </Block>
    )
}

const Block = styled.div`
    display: flex;
    align-items: center;
    margin-left: 90px;
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
    .icon-bell{
        width: 24px;
        height: 24px;
    }
`;
const Search = styled.div`
    margin-right: 60px;
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

const Button = styled.div`
    background: #3B79D3;
    border-radius: 10px;
    font-weight: 600;
    color: #ffffff;
    font-size: 15px;
    width: 100px;
    padding: 10px;
    text-align: center;
    cursor: pointer;
`;

export default NavTop