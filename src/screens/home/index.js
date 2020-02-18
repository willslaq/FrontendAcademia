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
              () =>
                `Testando o teste testado do teste testador que irá testar este teste testante`
            )
            .join("\n")}
        </Box>
      </Container>
      <p>teste</p>
    </>
  );
}

export default Home;
