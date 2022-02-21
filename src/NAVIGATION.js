import React, {useEffect, useRef, useState} from "react";
import { Link, withRouter } from "react-router-dom";

function Navigation(props) {

  return (
      <div className="topbar">
              <h2>Vitor Seabra</h2>
              <nav>
                      <ul>
                      <li
                      >
                        <Link class="nav-link" to="/">
                          Me
                        </Link>
                      </li>
                      <li
                      >
                        <Link to="/">
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
                        <Link class="nav-link" to="/projects">
                          Projects
                        </Link>
                      </li>
                    </ul>
              </nav>
      </div>
  );
}

export default withRouter(Navigation);