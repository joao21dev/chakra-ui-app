import React, { useState } from "react";
import { useAsyncDebounce } from "react-table";

import {
  Flex,
  Box,
  Text,
  Stack,
  InputGroup,
  InputLeftElement,
  Input,
  ChakraProvider,
} from "@chakra-ui/react";
import { FiSearch } from "react-icons/fi";

export function GlobalFilter({
  preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter,
}) {
  const count = preGlobalFilteredRows.length;
  const [value, setValue] = useState(globalFilter);
  const onChange = useAsyncDebounce((value) => {
    setGlobalFilter(value || undefined);
  }, 300);

  return (
    <Flex>
      <Box m={15} mt="3%">
        <Stack>
          {" "}
          <Flex>
            {" "}
            <InputGroup w="880px">
              <InputLeftElement
                h="52px"
                pointerEvents="none"
                children={<FiSearch color="gray.300" />}
              />
              <Input
                h="52px"
                border="2px"
                type="text"
                bg="white"
                borderRadius="15px"
                value={value || ""}
                onChange={(e) => {
                  setValue(e.target.value);
                  onChange(e.target.value);
                }}
                // placeholder={`${count} resultado...`}
                placeholder="Filtrar resultados"
              />
            </InputGroup>
          </Flex>
        </Stack>
      </Box>
    </Flex>
  );
}
