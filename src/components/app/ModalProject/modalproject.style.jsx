import styled from 'styled-components'

const Block = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    width: 540px;
    max-width: calc(100% - 32px);
    max-height: calc(100vh - 32px);
    overflow-y: auto;
    padding: 24px 28px 24px;
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
    gap: 16px;
    margin-bottom: 24px;
`

const Title = styled.h2`
    margin: 0 0 4px;
    font-size: 20px;
    font-weight: 700;
`

const Text = styled.p`
    margin: 0;
    font-size: 14.5px;
    color: var(--color-text-muted);
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

const Form = styled.form`
    display: flex;
    flex-direction: column;
`

const Label = styled.label`
    margin-bottom: 8px;
    font-size: 14px;
    font-weight: 600;
`

const Input = styled.input`
    height: 44px;
    padding: 0 12px;
    font-size: 15px;
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

const TextHelp = styled.span`
    align-self: flex-end;
    margin-top: 6px;
    font-size: 12.5px;
    color: var(--color-text-faint);
`

const Templates = styled.fieldset`
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin: 8px 0 0;
    padding: 0;
    border: none;
`

const Legend = styled.legend`
    margin-bottom: 8px;
    padding: 0;
    font-size: 14px;
    font-weight: 600;
`

const Template = styled.label`
    display: flex;
    align-items: flex-start;
    gap: 12px;
    padding: 14px 16px;
    border: 1px solid var(--color-border);
    border-radius: var(--radius-lg);
    cursor: pointer;
    transition: border-color 0.15s, background-color 0.15s;
    :hover {
        border-color: var(--color-border-strong);
    }
    &.selected {
        border-color: var(--color-primary);
        background-color: var(--color-hover-light);
        box-shadow: inset 0 0 0 1px var(--color-primary);
    }
    :focus-within {
        outline: 2px solid var(--color-primary);
        outline-offset: 2px;
    }
`

const Radio = styled.input`
    appearance: none;
    flex-shrink: 0;
    width: 18px;
    height: 18px;
    margin: 2px 0 0;
    border: 2px solid var(--color-border-strong);
    border-radius: 9999px;
    outline: none;
    cursor: pointer;
    :checked {
        border: 5px solid var(--color-primary);
    }
`

const TemplateInfo = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 0;
`

const TemplateTitle = styled.span`
    font-size: 15px;
    font-weight: 600;
`

const TemplateText = styled.span`
    margin-top: 2px;
    font-size: 13.5px;
    color: var(--color-text-muted);
`

const Preview = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin-top: 10px;
`

const PreviewColumn = styled.span`
    padding: 3px 10px;
    font-size: 12.5px;
    font-weight: 600;
    color: var(--color-tag);
    background-color: var(--color-tag-soft);
    border-radius: 9999px;
    &.empty {
        color: var(--color-text-muted);
        background-color: transparent;
        border: 1px dashed var(--color-border-strong);
    }
`

const TextError = styled.p`
    margin: 20px 0 0;
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

const ButtonCreate = styled.button`
    height: 42px;
    padding: 0 20px;
    background-color: var(--color-primary);
    color: #ffffff;
    border: none;
    border-radius: var(--radius-md);
    font-size: 14.5px;
    font-weight: 600;
    cursor: pointer;
    :hover {
        background-color: var(--color-primary-dark);
    }
    :focus-visible {
        outline: 2px solid var(--color-primary);
        outline-offset: 2px;
    }
    :disabled {
        background-color: var(--color-border-strong);
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
    Title,
    Text,
    Icon,
    Form,
    Label,
    Input,
    TextHelp,
    Templates,
    Legend,
    Template,
    Radio,
    TemplateInfo,
    TemplateTitle,
    TemplateText,
    Preview,
    PreviewColumn,
    TextError,
    Footer,
    ButtonCancel,
    ButtonCreate,
    backdrop,
}
