import { keyframes } from '@emotion/react'

export const fadeIn = keyframes`
    0% {
        transform: translateY(-1200px) scale(0.7);
        opacity: .7
    }
    80% {
        transform: translateY(0) scale(0.7);
        opacity: .7
    }
    to {
        transform: scale(1);
        opacity: 1
    }
`
