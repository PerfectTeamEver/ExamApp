import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getCreatedTests } from "../../../store/questions/admin-slice";
import { Container, Back, Wrapper, CorrectAnswer } from "./MyTests.style";

const MyTests = () => {
  const { createdTests } = useSelector(getCreatedTests);
  return (
    <>
      <Link to="/admin">
        <Back>Back</Back>
      </Link>
      <Container>
        <h1>Created Tests</h1>
        {createdTests.map((test) => (
          <Wrapper>
            <h3>Question: {test.question}</h3>
            <h4>Answers:</h4>
            <CorrectAnswer>{test.correct_answer}</CorrectAnswer>
            {test.incorrect_answers.map((answer) => {
              return <p>{answer}</p>;
            })}
          </Wrapper>
        ))}
      </Container>
    </>
  );
};

export default MyTests;
