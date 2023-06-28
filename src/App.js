import React, { Component } from "react"
import "./App.css"
import Title from './Title'
import Home from './pages/home';
import About from './pages/about';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
/*
class LambdaDemo extends Component {
  constructor(props) {
    super(props)
    this.state = { loading: false, msg: null }
  }

  handleClick = api => e => {
    e.preventDefault()

    this.setState({ loading: true })
    fetch("/.netlify/functions/" + api)
      .then(response => response.json())
      .then(json => this.setState({ loading: false, msg: json.msg }))
  }

  render() {
    const { loading, msg } = this.state

    return (
      <p>
        <button onClick={this.handleClick("hello")}>{loading ? "Loading..." : "Call Lambda"}</button>
        <button onClick={this.handleClick("async-dadjoke")}>{loading ? "Loading..." : "Call Async Lambda"}</button>
        <br />
        <span>{msg}</span>
      </p>
    )
  }
}
*/

class App extends Component {
  render() {
    return (
      /*
      <div className="App">
        <Title />
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
        </header>
      </div>
      */

      <Router>
        <Title />
        <Routes>
          <Route path ='/' exact component={Home} />
          <Route path ='/about' component={About} />
        </Routes>
      </Router>
    )
  }
}

export default App
