import React from 'react'
import styled from 'styled-components'
import NavLeft from '../../components/NavLeft';
import NavTop from '../../components/NavTop';

function Project() {
  return (
    <Block>
      <NavLeft />
      <NavTop />
      <Title>Project</Title>
    </Block>
  )
}

const Block = styled.div`

`;
const Title = styled.div`
  margin-left: 100px;
`;


export default Project