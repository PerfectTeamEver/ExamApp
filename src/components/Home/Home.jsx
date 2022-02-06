import React, { useState } from "react";
import { Link } from "react-router-dom";
import Login from "../../Login/Login";
import Btn from "../Btn";
import { Wrapper, Btns } from "./Home.style";

const Home = () => {
  const [login, setLogin] = useState(false);
  const Submit = (value) => {
    value && setLogin(true);
  };

  return login ? (
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
  ) : (
    <Login Submit={Submit} />
  );
};

export default Home;
