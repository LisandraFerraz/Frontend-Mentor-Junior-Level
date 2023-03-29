import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { ChakraProvider } from "@chakra-ui/react";
import AppHeader from "./components/header";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  // <React.StrictMode>
  <ChakraProvider>
    <App />
  </ChakraProvider>
  // </React.StrictMode>
);
