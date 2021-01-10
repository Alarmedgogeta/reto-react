import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from 'antd';
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
