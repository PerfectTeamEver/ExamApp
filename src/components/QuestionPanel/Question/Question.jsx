import React from "react";
import QuestionOption from "./QuestionOption";

const Question = ({ question, answers, ...props }) => {
   return (
      <div>
         <h1>{question}</h1>
         {answers.map((option) => (
            <QuestionOption option={option} {...props} />
         ))}
      </div>
   );
};

export default Question;
