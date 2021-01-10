/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import { useParams } from 'react-router-dom';
import { Spin } from 'antd';
import ActorCard from '../components/ActorCard';
import GoBackButton from '../components/GoBackButton';
import MovieCard from '../components/MovieCard';
import '../assets/styles/pages/Actor.css';

const API_KEY = '77051be82ce0b4a1d97fda8ad51b39dd';

class Actor extends Component {

  // eslint-disable-next-line constructor-super
  constructor(props) {
    super();
    this.state = {
      loading: true,
      error: null,
      actor: null,
    };
    this.name = props.match.params.name;//this.getActorName();
    console.log(this.name);
  }

  componentDidMount() {
    this.fetchActor();
  }

  getActorName = () => {
    const { name } = useParams();
    return name;
  }

  fetchActor = async () => {
    this.setState({
      loading: true,
      actor: null,
      error: null,
    });
    try {
      const seacrh = await fetch(`https://api.themoviedb.org/3/search/person?api_key=${API_KEY}&query=${this.name}&language=es`);
      const data = await seacrh.json();
      console.log(data);
      this.setState({
        loading: false,
        actor: {
          gender: data.results[0].gender,
          name: data.results[0].name,
          cover: data.results[0].profile_path,
          rating: data.results[0].popularity,
          known_for: data.results[0].known_for,
        },
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
    if (this.state.loading) {
      return (
        <Spin size='large' />
      );
    }
    return (
      <div className='actor__container'>
        <div className='actor__container--header'>
          <GoBackButton />
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
                <ActorCard
                  name={this.state.actor.name}
                  cover={this.state.actor.cover}
                  gender={this.state.actor.gender}
                  rating={this.state.actor.rating}
                />
              </div>
              <div className='actor__movies'>
                <div className='actor__movies--header'>
                  <h1>Películas:</h1>
                </div>
                <div className='actor__movies--content'>
                  {this.state.actor.known_for.map((movie) => (
                    <MovieCard
                      key={movie.id}
                      id={movie.id}
                      title={movie.media_type === 'movie' ? movie.title : movie.name}
                      cover={movie.backdrop_path}
                      overview={movie.overview}
                      date={movie.media_type === 'movie' ? movie.release_date : movie.first_air_date}
                      grade={movie.vote_average}
                    />
                    ))}
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
