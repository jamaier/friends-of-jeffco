import React from 'react'
import config from '../config/config.json'

const Footer = () => {
  return (
    <div className="footer">{config.footer.body}</div>
  )
}

export default Footer