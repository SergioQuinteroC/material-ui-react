import React, { useState } from "react";
import { IconButton, Stack, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const Searcher = (props) => {
  const { setInputUser } = props;

  const [valueInput, setValueInput] = useState("");

  const onSearchValueChange = (event) => {
    setValueInput(event.target.value);
  };

  const handleSubmit = () => {
    setInputUser(valueInput);
  };

  return (
    <Stack
      direction="row"
      sx={{
        marginTop: "30px",
        width: "80%",
      }}
    >
      <TextField
        id="outlined-basic"
        variant="outlined"
        label="Search GitHub User"
        placeholder="Octocat"
        size="small"
        value={valueInput}
        onChange={onSearchValueChange}
        sx={{
          width: "90%",
        }}
        InputProps={{
          endAdornment: (
            <IconButton onClick={handleSubmit}>
              <SearchIcon />
            </IconButton>
          ),
        }}
      />
    </Stack>
  );
};

export default Searcher;

/**
 <TextField
  label="Search Github User"
  id="outlined-basic"
  variant="outlined"
  width="90%"
  value={inputUser}
  onChange={(e) => setInputUser(e.target.value)}
  InputProps={{
    startAdornment: (
      <InputAdornment position="start">
        <IconButton onClick={() => handleClick(setInputUser, inputUser)}>
          <SearchIcon />
        </IconButton>
      </InputAdornment>
    ),
  }}
/>;

*/
