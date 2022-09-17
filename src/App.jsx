import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom';

import Login from './views/Login';
import Home from './views/Home'
import List from './views/List'
import Profile from './views/Profile';
import AddUser from './views/AddUser';


function App() {

  return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='*' element={<Login />} />
            <Route path='/Home' element={<Home />}/>
            <Route path='/List' element={<List />}/>
            <Route path='/Profile/:id' element={<Profile/>}/>
            <Route path='/Add' element={<AddUser />}/>
          </Routes>
        </BrowserRouter> 
      
      </div>
  )
}

export default App
