import React from "react";
import { Link } from "@reach/router";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    console.error(error);
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.error("errorBoundary Caught an Error", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <h1>
          There was an Error with this listing. <Link to="/">Click Here</Link>{" "}
          to go back to the home page or wait for 5 seconds.
        </h1>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
