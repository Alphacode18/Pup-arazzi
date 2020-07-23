import React, { Fragment, Component } from 'react';

class Instruction extends Component {
  componentDidMount = async () => {
    this.props.fetchBreeds();
  };
  render() {
    return (
      <Fragment>
        <h2>The search functionality above can be used in two ways: </h2>
        <ul>
          <li>
            <p>Empty Search: Presents a random dog photo!</p>
          </li>
          <li>
            <p>Breed Search: Presents a dog photo of the requested breed!</p>
            <p>
              Knowing all the dog breeds can be confusing, hence we have listed
              out the breeds the Dog API currently supports.
            </p>
          </li>
        </ul>
      </Fragment>
    );
  }
}

export default Instruction;
