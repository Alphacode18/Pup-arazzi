import React from 'react';
import Breed from './Breed';

const Breeds = (props) => {
  const breeds = Object.keys(props.breeds);
  return (
    <div className='container'>
      <ul>
        {breeds.map((breed) => (
          <Breed breed={breed} />
        ))}
      </ul>
    </div>
  );
};

export default Breeds;
