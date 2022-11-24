import React from 'react'
import logo from '../../images/logo.png'
import { Link } from 'react-router-dom'
import './Navbar.css'
export default function Navbar({userData ,logOut}) {
  return <>
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
  <div className="container">
    <Link className="navbar-brand me-5" to="/">
      <img className="navbar-brand-img" src={logo} alt="" />
      <span>Gamer Over</span>
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      

      {userData? <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="all">All</Link>
        </li>
        <li className="nav-item">
        <div className="dropdown">
  <span className=" bg-transparent dropdown-toggle nav-link" type="button" data-bs-toggle="dropdown" aria-expanded="false">
   Platform
  </span>
  <ul className="dropdown-menu">
    <li><Link className="dropdown-item" to="/platform/pc">pc</Link></li>
    <li><Link className="dropdown-item" to="/platform/browser">browser</Link></li>
   
  </ul>
</div>
        </li>
        <li className="nav-item">
        <div className="dropdown ">
  <span className=" bg-transparent dropdown-toggle nav-link" type="button" data-bs-toggle="dropdown" aria-expanded="false">
   Sort-by
  </span>
  <ul className="dropdown-menu ">
    <li><Link className="dropdown-item" to="/sort-by/release-date">release-date</Link></li>
    <li><Link className="dropdown-item" to="/sort-by/popularity">popularity</Link></li>
    <li><Link className="dropdown-item" to="/sort-by/alphabetical">alphabetical</Link></li>
    <li><Link className="dropdown-item" to="/sort-by/relevance">relevance</Link></li>
   
  </ul>
</div>
        </li>
        <li className="nav-item">
        <div className="dropdown ">
  <span className=" bg-transparent dropdown-toggle nav-link" type="button" data-bs-toggle="dropdown" aria-expanded="false">
   Categories
  </span>
  <ul className="dropdown-menu ">
    <li><Link className="dropdown-item" to="/categories/racing">racing</Link></li>
    <li><Link className="dropdown-item" to="/categories/sports">sports</Link></li>
    <li><Link className="dropdown-item" to="/categories/social">social</Link></li>
    <li><Link className="dropdown-item" to="/categories/shooter">shooter</Link></li>
    <li><Link className="dropdown-item" to="/categories/open-word">open-word</Link></li>
    <li><Link className="dropdown-item" to="/categories/zombie">zombie</Link></li>
    <li><Link className="dropdown-item" to="/categories/fantasy">fantasy</Link></li>
    <li><Link className="dropdown-item" to="/categories/action-rpg">action-rpg</Link></li>
    <li><Link className="dropdown-item" to="/categories/action">action</Link></li>
    <li><Link className="dropdown-item" to="/categories/flight">flight</Link></li>
    <li><Link className="dropdown-item" to="/categories/battle-royale">battle-royale</Link></li>
    
   
  </ul>
</div>
        </li>
      </ul>:"" }
     
     {userData? <Link onClick={logOut} className=' ms-auto  nav-link'> <span className=" border border-primary text-primary rounded-3 px-3 py-2 " >Log Out</span></Link> :<ul className=' navbar-nav ms-auto '>
        <li className="nav-item">
          <Link className="nav-link " to="login">Login</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link border border-primary text-primary rounded-3 px-3 mx-3" to="joinfree">Joinfree</Link>
        </li>
      </ul> }
      
    </div>
  </div>
</nav>
</>
}
