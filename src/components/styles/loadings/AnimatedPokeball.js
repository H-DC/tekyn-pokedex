import styled from '@emotion/styled'

export const AnimatedPokeball = styled.div`
    position: relative;
    margin: 5rem;
    width: 100px;
    height: 100px;
    opacity: 0.5;
    background: linear-gradient(
        to bottom,
        red,
        red 48%,
        black 48%,
        black 55%,
        white 55%
    );
    border-radius: 50%;
    border: 7px solid black;
    animation-duration: 900ms;
    animation-name: shake;
    animation-iteration-count: infinite;

    &::after {
        content: '';
        background-color: white;
        width: 30px;
        height: 30px;
        position: absolute;
        border: 4px solid black;
        border-radius: 50%;
        top: 26px;
        left: 26px;
    }

    @keyframes shake {
        0% {
            transform: translateX(0) rotate(0);
        }
        15% {
            transform: translateX(-10px) rotate(-10deg);
        }
        40% {
            transform: translateX(-15px) rotate(-15deg);
        }
        60% {
            transform: translateX(15px) rotate(15deg);
        }
    }
`
