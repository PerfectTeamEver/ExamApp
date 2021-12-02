import React from "react";
import styled from "styled-components";

const Button = styled.button`
  font-size: ${(props) => (props.size ? props.size : "18px")};
  padding: 7px 15px;
  border: none;
  border-radius: 5px;
  background-color: ${(props) => (props.bg ? props.bg : "#303030")};
  color: #fff;
  cursor: pointer;
`;

const Btn = ({ size, name, link, bg }) => {
  return (
    <Button size={size} bg={bg} to={link}>
      {name}
    </Button>
  );
};

export default Btn;
