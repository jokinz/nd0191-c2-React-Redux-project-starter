import { connect } from "react-redux";
import { setActiveUser } from "../actions/activeUser";

import { Link } from "react-router-dom";

function Nav(props) {
  // console.log("nav props:", props);
  const activeUserData = Object.values(props.users).find((u) => {
    return u.id === props.user.activeUser;
  });
  const activeUserName = activeUserData ? activeUserData.name : "none";
  // console.log("activeUserName:", activeUserName);
  const logoutClick = (e) => {
    e.preventDefault();
    props.dispatch(setActiveUser(""));
  };
  return (
    <nav className="nav-container">
      <ul className="nav-menu-list">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/questions">Questions</Link>
        </li>
        <li>
          <Link to="/leaderboard">Leaderboard</Link>
        </li>
        <li>
          <Link to="/add">Ask a question</Link>
        </li>
      </ul>
      <div className="nav-user-info">
        <div>
          <span>
            Current user: <strong>{activeUserName}</strong>
          </span>
          {activeUserName !== "none" ? (
            <img
              alt={activeUserData.name}
              className="author-photo"
              src={activeUserData.avatarURL}
            />
          ) : (
            ""
          )}
        </div>

        {activeUserName !== "none" && (
          <Link onClick={logoutClick} to="/">
            Logout
          </Link>
        )}
      </div>
    </nav>
  );
}

const mapStateToProps = (state) => {
  const user = state.activeUser;
  const users = state.users;
  return { user, users };
};

export default connect(mapStateToProps)(Nav);
