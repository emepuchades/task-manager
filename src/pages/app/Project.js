import React from 'react'
import styled from 'styled-components'
import NavLeft from '../../components/NavLeft';
import NavTop from '../../components/NavTop';
import { useParams } from "react-router-dom";
import { BsPlus } from "react-icons/bs";

const Project = (props) => {
  let { id } = useParams();
  console.log('id', id)

  return (
    <Block>
      <NavLeft />
      <NavTop />
      <Title>{id}</Title>
      <CardEmpty>
        <BsPlus className='icon-plus' />
        <CardText>Crear tarea</CardText>
      </CardEmpty>
    </Block>
  )
}

const Block = styled.div`

`;
const Title = styled.h1`
  margin-left: 100px;
`;

const CardEmpty = styled.div`
    display: flex;    
    background-color: #FFFFFF;
    border-radius: 10px;
    margin-top: 50px;
    padding: 40px;
    width: 220px;
    border-radius: 10px;
    margin: 15px;
    .icon-plus{
        width: 40px;
        height: 40px;
    }
    :hover {
        background-color:  #F0F0F3;
    }
`;

const CardText = styled.div`
    display: flex;
    align-items: center;
    font-size: 18px;
    margin-left: 20px;
    width: 100%;
`;


export default Project