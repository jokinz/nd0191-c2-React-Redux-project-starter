import { connect } from "react-redux";
import Question from "./Question";

// function Questions(props) {
//   // console.log("props:", props);
//   const filteredQuestions = Object.values(props.questions).map((question) => {
//     return {
//       id: question.id,
//       optionOne: question.optionOne,
//       optionTwo: question.optionTwo,
//     };
//   });
//   // console.log("filteredQuestions", filteredQuestions);
//   return (
//     <div>
//       QUESTIONS:
//       <ul>
//         {Object.values(filteredQuestions).map((question) => {
//           return (
//             <li key={question.id}>
//               {question.optionOne.text}
//               {question.optionTwo.text}
//             </li>
//           );
//         })}
//       </ul>
//       {/* {JSON.stringify(props)} */}
//     </div>
//   );
// }

// const mapStateToProps = (state) => {
//   // console.log("mapStateToProps state:", state);
//   // console.log("mapStateToProps questions:", state.questions);
//   return { questions: state.questions };
// };
// export default connect(mapStateToProps)(Questions);

function Questions(props) {
  // console.log("props:", props);
  // console.log("questionIDs:", props.questions);
  return (
    <div>
      QUESTION IDs:
      <ul>
        {Object.values(props.questions).map((question) => {
          return (
            <li key={question.id}>
              <Question id={question.id} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

const mapStateToProps = (state) => {
  const questionIDs = Object.values(state.questions).map((question) => {
    return {
      id: question.id,
    };
  });
  // console.log("questionIDs:", questionIDs);
  // console.log("mapStateToProps state:", state);
  // console.log("mapStateToProps questions:", state.questions);
  return { questions: questionIDs };
};
export default connect(mapStateToProps)(Questions);
