import React from 'react';
import { Container, Header } from 'semantic-ui-react'

const FixedBanner = () => (
    <Container fluid className="banner">
      <Header as="h1" content="Be fearless in the pursuit of what sets your soul on fire." className="banner_text" />
    </Container>
)

export default FixedBanner;