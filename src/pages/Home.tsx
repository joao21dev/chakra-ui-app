import { Box, Flex, Text } from "@chakra-ui/react";
import styled from "@emotion/styled";
import React, { useState } from "react";
import EMployeesList from "../components/EmployeesList";
import RolesList from "../components/RolesList";
import Sidebar from "../components/Sidebar";

const Home = () => {
  const [renderPage, setRenderPage] = useState(true);
  const handleRenderPage = () => {
    setRenderPage(!renderPage);
  };
  const Button = styled.button`
    border-bottom: 2px solid ${renderPage ? "#22e0a1" : "#A3B8B0"};
    width: 196px;
    color: ${renderPage ? "#000000" : "#A3B8B0"};
  `;

  return (
    <Box p={24}>
      <Box borderRadius={8} w="1008px" bg="white">
        <Flex p={8}>
          <Button onClick={handleRenderPage}>Usuários</Button>
        </Flex>
        <EMployeesList />
      </Box>
    </Box>
  );
};

export default Home;
