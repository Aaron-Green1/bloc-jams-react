import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import '.././styles/landing.css';

const Landing = () => (
  <Grid className="fluid">
    <Row className="landing show-grid">
      <Col xs={12} className="selling-points">
        <h1 id="landing-title">Turn the Music Up!</h1>

        <Col xs={12} md={4}>
          <Col xs={12} md={4} xsPull={12} className="point one">
            <h3 className="point-title">Choose your music</h3>
            <Col xs={12} md={4} xsPush={12} className="point-description one">
              <p>The world is full of music; why should you have to listen to music that someone else chose?</p>
            </Col>
          </Col>
          <Col xs={12} md={4} xsPull={12} className="point two">
            <h3 className="point-title">Unlimited, streaming, ad-free</h3>
            <Col xs={12} md={4} xsPush={12} className="point-description two">
              <p>No arbitrary limits. No distractions.</p>
            </Col>
          </Col>
          <Col xs={12} md={4} xsPull={12} className="point three">
            <h3 className="point-title">Mobile enabled</h3>
            <Col xs={12} md={4} xsPush={12} className="point-description three">
              <p>Listen to your music on the go. This streaming service is available on all mobile platforms.</p>
            </Col>
          </Col>
        </Col>

      </Col>
    </Row>
  </Grid>
);

export default Landing;