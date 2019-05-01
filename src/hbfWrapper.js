import React from 'react';
import './App.css';
import HeaderList from './containers/header';
import Footer from './containers/footer';
import { Container } from 'semantic-ui-react';

const HBFWrapper = (props) => {
  return (
    <Container fluid>
      <HeaderList />
        {props.children}
      <Footer />
    </Container>
  );
}

export default HBFWrapper;
