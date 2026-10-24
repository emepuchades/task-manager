import styled from 'styled-components'

export function Alert({ message }) {
    return (
        <Block role='alert'>
            <span>{message}</span>
        </Block>
    )
}

const Block = styled.div`
    margin-bottom: 20px;
    padding: 10px 12px;
    font-size: 13px;
    color: #a3352e;
    background-color: #fdf3f2;
    border: 1px solid #f3cfcb;
    border-radius: var(--radius-md);
`
