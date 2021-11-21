import React from "react";
import { Option } from "./Question.e";

const QuestionOption = ({
   option,
   handleOptionSelect,
   id,
   selectedAnswer,
   ...props
}) => {
   const said = selectedAnswer === option;
   return (
      <Option
         onClick={() => handleOptionSelect(id, option)}
         selected={said}
      >
         {option}
      </Option>
   );
};

export default QuestionOption;
