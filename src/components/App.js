import { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import Nav from "./Nav";
import QuestionsPage from "./QuestionsPage";
import UserPicker from "./UserPicker";
import LoadingBar from "react-redux-loading-bar";
import { Routes, Route } from "react-router-dom";
import NewQuestion from "./NewQuestion";

const App = (props) => {
  // console.log("app props", props);
  useEffect(() => {
    props.dispatch(handleInitialData());
  }, []);
  return (
    <Fragment>
      <LoadingBar />
      <div className="App">
        <Nav />
        {props.loading === true ? null : (
          <Routes>
            <Route
              path="/"
              exact
              element={props.activeUser ? <QuestionsPage /> : <UserPicker />}
            />
            <Route path="/select-user" element={<UserPicker />} />
            <Route
              path="/questions"
              element={props.activeUser ? <QuestionsPage /> : <UserPicker />}
            />
            <Route
              path="/add"
              element={props.activeUser ? <NewQuestion /> : <UserPicker />}
            />
            {/* <Route path="/new" element={<NewTweet />} /> */}
          </Routes>
        )}
      </div>

      {/* <div className="container">
        <Nav />
        {props.loading === true ? null : (
          <Routes>
            <Route path="/" exact element={<Dashboard />} />
            <Route path="/tweet/:id" element={<TweetPage />} />
            <Route path="/new" element={<NewTweet />} />
          </Routes>
        )}
      </div> */}
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  const { activeUser } = state.activeUser;
  return {
    activeUser,
    loading: { ...state.activeUser } === null,
  };
};

export default connect(mapStateToProps)(App);
