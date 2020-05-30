import React, {
    Component
} from "react";

export default class CarouselSkeletonLoader extends Component {
  render() {
    return (
        <div style={{ minWidth: '16em', minHeight: '25em', margin: '.5em', overflow: 'hidden', boxShadow: 'none', position: 'relative'}} className="skeleton-movie-image">
        </div>
    );
  }
}
