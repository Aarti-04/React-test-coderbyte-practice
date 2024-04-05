import React, { useState } from "react";

// interface Props {
//   question: string;
//   choices: string[];
//   answer: string;
//   onAnswer: (answer: string) => void;
// }

const Question = ({ question, choices, answer, onAnswer }) => {
  return (
    <div
      className="d-flex 
                        justify-content-center 
                        align-center 
                        text-center 
                        flex-column"
    >
      <h2 className="">{question}</h2>
      <div className="">
        {choices.map((choice) => (
          <button
            className="btn btn-success m-2"
            onClick={() => onAnswer(choice)}
          >
            {choice}
          </button>
        ))}
      </div>
    </div>
  );
};

const questions = [
  {
    question: "What is the capital of France ?",
    choices: ["Paris", "London", "New york"],
    answer: "Paris",
  },
  {
    question: "What is the Boiling point of water?",
    choices: ["100", "0", "50"],
    answer: "100",
  },
  {
    question: "What is the capital of India ?",
    choices: ["Delhi", "Surat", "new york"],
    answer: "Delhi",
  },
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  const handleAnswer = (answer) => {
    if (answer === questions[currentQuestion].answer) {
      setScore((prevScore) => prevScore + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setQuizFinished(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setQuizFinished(false);
  };

  return (
    <div>
      <h1 className="text-center">Quiz App</h1>
      {!quizFinished ? (
        <div>
          <Question
            question={questions[currentQuestion].question}
            choices={questions[currentQuestion].choices}
            answer={questions[currentQuestion].answer}
            onAnswer={handleAnswer}
          />
          <p className="text-center">Score: {score}</p>
        </div>
      ) : (
        <div className="text-center">
          <h2>Quiz finished!</h2>
          <p>Your final score is: {score}</p>
          <button onClick={restartQuiz}>Restart Quiz</button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
