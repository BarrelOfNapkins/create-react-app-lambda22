import React, { Component } from "react"
import "./App.css"
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
      </div>
    )
  }
}

export default App
