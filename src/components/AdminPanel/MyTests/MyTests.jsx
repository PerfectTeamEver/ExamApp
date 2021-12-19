import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCreatedTests } from "../../../store/questions/admin-slice";
import { Container, Back, Wrapper, CorrectAnswer } from "./MyTests.style";

const MyTests = () => {
   const { testSet } = useSelector(getCreatedTests);

   return (
      <div>
         <Link to="/admin">
            <Back>Back</Back>
         </Link>
         <Container>
            <h1>Created Tests</h1>
            {/* {createdTests.map((test) => (
               <Wrapper>
                  <h3>Question: {test.question}</h3>
                  Answers:
                  <CorrectAnswer>{test.correct_answer}</CorrectAnswer>
                  {test.incorrect_answers.map((answer) => (
                     <p>{answer}</p>
                  ))}
               </Wrapper>
            ))} */}
         </Container>
      </div>
   );
};

export default MyTests;
