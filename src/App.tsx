import * as React from "react";
import { ChakraProvider, theme } from "@chakra-ui/react";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EmployeesInfo from "./pages/EmployeesInfo";
import Charts from "./pages/Posts";
import Posts from "./pages/Posts";
import Products from "./pages/Products";

export const App = () => (
  <ChakraProvider theme={theme}>
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/employee/:id" element={<EmployeesInfo />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  </ChakraProvider>
);
