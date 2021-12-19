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
} from "@mui/material";
// components
import CreateTest from "../CreateTest/CreateTest";
import MyTests from "./../MyTests/MyTests";

export default function DescribeCreatingTest() {
   const [subject, setSubject] = useState("");
   const [title, setTitle] = useState("");
   const [testType, setTestType] = useState("");

   return (
      <div>
         <Box
            sx={{
               maxWidth: 200,
               display: "flex",
               flexDirection: "column",
               justifyContent: "space-between",
            }}
         >
            <FormControl required>
               <InputLabel id="subject">subject</InputLabel>
               <Select
                  labelId="subject"
                  id="subject"
                  value={subject}
                  label="subject"
                  onChange={(event) => setSubject(event.target.value)}
               >
                  <MenuItem value={"math"}>Math</MenuItem>
                  <MenuItem value={"physics"}>Physics</MenuItem>
               </Select>
            </FormControl>
            <TextField
               value={title}
               onChange={(e) => setTitle(e.target.value)}
               label="enter title of the test"
               required
            />
            <TextField
               value={testType}
               onChange={(e) => setTestType(e.target.value)}
               label="enter type of the test"
            />
         </Box>
         <CreateTest />
         <MyTests subject={subject} title={title} testType={testType} />
      </div>
   );
}
