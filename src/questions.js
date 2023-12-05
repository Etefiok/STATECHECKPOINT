import React from 'react';
import { useState } from 'react';

// const Question = (props) => {
//   return (
//     <div>
//       <h3>{props.question}</h3>
//       {props.answers.map(answer => (
//         <button key={answer} onClick={() => props.handleAnswer(answer)}>{answer}</button>
//       ))}
//     </div>
//   );
// }

// export default Question;

const Question = (props) => {
    const [selectedAnswer, setSelectedAnswer] = useState('');
  
    const handleAnswerSelection = (answer) => {
      setSelectedAnswer(answer);
    };
  
    const handleSubmit = () => {
      props.handleAnswer(selectedAnswer);
      setSelectedAnswer('');
    };
  
    return (
      <div>
        <h3>{props.question}</h3>
        {props.answers.map((answer) => (
          <button
            key={answer}
            onClick={() => handleAnswerSelection(answer)}
            disabled={selectedAnswer === answer}
          >
            {answer}
          </button>
        ))}
        <button onClick={handleSubmit} disabled={!selectedAnswer}>
          Submit
        </button>
      </div>
    );
  };
  
  const Exams = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState([]);
    const [questionsAnswered, setQuestionsAnswered] = useState(false);
  
    const questions = [
      {
        question: 'What does HTML stand for?',
        answers: ["Hyperlink Text Markup Language",
                "Hyper Text Markup Language",
                 "Hyper Transfer Markup Language"],
      },
      {
        question: 'Which programming language is commonly used for adding interactivity to web pages?',
        answers: ['HTML',
        "CSS",
        'JavaScript'],
      },
      {
        question: 'What is the purpose of CSS in web development?',
        answers: ['To define the structure and layout of a web page',
                 "To add interactivity and functionality to a web page",
                 "To style and visually enhance the appearance of a web page"],
      },
    ];
  
    const handleAnswer = (answer) => {
      setAnswers([...answers, answer]);
      setCurrentQuestion(currentQuestion + 1);
      if (currentQuestion === questions.length - 1) {
        setQuestionsAnswered(true);
      }
    };
  
    return (
      <div>
        {!questionsAnswered && (
          <Question
            question={questions[currentQuestion].question}
            answers={questions[currentQuestion].answers}
            handleAnswer={handleAnswer}
          />
        )}
        {questionsAnswered && (
          <div>
            <h3>Thanks for answering the questions!</h3>
            <p>Your answers were:</p>
            <ul>
              {answers.map((answer, index) => (
                <li key={index}>{answer}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  };
  
  export default Exams;