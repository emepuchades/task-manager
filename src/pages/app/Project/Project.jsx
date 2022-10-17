import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import { AppContext } from '../../../App'

import NavLeft from '../../../components/NavLeft'
import NavTop from '../../../components/NavTop'

import ListTitle from '../../../components/app/Project/ListTitle'
import CardComponent from '../../../components/app/Project/CardComponent'
import AddCard from '../../../components/app/Project/AddCard'
import { useContext } from 'react'

function Project() {
    const { id } = useParams()
    const { expand } = useContext(AppContext)
    return (
        <Block>
            <NavLeft />
            <NavTop />
            <Title>Proyecto: {id}</Title>
            <ContainerTask className={expand ? 'expand' : 'container'}>
                <ListTitle />
                <CardComponent />
                <AddCard />
            </ContainerTask>
        </Block>
    )
}
const Block = styled.div``
const Title = styled.h3`
    margin-left: 100px;
`

const ContainerTask = styled.div`
    width: 300px;
    background: white;
    margin: 10px;

    &.container {
        margin-left: 100px;
    }

    &.expand {
        margin-left: 250px;
    }
`

export default Project
