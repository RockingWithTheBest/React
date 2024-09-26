import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import FirstPage from './Pages/FirstPage/FirstPage'
import { BrowserRouter, Routes, Route } from'react-router-dom'
import './App.css'
import SecondsPage from './Pages/SecondPage/SecondPage'
import ThirdPage from './Pages/ThirdPage/ThirdPage'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='firstPage' element={<FirstPage/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
