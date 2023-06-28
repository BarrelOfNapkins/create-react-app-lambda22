import React, { Component } from "react"
import "./App.css"
import Title from './Title'
import Home from './pages/home';
import About from './pages/about';
import Events from './pages/events';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (

      <Router>
        <Title />
        <Routes>
          <Route path ='/' component={Home} />
          <Route path ='/about' component={About} />
          <Route path ='/events' component={Events} />
        </Routes>
      </Router>
    )
  }
}

export default App
