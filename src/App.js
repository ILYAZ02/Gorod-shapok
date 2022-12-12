import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {} from 'react-app-context'
import s from './App.module.scss'
import Girl from './pages/Girl/Girl';
import Man from './pages/Man/Man'
import Baby from './pages/Baby/Baby'
import Block from './components/Block/Block';
import Footer from './components/Footer/Footer';
import Header from './components/Header'
function App() {
  const [cart, setCart] =useState([])
  const [con, setCon] = useState([])
  useEffect(() => {
    async function fetchData() {
      const resp = await fetch('http://localhost:3000/db.json')
      const data = await resp.json()
      setCon(data)
    }
    fetchData()
  },[])

  const [gon, setGon] = useState([])
  useEffect(() => {
    async function fetchData() {
      const resp = await fetch('http://localhost:3000/girl.json')
      const data = await resp.json()
      setGon(data)
    }
    fetchData()
  },[])

  const [mon, setMon] = useState([])
  useEffect(() => {
    
    async function fetchData() {
      const resp = await fetch('http://localhost:3000/man.json')
      const data = await resp.json()
      setMon(data)
    }
    fetchData()
  },[])

  console.log(con)
  return (
    <div className={s.App}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Block con={con} />} />
          <Route path='/girl' element={<Girl gon={gon} />} />
          <Route path='/man' element={<Man mon={mon}/>} />
          <Route path='/baby' element={<Baby />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
