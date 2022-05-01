import { Box, Button, Flex, Icon, useColorMode, useColorModeValue,Spacer } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { CgSun,CgMoon } from 'react-icons/cg';

import { Link as LinkChacra } from "@chakra-ui/react";

const Header = () => {
      const { colorMode, toggleColorMode } = useColorMode()

      const bg = useColorModeValue('gray.300', 'gray.800')
      const color = useColorModeValue('black', 'white')


      return (
            <Flex as="header"
                  flexDirection={["column", , "row"]}
                  justify={[, , "space-between"]}
                  align="center"
                  bg={bg}
                  py={["2", , "4"]}
                  px={["4", , "8"]}
                  borderBottomWidth="4px"
                  borderBottomColor="cyan.700"

            >
                  <LinkChacra as={Link} to="/" fontSize="3xl" color={color} fontWeight="bold">
                        Rick and Morty
                  </LinkChacra>

                  <Flex direction="column" /* w={["100%",,"30%"]}*/ alignSelf={["center",,,"flex-end"]}>

                        <Flex as="nav" gap={4}>
                              <Link to="/characters" d="inline-block">characters</Link>
                              <Link to="/about">about</Link>
                              <Link to="/favorite">favorite</Link>
                              <Link to="/advanced">advanced</Link>
                        </Flex>

                        <Box onClick={toggleColorMode} mt="2" h="6" alignSelf="flex-end">
                              {colorMode === 'light' ? 
                              <Icon as={CgMoon} w="6" h="6"/> : <Icon as={CgSun} w="6" h="6"/> }
                        </Box>

                  </Flex>
            </Flex>
      );
};

export default Header;
