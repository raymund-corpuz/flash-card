import { useState } from "react";
import "./App.css";
const questions = [
  {
    id: 1,
    question: "What is the capital of France?",
    answer: "Paris",
  },
  {
    id: 2,
    question: "What is the largest planet in our solar system?",
    answer: "Jupiter",
  },
  {
    id: 3,
    question: "What is the chemical symbol for water?",
    answer: "H2O",
  },
  {
    id: 4,
    question: "Who wrote 'To Kill a Mockingbird'?",
    answer: "Harper Lee",
  },
  {
    id: 5,
    question: "What is the square root of 64?",
    answer: "8",
  },
];

export default function App() {
  return (
    <div>
      <h1>FlashCards</h1>
      <Cards />
    </div>
  );
}

function Cards() {
  const [selectedId, setSelectedId] = useState(null);

  function handleClick(id) {
    console.log(id);
    setSelectedId(id);
  }
  return (
    <div className="flashcard-container">
      {questions.map((question) => (
        <div
          key={question.id}
          className={
            question.id === selectedId ? "flashcard flipped" : "flashcard"
          }
          onClick={() => handleClick(question.id)}
        >
          <h3>
            {question.id === selectedId ? question.answer : question.question}
          </h3>
        </div>
      ))}
    </div>
  );
}
