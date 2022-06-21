import React from "react";

import { CardI, PostI } from "../types";

import { Box, Center, Text, Stack, Icon } from "@chakra-ui/react";

const Card = (props: CardI) => {
  return (
    <Center>
      <Box w={"full"}>
        <Stack textAlign={"center"} p={6} align={"center"}>
          <Box
            display="flex"
            bg={props.bgColor}
            h="80px"
            w="80px"
            justifyContent="center"
            alignItems="center"
            borderRadius="20px"
          >
            <Icon
              as={props.icon}
              fontSize="35px"
              color={props.color}
              display="flex"
            />
          </Box>
          <Stack direction={"row"} align={"center"} justify={"center"}>
            <Text mt="3" fontSize={"md"}>
              {props.name}
            </Text>
          </Stack>
          <Stack direction={"row"}>
            <Text fontSize={"xl"} fontWeight={600}>
              R$
              {props.amount}k
            </Text>
          </Stack>
          <Stack>
            <Text fontSize={"sm"}>{props.percent}</Text>
          </Stack>
        </Stack>
      </Box>
    </Center>
  );
};

export default Card;
