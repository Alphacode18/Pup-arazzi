import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar';
import Search from './components/layout/Search';
import About from './components/pages/About';

class App extends Component {
  state = {
    dogData: {},
    loading: false,
  };

  fetchImage = async (text) => {
    console.log('API Call Initiated...');
    this.setState({ loading: true });
    const response = await axios(
      `https://dog.ceo/api/breed/${text}/images/random`
    );
    this.setState({ dogData: response.data.message, loading: false });
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
