import { useState } from "react";
import { connect } from "react-redux";

import { getUser } from "../redux/selectors";
import { setUser } from "../redux/actions";
import ToDoListController from "./ToDoListController";

function ProtectedUserPage({ user, setUser: setUserData }) {

  const [name, setName] = useState(user.name);
  const [surname, setSurname] = useState(user.surname);

  const onChangeInputName = (e) => {
    setName(e.target.value);
  }

  const onChangeInputSurname = (e) => {
    setSurname(e.target.value);
  }

  return <>
  <div className='user-info'>
    <div>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" onChange={onChangeInputName} className="input"/>
    </div>
    <div>
      <label htmlFor="surname">Surname:</label>
      <input type="text" id="surname" onChange={onChangeInputSurname} className="input"/>
    </div>
    <div>
      <span>Name:</span>
      <span className="user">{user.name}</span>
    </div>
    <div>
      <span>Surname:</span>
      <span className="user">{user.surname}</span>
    </div>
    <button onClick={() => {
      setUserData({ name, surname });
    }}>Set User Data</button>
  </div>
  <ToDoListController/>
  </>
}

const mapStateToProps = (state) => ({
  user: getUser(state),
});

const mapDispatchToProps = { setUser };

export default connect(mapStateToProps, mapDispatchToProps)(ProtectedUserPage);