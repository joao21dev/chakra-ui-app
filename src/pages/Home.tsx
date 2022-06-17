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
  const Button1 = styled.button`
    border-bottom: 2px solid ${renderPage ? "#A3B8B0" : "#22e0a1"};
    width: 196px;
    color: ${renderPage ? "#A3B8B0" : "#000000"};
  `;
  return (
    <Box p={24}>
      <Text fontSize="22px" fontWeight={600}>
        Organização
      </Text>
      <Box w="1008px" bg="white">
        <Flex p={8}>
          <Button onClick={handleRenderPage}>Colaboradores</Button>
          <Button1 onClick={handleRenderPage}>Cargos</Button1>
        </Flex>
        {renderPage ? <EMployeesList /> : <RolesList />}
      </Box>
    </Box>
  );
};

export default Home;
