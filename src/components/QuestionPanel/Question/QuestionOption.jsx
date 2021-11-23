import React from "react";
import { Option } from "./QuestionStyle";

const QuestionOption = ({ option, handleOptionSelect, id, selectedAnswer }) => {
  return (
    <Option
      onClick={() => handleOptionSelect(id, option)}
      selected={selectedAnswer === option}
    >
      {option}
    </Option>
  );
};

export default QuestionOption;
