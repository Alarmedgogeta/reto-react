import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Spin } from 'antd';
import { setActor, setLoading, setError } from '../actions';
import ActorCard from '../components/ActorCard';
import GoBackButton from '../components/GoBackButton';
import MovieCard from '../components/MovieCard';
import '../assets/styles/pages/Actor.css';

const API_KEY = '77051be82ce0b4a1d97fda8ad51b39dd';
const API_URL = `https://api.themoviedb.org/3/search/person?api_key=${API_KEY}&language=es`;

const Actor = ({ actor, error, loading, setActor, setLoading, setError }) => {
  const { name } = useParams();

  const hasActor = actor !== null && Object.keys(actor).length > 0;

  const fetchActor = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${API_URL}&query=${name}`);
      const data = await response.json();
      setActor(data.results[0]);
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
                {actor.known_for.map((movie) => (
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

};

const mapStateToProps = (state) => {
  return {
    actor: state.actor,
    loading: state.loading,
    error: state.error,
  };
};

const mapDispatchToProps = {
  setActor,
  setLoading,
  setError,
};

export default connect(mapStateToProps, mapDispatchToProps)(Actor);
