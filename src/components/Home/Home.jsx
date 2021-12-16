import React from "react";
import { Link } from "react-router-dom";
import Btn from "../Btn";
import { Wrapper, Btns } from "./Home.style";

const Home = () => {
  return (
    <Wrapper>
      <Btns>
        <Link to="/admin">
          <Btn size="28px" name="ADMIN" bg="#303030" />
        </Link>
        <Link to="/exam">
          <Btn size="28px" name="Exam" bg="#303030" />
        </Link>
      </Btns>
    </Wrapper>
  );
};

export default Home;
