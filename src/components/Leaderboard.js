import { connect } from "react-redux";

function Leaderboard(props) {
  // console.log("leaderboard props:", props);
  const questions = props.questions;
  console.log(
    "leaderboard questions:",
    Object.keys(questions).length,
    questions
  );
  // const users = props.users;
  // console.log("leaderboard users:", users);
  const filteredUsers = Object.values(props.users).map((user) => {
    return {
      id: user.id,
      name: user.name,
      answers: Object.values(user.answers).length,
      questions: Object.values(user.questions).length,
      total:
        Object.values(user.answers).length +
        Object.values(user.questions).length,
    };
  });
  // console.log("leaderboard filteredUsers:", filteredUsers);
  const orderedUsers = filteredUsers.sort((a, b) => b.total - a.total);
  // console.log("leaderboard orderedUsers:", orderedUsers);

  return (
    <div>
      <h1 className="title">Leaderboard</h1>
      <table>
        {/* <thead>
          <tr>
            <th>Tacos</th>
            <th scope="col">
              <abbr title="Quantity">Qty</abbr>
            </th>
            <th scope="col">Price</th>
          </tr>
        </thead> */}
        <tbody>
          {filteredUsers.map((user) => {
            return (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>Answers: {user.answers}</td>
                <td>Questions: {user.questions}</td>
                <td>
                  Total: <strong>{user.total}</strong>
                </td>
              </tr>
            );
          })}
        </tbody>
        <tfoot></tfoot>
      </table>
    </div>
  );
}

const mapStateToProps = (state) => {
  return state;
};
export default connect(mapStateToProps)(Leaderboard);
