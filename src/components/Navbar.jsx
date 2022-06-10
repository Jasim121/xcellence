import React from 'react'

const Navbar = () => {
  return (
    <>

<nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><img src="../images/logo.png" alt="logo" /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="#">Product</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="#">Market</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="#">The team</a>
        </li>
      </ul>
      <form className="d-flex">
        <button className='navbutton'>Buy on Opensea</button>
      </form>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar
