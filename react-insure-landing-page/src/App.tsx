import React from "react";
import "./Index.scss";
import { Header } from "./src/components/Header";
import { Intro } from "./src/components/Intro";
import { Caracteristics } from "./src/components/Caracteristics";

function App() {
  return (
    <>
      <Header />
      <Intro />
      <Caracteristics />
    </>
  );
}

export default App;
