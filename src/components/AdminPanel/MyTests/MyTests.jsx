import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCreatedTests } from "../../../store/questions/admin-slice";
import {
  Container,
  Back,
  Wrapper,
  CorrectAnswer,
  BtnWrapper,
  Scroll,
} from "./MyTests.style";
import { TestSet } from "./components/TestData";

//MUI
import SearchMui from "./components/Search";
import Subjects from "./components/Subjects";

const MyTests = () => {
  // const { testSet } = useSelector(getCreatedTests);
  const [click, setClick] = useState(false);
  const [subjectTests, setSubjectTests] = useState([]);
  const [searchedTests, setSearchedTests] = useState([]);

  const handleClick = (tests) => {
    setClick(true);
    setSubjectTests(tests);
  };

  const handleSearch = (searchName) => {
    searchName = searchName.toLowerCase();
    // console.log(searchName);
    let arr = [];
    subjectTests.map((item) => {
      if (item.question.toLowerCase().includes(searchName)) arr.push(item);
    });
    setSearchedTests(arr);
  };

  useEffect(() => {
    setSearchedTests(subjectTests);
  }, [subjectTests]);

  return (
    <>
      <Link to="/admin">
        <Back>Back</Back>
      </Link>
      <BtnWrapper>
        <Subjects handleClick={handleClick} TestSet={TestSet} />
        <h1>Created Tests</h1>
        <SearchMui handleSearch={handleSearch} />
      </BtnWrapper>
      <Scroll>
        <Container>
          {click &&
            searchedTests.map((test, id) => {
              return (
                <Wrapper key={id}>
                  <h3>Question: {test.question}</h3>
                  Answers:
                  <CorrectAnswer>{test.correct_answer}</CorrectAnswer>
                  {test.incorrect_answers.map((answer) => (
                    <p>{answer}</p>
                  ))}
                </Wrapper>
              );
            })}
        </Container>
      </Scroll>
    </>
  );
};

export default MyTests;
