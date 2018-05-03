import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import '.././styles/landing.css';

const Landing = () => (
  <Grid>
    <section className="landing show-grid">
      <div className="selling-points">
        <h1 id="landing-title">Turn the Music Up!</h1>

        <Row>
          <Col xs={12} md={4} className="point one">
            <h3 className="point-title">Choose your music</h3>
            <div className="point-description one">
              <p>The world is full of music; why should you have to listen to music that someone else chose?</p>
            </div>
          </Col>

          <Col xs={12} md={4} className="point two">
            <h3 className="point-title">Unlimited, streaming, ad-free</h3>
            <div className="point-description two">
              <p>No arbitrary limits. No distractions.</p>
            </div>
          </Col>

          <Col xs={12} md={4} className="point three">
            <h3 className="point-title">Mobile enabled</h3>
            <div className="point-description three">
              <p>Listen to your music on the go. This streaming service is available on all mobile platforms.</p>
            </div>
          </Col>

        </Row>

      </div>
    </section>
  </Grid>
);

export default Landing;