import {
  Avatar,
  Box,
  Button,
  Center,
  Flex,
  Link,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useMemo, useState } from "react";
import EmployeesCards from "../components/EmployeesCards";
import {
  AiOutlineArrowLeft,
  AiOutlineCalendar,
  AiOutlineIdcard,
} from "react-icons/ai";
import axios from "axios";
import { FiPhoneCall } from "react-icons/fi";
import { BsDroplet } from "react-icons/bs";
import { useParams } from "react-router-dom";

const EmployeesInfo = () => {
  const { id } = useParams();

  const [data, setData] = useState([]);

  const fetchData = async () => {
    const response = await axios
      .get(`https://dummyjson.com/users/${id}`)
      .catch((err) => console.log(err));

    if (response) {
      const data = response.data;

      console.log("Data em userInfo: ", data);
      setData(data);
    }
  };

  const genderFunc = () => {
    if (data.gender === "male") {
      return "Masculino";
    } else {
      return "Feminino";
    }
  };

  const deleteUser = () => {
    axios.delete(`https://dummyjson.com/users/${id}`).then((res) => {
      console.log("res: ", res);
      console.log("res.data: ", res.data.id);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <Box p={24}>
      <Flex alignItems="center">
        <Link href="/">
          <AiOutlineArrowLeft color="#34423D" fontSize={24} />
        </Link>

        <Text m={2} fontSize="22px" fontWeight={600}>
          Perfil do Usuário
        </Text>
      </Flex>

      <Box p={8} bg="white" borderRadius={8} w="956px" h="898px">
        <Flex>
          <Avatar src={data.image} />
          <Flex w="90%" mx={4} flexDir="column" justifyContent="center">
            <Text>
              {data.firstName} {data.maidenName} {data.lastName}
            </Text>
            <Text>{data.email}</Text>
          </Flex>
          <Flex>
            <Button onClick={deleteUser} mr={4}>
              Delete
            </Button>
            <Button>Delete</Button>
          </Flex>
        </Flex>
        <Flex my={12} justifyContent="space-between">
          <EmployeesCards
            title="Tipo Sanguíneo"
            subTitle={data.bloodGroup}
            icon={<BsDroplet />}
          />
          <EmployeesCards
            title="Telefone"
            subTitle={data.phone}
            icon={<FiPhoneCall />}
          />
          <EmployeesCards
            title="Nascimento"
            subTitle={data.birthDate}
            icon={<AiOutlineCalendar />}
          />
        </Flex>

        <Flex
          bg="#F5FAF8"
          ml={12}
          mb={8}
          borderRadius="8px"
          w={800}
          h="280px"
          border="1px solid #CAD6D1"
          flexDir="column"
          justifyContent="space-around"
          p={6}
          boxShadow="lg"
        >
          <Text fontWeight={600} fontSize={22} mb={4}>
            Informações Pessoais
          </Text>
          <Text fontWeight={500} fontSize="18px">
            Nome de Usuário: {data.username}
          </Text>
          <Text fontWeight={500} fontSize="18px">
            Departamento: {data.company ? data.company.department : null}
          </Text>
          <Text fontWeight={500} fontSize="18px">
            Cargo: {data.company ? data.company.title : null}
          </Text>
          <Text fontWeight={500} fontSize="18px">
            Gênero: {genderFunc()}
          </Text>
          <Text fontWeight={500} fontSize="18px">
            Idade: {data.age}
          </Text>
          <Text fontWeight={500} fontSize="18px">
            Altura: {data.height}cm
          </Text>
        </Flex>
        <Flex
          ml={12}
          borderRadius="8px"
          w={800}
          h="280px"
          border="1px solid #CAD6D1"
          flexDir="column"
          justifyContent="space-around"
          p={6}
          boxShadow="lg"
          bg="#F5FAF8"
        >
          <Text fontWeight={600} fontSize={22} mb={4}>
            Endereço
          </Text>
          <Text fontWeight={500} fontSize="18px">
            Rua: {data.address ? data.address.address : null}
          </Text>
          <Text fontWeight={500} fontSize="18px">
            Cidade: {data.address ? data.address.city : null}
          </Text>
          <Text fontWeight={500} fontSize="18px">
            Estado: {data.address ? data.address.state : null}
          </Text>
        </Flex>
      </Box>
    </Box>
  );
};

export default EmployeesInfo;
