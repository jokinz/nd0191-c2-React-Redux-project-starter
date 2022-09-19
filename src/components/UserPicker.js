import { connect } from "react-redux";
function UserPicker(props) {
  // console.log("userpicker props:", props);
  const filteredUsers = Object.values(props.users).map((user) => {
    return [user.id, user.name];
  });
  // console.log("userpicker filtered:", filteredUsers);

  // console.log("filtered userd: ", filteredUsers);
  return (
    <div className="center-objects">
      <p>PICK YOUR USER</p>

      <select>
        {filteredUsers.map(([id, name]) => {
          return <option key={id}>{name}</option>;
        })}
      </select>
      <button style={{ fontWeight: "bold" }}>CHOOSE USER</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { users: state.users };
};
export default connect(mapStateToProps, null)(UserPicker);
