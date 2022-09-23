import { connect } from "react-redux";
import { handleAddAnswer } from "../actions/questions";

const Answer = (props) => {
  //   console.log("answer props:", props);
  // console.log("answer status:", props.answerStatus);
  const percentage = (option) => {
    return Math.round((option.votes.length / props.totalVotes) * 100);
  };

  const handleAnswerClick = (e) => {
    e.preventDefault();
    props.dispatch(
      handleAddAnswer({
        qid: props.questionId,
        authedUser: props.activeUser,
        answer: props.answerValue,
      })
    );
    // console.log(props.answerValue);
  };
  return (
    <div
      className={
        props.answerStatus === props.answerValue
          ? "answer answer-selected"
          : "answer answer-not-selected"
      }
    >
      <p className="answer-text">{props.answerData.text}</p>
      {props.answerStatus ? (
        ""
      ) : (
        <button className="submit-btn" onClick={handleAnswerClick}>
          Choose answer
        </button>
      )}

      {props.answerStatus ? (
        <p>
          Voted by{" "}
          <strong>
            {props.answerData.votes.length}({percentage(props.answerData)}%)
          </strong>
          people
        </p>
      ) : (
        ""
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  const { activeUser } = state.activeUser;
  //   const users = state.users;
  //   const questions = state.questions;
  return {
    activeUser,
  };
};
export default connect(mapStateToProps)(Answer);
