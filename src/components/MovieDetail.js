/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { Component } from "react";

export default class MovieDetail extends Component {
     constructor(props) {
        super(props);
            this.state = {
        }
    }

  componentDidMount() {
    console.log("Title: ", this.state.Index)
    //   fetch(`https://gophie.herokuapp.com/${this.state.api}list?page=${this.state.listIndex}&engine=${this.state.server}`)
    //         .then(response => response.json())
    //   .then(({ animal }) => {
    //     this.props.data({
    //       url: animal.url,
    //       name: animal.name,
    //       animal: animal.type,
    //       location: `${animal.contact.address.city}, ${
    //         animal.contact.address.state
    //       }`,
    //       description: animal.description,
    //       media: animal.photos,
    //       breed: animal.breeds.primary,
    //       loading: false
    //     });
    //   })
    //   .catch(err => this.setState({ error: err }));
  }
  render() {

    return (
      <div></div>
    );
  }
}
