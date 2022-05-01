import { AspectRatio, Box, Flex, Heading, Image, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import rickandmorty from "../assets/imgrickandmorty.png"
import Header from '../components/Header';

import { Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Home = () => {
   
  const bg = useColorModeValue('white', 'gray.800')
  const color = useColorModeValue('black', 'white')

  return (
    <Box as="article" >
            <Flex direction={["column",,,"row"]} p={["8",,"12"]} 
            align={[,,,"center"]} bg={bg} color={color}>
                  <Box>
                        <Heading as="h1" color="cyan.700" fontSize={["3xl",,"5xl"]}>Rick and Morty wiki.</Heading>
                        <Heading as="p" mb="8" mt="4" minW={[,,"50%"]}>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                         Amet, a sit voluptatum, nobis at consequuntur maiores similique,
                          id blanditiis repellendus ex.</Heading>
                          
                        <Link
                        as={RouterLink} 
                        to="/characters" bg="cyan.700" 
                        px="8" py="4" color="white"
                        fontWeight="semibold">characters</Link>
                  </Box>
                  <Image src={rickandmorty} alt='naruto' 
                  objectFit='cover' boxSize="600px" minW={[,,"50%"]}/>
            </Flex>
    </Box>
  )
}

export default Home