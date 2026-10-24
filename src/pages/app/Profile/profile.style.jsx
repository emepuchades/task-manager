import styled from 'styled-components'

const Block = styled.div`
    position: relative;
    max-width: 520px;
    .avatar {
        position: relative;
        width: 64px;
        height: 64px;
        margin-bottom: 16px;
        font-size: 26px;
        font-weight: 700;
        text-transform: uppercase;
        background-color: var(--color-primary);
    }
`
const Title = styled.div`
    font-size: 20px;
    font-weight: 700;
    word-break: break-word;
`

const Text = styled.div`
    &.subtitle {
        margin: 4px 0 28px;
        font-size: 14.5px;
        color: var(--color-text-muted);
    }
`

const ProfileSettings = styled.div`
    position: relative;
    display: grid;
    width: 100%;
    .form-text {
        margin-bottom: 8px;
        font-size: 14px;
        font-weight: 600;
    }
`

const Input = styled.input`
    height: 42px;
    padding: 0 12px;
    margin-bottom: 20px;
    font-size: 14.5px;
    background-color: var(--color-field);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-md);
    outline: none;
    :focus {
        background-color: var(--color-surface);
        border-color: var(--color-primary);
        box-shadow: 0 0 0 3px var(--color-primary-soft);
    }
`

const TextAerea = styled.textarea`
    height: 120px;
    padding: 10px 12px;
    margin-bottom: 24px;
    font-size: 14.5px;
    line-height: 1.4;
    resize: vertical;
    background-color: var(--color-field);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-md);
    outline: none;
    :focus {
        background-color: var(--color-surface);
        border-color: var(--color-primary);
        box-shadow: 0 0 0 3px var(--color-primary-soft);
    }
`

const Button = styled.button`
    justify-self: start;
    height: 42px;
    padding: 0 22px;
    background: var(--color-primary);
    border: none;
    border-radius: var(--radius-md);
    font-weight: 600;
    color: #ffffff;
    font-size: 14.5px;
    cursor: pointer;
    :hover {
        background-color: var(--color-primary-dark);
    }
    :disabled {
        opacity: 0.7;
        cursor: not-allowed;
    }
`

export { Block, Title, Text, ProfileSettings, Input, TextAerea, Button }
