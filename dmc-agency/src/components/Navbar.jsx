import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="dmc-navbar">
      <div className="dmc-logo">
        <Link to="/" style={{ textDecoration: "none", color: "red" }}>
          Devil May Cry Agency
        </Link>
      </div>

      <ul className="dmc-menu">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}
