import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
//import Layout from '../containers/Layout';
import Home from '../pages/Home';
import Actor from '../pages/Actor';
import NotFound from '../pages/NotFound';

const { Header, Content, Footer } = Layout;

const App = () => (
  <BrowserRouter>
    <Layout className='layout' style={{ minHeight: '100vh' }}>
      <Header>
        <Menu theme='dark' mode='horizontal' defaultSelectedKeys={['2']}>
          <Menu.Item key='Home'>
            <Link to='/'>¿Quién es este actor?</Link>
          </Menu.Item>
          <Menu.Item key='Actors'><Link to='/Actors'>Actores</Link></Menu.Item>
          <Menu.Item key='3'>nav 3</Menu.Item>
        </Menu>
      </Header>
      <Content style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/Actor/:name' component={Actor} />
          <Route component={NotFound} />
        </Switch>
      </Content>
      <Footer>Footer</Footer>
    </Layout>
  </BrowserRouter>
);

export default App;
