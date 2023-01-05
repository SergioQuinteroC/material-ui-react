import React, { useState, useEffect } from "react";
import { Container } from "@mui/material";
import Searcher from "./components/Searcher";
import UserCard from "./containers/userCard";
import { getGitHubUser } from "./services/users";

const App = () => {
  const [inputUser, setInputUser] = useState("octocat");
  const [userState, setUserState] = useState("inputUser");
  const [notFound, setNotFound] = useState(false);

  const gettingUser = async (user) => {
    const userResponse = await getGitHubUser(user);

    if (userState === "octocat") {
      localStorage.setItem("octocat", userResponse);
    }

    if (userResponse.message === "Not Found") {
      const { octocat } = localStorage;
      setInputUser(octocat);
      setNotFound(true);
    } else {
      setNotFound(false);
      setUserState(userResponse);
    }
  };

  useEffect(() => {
    gettingUser(inputUser);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputUser]);

  return (
    <Container
      sx={{
        background: "whitesmoke",
        width: "80vw",
        height: "500px",
        borderRadius: "16px",
        marginTop: "40px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Searcher
        inputUser={inputUser}
        setInputUser={setInputUser}
        notFound={notFound}
      />
      <UserCard userState={userState} />
    </Container>
  );
};

export default App;
