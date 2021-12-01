import React, { useState } from "react";
import { Wrapper, Input, Check } from "./Answer.style";

const Answer = ({ handleAnswer }) => {
  const [click, setClick] = useState(false);
  return (
    <Wrapper>
      Answer :
      <Input
        type="text"
        placeholder="Insert answer"
        onChange={(e) => handleAnswer(e.target.value, click)}
      />
      <Check type="radio" name="answer" onClick={() => setClick(!click)} />
    </Wrapper>
  );
};

export default Answer;
