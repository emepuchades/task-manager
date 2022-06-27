import React from 'react'
import styled from 'styled-components'
import NavLeft from '../../components/NavLeft';
import NavTop from '../../components/NavTop';
import { useParams } from "react-router-dom";

const Project = (props) => {
  let { id } = useParams(); 
  console.log('id', id)

  return (
    <Block>
      <NavLeft />
      <NavTop />
      <Title>{id}</Title>
    </Block>
  )
}

const Block = styled.div`

`;
const Title = styled.h1`
  margin-left: 100px;
`;

const Text = styled.div`
  margin-left: 100px;
`;


export default Project