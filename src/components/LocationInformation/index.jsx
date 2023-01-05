import React from "react";
import { Grid, Link, Stack, Typography } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import TwitterIcon from "@mui/icons-material/Twitter";
import LanguageIcon from "@mui/icons-material/Language";
import BusinessIcon from "@mui/icons-material/Business";

const LocationInformation = (props) => {
  const { userState } = props;
  const {
    location,
    twitter_username: twitterUsername,
    blog,
    company,
  } = userState;

  return (
    <Grid container spacing={2} sx={{ marginTop: "15px" }}>
      <Grid item xs={6}>
        <Stack direction="row" spacing={2}>
          <LocationOnIcon />
          <Typography>{location}</Typography>
        </Stack>
      </Grid>
      <Grid item xs={6}>
        <Stack direction="row" spacing={2}>
          <TwitterIcon />
          <Typography>
            {twitterUsername ? `@${twitterUsername}` : "Not Available"}
          </Typography>
        </Stack>
      </Grid>
      <Grid item xs={6}>
        <Stack direction="row" spacing={2}>
          <LanguageIcon />
          {blog ? (
            <Link href={blog} target="_blank">
              <Typography>{blog}</Typography>
            </Link>
          ) : (
            <Typography>Not Available</Typography>
          )}
        </Stack>
      </Grid>
      <Grid item xs={6}>
        <Stack direction="row" spacing={2}>
          <BusinessIcon />
          <Typography>{company || "Not Available"}</Typography>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default LocationInformation;
