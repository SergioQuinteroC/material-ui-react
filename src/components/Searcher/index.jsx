import React, { useState } from "react";
import { Alert, IconButton, Stack, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const Searcher = (props) => {
  const { setInputUser, notFound } = props;

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
      spacing={3}
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
      {notFound && <Alert severity="error">User Not Found</Alert>}
    </Stack>
  );
};

export default Searcher;
