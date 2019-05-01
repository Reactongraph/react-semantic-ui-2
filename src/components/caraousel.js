import React from 'react';
import { Container, List } from 'semantic-ui-react';

const Carousel = () => (
    <Container fluid>
        <div id="myCarousel" className="carousel slide" data-ride="carousel">
            <List ordered className="carousel-indicators">
                <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                <li data-target="#myCarousel" data-slide-to="1"></li>
                <li data-target="#myCarousel" data-slide-to="2"></li>
            </List>
            <div className="carousel-inner">
                <div className="item active">
                    <Container fluid className="home_img1" />
                </div>
                <div className="item">
                    <Container fluid className="home_img2" />
                </div>
                <div className="item">
                    <Container fluid className="home_img3" />
                </div>
            </div>
            <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                <span className="glyphicon glyphicon-chevron-left"></span>
            </a>
            <a className="right carousel-control" href="#myCarousel" data-slide="next">
                <span className="glyphicon glyphicon-chevron-right"></span>
            </a>
        </div>
    </Container>
)

export default Carousel;