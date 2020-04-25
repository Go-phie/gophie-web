import React, {Component} from "react";
import Modal from 'react-bootstrap/Modal';
import Rating from 'material-ui-rating';
import axios from "axios";


class DescriptionPopup extends Component {
    constructor(props) {
      super(props);
      this.state = {
        ratings_api: "https://gophie-ocena.herokuapp.com",
        ratings: {},
        ip_rating: 0,
      };
    }
    
    UNSAFE_componentWillMount() {
      this.getAverage();
      this.getRatings();
    }

    getAverage = () => {
      const { movie } = this.props
      axios.post(
        this.state.ratings_api+"/movie/ratings/average/",
        {name: movie.Title, engine: movie.Source}
      ).then(res => {
          console.log(res.data)
          this.setState({
            ratings: res.data
          })
      })
      .catch(err => {
        this.setState({
          error: true
        });
      });
    }

    getRatings = () => {
      const { movie } = this.props
      axios.post(
        this.state.ratings_api+"/movie/rating/",
        {movie_name: movie.Title, engine: movie.Source, ip_address: this.props.ip_address}
      )
      .then(res => {
        console.log(res.data)
        if (res.data !== null) {
          this.setState({
            ip_rating: res.data.score
          })
        }
    })
    .catch(err => {
      this.setState({
        error: true
      });
    });
    }

    rateMovie = (value) => {
      const { movie } = this.props
      axios.post(
        this.state.ratings_api+"/rate/",
        {movie_name: movie.Title, engine: movie.Source, ip_address: this.props.ip_address, score: value}
      )
      .then(res => {
        if (res.data !== null) {
          this.setState({
            ip_rating: res.data.score
          })
        }
        // retrieve average to force rerender
        this.getAverage();
    })
    .catch(err => {
      this.setState({
        error: true
      });
    });
    }

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
        <section>
        <div className="row">
          {
              this.props.movie.Description===""? "Seems like the description for this movie is missing": this.props.movie.Description
          }
        </div>
        </section>
        <section>
          <div className="row">
            Average Rating<br/>
          <Rating
            value={Math.round(this.state.ratings.average_ratings)}
            max={5}
            readOnly={true}/> by {Math.round(this.state.ratings.by)} person(s)
          </div>
          <div className="row">
            Rate Movie<br/>
          <Rating
            value={this.state.ip_rating}
            max={5}
            onChange={(value) => this.rateMovie(value)}
          />
          </div>
        </section>
      </Modal.Body>
    </Modal>);

    }
}

export default DescriptionPopup;