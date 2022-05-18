import React, { Component } from 'react';
import Card from './components/Card';
import fetchKanto from './functions/fecth';
import './mobile.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pokemons: [],
    };

    
  }
  componentDidMount = async () => {
    await this.returnPokedex()
  }

  returnPokedex = async () => {
    const req = await fetchKanto()
    const results = await req.results;
    const promise = results.map(async (elemt) => {
      const reqUrl = await fetch(elemt.url);
      const jsonUrl = await reqUrl.json();
      return jsonUrl;
    });
    return Promise.all(promise).then((data) => this.setState({ pokemons: data, }));
  }

  render() {
    const { pokemons } = this.state;
    return (
      <div className='body-app'>
        { pokemons.map((e) => {
          return (
            <Card
              key={ e.id }  
              name={ e.name }
              image={ e.sprites.front_default }
              body={ e.height }
            />
          )
        }) }
      </div>
    );
  }
}

export default App;