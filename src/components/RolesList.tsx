import React, { useEffect, useMemo, useState } from "react";

import { Avatar, Box, Center, Checkbox, Flex, Text } from "@chakra-ui/react";
import { AiFillEye } from "react-icons/ai";
import { FaTrashAlt } from "react-icons/fa";
import axios from "axios";
import { Link } from "react-router-dom";
import { BsDownload, BsEye } from "react-icons/bs";
import { CustomTable } from "./CustomTable";

const RolesList = () => {
  const [data, setData] = useState([]);

  const userData = useMemo(() => [...data], [data]);

  const fetchData = async () => {
    console.log(userData);

    const response = await axios
      .get("https://pp-api-desafio.herokuapp.com/roles")
      .catch((err) => console.log(err));

    if (response) {
      const data = response.data.roles;

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
        Header: "Cargo",
        accessor: "name",
      },
      {
        Header: "Departamento",
        accessor: "departament",
      },
      {
        Header: "Colaboradores",
        accessor: "agents_quantity",
        // isNumeric: true,
      },
      {
        id: "ghjghjhg",
        width: 25,
        Cell: ({ row }: any) => {
          return <h1></h1>;
        },
      },
      {
        id: "gdfgdg",
        width: 25,
        Cell: ({ row }: any) => {
          return <h1></h1>;
        },
      },
      {
        id: "gdfdgdg",
        width: 25,
        Cell: ({ row }: any) => {
          return <h1></h1>;
        },
      },
      {
        id: "gdqfçgdg",
        width: 25,
        Cell: ({ row }: any) => {
          return <h1></h1>;
        },
      },
      {
        id: "gdqlfgdg",
        width: 25,
        Cell: ({ row }: any) => {
          return <h1></h1>;
        },
      },
      {
        id: "gdffqfgdkg",
        width: 25,
        Cell: ({ row }: any) => {
          return <h1></h1>;
        },
      },

      {
        id: "2",
        Cell: ({ row }: any) => (
          <Box cursor="pointer">
            {/* <Link href={`role/${row.index + 1}`}> */}
            <BsEye fontSize="26px" color={"gray"} />
            {/* </Link> */}
          </Box>

          // props.cell.row.cells[4].value
        ),
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

export default RolesList;
