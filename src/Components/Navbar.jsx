import React from "react";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuOpen: false,
    };
  }

  toggleMenu = () => {
    this.setState({
      isMenuOpen: !this.state.isMenuOpen,
    });
  };

  closeMenu = () => {
    this.setState({
      isMenuOpen: false,
    });
  };

  render() {
    const { isMenuOpen } = this.state;
    const navdata = [
      {
        to: "/",
        name: "Home",
      },
      {
        to: "/product",
        name: "Products",
      },
      {
        to: "/contact",
        name: "Contact",
      },
      {
        to: "/signin",
        name: "SignIn",
      },
      {
        to: "/signup",
        name: "SignUp",
      },
      {
        to: "/cart",
        name: "Cart",
      },
    ];

    return (
      <nav className="nav">
        <div className="nav-container flex justify-between items-center py-2 px-4">
          <div className="logo">
            <Link to="/" className="text-xl font-semibold">
              Shopstore
            </Link>
          </div>
          <button
            className="menu-toggle md:hidden"
            onClick={this.toggleMenu}
          >
            {isMenuOpen ? ( // Conditionally render based on isMenuOpen state
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M6 18L18 6M6 6l12 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />
              </svg>
            )}
          </button>
          <ul
            className={`nav-links ${isMenuOpen ? "active" : ""}`}
            onClick={this.closeMenu}
          >
            {navdata.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="nav-link hover:text-gray-200 font-semibold">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
