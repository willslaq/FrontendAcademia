import React from "react";
import NavBar from "../../components/navbar";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";

function Home() {
  return (
    <>
      <NavBar />
      <Container>
        <Box my={2}>
          {[...new Array(52)]
            .map(
              () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
            )
            .join("\n")}
        </Box>
      </Container>
      <p>teste</p>
    </>
  );
}

export default Home;
