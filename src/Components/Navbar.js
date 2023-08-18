import React from "react";


const Navbar = (props) => {
  return (
    <nav
      // To enable Dark Mode on Navbar,
      // 1. Cover the className by {} braces.
      // 2. Use Back ticks ` ` instead of Double Quotes " ", so that we can use TEMPLATE LITERAL

      className={`navbar navbar-expand-lg bg-${props.theme} text-${props.theme ==='light' ? 'dark' : 'light'}`}
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <a className={`navbar-brand text-${props.theme ==='light' ? 'dark' : 'light'}`} href="/">
          Text Utils
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className={`nav-link active text-${props.theme ==='light' ? 'dark' : 'light'}`}  aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className={`nav-link text-${props.theme ==='light' ? 'dark' : 'light'}`} href="/">
                About Us
              </a>
            </li>
          </ul>
          {/* <form className="d-flex" role="search">
                        <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                        />
                        <button className="btn btn-outline-success" type="submit">
                            Search
                        </button>
                    </form> */}

          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="darkModeSwitch"
              onClick={props.toggleTheme}
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              Enable Dark Mode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

// Prop Types on Node JS
// Navbar.propType={
//     title:  PropTypes.string.isRequired,
//     aboutSec: PropTypes.string.isRequired,
// };

// // It will set the value of props to default given values in case no value was passed/exported.
// Navbar.defaultProps={
//     title: "Text Utils Default",
//     aboutSec: "About ",
// };
