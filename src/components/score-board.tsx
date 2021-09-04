type ScoreboardProps = {
  wrong: number;
  correct: number;
};

export default function Scoreboard({ wrong, correct }: ScoreboardProps) {
  return (
    <div className="scoreboard">
      <div className="wrong">
        <strong>{wrong}</strong>
        <span>wrong</span>
      </div>
      <div className="correct">
        <strong>{correct}</strong>
        <span>correct</span>
      </div>
    </div>
  );
}
