import React, {
    Component
} from "react";

export default class CarouselSkeletonLoader extends Component {
  render() {
    return (
        <div style={{ minWidth: '16em', minHeight: '25em', margin: '.2em !important', overflow: 'hidden'}} className="skeleton-movie-image">
          <button style={{ top: '50%', right: '37%'}} className="skeleton-download-btn"></button>
        </div>
    );
  }
}
