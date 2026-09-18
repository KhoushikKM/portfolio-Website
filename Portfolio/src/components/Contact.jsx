import React from 'react'
import ElectricBorder from '../supporters/ElectricBorder'

const Contact = () => {
  return (
    <div id="Contact" className="contact-section">
      <h1 className="section-title">Contact Me :)</h1>

      <ElectricBorder color="#8b5cf6" speed={1.2} chaos={1.1} thickness={2} className="contact-card-shell">
        <div className="contact-card">
          <div className="contact-item">
            <span className="label">Email</span>
            <a href="mailto:khoushiknarayanan70@email.com">khoushiknarayanan70@email.com</a>
          </div>

          <div className="contact-item">
            <span className="label">LinkedIn</span>
            <a href="https://www.linkedin.com/in/khoushik-narayanan-804977257/" target="_blank" rel="noopener noreferrer">Khoushik Narayanan</a>
          </div>

          <div className="contact-item">
            <span className="label">Phone</span>
            <a href="tel:+919876543210">+91 9876543210</a>
          </div>
        </div>
      </ElectricBorder>
    </div>
  )
}

export default Contact
