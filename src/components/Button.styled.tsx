import styled from "styled-components";
import {MyAnimation} from "../styles/animations/Animations";


export const StyledBtn = styled.button`
    border: none;
    background-color: ${props => props.color || "red"};
    padding: 10px 20px;
    color: snow;
    font-size: 2rem;
    font-weight: bold;
    border-radius: 10px;

    //&:last-child {
    //    background-color: #2eff70;
    //}

    &:hover {
        background-color: #224695;
    }
`

