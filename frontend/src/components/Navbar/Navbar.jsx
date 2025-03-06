import { NavLink, useNavigate } from "react-router-dom";
import "./Navbar.scss";
import Logo from "../Logo/Logo";

const Navbar = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("userDetails"));

  const logout = () => {
    localStorage.removeItem("userDetails");
    navigate("/login");
  };
  return (
    <div className="nav-stick">
      <nav className="navbar navbar-expand-lg">
        <NavLink
          className="navbar-brand"
          to={user?.userDetails?.isAdmin ? null : "/home"}
        >
          <Logo />
        </NavLink>
        {user?.userDetails?.isAdmin && (
          <NavLink className="navbar-brand" to="/admin">
            <button className="btn btn-dark">Go To Admin Panel</button>
          </NavLink>
        )}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto" style={{ marginRight: "50px" }}>
            {user ? (
              <div className="dropdown">
                <button
                  className="btn btn-dark dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                >
                  <i className="fa fa-user" style={{ paddingRight: "6px" }}></i>
                  <span>{user?.userDetails?.name}</span>
                </button>
                <ul className="dropdown-menu">
                  <li style={{ cursor: "pointer" }}>
                    <NavLink className="dropdown-item" to="/profile">
                      Profile
                    </NavLink>
                  </li>
                  <li style={{ cursor: "pointer" }}>
                    <a className="dropdown-item" onClick={logout}>
                      Logout
                    </a>
                  </li>
                </ul>
              </div>
            ) : (
              <>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/register">
                    Register
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/login">
                    Login
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
