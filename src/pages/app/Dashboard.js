import React, { useContext } from 'react'
import { AppContext } from "../../App";
import styled from 'styled-components'
import NavLeft from '../../components/NavLeft';
import NavTop from '../../components/NavTop';
import Home from './Home';
import Favorites from './Favorites';
import Board from './Board';
import Profile from './Profile';
import Settings from './Settings';

function Dashboard() {
    const { menuState } = useContext(AppContext);

    function renderSwitch(param) {
        switch (param) {
            case 1:
                return <Board />;
            case 2:
                return <Favorites />;
            case 3:
                return <Profile />;
            case 4:
                return <Settings />;
            default:
                return <Home />;
        }
    }

    return (
        <>
            <NavLeft />
            <NavTop />
            <Block>
                {renderSwitch(menuState)}
            </Block>
        </>
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

export default Dashboard