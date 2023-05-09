import styled from 'styled-components'

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
`

const BlockBoard = styled.div`
    font-size: 28px;
    margin-top: 40px;
    width: auto;
    display: table;
    .card {
        display: flex;
        background-color: #ffffff;
        border-radius: 10px;
        margin-top: 50px;
        padding: 40px;
        width: 220px;
        border-radius: 10px;
        margin: 15px;
        text-decoration: none;
        color: #111111;
        display: inline-table;
        :hover {
            background-color: #e8e8e8;
        }
    }
    .heartfill {
        color: red;
    }
    .iconheart {
        position: relative;
        right: 60px;
        width: 20px;
        top: 40px;
        :hover {
            color: red;
        }
    }
`

const CardText = styled.div`
    display: flex;
    align-items: center;
    font-size: 18px;
    margin-left: 20px;
    width: 100%;
`

const Text = styled.div`
    font-size: 28px;
    margin-top: 40px;
`

export { Block, CardText, Text, BlockBoard }
