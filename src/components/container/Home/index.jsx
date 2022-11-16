import React from "react";
import { Container } from "./styles";

const Home = () => {
  const status = false;
  return (
    <Container status={status}>
      <header>Header</header>
      <section>banner</section>
      <section>itens</section>
      <footer>footer</footer>
    </Container>
  );
};

export default Home;
