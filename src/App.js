import React, { Component } from "react"
import "./App.css"
import Navbar from './components/Navbar'
import Recipes from './pages/Recipes/Recipes'
import Home from './pages/Home'
import {Route, Routes} from "react-router-dom"

class App extends Component {
  render() {
    return (
      <>
        <Navbar/>
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Recipes" element={<Recipes />} />
          </Routes>
        </div>
      </>
    )
  }
}

export default App
