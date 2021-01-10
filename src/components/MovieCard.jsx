import React from 'react';
import { Card, Image, Rate } from 'antd';
import '../assets/styles/components/MovieCard.css';

const BASE_URL_IMAGES = 'https://image.tmdb.org/t/p/original';

const MovieCard = ({ id, title, cover, overview, date, grade }) => {

  const newGrade = Math.round((grade / 2) * 10) / 10;

  return (
    <Card
      type='inner'
      title={title}
      extra={(
        <p>
          {`${newGrade}/5 `}
          <Rate disabled allowHalf defaultValue={newGrade} />
        </p>
          )}
      headStyle={{ fontWeight: 700, fontSize: '28px' }}
    >
      <div className='movie__container'>
        <div className='movie__container--image'>
          <Image
            width='100%'
            height='100%'
            src={BASE_URL_IMAGES + cover}
          />
        </div>
        <div className='movie__container--about'>
          <p className='overview'>
            {overview}
          </p>
          <p className='date'>
            {`Fecha de estreno: ${new Date(date).toLocaleDateString()}`}
          </p>
        </div>
      </div>
    </Card>
  );
};

export default MovieCard;
