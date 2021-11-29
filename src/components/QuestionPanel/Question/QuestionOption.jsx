import React from "react";
import { useDispatch } from "react-redux";
import { optionSelect } from "../../../store/questions/questions-slice";
import { Option } from "./QuestionStyle";

const QuestionOption = ({ option, id, selectedAnswer }) => {
   const dispatch = useDispatch();
   return (
      <Option
         onClick={() => dispatch(optionSelect({ id: id, option: option }))}
         selected={selectedAnswer === option}
      >
         {option}
      </Option>
   );
};

export default QuestionOption;
