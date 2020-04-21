import React, {Component} from "react";
import Modal from 'react-bootstrap/Modal';


class DescriptionPopup extends Component {

    render() {
        return ( 
    <Modal 
    show={this.props.show}
    onHide={()=> this.props.onHide()}
    size="lg" 
    aria-labelledby="contained-modal-title-vcenter"
    dialogClassName="dialog-theme" 
    centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {this.props.movie.Title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          {
              this.props.movie.Description===""? "Seems like the description for this movie is missing": this.props.movie.Description
          }
        </p>
      </Modal.Body>
      <Modal.Footer>
        <button className="cancel-btn" onClick={() => this.props.onHide()}>Close</button>
      </Modal.Footer>
    </Modal>);

    }
}

export default DescriptionPopup;