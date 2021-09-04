import { useCallback, useEffect, useState } from "react";

import { Question, CategorySelector, Scoreboard } from "./components";
import { Question as QuestionType } from "./question";

import "./App.css";

function App() {
  const [question, setQuestion] = useState<QuestionType | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("any");

  const getQuestion = useCallback(() => {
    let url = process.env.REACT_APP_TRIVIA_API_URL;
    if (selectedCategory !== "any") url += `&category=${selectedCategory}`;
    fetch(url as RequestInfo)
      .then((response) => response.json())
      .then(({ results }) => setQuestion(results[0]));
  }, [selectedCategory]);

  useEffect(() => {
    getQuestion();
  }, [selectedCategory, getQuestion]);

  return (
    <div className="app">
      <div className="question-header">
        <CategorySelector
          category={selectedCategory}
          selectCategory={setSelectedCategory}
        />
        <Scoreboard />
      </div>

      <div className="question-main">
        {question && <Question question={question} />}
      </div>

      <div className="question-footer">
        <button>Go to next question 👉</button>
      </div>
    </div>
  );
}

export default App;
