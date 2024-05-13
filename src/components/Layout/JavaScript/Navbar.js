import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const lengthOfWatchList = useSelector(
    (state) => state.watchList.watchListValues.length
  );
  return (
    <nav
  className="navbar navbar-expand-lg"
  style={{
    position: "fixed",
    top: "0",
    width: "100%",
    fontFamily: "Arial, sans-serif", 
    backgroundColor: "#333", 
    color: "#fff", 
    padding: "10px 0",
    zIndex: "1",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  }}
>
  <div className="container-fluid">
    <NavLink
      className="navbar-brand isActive isPending m-2"
      to="/"
      style={{ fontWeight: "bold", color: "#fff", fontSize: "18px" }}
    >
      Movies App
    </NavLink>
    <button
      className="navbar-toggler "
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNavAltMarkup"
      aria-controls="navbarNavAltMarkup"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <NavLink
          className="nav-link isActive isPending"
          aria-current="page"
          to="/"
          style={{ color: "#fff", fontSize: "15px", marginTop: "5px" }}
        >
          HomePage
        </NavLink>
      </div>
    </div>
    <NavLink
      className="nav-link isActive isPending mx-2"
      to="/registration"
      style={{ color: "#fff", fontSize: "15px", marginTop: "5px" }}
    >
      Registration
    </NavLink>
    <NavLink
      className="nav-link isActive isPending mx-2"
      to="/watchList"
      style={{ color: "#fff", fontSize: "15px", marginTop: "5px" }}
    >
      WatchList
      <span
        className="badge rounded-pill badge bg-light text-dark"
        style={{
          position: "absolute",
          top: "5px",
          right: "7px",
          fontSize: "10px",
        }}
      >
        {lengthOfWatchList}
      </span>
    </NavLink>
  </div>
</nav>

  );
}
