import React from "react";
import { Link, withRouter } from "react-router-dom";

function Navigation(props) {
  return (
    <div class="background">
      <div className="topbar">
              <h2>Vitor Seabra</h2>
              <nav>
                      {/* <ul>
                      <li
                      >
                        <Link to="/">
                        </Link>
                      </li>
                      <li
                      >
                        <Link class="nav-link" to="/">
                          Porfolio
                        </Link>
                      </li>
                      <li
                      >
                        <Link class="nav-link" to="/resume">
                          Resume
                        </Link>
                      </li>
                      <li
                      >
                        <Link class="nav-link" to="/about">
                          About Me
                        </Link>
                      </li>
                    </ul> */}
              </nav>
      </div>
    </div>
  );
}

export default withRouter(Navigation);