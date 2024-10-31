import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled from "styled-components";
import {StyledBtn} from "./components/Button.styled";


function App() {
  return (
    <div className="App">
      <Menu>
        <ul>
          <li><a href=''>menu item 1</a></li>
          <li><a href=''>menu item 2</a></li>
          <li><a href=''>menu item 3</a></li>
        </ul>
      </Menu>
      <Box>
        <StyledBtn as={Link} href={'#'}>LinkComponent</StyledBtn>
        <StyledBtn as={'a'} href={'#'}>Link</StyledBtn>
        <StyledBtn>Hello</StyledBtn>
        <SuperBtn>Super Button</SuperBtn>
      </Box>
    </div>
  );
}

export default App;



const Link = styled.a`
    color: #16166f;
    font-size: 2rem;
    font-weight: bold;
    background-color: transparent;
    padding: 0;
`

const SuperBtn = styled(StyledBtn)`
    border-radius: 10px;
    background-color: #ffdd54;
    color: #474747;
`


const Box = styled.div`
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
    gap: 20px;

    button {
        cursor: pointer;
    }

    ${Link} {
        cursor: zoom-in;
    }
`

const Menu = styled.nav`
    ul {
        list-style: none;
        padding: 0;
        display: flex;

        li > a {
            color: forestgreen;
        }

        li + li {
            margin-left: 15px;
        }
    }
`
