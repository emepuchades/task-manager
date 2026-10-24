import styled, { keyframes } from 'styled-components'

const appear = keyframes`
    to {
        opacity: 1;
    }
`

const shimmer = keyframes`
    from {
        background-position: 100% 0;
    }
    to {
        background-position: -100% 0;
    }
`

const Skeleton = styled.div`
    flex-shrink: 0;
    border-radius: var(--radius-sm);
    background: linear-gradient(
        90deg,
        var(--color-hover) 0%,
        var(--color-hover-light) 50%,
        var(--color-hover) 100%
    );
    background-size: 200% 100%;
    opacity: 0;
    animation: ${appear} 0.2s ease 0.3s forwards,
        ${shimmer} 1.4s ease-in-out 0.3s infinite;

    @media (prefers-reduced-motion: reduce) {
        animation: ${appear} 0s linear 0.3s forwards;
    }
`

export default Skeleton
