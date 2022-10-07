import React from 'react'
import styled from 'styled-components'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

function ListTitle() {
  return (
    <Block>
        <Title>Do</Title>
        <MoreHorizIcon />
    </Block>
  )
}
const Block = styled.div`
    display: flex;
    margin: 10px;
`;

const Title = styled.div`
    flex-grow: 1;
    font-size: 21px;
    font-weight: bolder;
`;

export default ListTitle