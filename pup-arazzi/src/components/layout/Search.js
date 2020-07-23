import React, { Component } from 'react';

class Search extends Component {
  state = {
    text: '',
  };
  onChange = (event) =>
    this.setState({ [event.target.name]: event.target.value });

  onSubmit = (event) => {
    event.preventDefault();
    this.props.fetchImage(this.state.text);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit} className='form'>
          <input
            type='text'
            name='text'
            placeholder='Search Dog Images...'
            value={this.state.text}
            onChange={this.onChange}
          />
          <input
            type='submit'
            className='btn bg-success btn-block'
            value='Search'
          />
        </form>
      </div>
    );
  }
}

export default Search;
