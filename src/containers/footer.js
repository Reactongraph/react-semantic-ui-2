import React from 'react';
import '../App.css';
import { Image, Grid, Container, Header } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom';

class Footer extends React.Component {
	state = {}
	handleItemClick = (e, { name }) => this.setState({ activeItem: name })

	render() {
		const { activeItem } = this.state

		return (
			<Container fluid className="footer_backgrnd">
				<Container>
					<Grid divided inverted stackable columns={3}>
						<Grid.Row>
							<Grid.Column className="">
								<Header content="Discount Sky Diving" as="h2" className="color_white pad footer_border" />
								<Header as="p" className="color_white" content="We offer the best sky diving prices in the Washington D.C. area. Cheap? Yes. But we won't ever compromise on Safety or Fun!! Book Today!" />
								<Header content="Monthly Newsletter" as="h2" className="color_white pad footer_border" />
								<Header as="p" className="color_white" content="Subscribe to our newsletter and stay up to date with the latest news and deals!" />
							</Grid.Column>
							<Grid.Column className="">

								<Header content="Recent Testimonials" as="h2" className="color_white pad footer_border" />
									<Image src={require('../utils/images/tiny1.jpg')} size='tiny' verticalAlign='middle' style={{ marginTop: "5px" }} />
									<span className="img_text">I highly recommend Skydive Capitol City! Jacob, Cartersville, GA</span>
								<Image src={require('../utils/images/tiny2.jpg')} size='tiny' verticalAlign='middle' style={{ marginTop: "5px" }} />
								<span className="img_text">Awesome experience! very safe, and super nice! Juanita V</span>
									<Image src={require('../utils/images/tiny3.jpg')} size='tiny' verticalAlign='middle' style={{ marginTop: "5px" }} />
									<span className="img_text">I had the BEST experience at Skydive Capitol City!!!</span>
							</Grid.Column>
							<Grid.Column className="">
								<Header content="Contact Us" as="h2" className="color_white pad footer_border" />
								<Header as="p" className="color_white" content="232 Virgin Street LA">
								</Header>
								<Header content="Monthly Newsletter" as="h2" className="color_white pad footer_border" />
								<Header as="p" className="color_white" content="Subscribe to our newsletter and stay up to date with the latest news and deals!" />
							</Grid.Column>
							<Grid.Column>
							</Grid.Column>
							<Grid.Column>
							</Grid.Column>
						</Grid.Row>
					</Grid>
				</Container>
			</Container>
		)
	}
}

export default withRouter(Footer)