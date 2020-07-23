import React from 'react';

const Card = (props) => {
  return (
    <div>
      <img src={props.image} alt={'Dog'} />
    </div>
  );
};

export default Card;
