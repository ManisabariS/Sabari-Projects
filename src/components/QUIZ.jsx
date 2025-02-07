import { useState, useEffect } from 'react';
import './css/QUIZ.css';

function QUIZ() {
  // State for questions and answers
  const [questions, setQuestions] = useState([]);
  const [clickedButtons, setClickedButtons] = useState({});
  useEffect(()=>{
    setQuestions([
        {
          "question": "The function and var are known as:",
          "options": ["Keywords", "Data types", "Declaration statements", "Prototypes"]
        },
        {
          "question": "Which of these is a primitive data type?",
          "options": ["Object", "Array", "String", "Function"]
        }
      ]
      );
  },[])

  const handleClick = (questionIndex, option) => {
    setClickedButtons((prevState) => ({
      ...prevState,
      [questionIndex]: {
        ...prevState[questionIndex],
        [option]: !prevState[questionIndex]?.[option],
      },
    }));
  };

  return (
    <div className='main'>
      <div className='quiz-container'>
        <div className='heading'>
          <h1>QUIZ</h1>
        </div>

        {questions.map((question, index) => (
          <div key={index} className='question-container'>
            <h2 className='question'>{question.question}</h2>
            <div className='options'>
              {question.options.map((option, optionIndex) => (
                <button
                  key={optionIndex}
                  onClick={() => handleClick(index, optionIndex)}
                  className={clickedButtons[index]?.[optionIndex] ? 'clicked' : ''}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        ))}

        <div className='time'>
          <h3>Time left : 10s</h3>
        </div>
      </div>
    </div>
  );
}

export default QUIZ;
