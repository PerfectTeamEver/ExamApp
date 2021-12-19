import React, { useState } from "react";
import { useDispatch } from "react-redux";

// MUI
import {
  TextField,
  Box,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Button,
} from "@mui/material";

import "./style.css";

// components
import CreateTest from "../CreateTest/CreateTest";
import MyTests from "./../MyTests/MyTests";
import { minWidth } from "@mui/system";

export default function DescribeCreatingTest() {
  const [subject, setSubject] = useState("");
  const [title, setTitle] = useState("");
  const [testType, setTestType] = useState("");

  return (
    <div>
      <Box
        sx={{
          marginTop: 5,
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <FormControl
          required
          className="textfield"
          variant="filled"
          style={{ minWidth: 100 }}
        >
          <InputLabel className="textfield" id="subject">
            subject
          </InputLabel>
          <Select
            labelId="subject"
            id="subject"
            value={subject}
            label="subject"
            onChange={(event) => setSubject(event.target.value)}
            inputProps={{ style: { color: "#fff" } }}
            InputLabelProps={{ style: { color: "#fff" } }}
          >
            <MenuItem value={"math"}>Math</MenuItem>
            <MenuItem value={"physics"}>Physics</MenuItem>
            <MenuItem value={"programming"}>Programming</MenuItem>
          </Select>
        </FormControl>
        <TextField
          className="textfield"
          variant="filled"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          label="enter title of the test"
          required
          inputProps={{ style: { color: "#fff" } }}
          InputLabelProps={{ style: { color: "#fff" } }}
        />
        <TextField
          className="textfield"
          variant="filled"
          value={testType}
          onChange={(e) => setTestType(e.target.value)}
          label="enter type of the test"
          inputProps={{ style: { color: "#fff" } }}
          InputLabelProps={{ style: { color: "#fff" } }}
        />
        <TextField
          className="textfield"
          variant="filled"
          value={testType}
          onChange={(e) => setTestType(e.target.value)}
          label="time"
          inputProps={{ style: { color: "#fff" } }}
          InputLabelProps={{ style: { color: "#fff" } }}
        />
      </Box>
      <CreateTest />
      <MyTests subject={subject} title={title} testType={testType} />
    </div>
  );
}
