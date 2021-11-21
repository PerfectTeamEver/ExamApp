import React, { useState } from "react";
import TestCard from "./TestCard";
import { language } from "../datas/TestData";
import {
  Result,
  TestWrapper,
  Btns,
  Btn,
  StartContent,
  StartBtn,
  TestTitle,
  MainContainer,
  Content,
  StopTest,
} from "../styles/TestStyle";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { GoStop } from "react-icons/go";

export const Start = () => {
  const [cliked, setClicked] = useState(false);
  const [testNum, setTestNum] = useState(0);
  const [result, setresult] = useState(false);

  const handleNext = () => {
    if (language.length > testNum + 1) setTestNum(testNum + 1);
  };

  const handlePrev = () => {
    if (testNum > 0) setTestNum(testNum - 1);
  };

  return (
    <MainContainer>
      {cliked ? (
        <>
          {result ? (
            <Result>
              <p>
                You scored <span>{testNum}</span> out of {language.length} tests
              </p>
            </Result>
          ) : (
            <TestWrapper>
              <StopTest onClick={() => setresult(!result)}>
                <GoStop /> Stop the Test
              </StopTest>
              <TestCard data={language} testNum={testNum} />
              <Btns>
                <Btn onClick={handlePrev}>
                  <BsFillArrowLeftCircleFill style={{ marginRight: 10 }} />{" "}
                  Previus
                </Btn>
                <Btn onClick={handleNext}>
                  Next
                  <BsFillArrowRightCircleFill style={{ marginLeft: 10 }} />
                </Btn>
              </Btns>
            </TestWrapper>
          )}
        </>
      ) : (
        <StartContent>
          <Content>
            <TestTitle>Click a button and Start Test </TestTitle>
            <StartBtn onClick={() => setClicked(!cliked)}>Start</StartBtn>
          </Content>
        </StartContent>
      )}
    </MainContainer>
  );
};
