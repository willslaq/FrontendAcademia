import React from "react";
import NavBar from "../../components/navbar";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Ranking from "../../components/ranking";

function Home() {
  return (
    <>
      <NavBar />
      <Ranking />
    </>
  );
}

export default Home;
