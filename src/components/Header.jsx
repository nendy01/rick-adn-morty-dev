import { Box, Button, Flex, Icon, useColorMode, useColorModeValue, Spacer } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { CgSun, CgMoon } from 'react-icons/cg';

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
                  px={[, , "8"]}
                  borderBottomWidth="4px"
                  borderBottomColor="cyan.700">

                  <Flex gap={2} align="center">

                        <LinkChacra as={Link} to="/" fontSize="3xl" color={color} fontWeight="bold">
                              Rick and Morty
                        </LinkChacra>
                        <Box onClick={toggleColorMode} mt="2" h="6" >
                              {colorMode === 'light' ?
                                    <Icon as={CgMoon} w="6" h="6" /> : <Icon as={CgSun} w="6" h="6" />}
                        </Box>
                  </Flex>

                  <Flex direction="column">

                        <Flex as="nav" gap={2} fontWeight="semibold" >
                              <Link to="/characters">characters</Link>
                              <Link to="/about">about</Link>
                              <Link to="/favorite">favorite</Link>
                              <Link to="/advanced">advanced</Link>
                        </Flex>

                  </Flex>
            </Flex>
      );
};

export default Header;
