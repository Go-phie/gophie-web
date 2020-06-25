import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
  TelegramShareButton,
  TelegramIcon,
  RedditShareButton,
  RedditIcon,
} from "react-share";

class ShareModal extends Component {
  render() {
    const { movie } = this.props;
    let url = "";
    console.log(movie.referralID);
    if (window.location.hostname === "localhost") {
      url = `localhost:${window.location.port}/shared/${movie.referralID}`;
    } else {
      url = `https://gophie.cam/shared/${movie.referralID}`;
    }

    return (
      <Modal show={this.props.display} onHide={this.props.onHide}>
        <Modal.Header closeButton className="share-card">
          <Modal.Title>Share a Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body className="show-grid share-card">
          <Container>
            <Row>
              <Col xs={2} md={1}>
                <FacebookShareButton url={url} quote={movie.Title}>
                  <FacebookIcon size={32} round={true} />
                </FacebookShareButton>
              </Col>
              <Col xs={2} md={1}>
                <TwitterShareButton url={url} title={movie.Title}>
                  <TwitterIcon size={32} round={true} />
                </TwitterShareButton>
              </Col>
              <Col xs={2} md={1}>
                <WhatsappShareButton url={url} title={movie.Title}>
                  <WhatsappIcon size={32} round={true} />
                </WhatsappShareButton>
              </Col>
              <Col xs={2} md={1}>
                <TelegramShareButton url={url} title={movie.Title}>
                  <TelegramIcon size={32} round={true} />
                </TelegramShareButton>
              </Col>
              <Col xs={2} md={1}>
                <RedditShareButton url={url} title={movie.Title}>
                  <RedditIcon size={32} round={true} />
                </RedditShareButton>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer className="share-card">
          <Button variant="warning" onClick={this.props.onHide}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default ShareModal;
