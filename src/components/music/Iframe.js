import React from 'react'

const Iframe = ({ downloadLink }) => {
  return (
    <div style={{ display: 'none' }}>
      <iframe src={downloadLink} title='download' />
    </div>
  )
}

export default Iframe
