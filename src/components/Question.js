import { connect } from "react-redux";
import Answer from "./Answer";

function Question(props) {
  // console.log("question props:", props);
  const activeUser = props.activeUser;
  const selectedQuestion = props.selectedQuestion;
  const questionAuthorData = props.questionAuthorData;
  const optionOne = selectedQuestion.optionOne;
  const optionTwo = selectedQuestion.optionTwo;
  const totalVotes = optionOne.votes.length + optionTwo.votes.length;
  const prettyDate = (time) => {
    var date = new Date(parseInt(time));
    return date.toLocaleTimeString(navigator.language, {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  };

  const answer = (activeUser) => {
    if (
      optionOne.votes.some((user) => {
        return user === activeUser;
      })
    ) {
      return "optionOne";
    }
    if (
      optionTwo.votes.some((user) => {
        return user === activeUser;
      })
    ) {
      return "optionTwo";
    }
    return false;
  };

  return (
    <div
      className={
        answer(activeUser)
          ? "question-list-item"
          : "question-list-item unanswered-question"
      }
    >
      <div className="question-author-info">
        <img
          alt={questionAuthorData.name}
          className="author-photo"
          src={questionAuthorData.avatarURL}
        />
        <p className="question-author-name">
          <strong>{questionAuthorData.name}</strong>
        </p>
      </div>

      {answer(activeUser) ? (
        ""
      ) : (
        <h2 className="align-center question-caption">Would you rather</h2>
      )}

      <Answer
        questionId={props.id}
        answerValue={"optionOne"}
        answerStatus={answer(activeUser)}
        answerData={optionOne}
        totalVotes={totalVotes}
      />

      <p className="align-center">or</p>

      <Answer
        questionId={props.id}
        answerValue={"optionTwo"}
        answerStatus={answer(activeUser)}
        answerData={optionTwo}
        totalVotes={totalVotes}
      />
      <p>
        Question submitted at:{" "}
        <strong>{prettyDate(selectedQuestion.timestamp)}</strong>
      </p>
    </div>
  );
}

const mapStateToProps = (state, props) => {
  const id = props.id;
  const { activeUser } = state.activeUser;
  const selectedQuestion = state.questions[id];
  const questionAuthorData = state.users[selectedQuestion.author];

  return { id, activeUser, selectedQuestion, questionAuthorData };
};
export default connect(mapStateToProps)(Question);
