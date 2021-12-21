import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Box } from "@mui/material";

const Subjects = ({ handleClick, TestSet }) => {
  const [subject, setSubject] = React.useState("");
  const handleChange = (event) => {
    setSubject(event.target.value);
  };
  return (
    <div>
      <Box sx={{ width: 150 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Subject</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={subject}
            label="Subject"
            onChange={handleChange}
          >
            {TestSet.map((test, id) => {
              return (
                <MenuItem
                  key={id}
                  onClick={() => handleClick(test.tests)}
                  value={test.subject}
                >
                  {test.subject}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </Box>
    </div>
  );
};

export default Subjects;
