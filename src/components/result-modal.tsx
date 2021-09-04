import { Question as QuestionType } from "../question";

type ResultModalProps = {
  question: QuestionType;
  isCorrect: boolean;
  getQuestion: () => void;
};

export default function ResultModal({
  question,
  isCorrect,
  getQuestion,
}: ResultModalProps) {
  return (
    <div className={`result-modal ${isCorrect ? "is-correct" : "is-wrong"}`}>
      <div className="overlay" />
      <div className="result-modal-content">
        {isCorrect ? (
          <h3>
            👊👊👊
            <br />
            YOU WON!
          </h3>
        ) : (
          <h3>
            😟😢😟
            <br />
            YOU LOST!
          </h3>
        )}

        {!isCorrect && (
          <div className="correct-answer">
            <small>The correct answer was:</small>
            <br />
            <strong
              dangerouslySetInnerHTML={{ __html: question.correct_answer }}
            />
          </div>
        )}

        <button onClick={() => getQuestion()}>Go to next question 👉</button>
      </div>
    </div>
  );
}
