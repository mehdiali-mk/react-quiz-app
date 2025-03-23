function Progress({
  questionIndex,
  numberOfQuestions,
  points,
  maximumPossiblePoints,
  answer,
}) {
  return (
    <header className="progress">
      <progress
        max={numberOfQuestions}
        value={questionIndex + Number(answer !== null)}
      ></progress>

      <p>
        Question <strong>{questionIndex + 1}</strong> / {numberOfQuestions}
      </p>
      <p>
        <strong>{points}</strong> / {maximumPossiblePoints}
      </p>
    </header>
  );
}

export default Progress;
