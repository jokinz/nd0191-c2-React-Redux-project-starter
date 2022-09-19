import { useEffect } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import Nav from "./Nav";
import Questions from "./Questions";
import Question from "./Question";
import UserPicker from "./UserPicker";
const App = (props) => {
  useEffect(() => {
    props.dispatch(handleInitialData());
  }, []);
  return (
    <div className="App">
      <Nav />
      {/* <UserPicker /> */}
      <Questions />
      {/* <Question /> */}
    </div>
  );
};

export default connect()(App);
