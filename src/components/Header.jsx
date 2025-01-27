import { useState } from "react";
import Home from "./Home";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className=".container1">
        <header className="nav-header">
          <div className="nav">
            <p id="logo" className="mt-3 text-base">
              MOUNITH
            </p>
            <button
              className={`hamburger ${isOpen ? "open" : ""}`} // Add the 'open' class when the menu is open
              onClick={toggleMenu}
            >
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </button>
            <nav
              className={`menu ${
                isOpen ? "open" : ""
              } list-none flex flex-col md:flex-row items-center gap-3`}
            >
              <a href="#Home" className="container">
                <li className="p1">Home</li>
                <li className="p2">Home</li>
              </a>
              <a href="#Education" className="container">
                <li className="p1">Education</li>
                <li className="p2">Education</li>
              </a>
              <a href="#Projects" className="container">
                <li className="p1">Projects</li>
                <li className="p2">Projects</li>
              </a>
              <a href="#Contact" className="container">
                <li className="p1">Contact</li>
                <li className="p2">Contact</li>
              </a>
            </nav>
          </div>
        </header>
      </div>
      <Home />
    </>
  );
}
// https://www.altcademy.com/blog/how-to-add-dropdown-on-button-click-in-reactjs/
export default Header;
