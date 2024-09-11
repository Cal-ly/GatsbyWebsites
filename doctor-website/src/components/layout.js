import * as React from "react"
import { Link } from "gatsby"
import "./layout.css"
import logo from "../images/logo-no-background.png" // Import the image

const Layout = ({ children }) => {
  return (
    <>
      <header className="main-header">
        <div className="logo-container">
          <img src={logo} alt="Logo" />
          <p>Greve Lægepraksis</p>
        </div>
        <nav className="nav-bar">
          <ul>
            <li><Link to="/">Forside</Link></li>
            <li><Link to="/about">Klinikken</Link></li>
            <li><Link to="/services">Behandling</Link></li>
            <li><Link to="/contact">Tidsbestilling</Link></li>
            <li><Link to="/news">Nyheder</Link></li>
            <li><button className="nav-button">Akut sygdom</button></li>
            <li><button className="nav-button">Lægevejen.dk</button></li>
          </ul>
        </nav>
      </header>
      
      <main className="main-content">{children}</main>
      
      <footer className="main-footer">
        <div className="footer-section">
          <h3>Åbningstider</h3>
          <p>Mandag 8-16<br />Tirsdag 8-16 (Efter 16.00 kun efter aftale)<br />Onsdag 8-16<br />Torsdag 8-16<br />Fredag 8-16 (Ofte med vagt efter kl. 12.00)</p>
        </div>
        <div className="footer-section">
          <h3>Adresse</h3>
          <p>Centerholmen 18, 2<br />2670 Greve</p>
        </div>
        <div className="footer-section">
          <h3>Telefon</h3>
          <p>+45 43 90 22 64</p>
          <h3>Akuttelefon</h3>
          <p>+45 40 89 56 04<br />Ved akut sygdom mellem 12.00-16.00</p>
        </div>
        <div className="footer-section">
          <h3>E-mail</h3>
          <p>Alle e-mail konsultationer går gennem www.laegevejen.dk</p>
        </div>
      </footer>
    </>
  )
}

export default Layout
