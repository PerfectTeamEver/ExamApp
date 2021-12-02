import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./Home.style";

const Home = () => {
  return (
    <div>
      <div>
        <Link to="/admin">
          <Button>ADMIN</Button>
        </Link>
      </div>
      <div>
        <Link to="/exam">
          <Button>EXAM</Button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
