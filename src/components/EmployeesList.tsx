import React, { useEffect, useMemo, useState } from "react";

import { Avatar, Box, Center, Checkbox, Flex, Text } from "@chakra-ui/react";
import { AiFillEye } from "react-icons/ai";
import { FaTrashAlt } from "react-icons/fa";
import axios from "axios";
import { Link } from "react-router-dom";
import { BsDownload } from "react-icons/bs";
import { CustomTable } from "./CustomTable";

const EMployeesList = () => {
  const [data, setData] = useState([]);

  const userData = useMemo(() => [...data], [data]);

  const fetchData = async () => {
    console.log(userData);

    const response = await axios
      .get("https://pp-api-desafio.herokuapp.com/agents")
      .catch((err) => console.log(err));

    if (response) {
      const data = response.data.items;

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
            accessor: "agent_id",
          },
          {
            Header: "Nome Completo",
            accessor: "name",
            Cell: (props: any) => (
              <Flex>
                <Center>
                  <Avatar size={"sm"} src={props.row.original.image} />
                  <Text ml={2}>{props.cell.row.cells[1].value}</Text>
                </Center>
              </Flex>

              // props.cell.row.cells[4].value
            ),
          },
          {
            Header: "Departamento",
            accessor: "department",
          },
          {
            Header: "Cargo",
            accessor: "role",
          },
          {
            Header: "Unidadde",
            accessor: "branch",
          },
          {
            Header: "Status",
            accessor: "status",
            Cell: (props) => (
              <Box
                borderRadius={15}
                w="70px"
                bg={
                  props.cell.row.cells[4].value === "active" ? "#B5F1DD" : "#EAEFED"
                }
              >
                <Text color={"#34423D"} textAlign="center">
                  {props.cell.row.cells[4].value === "active" ? "Ativo" : "Inativo"}
                </Text>
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
