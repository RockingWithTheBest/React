import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import FirstPage from './Pages/FirstPage/FirstPage'
import { BrowserRouter, Routes, Route } from'react-router-dom'
import './App.css'
import SecondsPage from './Pages/SecondPage/SecondPage'
import ThirdPage from './Pages/ThirdPage/ThirdPage'
import FourthPage from './Pages/FourthPage/FourthPage'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='firstPage' element={<FirstPage/>}></Route>
          <Route path='secondPage' element={<SecondsPage/>}></Route>
          <Route path='thirdPage' element={<ThirdPage/>}></Route>
          <Route path='fourthPage' element={<FourthPage/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
