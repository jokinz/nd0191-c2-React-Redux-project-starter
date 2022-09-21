import { connect } from "react-redux";

function QuestionDetails(props) {
  console.log("question details props:", props);
  return <div>Question details: {props.questionID}</div>;
}

const mapStateToProps = (state) => {
  return { ...state };
};

export default connect(mapStateToProps)(QuestionDetails);
