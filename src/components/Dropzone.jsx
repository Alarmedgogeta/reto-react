import React from 'react';
import { useHistory } from 'react-router-dom';
import { Upload, message, Progress } from 'antd';
// eslint-disable-next-line import/no-extraneous-dependencies
import { InboxOutlined } from '@ant-design/icons';
//import { info } from 'node-sass';

const { Dragger } = Upload;

const Dropzone = () => {

  const history = useHistory();

  const handleChange = (info) => {
    const { status } = info.file;
    if (status !== 'uploading') {
    }
    if (status === 'done') {
      if (info.file.response.error) {
        message.error(info.file.response.error);
      } else {
        history.push(`/Actor/${info.file.response.actorName}`);
      }
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  };

  const draggerProps = {
    name: 'file',
    accept: '.jpg,.png',
    multiple: false,
    action: 'https://whois.nomada.cloud/upload',
    headers: {
      Nomada: 'OTdiMzQ5MjgtOTI5Ni00M2YwLWI0MDgtYmM4OTViMzQwYzJj',
    },
    progress: (<Progress
      strokeColor={{
        from: '#108ee9',
        to: '#87d068',
      }}
      percent={99.9}
      status='active'
    />),
    onChange: handleChange,
  };

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Dragger {...draggerProps}>
      <p className='ant-upload-drag-icon'>
        <InboxOutlined />
      </p>
      <p className='ant-upload-text'>Haz click o arrastra una imagen</p>
      <p className='ant-upload-hint'>
        Selecciona la foto de un actor famoso para conocer quien es y
        en qué peliculas ha salido.
      </p>
    </Dragger>
  );
};

export default Dropzone;
