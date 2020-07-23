import React, { Component } from 'react';

class Search extends Component {
  state = {
    text: '',
  };
  render() {
    return (
      <div>
        <form className='form'>
          <input type='text' name='text' placeholder='Search Dog Images...' />
          <input
            type='submit'
            className='btn bg-success btn-block'
            value='Search'
            onChange={}
            onSubmit={}
          />
        </form>
      </div>
    );
  }
}

export default Search;
