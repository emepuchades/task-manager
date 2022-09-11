import React, {useContext} from 'react'
import styled from 'styled-components'
import NavLeft from '../../../components/NavLeft';
import NavTop from '../../../components/NavTop';
import { useParams } from "react-router-dom";
import { BsPlus } from "react-icons/bs";

import { AppContext } from "../../../App";

function Project() {
  let { id } = useParams();
  const { menuState } = useContext(AppContext);

  return (
    <Block>
    {console.log('menuState', menuState)}
      <NavLeft />
      <NavTop />
      <Title>Proyecto: {id}</Title>
      <></>
      <BlockCateory>
        <Category>
          <Title>Lista de tareas</Title>
          <Card>
            <CardText>Crear tarea</CardText>
          </Card>

          <AddTask>
            <BsPlus className='icon-plus' />
            <p>Crear tarea</p>
          </AddTask>
        </Category>

      </BlockCateory>
    </Block>
  )
}
const Block = styled.div`

`;
const Title = styled.h3`
  margin-left: 100px;
`;
const Category = styled.div`
  width: 400px;
  background-color: white;
  border-radius: 10px;
`;

const BlockCateory = styled.div`
   margin-left: 250px;
`;

const AddTask = styled.div`
   margin-left: 250px;
   .icon-plus{
        width: 40px;
        height: 40px;
    }
`;

const Card = styled.div`
    display: flex;    
    background-color: #F8F8F9;
    border-radius: 10px;
    margin-top: 50px;
    padding: 40px;
    width: 78%;
    border-radius: 10px;
    margin: 15px;
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
