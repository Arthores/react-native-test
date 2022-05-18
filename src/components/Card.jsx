import React, { Component } from 'react';

class Card extends Component {

  render() {
    const { name, image, body, typeOne, typeTwo } = this.props;
    return (
      <div className='card'>
          <div className='card-name'>
            <h3> { name.toUpperCase() }</h3>
          </div>
          <div className='card-image'>
            <img src={ image } alt={`${name} sprit`}/>
          </div>
          <div className='card-body'>
            <h5>Height: { body } "</h5>
          <div className='card-type'>
            <h5>{ typeOne ? `Type: ${typeOne}` : null }</h5>
            <h5>{ typeTwo ? `Type: ${typeTwo}` : null }</h5>
          </div>
          </div>
      </div>
    );
  }
}

export default Card;