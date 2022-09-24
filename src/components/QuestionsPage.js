import { useState } from "react";
import { connect } from "react-redux";
import Question from "./Question";
import { Link } from "react-router-dom";

const ANSWERED = "ANSWERED";
const UNSANSWERED = "UNSANSWERED";
const ALL = "ALL";

function Questions(props) {
  // console.log("questions list props:", props);
  const sortedQuestions = Object.values(props.questions)
    .map((question) => {
      return {
        id: question.id,
        optionVotes: [...question.optionOne.votes, ...question.optionTwo.votes],
        timestamp: question.timestamp,
      };
    })
    .sort((a, b) => b.timestamp - a.timestamp);
  const questionsAnswered = sortedQuestions.filter((question) => {
    return [...question.optionVotes].some((user) => {
      return user === props.activeUser;
    });
  });

  const questionsNotAnswered = sortedQuestions.filter((question) => {
    return ![...question.optionVotes].some((user) => {
      return user === props.activeUser;
    });
  });

  const [filterType, setFilterType] = useState({
    filter: UNSANSWERED,
    questions: questionsNotAnswered,
  });
  function handleQuestionsSelectChange(e) {
    e.preventDefault();
    switch (e.target.value) {
      case UNSANSWERED:
        setFilterType({ filter: UNSANSWERED, questions: questionsNotAnswered });
        break;
      case ANSWERED:
        setFilterType({ filter: ANSWERED, questions: questionsAnswered });
        break;
      case ALL:
        setFilterType({ filter: ALL, questions: sortedQuestions });
        break;
      default:
        setFilterType(UNSANSWERED);
    }
  }
  return (
    <div className="question-container">
      <h1 className="title">QUESTIONS LIST </h1>
      <select value={filterType.filter} onChange={handleQuestionsSelectChange}>
        <option value={UNSANSWERED}>Unanswered questions</option>
        <option value={ANSWERED}>Answered questions</option>
        <option value={ALL}>All the questions</option>
      </select>
      <ul className="question-list">
        {Object.values(filterType.questions).map((question) => {
          return (
            <li key={question.id}>
              <Link to={`/questions/${question.id}`}>
                <Question id={question.id} />
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    activeUser: state.activeUser.activeUser,
    questions: state.questions,
  };
};
export default connect(mapStateToProps)(Questions);
