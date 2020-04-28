import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import ErrorBoundary from '../utils/error-boundaries';

function PollsAlert() {
  const [show, setShow] = useState(true);

    return (
      <>
      <Alert className="gophie-alert" show={show} variant="danger" onClose={() => setShow(false)} dismissible>
        <p>
          Hi, Hope you are enjoying your stay on Gophie,
          We need your feedback about <b>features</b> you will love to see on Gophie.
          <a href="https://PollEv.com/discourses/lkassR2jhefHuR7qeqJll/respond" target="_blank" rel="noopener noreferrer"> Give Feedback</a>
        </p>
      </Alert>
      </>
  );
}

export default function PollsAlertWithErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <PollsAlert />
    </ErrorBoundary>
  )
};
