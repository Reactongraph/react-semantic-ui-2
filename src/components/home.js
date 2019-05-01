import React from 'react';
import { Container, Grid } from 'semantic-ui-react'
import PositiveExperiences from './positiveExperieces';
import * as CommonHelper from "../common/experinces";
import FixedBanner from './fixedBanner';
import QuotesComponent from './quotes'
import Carousel from "../components/caraousel";

const Home = () => (
  <Container fluid>
    <Carousel />
    <Grid stackable>
      <Grid.Row columns={2} className="experiences">
        <Container>
          <PositiveExperiences experiences={CommonHelper.experiences1} />
        </Container>
      </Grid.Row>
    </Grid>
    <FixedBanner />
    <QuotesComponent />
    <Grid stackable>
      <Grid.Row columns={2} className="experiences1">
        <Container>
          <PositiveExperiences experiences={CommonHelper.experiences2} />
        </Container>
      </Grid.Row>
    </Grid>
  </Container>
)

export default Home;