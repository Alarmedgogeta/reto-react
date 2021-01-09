import React from 'react';
import Dropzone from '../components/Dropzone';
import '../assets/styles/pages/Home.css';

const Home = () => (
  <div className='home'>
    <div className='home__container'>
      <div className='home__container--title'>
        <h1>¿Quién es este actor?</h1>
      </div>
      <div className='home__container--content'>
        <Dropzone />
      </div>
    </div>
  </div>
);

export default Home;
