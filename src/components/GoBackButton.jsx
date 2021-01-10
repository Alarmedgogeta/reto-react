import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from 'antd';
// eslint-disable-next-line import/no-extraneous-dependencies
import { ArrowLeftOutlined } from '@ant-design/icons';

const GoBackButton = () => {

  const history = useHistory();

  const handleClick = () => {
    history.goBack();
  };
    return (
      <Button
        type='primary'
        icon={<ArrowLeftOutlined />}
        onClick={handleClick}
      >
        Regresar
      </Button>
    );
};

export default GoBackButton;

/*
loading={loadings[1]}
        onClick={() => { this.enterLoading(1) }}
*/
