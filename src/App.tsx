import * as React from "react";
import { ChakraProvider, theme } from "@chakra-ui/react";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EmployeesInfo from "./pages/EmployeesInfo";

export const App = () => (
  <ChakraProvider theme={theme}>
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/employee" element={<EmployeesInfo />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  </ChakraProvider>
);
