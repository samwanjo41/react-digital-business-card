import React from 'react'
import Info from './components/Info'
import About from './components/About'
import Interests from './components/Interests'
import Footer from './components/Footer'

function App() {
  

  return (
    <div className="container">  
      <div className="card">
        <Info />
        <About />   
        <Interests />   
        <Footer /> 
      </div> 
    
    </div>
  )
}

export default App
