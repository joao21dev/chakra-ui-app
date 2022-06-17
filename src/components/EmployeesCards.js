import { Box, Center, Flex, Text } from "@chakra-ui/react";

import React from "react";

const EmployeesCards = (props) => {
  return (
    <Flex
      alignItems="center"
      pl={2}
      border="2px solid #CAD6D1"
      borderRadius="8px"
      bg="#F5FAF8"
      w="286px"
      h="70px"
    >
      <Center borderRadius="50%" bg="#CAD6D1" w="48px" h="48px">
        {props.icon}
      </Center>
      <Box ml={2}>
        <Text>{props.title}</Text>
        <Text>{props.subTitle}</Text>
      </Box>
    </Flex>
  );
};

export default EmployeesCards;
