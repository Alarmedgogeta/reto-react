/* eslint-disable no-param-reassign */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Spin } from 'antd';
import { setLoading, setError, deserializeActor } from '../actions';
import ActorCard from '../components/ActorCard';
import GoBackButton from '../components/GoBackButton';
import MovieCard from '../components/MovieCard';
import '../assets/styles/pages/Actor.css';

const API_KEY = '77051be82ce0b4a1d97fda8ad51b39dd';
const API_URL = `https://api.themoviedb.org/3/search/person?api_key=${API_KEY}&language=es`;

const Actor = ({ actor, error, loading, setLoading, setError, deserializeActor }) => {
  const { name } = useParams();

  const hasActor = actor !== null && Object.keys(actor).length > 0;

  const fetchActor = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${API_URL}&query=${name}`);
      const data = await response.json();
      deserializeActor(data.results[0]);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchActor();
  }, []);

  if (loading) {
    return (
      <Spin size='large' />
    );
  }
  if (error) {
    return (<p>{error.message}</p>);
  }
  return (
    <div className='actor__container'>
      <div className='actor__container--header'>
        <GoBackButton />
      </div>
      <div className='actor__container--content'>
        {hasActor && (
          <>
            <div className='actor__about'>
              <ActorCard
                name={actor.name}
                cover={actor.profile_path}
                gender={actor.gender}
                rating={actor.popularity}
              />
            </div>
            <div className='actor__movies'>
              <div className='actor__movies--header'>
                <h1>Películas:</h1>
              </div>
              <div className='actor__movies--content'>
                {actor.known_for.map((id) => (
                  <MovieCard
                    key={id}
                    id={id}
                  />
                  ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );

};

const mapStateToProps = (state) => {
  return {
    actor: state.current_actor_id ? state.actor[state.current_actor_id] : state.actor,
    loading: state.loading,
    error: state.error,
  };
};

const mapDispatchToProps = {
  deserializeActor,
  setLoading,
  setError,
};

export default connect(mapStateToProps, mapDispatchToProps)(Actor);
