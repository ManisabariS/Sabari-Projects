import { useEffect, useState } from "react";
import "./css/QUIZ.css";

function Quiz() {
 
  const questions = [
    {
      question_no: 1,
      question: "What is JavaScript?",
      options: [
        "JavaScript is an assembly language used to make the website interactive",
        "JavaScript is a compiled language used to make the website interactive",
        "JavaScript is a scripting language used to make the website interactive",
        "None of the mentioned"
      ],
      answer: "JavaScript is a scripting language used to make the website interactive",
      explanation: "JavaScript is a scripting language used along with HTML and CSS to make the website interactive. It is used both on the client-side and server-side."
    },
    {
      question_no: 2,
      question: "Which of the following is correct about JavaScript?",
      options: [
        "JavaScript is Assembly-language",
        "JavaScript is an Object-Oriented language",
        "JavaScript is an Object-Based language",
        "JavaScript is a High-level language"
      ],
      answer: "JavaScript is an Object-Based language",
      explanation: "Although JavaScript is not an OOP (Object-Oriented Programming) language like Java or PHP, it is object-based. The standard threesome of polymorphism, encapsulation, and inheritance are the criteria for object orientation, and JavaScript fails to meet them."
    },
    {
      question_no: 3,
      question: "Among the given statements, which statement defines closures in JavaScript?",
      options: [
        "JavaScript is a function that is enclosed with references to its inner function scope",
        "JavaScript is a function that is enclosed with the object to its inner function scope",
        "JavaScript is a function that is enclosed with references to its lexical environment",
        "None of the mentioned"
      ],
      answer: "JavaScript is a function that is enclosed with references to its lexical environment",
      explanation: "A closure is a function that is enclosed with references to its lexical environment. A closure allows an inner function to access the scope of an outside function. Closures are formed every time a function is created in JavaScript, during function creation time."
    },
    {
      question_no: 4,
      question: "Arrays in JavaScript are defined by which of the following statements?",
      options: [
        "It is an ordered list of objects",
        "It is an ordered list of strings",
        "It is an ordered list of values",
        "It is an ordered list of functions"
      ],
      answer: "It is an ordered list of values",
      explanation: "An array in JavaScript is an ordered list of values, each value is referred to as an element, and it is identified by an index. An array can include values of many sorts, and the length of an array is dynamically sized."
    },
    {
      question_no: 5,
      question: "Which of the following is not a JavaScript data type?",
      options: [
        "Null type",
        "Undefined type",
        "Number type",
        "All of the mentioned"
      ],
      answer: "All of the mentioned",
      explanation: "JavaScript is a dynamic, loosely typed language. Variables in JavaScript aren’t tied to any specific value type, and each variable can be assigned and reassigned to values of all the types."
    },
    {
      question_no: 6,
      question: "Where is Client-side JavaScript code embedded within HTML documents?",
      options: [
        "A URL that uses the special javascript:code",
        "A URL that uses the special javascript:encoding",
        "A URL that uses the special javascript:protocol",
        "A URL that uses the special javascript:stack"
      ],
      answer: "A URL that uses the special javascript:protocol",
      explanation: "The Client-side JavaScript code is embedded within HTML documents in four ways: Inline within a pair of script tags, From an external file, In an HTML event handler attribute, In a URL that uses the special javascript: protocol."
    },
    {
      question_no: 7,
      question: "Which of the following object is the main entry point to all client-side JavaScript features and APIs?",
      options: [
        "Position",
        "Standard",
        "Location",
        "Window"
      ],
      answer: "Window",
      explanation: "All client-side JavaScript features and APIs are accessed through the Window object. It represents a web browser window or frame, and the identifier window can be used to refer to it."
    },
    {
      question_no: 8,
      question: "Which of the following can be used to call a JavaScript Code Snippet?",
      options: [
        "Preprocessor",
        "Triggering Event",
        "Function/Method",
        "RMI"
      ],
      answer: "Function/Method",
      explanation: "A function call to the element on which JavaScript is to be run can be used to invoke JavaScript code. Other techniques include onclick, onload, and onsubmit, among others."
    },
    {
      question_no: 9,
      question: "Which of the following explains correctly what happens when a JavaScript program is developed on a Unix Machine?",
      options: [
        "Will be displayed as JavaScript text on the browser",
        "Will throw errors and exceptions",
        "Will work perfectly well on a Windows Machine",
        "Must be restricted to a Unix Machine only"
      ],
      answer: "Will work perfectly well on a Windows Machine",
      explanation: "Because JS can run on a variety of operating systems, an application written for UNIX will run just as well on Windows."
    },
    {
      question_no: 10,
      question: "Which of the following scoping type does JavaScript use?",
      options: [
        "Sequential",
        "Segmental",
        "Literal",
        "Lexical"
      ],
      answer: "Lexical",
      explanation: "JavaScript, like most current programming languages, employs lexical scoping. This means that functions are performed with the variable scope in effect when they were defined, rather than the variable scope in effect when they are invoked."
    }
  ];
  

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(10);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [score, setScore] = useState(0);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    if (quizCompleted) return;

    setTimeLeft(10);
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev === 1) {
          handleNext();
          return 10;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [currentQuestion, quizCompleted]);

  function handleNext() {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setTimeLeft(10); // Reset timer for the next question
    } else {
      calculateScore();
      setQuizCompleted(true);
    }
  }

  function handleAnswer(option) {
    setSelectedAnswers({ ...selectedAnswers, [currentQuestion]: option });
  }

  function calculateScore() {
    let totalScore = 0;
    questions.forEach((q, index) => {
      if (selectedAnswers[index] === q.answer) {
        totalScore += 1;
      }
    });
    setScore(totalScore);
  }

  function restartQuiz() {
    setCurrentQuestion(0);
    setSelectedAnswers({});
    setQuizCompleted(false);
    setScore(0);
    setTimeLeft(10);
    setShowDetails(false);
  }

  return (
    <div className="main">
      <div className="quiz-container">
        {!quizCompleted ? (
          <>
            <div className="header">
              <h2>Question {currentQuestion + 1} / {questions.length}</h2>
              <h2>Time Left: {timeLeft}s</h2>
            </div>

            <div className="question">
              <h1>{questions[currentQuestion].question}</h1>
            </div>

            <div className="options">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(option)}
                  className={selectedAnswers[currentQuestion] === option ? "selected" : ""}
                >
                  {option}
                </button>
              ))}
            </div>

            <button 
              onClick={handleNext} 
              disabled={!selectedAnswers[currentQuestion]} 
              className="next-btn"
            >
              Next
            </button>
          </>
        ) : (
          <div className="results">
            <h1>Quiz Completed!</h1>
            <h2>Your Score: {score} / {questions.length}</h2>

            <button onClick={() => setShowDetails(!showDetails)}>
              {showDetails ? "Hide Details" : "View Details"}
            </button>
            <button className="restartQuiz" onClick={restartQuiz}>Restart Quiz</button>

            {showDetails && (
              <div className="review">
                {questions.map((q, index) => (
                  <div key={index} className="review-item">
                    <h3>{q.question}</h3>
                    <p>
                      <strong>Your Answer: </strong>
                      <span
                        className={
                          selectedAnswers[index] === q.answer ? "correct" : "wrong"
                        }
                      >
                        {selectedAnswers[index] || "Not Answered"}
                      </span>
                    </p>
                    <p>
                      <strong>Correct Answer: </strong>
                      <span className="correct">{q.answer}</span>
                    </p>
                    <p><em>{q.explanation}</em></p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Quiz;
