import React, { useEffect, useMemo, useState } from "react";

import {
  Avatar,
  Box,
  Center,
  Checkbox,
  Flex,
  Text,
  Link,
  Button,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";
import { AiFillEye } from "react-icons/ai";
import { FaTrashAlt } from "react-icons/fa";
import axios from "axios";
// import { Link } from "react-router-dom";
import { BsDownload, BsEye, BsTrash } from "react-icons/bs";
import { CustomTable } from "./CustomTable";

const EMployeesList = () => {
  const [data, setData] = useState([]);

  const userData = useMemo(() => [...data], [data]);

  const fetchData = async () => {
    console.log(userData);

    const response = await axios
      .get("https://dummyjson.com/users")
      .catch((err) => console.log(err));

    if (response) {
      const data = response.data.users;

      console.log("Data da api em accounts: ", data);
      setData(data);
    }
  };

  

  useEffect(() => {
    fetchData();
  }, []);

  const columns = React.useMemo(
    () => [
      {
        Header: "Transferências",
        columns: [
          {
            Header: "ID",
            accessor: "id",
          },
          {
            Header: "Nome Completo",
            accessor: "name",

            Cell: (props) => (
              <Flex>
                <Center>
                  <Avatar size={"sm"} src={props.row.original.image} />
                  <Text ml={2}>
                    {props.row.original.firstName} {props.row.original.lastName}
                    {console.log("props: ", props.row.original.firstName)}
                  </Text>
                </Center>
              </Flex>
            ),
          },
          {
            Header: "Departamento",
            accessor: "company.department",
          },
          {
            Header: "Cargo",
            accessor: "company.title",
          },
          {
            Header: "Cidade",
            accessor: "address.city",
          },
          {
            Header: "Estado",
            accessor: "address.state",
          },
          {
            Header: "Detalhes",
            Cell: (props) => (
              <Box cursor="pointer">
                <Link href={`employee/${props.cell.row.cells[0].value}`}>
                  <BsEye fontSize="26px" color={"gray"} />
                </Link>
              </Box>

              // props.cell.row.cells[4].value
            ),
          },
          {
            Header: "Excluir",
            Cell: (props) => (
              <Box
                onClick={() =>
                  axios
                    .delete(
                      `https://dummyjson.com/users/${props.cell.row.cells[0].value}`
                    )
                    .then((res) => {
                      console.log("res: ", res);
                      console.log("res.data: ", res.data.id);
                    })
                }
                cursor="pointer"
              >
                <BsTrash fontSize="26px" color={"gray"} />
              </Box>

              // props.cell.row.cells[4].value
            ),
          },
        ],
      },
    ],
    []
  );

  return (
    <>
      <Alert
        status="success"
        variant="subtle"
        flexDirection="column"
        justifyContent="center"
        textAlign="center"
        height="200px"
      >
        <AlertIcon w="40px" h="40px" mr={0} />
        <AlertTitle mt={4} mb={1} fontSize="lg">
          Application submitted!
        </AlertTitle>
        <AlertDescription maxWidth="sm">
          Thanks for submitting your application. Our team will get back to you
          soon.
        </AlertDescription>
      </Alert>
      <CustomTable data={data} columns={columns} />
    </>
  );
};

export default EMployeesList;
