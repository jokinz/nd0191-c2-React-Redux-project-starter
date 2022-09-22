import { useState } from "react";
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const question = { optionOneText, optionTwoText, author };
    // TODO add correct parameters to handleAddQUestion
    props.dispatch(handleAddQuestion(question));

    // navigate("/");
  };

  return (
    <div>
      <h1 className="title">New question </h1>
      <h2>Would you rather</h2>
      <input
        value={optionOneText}
        onChange={handleOptionOneChange}
        placeholder="Option 1"
      ></input>
      or
      <input
        value={optionTwoText}
        onChange={handleOptionTwoChange}
        placeholder="Option 2"
      ></input>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return state.activeUser;
};
export default connect(mapStateToProps)(NewQuestion);
