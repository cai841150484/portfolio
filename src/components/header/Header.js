import {Link} from "react-router-dom";
import Headroom from "react-headroom";
import "./Header.scss";
import {greeting} from "../../portfolio";

function Header() {
  return (
    <Headroom>
      <header className="header">
        <Link to="/" className="logo">
          <span className="grey-color"> &lt;</span>
          <span className="logo-name">{greeting.username}</span>
          <span className="grey-color">/&gt;</span>
        </Link>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon"
          htmlFor="menu-btn"
          style={{color: "white"}}
        >
          <span className="navicon"></span>
        </label>
        <ul className="menu">
          <li>
            <Link to="/projects">Projects</Link>
          </li>
        </ul>
      </header>
    </Headroom>
  );
}
export default Header;
