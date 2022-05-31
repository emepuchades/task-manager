import React from 'react'
import styled from 'styled-components'


function NavTop() {
    return (
        <Block>
            <Route>Inicio</Route>
            <RigthBlock>
                <Search>Search</Search>
                <Notifications>Notificaciones</Notifications>
                <User>User</User>
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
    margin-right: 30px;
`;
const Notifications = styled.div`
    margin-right: 30px;
`;
const User = styled.div`
    margin-right: 80px;
`;

export default NavTop