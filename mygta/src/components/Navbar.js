import { NavLink } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <>
      <div>
        <nav>
          <div>
            <img className="rockstar" src="/img/rockstarlogo1.svg" alt="" />
            <img className="line" src="/img/line.png" alt="" />
            <img className="logo" src="/img/download.svg" alt="logo" />
          </div>
          <ul>
            <li>
              <NavLink to="/" className="navss">
                Overview
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="navss">
                GTA Online
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="navss">
                GTA+
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="navss">
                Guides
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="navss">
                Support
              </NavLink>
            </li>
          </ul>
          <button className="Btn11">BUY NOW</button>
        </nav>
      </div>
    </>
  );
};
export default Navbar;
