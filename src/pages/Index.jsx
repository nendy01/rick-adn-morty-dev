import { Box, Code, Flex, Heading, Image, Text, Tooltip, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import rickandmorty from "../assets/imgrickandmorty.png"

import { Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Home = () => {

  const bg = useColorModeValue('white', 'gray.800')
  const color = useColorModeValue('black', 'white')

  return (
    <Box as="article" >
      <Flex direction={["column", , , "row"]} p={["2", , "8", "12"]}
        align={[, , , "center"]} bg={bg} color={color}>
        <Box>
          <Heading as="h1" color="cyan.700" fontSize={["3xl", , "5xl"]} mt="4">Rick and Morty wiki.</Heading>

          <Heading as="p" my={["4",,"8"]} minW={[, , "50%"]} mb="8">
          This is a Rick and Morty wiki page, created using the "Rick and Morty API"
            was created with practical fines not for profit purposes.
            <Text as="span" d="block" fontWeight="normal" fontSize="1rem" mt="2">
              <Code mt="2">React-js v.18</Code> / <Code>Vite-js</Code> / <Code>styled-componets</Code> / <Code>chakra-ui</Code> / <Code>react-router-dom v.6</Code> / <Code>react-icons</Code> / <Code>etc.</Code>
            </Text>
          </Heading>

          <Link
            as={RouterLink}
            to="/characters" bg="cyan.700"
            px="8" py="4" color="white"
            fontWeight="semibold">characters</Link>
        </Box>
        <Tooltip label="morty visit us, good trip" placement="top" bg="cyan.700"
          fontWeight="semibold" color={color}
        >
          <Image src={rickandmorty} alt='naruto' mt="4" title='nos visitan morty'
            objectFit='cover' boxSize="600px" minW={[,,"50%"]} />
        </Tooltip>
      </Flex>
    </Box>
  )
}

export default Home