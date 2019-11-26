import React from "react";

class NavBar extends React.Component {
    render () {
        return <nav class="navbar navbar-expand-sm navbar-light bg-light">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="#">CV<span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" href="#">Projects</a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" href="#">Hobbies</a>
            </li>
          </ul>
        </div>
      </nav>;
    }
}

export default NavBar;