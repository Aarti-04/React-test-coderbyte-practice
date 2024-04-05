import { useMemo, useState } from "react";

const questions = [
  {
    question: "Capital of India?",
    options: ["Delhi", "Mumbai", "Gujarat"],
    correct: "Delhi",
  },
  {
    question: "Boiling point of water?",
    choices: ["100", "0", "50"],
    answer: "100",
  },
];
const Questions = ({ question, choice, answer, onAnswer }) => {
  return (
    <>
      <div>{question}</div>
      <div>
        {choice.map((option, index) => {
          return (
            <button
              className="btn btn-success m-2"
              onClick={() => onAnswer(option)}
              key={index}
            >
              {option}
            </button>
          );
        })}
      </div>
    </>
  );
};
const Quize = () => {
  const [feedback, setFeedback] = useState();
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  let nextQuestion = 0;
  const handleAnswer = (answer) => {
    if (answer == questions[currentQuestion].correct) {
      //   console.log(answer);
      if (questions.length > nextQuestion) {
        setCurrentQuestion((prev) => prev + 1);
      } else {
        setFinished(true);
        console.log("in finished");
      }
      //   const nextQuestion = currentQuestion + 1;
      //   if (nextQuestion < questions.length) {
      //   } else {
      //     setFinished(true);
      //   }
      setScore((prev) => prev + 1);
    }
  };

  console.log(currentQuestion);
  return (
    <>
      <div>
        {!finished && (
          <Questions
            choice={questions[currentQuestion].options}
            question={questions[currentQuestion].question}
            answer={questions[currentQuestion].answer}
            onAnswer={handleAnswer}
          ></Questions>
        )}
        {finished && <p>Your final score is {score}</p>}
      </div>
    </>
  );
};
export default Quize;
