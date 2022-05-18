import React, { Component } from 'react';

class Card extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { name } = this.props;
    return (
      <div className='card'>
          <div className='card-name'>
            <h1>{ name }</h1>
          </div>
      </div>
    );
  }
}

export default Card;