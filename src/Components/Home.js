import React from "react";
import styled from "styled-components";

function Home() {
  return (
    <Container>
      <h1>Home</h1>
    </Container>
  );
}

export default Home;

const Container = styled.main`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  background-color: #131927;
  color: #fff;

  &:before {}
`;
