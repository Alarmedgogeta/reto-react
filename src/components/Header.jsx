import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';

const Header = () => (
  <Layout.Header>
    <Menu theme='dark' mode='horizontal'>
      <Menu.Item key='Home'>
        <Link to='/'>¿Quién es este actor?</Link>
      </Menu.Item>
    </Menu>
  </Layout.Header>
);

export default Header;
