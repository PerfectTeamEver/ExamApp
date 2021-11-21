import React, { useEffect, useState } from "react";
import {
  TestContainer,
  CardContent,
  Answers,
  ChoseAnswer,
  Question,
} from "../styles/CardStyle";

const TestCard = ({ data, testNum }) => {
  const [selected, setSelected] = useState(false);
  return (
    <TestContainer>
      <CardContent>
        <p>
          QUESTION - <span>{testNum + 1}</span> / {data.length}
        </p>
        <Question>{data[testNum].question}</Question>
        <Answers>
          {data[testNum].variants.map((item) => {
            return (
              <ChoseAnswer
                onClick={() => setSelected(!selected)}
                bgcolor={selected ? "#7cfc00" : "#fff"}
                key={item.id}
              >
                {item.variant}
              </ChoseAnswer>
            );
          })}
        </Answers>
      </CardContent>
    </TestContainer>
  );
};

export default TestCard;
