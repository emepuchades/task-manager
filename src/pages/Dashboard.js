import React from 'react'
import styled from 'styled-components'
import { BsPlus } from "react-icons/bs";


function Dashboard() {
    return (
        <Block>
            <Text>
                👋 ¡Hola $user, empieza a crear tareas con Task Manager!
            </Text>
            <CardEmpty>
                <BsPlus className='icon-plus' />
                <CardText>Crea un nuevo projecto</CardText>
            </CardEmpty>
        </Block>
    )
}

const Block = styled.div`
    width: 100%;
    margin-left: 90px;
    padding: 0px 34px;
`;

const Text = styled.div`
    font-size: 28px;
    margin-top: 40px;
`;
const CardText = styled.div`
    display: flex;
    align-items: center;
    font-size: 18px;
    margin-left: 20px;
`;
const CardEmpty = styled.div`
    display: flex;    
    background-color: #FFFFFF;
    border-radius: 10px;
    margin-top: 50px;
    padding: 40px;
    width: 250px;
    border-radius: 10px;
    .icon-plus{
        width: 40px;
        height: 40px;
    }
    :hover {
        background-color:  #F0F0F3;

    }
`;
export default Dashboard