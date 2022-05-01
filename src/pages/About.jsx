import { Box, Flex, Heading, Text, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import Socials from '../components/Socials'


const About = () => {

  const bg = useColorModeValue('white', 'gray.800')
  const color = useColorModeValue('black', 'white')

  return (
    <Flex flexGrow="1" p="10" bg={bg} color={color} direction="column">
      <Heading as="h2" mb="10">About us</Heading>
      <Box w={["90%", , "50%"]}>
      <Text >Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </Text>


      <Text my="4">
        Officia, cupiditate. Quod vitae sint voluptatem impedit,
        est eos pariatur blanditiis quo optio expedita ipsa tenetur
        eius fugiat in, eligendi, earum quos quam perferendis quas architecto.
      </Text>

      <Text mb="4">
        Velit quia non placeat ab dolor earum odit ad culpa ducimus cum,
        rem tenetur iusto veniam?
      </Text>
      <Socials/>
      </Box>
    </Flex>
  )
}

export default About