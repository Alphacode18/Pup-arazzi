import React from 'react';

const Search = () => {
  return (
    <div>
      <form className='form'>
        <input type='text' name='text' placeholder='Search Dog Images...' />
        <input
          type='submit'
          className='btn bg-success btn-block'
          value='Search'
        />
      </form>
    </div>
  );
};

export default Search;
