import _shuffle from "lodash.shuffle";
import { Question as QuestionType } from "../question";

type QuestionProps = {
  question: QuestionType;
  answerQuestion: (answer: string) => void;
};

export default function Question({ question, answerQuestion }: QuestionProps) {
  const answers = _shuffle([
    ...question.incorrect_answers,
    question.correct_answer,
  ]);
  return (
    <div className="question">
      <h2 dangerouslySetInnerHTML={{ __html: question.question }}></h2>

      {answers.map((answer, index) => (
        <button onClick={() => answerQuestion(answer)} key={index}>
          {answer}
        </button>
      ))}
    </div>
  );
}
