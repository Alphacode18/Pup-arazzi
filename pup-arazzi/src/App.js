import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar';
import Search from './components/layout/Search';
import Instruction from './components/layout/Instruction';
import Breeds from './components/layout/Breeds';
import About from './components/pages/About';

class App extends Component {
  state = {
    dogBreeds: {},
    dogData: '',
    loading: false,
  };

  componentDidMount() {
    this.fetchBreeds();
  }

  fetchBreeds = async () => {
    this.setState({ loading: true });
    const response = await axios('https://dog.ceo/api/breeds/list/all');
    this.setState({ dogBreeds: response.data.message, loading: false });
  };

  fetchImage = async (text) => {
    this.setState({ loading: true });
    let response;
    if (text !== '') {
      response = await axios(
        `https://dog.ceo/api/breed/${text.toLowerCase()}/images/random`
      );
    } else {
      response = await axios('https://dog.ceo/api/breed/images/random');
    }
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
                  <div>
                    <Instruction />
                  </div>
                </div>
              )}
            ></Route>
            <Route exact path='/about/'>
              <About />
            </Route>
            <Route exact path='/breeds/'>
              <Breeds breeds={this.state.dogBreeds} />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
