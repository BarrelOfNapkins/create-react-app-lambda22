import React, { Component } from "react"
import "./App.css"
import Navbar from './components/Navbar'
import Recipes from './pages/Recipes'
import Home from './pages/Home'
//import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

class App extends Component {
  render() {
    let component
    // eslint-disable-next-line default-case
    switch (window.location.pathname) {
      case "/":
        component = <Home />
        break
      case "/Recipes":
        component = <Recipes />
        break
    }

    return (
      <>
        <Navbar/>
        {component}
      </>
    )
  }
}

export default App
