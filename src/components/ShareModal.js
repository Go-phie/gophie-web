import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

class ShareModal extends Component {

    render(){
        console.log(this.props.movie);
        
        return(
            <Modal show={this.props.display} onHide={this.props.onHide}>
                <Modal.Header closeButton>
                    <Modal.Title>Share a Movie</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, youre reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={this.props.onHide}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        )
    }
}

export default ShareModal;