import React, { Fragment } from "react";
import { Stack, Typography } from "@mui/material";

const PrincipalInformation = (props) => {
  const { userState } = props;
  const { name, login, created_at: createdAt } = userState;
  return (
    <Fragment>
      <Stack direction="row" sx={{ justifyContent: "space-between" }}>
        <Typography variant="h4">{name}</Typography>
        <Typography variant="subtitle2">{createdAt}</Typography>
      </Stack>
      <Typography variant="caption">@{login}</Typography>
    </Fragment>
  );
};

export default PrincipalInformation;
