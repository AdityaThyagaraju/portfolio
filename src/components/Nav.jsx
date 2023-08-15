import React from "react";

function Nav(){
    return <nav className="navbar navbar-expand-lg navbar-dark">
    <div className="container-fluid">
      <a className="navbar-brand name" href="#">Adi's Portfolio</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav  ms-auto ps-3">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
          <a className="nav-link" href="#">About</a>
          <a className="nav-link" href="#">Projects</a>
          <a className="nav-link">Share your Thoughts</a>
        </div>
      </div>
    </div>
  </nav>
}

export default Nav;