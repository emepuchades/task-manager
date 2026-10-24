import styled from 'styled-components'

const Block = styled.div`
    .bsx {
        position: absolute;
        top: 0;
        right: 0;
        width: 31px;
        height: 31px;
    }
`

const Text = styled.div`
    font-size: 22px;
    font-weight: 700;
`

const TextList = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 16px;
    font-size: 15px;
    font-weight: 600;
    span {
        padding: 1px 9px;
        font-size: 12.5px;
        color: var(--color-text-muted);
        background-color: var(--color-column);
        border-radius: 9999px;
    }
`

const BlockBoard = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    gap: 18px;
    .card {
        display: block;
        overflow: hidden;
        background-color: var(--color-surface);
        border: 1px solid var(--color-border);
        border-radius: var(--radius-lg);
        text-decoration: none;
        color: var(--color-text);
        transition: box-shadow 0.15s, border-color 0.15s;
        :hover {
            border-color: var(--color-border-strong);
            box-shadow: var(--shadow-hover);
        }
    }
    .heartfill {
        color: var(--color-favorite);
    }
    .iconheart {
        position: absolute;
        top: 12px;
        right: 12px;
        width: 32px;
        height: 32px;
        padding: 8px;
        background-color: rgba(255, 255, 255, 0.9);
        border-radius: 9999px;
        cursor: pointer;
        :hover {
            color: var(--color-favorite);
        }
    }
`

const CardBoard = styled.div`
    position: relative;
    color: var(--color-text-faint);
`

const CardCover = styled.div`
    position: relative;
    height: 76px;
    background-color: var(--color-tag-soft);
    background-image: radial-gradient(
        color-mix(in srgb, var(--color-tag) 22%, transparent) 1.2px,
        transparent 1.2px
    );
    background-size: 14px 14px;
`

const CardIcon = styled.div`
    position: absolute;
    left: 16px;
    bottom: -20px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 42px;
    height: 42px;
    border-radius: 12px;
    background-color: var(--color-surface);
    box-shadow: 0 2px 8px rgba(27, 34, 53, 0.1);
    color: var(--color-tag);
    font-size: 18px;
    font-weight: 700;
    text-transform: uppercase;
`

const CardText = styled.div`
    overflow: hidden;
    padding: 32px 16px 18px;
    font-size: 15.5px;
    font-weight: 600;
    white-space: nowrap;
    text-overflow: ellipsis;
`

const CardEmpty = styled.div`
    grid-column: 1 / -1;
    padding: 48px 16px;
    font-size: 15px;
    text-align: center;
    color: var(--color-text-muted);
    border: 2px dashed var(--color-border);
    border-radius: var(--radius-lg);
`

export {
    Block,
    TextList,
    CardBoard,
    CardCover,
    CardIcon,
    CardText,
    CardEmpty,
    Text,
    BlockBoard,
}
