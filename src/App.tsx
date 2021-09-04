import { useCallback, useEffect, useState } from "react";

import {
  Question,
  CategorySelector,
  Scoreboard,
  ResultModal,
} from "./components";
import { Question as QuestionType } from "./question";

import "./App.css";

function App() {
  const [question, setQuestion] = useState<QuestionType | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("any");
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const getQuestion = useCallback(() => {
    setIsCorrect(null);
    let url = process.env.REACT_APP_TRIVIA_API_URL;
    if (selectedCategory !== "any") url += `&category=${selectedCategory}`;
    fetch(url as RequestInfo)
      .then((response) => response.json())
      .then(({ results }) => setQuestion(results[0]));
  }, [selectedCategory]);

  useEffect(() => {
    getQuestion();
  }, [selectedCategory, getQuestion]);

  function handleAnswerQuestion(answer: string) {
    const isAnswerCorrect = answer === question?.correct_answer;
    setIsCorrect(isAnswerCorrect);
  }

  return (
    <div className="app">
      {isCorrect !== null && question && (
        <ResultModal
          getQuestion={getQuestion}
          isCorrect={isCorrect}
          question={question}
        />
      )}
      <div className="question-header">
        <CategorySelector
          category={selectedCategory}
          selectCategory={setSelectedCategory}
        />
        <Scoreboard />
      </div>

      <div className="question-main">
        {question && (
          <Question answerQuestion={handleAnswerQuestion} question={question} />
        )}
      </div>

      <div className="question-footer">
        <button onClick={getQuestion}>Go to next question 👉</button>
      </div>
    </div>
  );
}

export default App;
