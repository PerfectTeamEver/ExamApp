import React from "react";
import Answer from "./Answer";

const Answers = ({ handleAnswer }) => {
  return (
    <>
      <Answer handleAnswer={handleAnswer} />
      <Answer handleAnswer={handleAnswer} />
      <Answer handleAnswer={handleAnswer} />
      <Answer handleAnswer={handleAnswer} />
    </>
  );
};

export default Answers;
