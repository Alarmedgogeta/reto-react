import React from 'react';
import { Layout as AntLayout } from 'antd';
import Header from '../components/Header';
import Footer from '../components/Footer';

const { Content } = AntLayout;

const Layout = ({ children }) => (
  <AntLayout className='layout' style={{ minHeight: '100vh' }}>
    <Header />
    <Content style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      {children}
    </Content>
    <Footer />
  </AntLayout>
);

export default Layout;
