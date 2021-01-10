import React from 'react';
import { Card, Image } from 'antd';
import '../assets/styles/components/ActorCard.css';

const BASE_URL_IMAGES = 'https://image.tmdb.org/t/p/w500';

const ActorCard = ({ name, cover, gender, rating }) => {
    return (
      <Card
        cover={(
          <Image
            width='100%'
            height='36.5vh'
            src={BASE_URL_IMAGES + cover}
          />
        )}
        title={name}
        bodyStyle={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-around',
        }}
        headStyle={{
          fontSize: '18px',
          fontWeight: '700',
          textAlign: 'center',
        }}
        style={{ maxHeight: '60vh' }}
      >
        <p className='actor--gender'>{gender === 2 ? 'Hombre' : 'Mujer'}</p>
        <p className='actor--rating'>
          Popularidad:
          {` ${rating}`}
        </p>
      </Card>
    );
};

export default ActorCard;
