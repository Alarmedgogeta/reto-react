import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Upload, message, Progress, Spin } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import { setLoading } from '../actions';

const API_URL = 'https://whois.nomada.cloud/upload';
const API_KEY = 'OTdiMzQ5MjgtOTI5Ni00M2YwLWI0MDgtYmM4OTViMzQwYzJj';

const Dropzone = ({ loading, setLoading }) => {

  const { Dragger } = Upload;
  const history = useHistory();

  const handleChange = (info) => {
    const { status } = info.file;
    if (status !== 'uploading') {
      setLoading(true);
    }
    if (status === 'done') {
      if (info.file.response.error) {
        message.error(info.file.response.error);
      } else {
        history.push(`/Actor/${info.file.response.actorName}`);
      }
      setLoading(false);
    } else if (status === 'error') {
      message.error(`El archivo ${info.file.name} falló en su envío, intente nuevamente.`);
      setLoading(false);
    }
  };

  const draggerProps = {
    name: 'file',
    accept: '.jpg,.png',
    multiple: false,
    action: API_URL,
    headers: {
      Nomada: API_KEY,
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
      {loading ? (<Spin size='large' />) : (
        <>
          <p className='ant-upload-text'>Haz click o arrastra una imagen</p>
          <p className='ant-upload-hint'>
            Selecciona la foto de un actor famoso para conocer quien es y
            en qué peliculas ha salido.
          </p>
        </>
      )}
    </Dragger>
  );
};

const mapStateToProps = (state) => {
  return {
    loading: state.loading,
  };
};

const mapDispatchToProps = {
  setLoading,
};

export default connect(mapStateToProps, mapDispatchToProps)(Dropzone);
