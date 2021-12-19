import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
   getCreatedTests,
   saveTestSet,
} from "../../../store/questions/admin-slice";
import { Container, Back, Wrapper, CorrectAnswer } from "./MyTests.style";
import { Button } from "@mui/material";

const MyTests = ({ subject, title, testType }) => {
   const { createdTests } = useSelector(getCreatedTests);
   const dispatch = useDispatch();

   return (
      <div>
         <Link to="/admin">
            <Back>Back</Back>
         </Link>
         <Container>
            <h1>Created Tests</h1>
            {createdTests.map((test) => (
               <Wrapper>
                  <h3>Question: {test.question}</h3>
                  Answers:
                  <CorrectAnswer>{test.correct_answer}</CorrectAnswer>
                  {test.incorrect_answers.map((answer) => (
                     <p>{answer}</p>
                  ))}
               </Wrapper>
            ))}
         </Container>
         <Button
            onClick={() => dispatch(saveTestSet({ subject, title, testType }))}
            variant="contained"
         >
            save test
         </Button>
      </div>
   );
};

export default MyTests;
