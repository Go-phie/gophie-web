import React, {
    Component
} from "react";

export default class CarouselSkeletonLoader extends Component {
  render() {
    return (
        <div style={{ minWidth: '16em', borderRadius: '.7em', minHeight: '25em', margin: '.2em', overflow: 'hidden', boxShadow: 'none'}} className="skeleton-movie-image">
        </div>
    );
  }
}
