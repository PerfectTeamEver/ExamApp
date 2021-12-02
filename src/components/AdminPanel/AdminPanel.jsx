import React from "react";
import { Link } from "react-router-dom";
import Btn from "../Btn";
import { BtnsWrapper, Btns } from "./AdminPanel.style";

const AdminPanel = () => {
  return (
    <BtnsWrapper>
      <Btns>
        <Link to="/admin/create-test">
          <Btn name="Create test" />
        </Link>
        <Link to="/admin/my-tests">
          <Btn name="My test" />
        </Link>
      </Btns>
    </BtnsWrapper>
  );
};

export default AdminPanel;
