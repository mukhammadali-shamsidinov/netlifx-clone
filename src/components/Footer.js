import React from 'react'

const Footer = () => {

  const years= new Date().getFullYear()

  return (
    <div className='footer-page'>
      <p>This page is Netflix clone Year @{years}</p>
    </div>
  )
}

export default Footer
