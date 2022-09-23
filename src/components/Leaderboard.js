import { connect } from "react-redux";

function Leaderboard(props) {
  // console.log("leaderboard props:", props);
  // console.log(
  //   "leaderboard questions:",
  //   Object.keys(questions).length,
  //   questions
  // );
  // const users = props.users;
  // console.log("leaderboard users:", users);
  const filteredUsers = Object.values(props.users)
    .map((user) => {
      return {
        id: user.id,
        name: user.name,
        avatarURL: user.avatarURL,
        answers: Object.values(user.answers).length,
        questions: Object.values(user.questions).length,
        total:
          Object.values(user.answers).length +
          Object.values(user.questions).length,
      };
    })
    .sort((a, b) => b.total - a.total);
  // console.log("leaderboard filteredUsers:", filteredUsers);
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
        <tbody className="leaderboard-table">
          {filteredUsers.map((user) => {
            return (
              <tr key={user.id}>
                <td>
                  <img
                    alt={user.name}
                    className="author-photo"
                    src={user.avatarURL}
                  />
                  <span>{user.name}</span>
                </td>
                <td>
                  <span>Answers: {user.answers}</span>
                </td>
                <td>
                  <span>Questions: {user.questions}</span>
                </td>
                <td>
                  <span>
                    Total: <strong>{user.total}</strong>
                  </span>
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
