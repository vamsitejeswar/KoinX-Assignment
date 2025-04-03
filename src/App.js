import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from './components/Home'
import Nav from './components/Nav'

const App = () => {
  return (
    <div>
      <Router>
        <Nav/>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
          </Routes>
      </Router>
    </div>
  )
}

export default App
