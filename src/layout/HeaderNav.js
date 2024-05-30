import { NavLink } from "react-router-dom";

export default function HeaderNav() {
  return (
    <header>
      <nav className="menu-navigation">
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/main">Main</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
