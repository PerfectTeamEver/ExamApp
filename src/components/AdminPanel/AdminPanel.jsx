import React, { useState } from "react";
import {
  Container,
  Wrapper,
  Adding,
  Question,
  Input,
  Add,
} from "./AdminPanel.style";
import Answers from "./Answers/Answers";

const AdminPanel = () => {
  const [test, setTest] = useState({});

  const handleQuestion = (val) => {
    setTest({ ...test, question: val });
  };

  const handleAnswer = (answer, click) => {
    if (click) setTest({ ...test, correct_answer: answer });
    else setTest({ ...test, answer: answer });
  };

  const PushTest = () => {
    console.log(test);
  };

  return (
    <Container>
      <Wrapper>
        <h3>Adding question</h3>
        <Adding>
          <form action="">
            <Question>
              <label htmlFor="question">QUESTION:</label>
              <Input
                type="text"
                id="question"
                placeholder="Insert question"
                onChange={(e) => handleQuestion(e.target.value)}
              />
            </Question>
            <Answers handleAnswer={handleAnswer} />
          </form>
        </Adding>
        <Add onClick={() => PushTest()}>Add</Add>
      </Wrapper>
    </Container>
  );
};

export default AdminPanel;
