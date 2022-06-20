import React, { useEffect, useMemo, useState } from "react";

import {
  Avatar,
  Box,
  Center,
  Checkbox,
  Flex,
  Text,
  Link,
} from "@chakra-ui/react";
import { AiFillEye } from "react-icons/ai";
import { FaTrashAlt } from "react-icons/fa";
import axios from "axios";
// import { Link } from "react-router-dom";
import { BsDownload, BsEye } from "react-icons/bs";
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

            Cell: (props: any) => (
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
            Cell: (props: any) => (
              <Box cursor="pointer">
                <Link href={`employee/${props.cell.row.cells[0].value}`}>
                  <BsEye fontSize="26px" color={"gray"} />
                </Link>
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
      <CustomTable data={data} columns={columns} />
    </>
  );
};

export default EMployeesList;
