import styled from 'styled-components'
import Card from '@mui/material/Card'

function CardComponent() {
    return (
        <Block>
            <Card className='card'>Card</Card>
        </Block>
    )
}

const Block = styled.div`
    margin: 10px;
    .card {
        background-color: #f8f8f9;
        font-size: 18px;
        padding: 10px;
        margin: 5px;
    }
`

export default CardComponent
