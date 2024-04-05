import React, { useState } from "react";
const InitialQuestions = [
  {
    question: "What is capital of india?",
    option: ["Delhi", "Mumbai", "MP"],
    correct: "Delhi",
  },
  {
    question: "National Bird?",
    option: ["Peacock", "Parrot", "Sparrow"],
    correct: "Peacock",
  },
];
const Question = ({ questionTitle, choices, answer, onAnswer }) => {
  const [selectedAnswer, setAnswer] = useState();
  console.log(selectedAnswer);
  return (
    <>
      <div>
        <h1>{questionTitle}</h1>
        <div>
          {choices.map((choice) => {
            return (
              <>
                <input
                  type="radio"
                  onChange={(e) => setAnswer(e.target.value)}
                  name="feedback"
                  value={choice}
                />
                {choice}
              </>
            );
          })}
        </div>
        <div>
          <button onAnswer={() => answerHandler()}>Submit</button>
        </div>
      </div>
    </>
  );
};

const Quize2 = () => {
  const [questions, setquestions] = useState(InitialQuestions);
  return (
    <>
      <div>Quize2</div>
      {questions.map((question, index) => {
        console.log(question.question);
        return (
          <div key={index}>
            <Question
              questionTitle={question.question}
              choices={question.option}
              answer={question.correct}
            ></Question>
          </div>
        );
      })}
    </>
  );
};

export default Quize2;
