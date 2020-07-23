import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar';
import Search from './components/layout/Search';
import About from './components/pages/About';

class App extends Component {
  state = {
    loading: false,
  };

  fetchImage = async (text) => {
    const response = await axios('');
  };

  render() {
    return (
      <Router>
        <div className='App'>
          <Navbar />
          <Switch>
            <Route
              exact
              path='/'
              render={(props) => (
                <div className='container'>
                  <Search fetchImage={this.fetchImage} />
                </div>
              )}
            ></Route>
            <Route exact path='/about/'>
              <About />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
