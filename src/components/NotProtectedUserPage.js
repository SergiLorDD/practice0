import { connect } from "react-redux";

import { getUser } from "../redux/selectors";
import ToDoList from "./ToDoList";

function NotProtectedUserPage({ user }) {
  console.log("user", user);
  return <>
  <div className="user-info">
    <div>
      <span>Name:</span>
      <span className="user">{user.name}</span>
    </div>
    <div>
      <span>Surname:</span>
      <span className="user">{user.surname}</span>
    </div>
  </div>
  <ToDoList/>
  </>
}

const mapStateToProps = (state) => ({
  user: getUser(state),
});

export default connect(mapStateToProps, null)(NotProtectedUserPage);