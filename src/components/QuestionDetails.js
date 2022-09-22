import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import Question from "./Question";

function QuestionDetails(props) {
  console.log("question details props:", props);
  const { id } = useParams();
  console.log("question details activeUser:", props.activeUser);
  const [questionData] = Object.values(props.questions).filter((question) => {
    return question.id === id;
  });
  console.log("questionData:", questionData);
  return (
    <div>
      <h1 className="title">Question Details </h1>
      <Question id={id} />
    </div>
  );
}

const mapStateToProps = (state) => {
  return { ...state };
};

export default connect(mapStateToProps)(QuestionDetails);
