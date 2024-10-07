import './App.css'
import DisplayItems from './components/displayItems'
import { BrowserRouter, Routes, Route } from'react-router-dom'
import Create from './components/Create/Create'
function App() {


  return (
    <BrowserRouter>
    <Routes>
      <Route path = "/" element ={<DisplayItems/>}/>
      <Route path = "/create" element ={<Create/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
