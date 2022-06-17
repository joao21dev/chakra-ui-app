import { Avatar, Box, Center, Flex, Link, Text } from "@chakra-ui/react";
import React, { useEffect, useMemo, useState } from "react";
import EmployeesCards from "../components/EmployeesCards";
import {
  AiOutlineArrowLeft,
  AiOutlineCalendar,
  AiOutlineIdcard,
} from "react-icons/ai";
import axios from "axios";
import { FiPhoneCall } from "react-icons/fi";

const EmployeesInfo = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const response = await axios
      .get(" https://pp-api-desafio.herokuapp.com/agent/1")
      .catch((err) => console.log(err));

    if (response) {
      const data = response.data.agent;

      console.log("Data da api em accounts: ", data);
      setData(data);
    }
  };
  const DDD = data.phone ? data.phone.ddd : null;
  const DDI = data.phone ? data.phone.ddi : null;
  const NUM = data.phone ? data.phone.number : null;
  const phoneNumber = DDI + " " + DDD + " " + NUM;

  const statusFn = () => {
    if (data.status == "active") {
      return "Ativo";
    } else {
      return "Inativo";
    }
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
          Detalhes do Colaborador
        </Text>
      </Flex>

      <Box p={8} bg="white" w="956px" h="598px">
        <Flex>
          <Avatar src={data.image} />
          <Flex mx={4} flexDir="column" justifyContent="center">
            <Text>{data.name}</Text>
            <Text>{data.email}</Text>
          </Flex>
        </Flex>
        <Flex my={12} justifyContent="space-between">
          <EmployeesCards
            title={data.document ? data.document.type : null}
            subTitle={data.document ? data.document.number : null}
            icon={<AiOutlineIdcard />}
          />
          <EmployeesCards
            title="Telefone"
            subTitle={phoneNumber}
            icon={<FiPhoneCall />}
          />
          <EmployeesCards
            title="Nascimento"
            subTitle={data.birth_date}
            icon={<AiOutlineCalendar />}
          />
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
          bg="white"
        >
          <Box></Box>
          <Text fontWeight={500} fontSize="18px">
            Departamento: {data.department}
          </Text>
          <Text fontWeight={500} fontSize="18px">
            Cargo: {data.role}
          </Text>
          <Text fontWeight={500} fontSize="18px">
            Unidade: {data.branch}
          </Text>
          <Text fontWeight={500} fontSize="18px">
            Status: {statusFn()}
          </Text>
        </Flex>
      </Box>
    </Box>
  );
};

export default EmployeesInfo;
