import React from 'react';
import { Image, Segment, Grid, Comment, Icon, Container } from 'semantic-ui-react'

const PositiveExperiences = (props) => (
	<Container>
		{props.experiences.map((data, i) => (
			<Grid.Column width={6}>
				<Segment className="card" floated="left">
					<Image src={data.imgSrc} fluid />
					<Comment.Group>
						<Comment>
							<Comment.Avatar as='a' src={data.avatarSrc} />
							<Comment.Content>
								<Comment.Author>{data.name}</Comment.Author>
								<Comment.Metadata>
									<div>{data.commentDate}</div>
									<div>
										<Icon name='star' />
										{data.stars}
									</div>
								</Comment.Metadata>
								<Comment.Text>
									{data.comment}
								</Comment.Text>
							</Comment.Content>
						</Comment>
					</Comment.Group>
				</Segment>
			</Grid.Column>
		))}
	</Container>
)

export default PositiveExperiences;