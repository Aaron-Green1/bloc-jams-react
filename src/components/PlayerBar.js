import React, { Component } from 'react';
import { Navbar, Row, Col } from 'react-bootstrap';
import '.././styles/playerbar.css';

class PlayerBar extends Component {
  render() {
    return (
      <Navbar fixedBottom>
        <Row className="show-grid">
          <Col sm={8} smOffset={2} xs={10} xsOffset={1}>

            <Row className="player-buttons">
              <Col xs={12}>
                <Col xs={4} className="text-right">
                  <button className="ion-btn" onClick={this.props.handlePrevClick}>
                    <span className="ion-skip-backward"></span>
                  </button>
                </Col>
                <Col xs={4} className="text-center">
                  <button className="ion-btn" onClick={this.props.handleSongClick} >
                    <span className={this.props.isPlaying ? 'ion-pause' : 'ion-play'}></span>
                  </button>
                </Col>
                <Col xs={4} className="text-left">
                  <button className="ion-btn" onClick={this.props.handleNextClick}>
                    <span className="ion-skip-forward"></span>
                  </button>
                </Col>
              </Col>
            </Row>

            <Row id="current-song-display">
              <Col xs={12} className="text-center">
                {this.props.currentSong.title}
              </Col>
              <Col xs={12} className="text-center">
                {this.props.artist}
              </Col>
            </Row>

            <Row>
              <Col xs={6} className="current-time text-left">{this.props.formatTime(this.props.currentTime)}</Col>
              <Col xs={6} className="total-time text-right">{this.props.formatTime(this.props.duration)}</Col>
              <Col xs={12}>
                <input
                  type="range"
                  className="seek-bar"
                  value={(this.props.currentTime / this.props.duration) || 0 }
                  max="1"
                  min="0"
                  step="0.001"
                  onChange={this.props.handleTimeChange}
                />
              </Col>
            </Row>

            <Row id="volume-control">
              <Col xs={8} xsOffset={2}>
                <Col xs={12}>
                  <input
                    type="range"
                    className="seek-bar"
                    value={this.props.volume}
                    max="1"
                    min="0"
                    step="0.001"
                    onChange={this.props.handleVolumeChange}
                  />
                </Col>
                <Col xs={6} className="icon ion-volume-low text-left"></Col>
                <Col xs={6} className="icon ion-volume-high text-right"></Col>
              </Col>
            </Row>

          </Col>
        </Row>
      </Navbar>
    );
  }
}

export default PlayerBar;