import styled from '@emotion/styled'

export const AnimatedPokeball = styled.div`
    position: relative;
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
