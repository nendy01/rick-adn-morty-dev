import { Box, Flex, Heading, Text, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import Socials from '../components/Socials'


const About = () => {

  const bg = useColorModeValue('white', 'gray.800')
  const color = useColorModeValue('black', 'white')

  return (
    <Flex flexGrow="1" p="10" bg={bg} color={color} direction="column">
      <Heading as="h2" mb="10">About us</Heading>
      <Flex w={["90%", , "50%"]} gap="4" direction="column" fontSize="1.2rem">
      <Text >Rick and Morty wiki, created with love.</Text>


      <Text >
        This is a rick and morty wiki where we have different types of searches
          such as page search searches, name, gender, species, status.
      </Text>

      <Text>
        I'm Julio Torres, a frontend developer specialized in javascript for its entire ecosystem.
      </Text>
      <Text >social networks, and website</Text>
      <Socials/>
      </Flex>
    </Flex>
  )
}

export default About