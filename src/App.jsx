import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom';

import Login from './views/Login';
import Home from './views/Home'

function App() {

  return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='*' element={<Login />} />
            <Route path='/Home/' element={<Home />}/>
          </Routes>
        </BrowserRouter> 
      
      </div>
  )
}

export default App
