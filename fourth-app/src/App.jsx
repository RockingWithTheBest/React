import './App.css'
import DisplayItems from './components/displayItems'
import { BrowserRouter, Routes, Route } from'react-router-dom'
import Create from './components/Create/Create'
import Update from './components/Update/Update'
function App() {


  return (
    <BrowserRouter>
    <Routes>
      <Route path = "/" element ={<DisplayItems/>}/>
      <Route path = "/create" element ={<Create/>}/>
      <Route path = "/edit/:id" element ={<Update/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
