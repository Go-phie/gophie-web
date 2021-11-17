import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
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
import { CopyToClipboard } from 'react-copy-to-clipboard';

const copy = {
  copiedText: 'URL Copied to Clipboard',
  defaultText: 'Copy URL',
  copiedClass: 'bg-light gbtn-primary mr-3 px-3 py-1 rounded text-bold',
  defaultClass: 'gbtn gbtn-primary mr-3 px-3 py-1 rounded'
};

const ShareModal = (props) => {
  const [btnCopyText, setBtnCopyText] = useState(copy.defaultText);
  const [isUrlCopied, setUrlCopied] = useState(false);

  const copyURLToClipboard = () => {
    setUrlCopied(true);
  };

  useEffect(() => {
    if (isUrlCopied === true) {
      setBtnCopyText(copy.copiedText);

      setTimeout(() => {
        setBtnCopyText(copy.defaultText);
        setUrlCopied(false);
      }, 2000);
    }
  }, [isUrlCopied])

  const { movie } = props;
  let url = "";
  // console.log(movie.referral_id);
  if (window.location.hostname === "localhost") {
    url = `localhost:${window.location.port}/shared/${movie.referral_id}`;
  } else {
    url = `https://gophie.cam/shared/${movie.referral_id}`;
  }

  return (
    <>
      <Modal
        show={props.display}
        onHide={props.onHide}
        className="share-card"
        centered
        aria-labelledby="contained-modal-title-vcenter"
      >
        <Modal.Header closeButton>
          <Modal.Title>Share Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body className="show-grid mt-5">
          <Container>
            <Row className="justify-content-between">
              <FacebookShareButton
                url={url}
                quote={movie.name}
                className="mb-2 mr-3"
              >
                <FacebookIcon size={50} round={true} />
              </FacebookShareButton>

              <TwitterShareButton
                url={url}
                title={movie.name}
                className="mb-2 mr-3"
              >
                <TwitterIcon size={50} round={true} />
              </TwitterShareButton>

              <WhatsappShareButton
                url={url}
                title={movie.name}
                className="mb-2 mr-3"
              >
                <WhatsappIcon size={50} round={true} />
              </WhatsappShareButton>

              <TelegramShareButton
                url={url}
                title={movie.name}
                className="mb-2 mr-3"
              >
                <TelegramIcon size={50} round={true} />
              </TelegramShareButton>

              <RedditShareButton url={url} title={movie.name} className="mb-2">
                <RedditIcon size={50} round={true} />
              </RedditShareButton>
            </Row>
            <Row className="justify-content-center mt-3 eoErth">
              <CopyToClipboard text={url}
                onCopy={() => copyURLToClipboard(true)}>
                <button
                  className={isUrlCopied ? copy.copiedClass : copy.defaultClass}
                  onClick={copyURLToClipboard}
                  type="button"
                >
                  {btnCopyText}
                </button>
              </CopyToClipboard>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ShareModal;
