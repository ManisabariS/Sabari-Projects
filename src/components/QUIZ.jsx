import { useEffect, useState } from 'react';
import './css/QUIZ.css';

function QUIZ() {
  const data = [
    {
      question_no: 1,
      question: "What is JavaScript?",
      options: [
        "JavaScript is an assembly language used to make the website interactive",
        "JavaScript is a compiled language used to make the website interactive",
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
        "It is an ordered list of functions"
      ],
      answer: "It is an ordered list of values",
      explanation: "An array in JavaScript is an ordered list of values, each value is referred to as an element, and it is identified by an index. An array can include values of many sorts and the length of an array is dynamically sized."
    },
    {
      question_no: 5,
      question: "Which of the following is not a JavaScript data type?",
      options: [],
      answer: "All of the mentioned",
      explanation: "JavaScript is a dynamic, loosely typed language. Variables in JavaScript aren’t tied to any specific value type, and each variable can be assigned and reassigned to values of all the types."
    },
    {
      question_no: 6,
      question: "Where is Client-side JavaScript code embedded within HTML documents?",
      options: [
        "A URL that uses the special javascript:code",
        "A URL that uses the special javascript:encoding",
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
        "Location"
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
        "Literal"
      ],
      answer: "Lexical",
      explanation: "JavaScript, like most current programming languages, employs lexical scoping. This means that functions are performed with the variable scope in effect when they were defined, rather than the variable scope in effect when they are invoked."
    },
    {
      question_no: 11,
      question: "What is the basic difference between JavaScript and Java?",
      options: [
        "Functions are considered as fields",
        "Variables are specific",
        "There is no difference"
      ],
      answer: "Functions are values, and there is no hard distinction between methods and fields",
      explanation: "Java is an object-oriented programming language, while JS is an object-oriented scripting language. The main difference between JavaScript and Java is that functions are values, while methods and fields are not clearly defined."
    }
  ];
  const [apiObject, setApiObject] = useState([]);
  const [options, setOptions] = useState([
    'Gokul',
    'Naveen',
    'Sabari',
    'Dharshan',
  ]);

  useEffect(()=>{
    setApiObject(data)
  },[])

  function suffleOptions(options){
    
  }

  return (
    <div className="main">
      <div className="quiz-container">
        {console.log(apiObject[0])}
        <div className="header">
          <span>
            <h2>Question 1</h2>
          </span>
          <span>
            <h2>Category: General Knowledge</h2>
          </span>
          <span>
            <h2>Level: Medium</h2>
          </span>
        </div>

        <div className="question">
          <h1>What is your Name?</h1>
        </div>

        <div className="options">
          {options.map((item, index) => (   
            <button key={index}>{item}</button>        
          ))}
        </div>

        <div className="time-left">
          <h2>
            Time left: <span>10s</span>
            
          </h2>
        </div>
      </div>
    </div>
  );
}

export default QUIZ;
