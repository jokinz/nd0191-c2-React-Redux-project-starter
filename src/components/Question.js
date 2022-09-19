import { connect } from "react-redux";

function Question(props) {
  // console.log("props:", props);
  const selectedQuestion = Object.values(props.state.questions).find(
    (question) => {
      return question.id === props.id;
    }
  );
  console.log("selected question:", selectedQuestion);
  // const questionData = props.state.questions
  return (
    <div>
      <h3>Would you rather</h3>
      {selectedQuestion.optionOne.text}
      <p>or</p>
      {selectedQuestion.optionTwo.text}
    </div>
  );
}

const mapStateToProps = (state) => {
  // console.log("Ques comp state: ", state);
  return { state };
};
export default connect(mapStateToProps)(Question);
