import React from 'react'
import { Link } from 'react-router-dom';
import koinxlogo from './images/koinxlogo.jpg'

const Nav = () => {
  return (
    <>
        <nav className="navbar navbar-expand-lg fixed-top navbar-shadow">
        <div className="container">
            <Link className="navbar-brand" to="/"><img src={koinxlogo} alt='logo' height='35px' width='90px'/></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <Link className="nav-link me-4" to="#"><b>Crypto Taxes</b></Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link me-4" to="#"><b>Free Tools</b></Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link me-4" to="#"><b>Resource Center</b></Link>
                </li>
                <li className="nav-item">
                <Link className="btn btn-primary" to="#">Get Started</Link>
                </li>
            </ul>
            </div>
        </div>
        </nav>
    </>
  )
}

export default Nav