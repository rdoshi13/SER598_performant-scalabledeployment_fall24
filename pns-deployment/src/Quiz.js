import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import quizData from './quiz.json';
import './Quiz.css';

const Quiz = ({ uniqueKey }) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [score, setScore] = useState(0);
    const [isCompleted, setIsCompleted] = useState(false);

    const questions = quizData[uniqueKey] || [];

    const handleOptionSelect = (index) => {
        setSelectedOption(index);
    };

    const handleSubmitAnswer = () => {
        if (selectedOption === questions[currentQuestionIndex].answer) {
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
                <p>Your score is {score} out of {questions.length}</p>
                <Link to="/" style={{
                    display: 'inline-block',
                    padding: '10px 20px',
                    fontSize: '16px',
                    fontWeight: 'bold',
                    color: '#ffffff',
                    backgroundColor: '#2196f3',
                    border: 'none',
                    borderRadius: '8px',
                    textDecoration: 'none',
                    cursor: 'pointer'
                }}>
                    Return to Main Menu
                </Link>
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
            <button className="submit-button" onClick={handleSubmitAnswer} disabled={selectedOption === null}>
                Submit Answer
            </button>
        </div>
    );
};

export default Quiz;
