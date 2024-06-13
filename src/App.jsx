//import { useState } from 'react'

import './App.css'

import MainContent from './components/MainContent';
import { Container } from '@mui/material';

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <div style={{display: "flex", justifyContent: "center", width: "100vw"}}>
     <Container maxWidth="xl">
     <MainContent/>
     </Container>
     
      </div>
     
    </>
  )
}

export default App
