import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import quizData from "./quiz.json";
import { useLocation } from "react-router-dom";
import "./Quiz.css";

const Quiz = () => {
  const { quizKey } = useParams();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const location = useLocation();
  const backTo = location.state?.backTo || "/";
  const pageName = location.state?.pageName || "Home";
  const [incorrectAnswers, setIncorrectAnswers] = useState([]);

  // const questions = quizData[uniqueKey] || [];
  const questions = quizData[quizKey] || [];

  const handleOptionSelect = (index) => {
    setSelectedOption(index);
  };

  const handleSubmitAnswer = () => {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedOption !== currentQuestion.answer) {
      setIncorrectAnswers((prev) => [
        ...prev,
        {
          question: currentQuestion.question,
          userAnswer: currentQuestion.options[selectedOption],
          correctAnswer: currentQuestion.options[currentQuestion.answer],
        },
      ]);
    } else {
      setScore(score + 1);
    }
    setSelectedOption(null);
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setIsCompleted(true);
    }
  };

  if (isCompleted) {
    return (
      <div className="quiz-container">
        <h3>Quiz Complete!</h3>
        <p>
          Your score is {score} out of {questions.length}
        </p>

        {incorrectAnswers.length > 0 && (
          <div className="incorrect-answers">
            <h4>Review of Incorrect Answers:</h4>
            {incorrectAnswers.map((item, index) => (
              <div key={index} className="incorrect-answer-item">
                <p>
                  <strong>Question:</strong> {item.question}
                </p>
                <p>
                  <span style={{ color: "red" }}>Your answer:</span>{" "}
                  {item.userAnswer}
                </p>
                <p>
                  <span style={{ color: "green" }}>Correct answer:</span>{" "}
                  {item.correctAnswer}
                </p>
              </div>
            ))}
          </div>
        )}

        <div className="quiz-navigation-buttons">
          <Link
            to="/"
            style={{
              display: "inline-block",
              padding: "10px 20px",
              fontSize: "16px",
              fontWeight: "bold",
              color: "#ffffff",
              backgroundColor: "#2196f3",
              border: "none",
              borderRadius: "8px",
              textDecoration: "none",
              cursor: "pointer",
              marginRight: "10px",
            }}
          >
            Return to Home
          </Link>

          <Link
            to={backTo}
            style={{
              display: "inline-block",
              padding: "10px 20px",
              fontSize: "16px",
              fontWeight: "bold",
              color: "#ffffff",
              backgroundColor: "#4caf50",
              border: "none",
              borderRadius: "8px",
              textDecoration: "none",
              cursor: "pointer",
            }}
          >
            Back to {pageName}
          </Link>
        </div>
      </div>
    );
  }

  if (questions.length === 0) {
    return <div className="quiz-container">No questions available.</div>;
  }

  const { question, options } = questions[currentQuestionIndex];

  return (
    <div className="quiz-container">
      <h4 className="quiz-question">{question}</h4>
      <ul className="quiz-options">
        {options.map((option, index) => (
          <li key={index} className="quiz-option">
            <label>
              <input
                type="radio"
                name="option"
                value={index}
                checked={selectedOption === index}
                onChange={() => handleOptionSelect(index)}
              />
              <span className="option-text">{option}</span>
            </label>
          </li>
        ))}
      </ul>
      <button
        className="submit-button"
        onClick={handleSubmitAnswer}
        disabled={selectedOption === null}
      >
        Submit Answer
      </button>
    </div>
  );
};

export default Quiz;
