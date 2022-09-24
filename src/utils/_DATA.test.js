var _DATA = require("./_DATA");

describe("_saveQuestion", () => {
  it("will return the corresponding values", async () => {
    var question = {
      optionOneText: "optionOneText",
      optionTwoText: "optionTwoText",
      author: "author",
    };
    var result = await _DATA._saveQuestion(question);
    expect(result.optionOne.text).toEqual("optionOneText");
    expect(result.optionTwo.text).toEqual("optionTwoText");
    expect(result.author).toEqual("author");
  });
  it("will return an error for passing wrong data", async () => {
    await expect(_DATA._saveQuestion("wrong data")).rejects.toEqual(
      "Please provide optionOneText, optionTwoText, and author"
    );
  });
});
describe("_saveQuestionAnswer", () => {
  it("will return true if the values passed are correct", async () => {
    var answer = {
      authedUser: "sarahedo",
      qid: "8xf0y6ziyjabvozdd253nd",
      answer: "optionTwo",
    };
    var result = await _DATA._saveQuestionAnswer(answer);
    expect(result).toBe(true);
  });
  it("will return an error for passing wrong data", async () => {
    await expect(_DATA._saveQuestionAnswer("wrong data")).rejects.toEqual(
      "Please provide authedUser, qid, and answer"
    );
  });
});
