import React from "react";

import { Link } from "react-router-dom";


function Navbar() {

  let name = window.localStorage.getItem("username")
 
  return (
    <>
      <nav
        className="navbar navbar-expand-lg mynav fixed-top"
        style={{ position: "sticky" }}
      >
        <div className="container-fluid">
      
          <a className="navbar-brand " href="#" id="kir">
            <span id="kiru">Notes </span>
            <span className="">Maker</span>
          </a>
         
          <button
            className="navbar-toggler"
            id="navBut"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
             
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/portal/home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/portal/create">
                  Create Note
                </a>
              </li>
           
             
              <li className="nav-item dropdown">
          <img
            src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
            className=" nav-link dropdown-toggle rounded-circle"
            style={{height :'3rem',width:'3rem'}}
            alt="Black and White Portrait of a Man"
            loading="lazy"
            
            id="navbarDarkDropdownMenuLink"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          />
               
                <ul
                  className="dropdown-menu dropdown-menu-dark"
                  aria-labelledby="navbarDarkDropdownMenuLink"
                >
                  <li>
                    <Link className="dropdown-item" to="/portal/profile">
                     {name}
                    </Link>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Logout
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
           
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
