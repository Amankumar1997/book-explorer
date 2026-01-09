import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink
        to="/"
        className={({ isActive }) => isActive ? "nav-link active" : "nav-link"
        }
      >
        Search
      </NavLink>

      <NavLink
        to="/favorites"
        className={({ isActive }) =>
          isActive ? "nav-link active" : "nav-link"
        }
      >
        Favorites
      </NavLink>
    </nav>
  );
};

export default Navbar;
