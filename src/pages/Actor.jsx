/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import { useParams } from 'react-router-dom';
import '../assets/styles/pages/Actor.css';

class Actor extends Component {

  // eslint-disable-next-line constructor-super
  constructor() {
    const { name } = useParams();
    state = {
      loading: true,
      error: null,
      actor: null,
    };
    actor = {
      name,
    };
    name;
  }

  componentDidMount() {
    this.fetchActor();
  }

  fetchActor = async () => {
    this.setState({
      loading: true,
      actor: null,
      error: null,
    });
    try {
      const response = await fetch('');
      const data = await response.json();
      console.log(data);
      this.setState({
        loading: false,
        actor: data,
        error: null,
      });
    } catch (error) {
      console.log(error);
      this.setState({
        loading: false,
        actor: null,
        error,
      });
    }
  }

  render() {
    return (
      <div className='actor__container'>
        <div className='actor__container--header'>
          Regresar
        </div>
        <div className='actor__container--content'>
          {this.state.loading && (
            <h1>Cargando</h1>
          )}
          {this.state.error && (
            <h1>{this.state.error}</h1>
          )}
          {this.state.actor && (
            <>
              <div className='actor__about'>
                <h1 className='actor__about--name'>
                  {this.state.actor.name}
                </h1>
              </div>
              <div className='actor__movies'>
                <div className='actor__movies--header'>
                  <h1>Peliculas</h1>
                </div>
                <div className='actor__movies--content'>
                  <h1>Peliculas</h1>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    );
  }
}

export default Actor;
