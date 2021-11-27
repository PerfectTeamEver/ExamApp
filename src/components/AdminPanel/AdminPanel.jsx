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

const AdminPanel = ({}) => {
  const [clicked1, setClicked1] = useState(false);
  const [clicked2, setClicked2] = useState(false);
  const [clicked3, setClicked3] = useState(false);
  const [clicked4, setClicked4] = useState(false);
  let check1Id = 1;
  let check2Id = 2;
  let check3Id = 3;
  let check4Id = 4;

  const handleClick = (id) => {
    if (id === 1) {
      setClicked1(!clicked1);
      setClicked2(false);
      setClicked3(false);
      setClicked4(false);
    }
    if (id === 2) {
      setClicked2(!clicked2);
      setClicked1(false);
      setClicked3(false);
      setClicked4(false);
    }
    if (id === 3) {
      setClicked3(!clicked3);
      setClicked2(false);
      setClicked1(false);
      setClicked4(false);
    }
    if (id === 4) {
      setClicked4(!clicked4);
      setClicked2(false);
      setClicked3(false);
      setClicked1(false);
    }
  };
  return (
    <Container>
      <Wrapper>
        <h3>Adding question</h3>
        <Adding>
          <form action="">
            <Question>
              <label htmlFor="question">QUESTION:</label>
              <Input type="text" id="question" placeholder="Insert question" />
            </Question>
            <Answer>
              Answer :
              <Input type="text" placeholder="Insert answer" />
              <Check onClick={() => handleClick(check1Id)}>
                {clicked1 && <BsCheckLg />}
              </Check>
            </Answer>
            <Answer>
              Answer :
              <Input type="text" placeholder="Insert answer" />
              <Check onClick={() => handleClick(check2Id)}>
                {clicked2 && <BsCheckLg />}
              </Check>
            </Answer>
            <Answer>
              Answer :
              <Input type="text" placeholder="Insert answer" />
              <Check onClick={() => handleClick(check3Id)}>
                {clicked3 && <BsCheckLg />}
              </Check>
            </Answer>
            <Answer>
              Answer :
              <Input type="text" placeholder="Insert answer" />
              <Check onClick={() => handleClick(check4Id)}>
                {clicked4 && <BsCheckLg />}
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
