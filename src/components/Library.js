import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Image } from 'react-bootstrap';
import albumData from './../data/albums.js';
import '.././styles/library.css';

class Library extends Component {
  constructor(props) {
    super(props);
    this.state = { albums: albumData };
  }

   render() {
    return (
      <Row className="library show-grid container col-centered">
        {
          this.state.albums.map( (album, index) =>
            <Col xs={12} sm={6} md={6} key={index} className="library-album-section">
              <Link to={`/album/${album.slug}`} className="library-album-info">
                  <Image responsive rounded src={album.albumCover} alt={album.title} />
                  <div className="overlay-container">
                  <div className="overlay-text">
                    <div className="library-album-artist">{album.artist}</div>
                    <div>{album.title}</div>
                  </div>
                </div>
              </Link>
            </Col>
          )
        }
      </Row>
     );
   }
 }

export default Library;