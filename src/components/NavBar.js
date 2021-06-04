import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import { isAuthorized } from "../js/isAuthorized";

function NavBar({ history }) {
  console.log(history);
  return (
    <nav>
      <Link
        to="/"
        className={history.location.pathname === "/" ? "active-link" : ""}
      >
        NotProtectedUserPage
      </Link>
      <Link
        to={isAuthorized() ? "/protected" : "/unauthorized"}
        className={
          history.location.pathname === "/protected" ||
          history.location.pathname === "/unauthorized"
            ? "active-link"
            : ""
        }
      >
        ProtectedUserPage
      </Link>
      <div className="nav_btn">
        <button
          onClick={() => {
            localStorage.setItem("isAuthorized", true);
            history.push("/protected");
          }}
          className={isAuthorized() ? 'active-btn' : ''}
        >
          LogIn
        </button>
        <button
          onClick={() => {
            localStorage.setItem("isAuthorized", false);
            history.push("/");
          }}
          className={!isAuthorized() ? 'active-btn' : ''}
        >
          LogOut
        </button>
      </div>
    </nav>
  );
}

export default withRouter(NavBar);
