import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { handleAddQuestion } from "../actions/questions";

function NewQuestion(props) {
  const navigate = useNavigate();

  // console.log("new question props:", props);
  const author = props.activeUser;
  const [optionOneText, setOptionOneText] = useState("");
  const [optionTwoText, setOptionTwoText] = useState("");
  const handleOptionOneChange = (e) => {
    setOptionOneText(e.target.value);
  };
  const handleOptionTwoChange = (e) => {
    setOptionTwoText(e.target.value);
  };

  useEffect(() => {
    setOptionOneText("");
    setOptionTwoText("");
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (optionOneText !== "" && optionTwoText !== "") {
      const question = { optionOneText, optionTwoText, author };
      props.dispatch(handleAddQuestion(question)).then(() => {
        navigate("/");
        setOptionOneText("");
        setOptionTwoText("");
      });
    }
  };

  return (
    <div className="new-question-container">
      <h1 className="title">New question </h1>
      <h2 className="new-question-would-you align-center">Would you rather</h2>
      <input
        data-testid="option-one-input"
        className="new-question-input"
        value={optionOneText}
        onChange={handleOptionOneChange}
        placeholder="Option 1"
      ></input>
      <span>or</span>
      <input
        data-testid="option-two-input"
        className="new-question-input"
        value={optionTwoText}
        onChange={handleOptionTwoChange}
        placeholder="Option 2"
      ></input>
      <button
        className="new-question-submit-btn submit-btn"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return state.activeUser;
};
export default connect(mapStateToProps)(NewQuestion);
