import { useState } from 'react'
import './App.css'
import NavbarBeforeLogin from './parts/NavbarBeforeLogin'
import styled from 'styled-components'
import Home from './pages/Home';
import About from './pages/About';
import Cat from './parts/Cat';

const Project = styled.div`
  background: url("/bg.png");
  height: 100vh;
  width: 100vw;
  background-position: bottom;
  background-size: cover;
`;

const Backdrop = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #afafafa3;
`
function App() {

  return (
    <Project>
      <Backdrop>
        <NavbarBeforeLogin/>
        <Home/>
        <Cat/>
      </Backdrop>
    </Project>
  )
}

export default App
