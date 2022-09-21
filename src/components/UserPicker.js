import { connect } from "react-redux";
import { setActiveUser } from "../actions/activeUser";

function UserPicker(props) {
  // console.log("userpicker props:", props);
  const filteredUsers = props.users
    ? Object.values(props.users).map((user) => {
        return [user.id, user.name];
      })
    : [];
  const activeUserData = props.users ? props.users[props.activeUser] : {};

  let selectedUserID = props.activeUser;
  const updateSelected = (e) => {
    e.preventDefault();
    selectedUserID = e.target.value;
  };
  const chooseUserClick = (e) => {
    e.preventDefault();
    props.dispatch(setActiveUser(selectedUserID));
  };
  return (
    <div className="user-picker">
      <p>
        <strong>
          {activeUserData
            ? `Current user choosen: ${activeUserData.name}`
            : "No user selected"}
        </strong>
      </p>
      <h4>PICK YOUR USER</h4>

      <select defaultValue="none" onChange={updateSelected}>
        <option disabled value="none">
          Choose a valid user
        </option>
        {filteredUsers.map(([id, name]) => {
          return (
            <option value={id} key={id}>
              {name}
            </option>
          );
        })}
      </select>
      <button
        className="user-picker-btn"
        onClick={chooseUserClick}
        style={{ fontWeight: "bold" }}
      >
        CHOOSE USER
      </button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { ...state.activeUser, users: state.users };
};
export default connect(mapStateToProps)(UserPicker);
