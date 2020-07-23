import React from 'react';

const Card = (props) => {
  return (
    <div className='text-center'>
      <img
        src={props.image}
        alt=''
        style={{ width: '500px', height: '500px' }}
      />
    </div>
  );
};

export default Card;
