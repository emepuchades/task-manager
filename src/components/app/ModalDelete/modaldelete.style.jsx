import styled from 'styled-components'

const Block = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    width: 440px;
    max-width: calc(100% - 32px);
    padding: 24px 28px;
    background-color: var(--color-surface);
    border-radius: var(--radius-panel);
    box-shadow: var(--shadow-pop);
    transform: translate(-50%, -50%);
    outline: none;
`

const Header = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-bottom: 16px;
`

const IconDanger = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    border-radius: 12px;
    color: var(--color-danger);
    background-color: var(--color-coral-soft);
    svg {
        width: 20px;
        height: 20px;
    }
`

const Icon = styled.button`
    display: flex;
    padding: 6px;
    background: none;
    border: none;
    border-radius: var(--radius-sm);
    color: var(--color-text-muted);
    cursor: pointer;
    svg {
        width: 22px;
        height: 22px;
    }
    :hover {
        background-color: var(--color-hover-light);
        color: var(--color-text);
    }
    :focus-visible {
        outline: 2px solid var(--color-primary);
        outline-offset: 2px;
    }
`

const Title = styled.h2`
    margin: 0 0 6px;
    font-size: 20px;
    font-weight: 700;
`

const Text = styled.p`
    margin: 0;
    font-size: 14.5px;
    line-height: 1.5;
    color: var(--color-text-muted);
    word-break: break-word;
    strong {
        font-weight: 600;
        color: var(--color-text);
    }
`

const TextError = styled.p`
    margin: 16px 0 0;
    padding: 10px 12px;
    font-size: 13.5px;
    color: #a3352e;
    background-color: #fdf3f2;
    border: 1px solid #f3cfcb;
    border-radius: var(--radius-md);
`

const Footer = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
    margin-top: 24px;
`

const ButtonCancel = styled.button`
    height: 42px;
    padding: 0 18px;
    background-color: transparent;
    border: 1px solid var(--color-border);
    border-radius: var(--radius-md);
    font-size: 14.5px;
    font-weight: 600;
    cursor: pointer;
    :hover {
        background-color: var(--color-hover-light);
    }
    :focus-visible {
        outline: 2px solid var(--color-primary);
        outline-offset: 2px;
    }
`

const ButtonDelete = styled.button`
    height: 42px;
    padding: 0 20px;
    background-color: var(--color-danger);
    color: #ffffff;
    border: none;
    border-radius: var(--radius-md);
    font-size: 14.5px;
    font-weight: 600;
    cursor: pointer;
    :hover {
        background-color: #b93a33;
    }
    :focus-visible {
        outline: 2px solid var(--color-danger);
        outline-offset: 2px;
    }
    :disabled {
        opacity: 0.6;
        cursor: not-allowed;
    }
`

const backdrop = {
    style: {
        backgroundColor: 'rgba(27, 34, 53, 0.45)',
    },
}

export {
    Block,
    Header,
    IconDanger,
    Icon,
    Title,
    Text,
    TextError,
    Footer,
    ButtonCancel,
    ButtonDelete,
    backdrop,
}
