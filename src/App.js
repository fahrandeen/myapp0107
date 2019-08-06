import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ProductForm from './Components/ProductForm'
import ProductList from './Components/ProductList';
import Message from './Components/Message'
import Footer from './Components/Footer'



class App extends Component {
  state = {
    products: []
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Router>
          <Message />
          <ProductForm />
          <Footer />
          <Route path='/:filter?' render={({ match }) => (
            <ProductList filter={match.params.filter}/>
          )}>
          </Route>
        </Router>
      </div>
    )
  }
}


export default connect(
  (state) => state
)(App)

