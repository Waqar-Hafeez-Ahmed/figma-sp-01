import "./NavBar.css";
import logo from "../public/svg/logo image.svg";

const NavBar = () => {
  return (
    <nav className="nav">
      <a href="/" className="site-logo">
        <img className="logo" src={logo} alt="logo" />
      </a>
      <ul>
        <li>
          <a href="/"> Find Talent</a>
        </li>
        <li>
          <a href="/"> Find Job/Project</a>
        </li>
        <li>
          <a href="/"> We are jobless</a>
        </li>
        <li>
          <a href="/"> Refer Friends</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
