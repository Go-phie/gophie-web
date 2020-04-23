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
    data-tour="my-fifth-step"
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
    </Modal>);

    }
}

export default DescriptionPopup;