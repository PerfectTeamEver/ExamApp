import React, { useState } from "react";
import {
  Container,
  Wrapper,
  Adding,
  Answer,
  Question,
  Input,
  Add,
  Check,
} from "./AdminPanel.style";
import { BsCheckLg } from "react-icons/bs";

const AdminPanel = () => {
  return (
    <Container>
      <Wrapper>
        <Adding>
          <form action="">
            <Question>
              <label htmlFor="question">QUESTION:</label>
              <Input type="text" id="question" placeholder="Insert question" />
            </Question>
            <Answer>
              <Input type="text" placeholder="Insert answer" />
              <Check>
                {<BsCheckLg />}
              </Check>
            </Answer>
          </form>
        </Adding>
        <Add>Add</Add>
      </Wrapper>
    </Container>
  );
};

export default AdminPanel;
