import styled from "styled-components";
import {MyAnimation} from "../styles/animations/Animations";


export const StyledBtn = styled.button`
    border: none;
    background-color: #e158bc;
    padding: 10px 20px;
    color: snow;
    font-size: 2rem;
    font-weight: bold;

    &:last-child {
        background-color: #2eff70;
    }

    &:hover {
        background-color: #224695;
    }
`

export const SuperBtn = styled(StyledBtn)`
    border-radius: 10px;
    background-color: #ffdd54;
    color: #474747;

    &:hover {
        animation: ${MyAnimation} 2s ease-in-out infinite;
    }
`
