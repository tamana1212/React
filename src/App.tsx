import { useState } from 'react';
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'

function App() {
  const[search, setSearch] = useState("");
  return (
     <>
      <Navbar  setSearch={setSearch} search={search}/>
      <Home search={search}/>
     </>
  )
}

export default App
