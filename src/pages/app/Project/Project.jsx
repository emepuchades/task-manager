import React from 'react'
import styled from 'styled-components'
import NavLeft from '../../../components/NavLeft';
import NavTop from '../../../components/NavTop';
import { useParams } from "react-router-dom";

function Project() {
  let { id } = useParams();

  return (
    <Block>
      <NavLeft />
      <NavTop />
      <Title>Proyecto: {id}</Title>
  
    </Block>
  )
}
const Block = styled.div`

`;
const Title = styled.h3`
  margin-left: 100px;
`;

export default Project
