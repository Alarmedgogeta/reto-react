import React from 'react';
import { ExclamationCircleTwoTone, MehTwoTone } from '@ant-design/icons';
import GoBackButton from '../components/GoBackButton';
import '../assets/styles/pages/NotFound.css';

const iconProps = {
  fill: 'currentColor',
  fontSize: '48px',
  margin: '0 10px',
};

const NotFound = () => (
  <div className='notfound__container'>
    <div className='notfound__container--header'>
      <GoBackButton />
    </div>
    <div className='notfound__container--content'>
      <ExclamationCircleTwoTone style={iconProps} />
      <MehTwoTone style={iconProps} />
      <h1>Pagina no encontrada</h1>
      <MehTwoTone style={iconProps} />
      <ExclamationCircleTwoTone style={iconProps} />
    </div>
  </div>
);

export default NotFound;
