import React, { Component } from 'react';
import {Route, Link} from 'react-router-dom';
import './App.css';
import Landing from './components/Landing';
import Library from './components/Library';
import Album from './components/Album';
import {Grid, Row, Col} from 'react-bootstrap';
import './styles/app.css';

class App extends Component {
  render() {
    return (
    <Grid className="col-centered">
        <Row className="show-grid">
          <Col xs={12}>
            <nav>
                <Link to='/' id="nav-landing">Bloc Jams</Link> <span id="link-bar">|</span>
                <Link to='/library' id="nav-library">My Music</Link>
            </nav>
          </Col>
          <Col xs={12} className="main-content">
            <main>
              <Route exact path="/" component={Landing} />
              <Route path="/library" component={Library} />
              <Route path="/album/:slug" component={Album} />
            </main>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
