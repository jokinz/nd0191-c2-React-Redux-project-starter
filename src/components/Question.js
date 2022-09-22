import { connect } from "react-redux";

function Question(props) {
  // console.log("question props:", props);
  const { activeUser } = props.state.activeUser;
  const selectedQuestion = props.state.questions[props.id];
  const questionAuthorData = props.state.users[selectedQuestion.author];
  const optionOne = selectedQuestion.optionOne;
  const optionTwo = selectedQuestion.optionTwo;
  const anweredQuestion =
    optionOne.votes.some((user) => {
      return user === activeUser;
    }) ||
    optionTwo.votes.some((user) => {
      return user === activeUser;
    });

  return (
    <div
      className={
        anweredQuestion
          ? "question-list-item"
          : "question-list-item unansweredQuestion"
      }
    >
      <div className="question-author-info">
        <img
          className="question-author-photo"
          src={questionAuthorData.avatarURL}
        />
        <p className="question-author-name">
          <strong>{questionAuthorData.name}</strong>
        </p>
      </div>
      <h2 className="align-center question-caption">Would you rather</h2>
      <div
        className={
          optionOne.votes.some((answer) => {
            return answer === activeUser;
          })
            ? "answer answer-selected"
            : "answer answer-not-selected"
        }
      >
        <p className="answer-text">{optionOne.text}</p>
        <p>
          Voted by <strong>{optionOne.votes.length}</strong> people
        </p>
      </div>
      <p className="align-center">or</p>
      <div
        className={
          optionTwo.votes.some((answer) => {
            return answer === activeUser;
          })
            ? "answer answer-selected"
            : "answer answer-not-selected"
        }
      >
        <p className="answer-text">{optionTwo.text}</p>
        <p>
          Voted by <strong>{optionTwo.votes.length}</strong> people
        </p>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  // console.log("Ques comp state: ", state);
  return { state };
};
export default connect(mapStateToProps)(Question);
