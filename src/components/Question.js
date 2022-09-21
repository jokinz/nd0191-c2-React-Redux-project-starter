import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { handleAddQuestion } from "../actions/questions";

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

  const handleQuestionClick = (e) => {
    // e.preventDefault();
    props.dispatch(handleAddQuestion(selectedQuestion.id));
    // console.log(selectedQuestion.id);
  };
  return (
    <Link to={`/question/${selectedQuestion.id}`}>
      <div
        onClick={handleQuestionClick}
        className={
          anweredQuestion
            ? "question-list-item"
            : "question-list-item unansweredQuestion"
        }
      >
        <p className="question-item-author">
          Question asked by <strong>{questionAuthorData.name}</strong>
        </p>
        <h3>Would you rather</h3>
        <div
          className={
            optionOne.votes.some((answer) => {
              return answer === activeUser;
            })
              ? "answer-selected"
              : "answer-not-selected"
          }
        >
          {optionOne.text}
          <br></br>
          Voted by <strong>{optionOne.votes.length}</strong> people
        </div>
        <p>or</p>
        <div
          className={
            optionTwo.votes.some((answer) => {
              return answer === activeUser;
            })
              ? "answer-selected"
              : "answer-not-selected"
          }
        >
          {optionTwo.text}
          <br></br>
          Voted by <strong>{optionTwo.votes.length}</strong> people
        </div>
      </div>
    </Link>
  );
}

const mapStateToProps = (state) => {
  // console.log("Ques comp state: ", state);
  return { state };
};
export default connect(mapStateToProps)(Question);
