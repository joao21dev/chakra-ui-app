import {
  Heading,
  Avatar,
  Box,
  Center,
  Text,
  Stack,
  Button,
  Link,
  Badge,
  useColorModeValue,
  Flex,
} from "@chakra-ui/react";
import { GoThumbsup } from "react-icons/go";

export default function PostsCards(props) {
  return (
    <Center py={6}>
      <Box
        maxW={"900px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        rounded={"lg"}
        p={6}
        textAlign={"center"}
      >
        <Text fontSize={22} textAlign={"center"} fontWeight={600} px={3}>
          {props.title}
        </Text>
        <Text
          textAlign={"center"}
          color={useColorModeValue("gray.700", "gray.400")}
          px={3}
        >
          {props.body}
        </Text>

        <Stack align={"center"} justify={"center"} direction={"row"} mt={6}>
          {props.tags.map((tag) => (
            <Badge px={2} py={1} bg="white" fontWeight={"400"}>
              #{tag}
            </Badge>
          ))}
        </Stack>

        <Flex justifyContent="center" my={2} alignItems="center">
          <GoThumbsup />
          <Text ml={2}>{props.reactions}</Text>
        </Flex>
        <Link
          href={`/employee/${props.id}`}
          fontSize={14}
          textAlign={"center"}
          fontWeight={600}
         
        >
          Perfil do Usuário
        </Link>
      </Box>
    </Center>
  );
}
