import React from 'react';
import { Container, Segment, Card } from 'semantic-ui-react';

const QuotesComponent = () => (
    <Container>
      <Segment className="quote_segment">
        <Card.Group itemsPerRow={3}>
          <Card color='red' description='Don’t ask for security, ask for adventure.' />
          <Card color='red' description='Go where you feel most alive.' />
          <Card color='red' description='Add life to your days, not days to your life.' />
          <Card color='red' description='Life is either a daring adventure or nothing.' />
          <Card color='red' description='Life was meant for good friends and great adventures.' />
        </Card.Group>
      </Segment>
    </Container>
)

export default QuotesComponent;