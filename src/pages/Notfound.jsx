import { Button, Center, Flex, Image, LinkBox, Text } from '@chakra-ui/react'
import React from 'react'
//import { Link } from 'react-router-dom'

import { Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const NotFout = () => {
  return (
    <Flex direction='column' justify='center' align='center' grow="1" >
      <Image src="https://images.typeform.com/images/KfeBTiQSQ4/image/default-firstframe.png" alt='girl craying' rounded="3xl"></Image>
      <Text my='2' fontWeight='bold' fontSize='4xl'>Not Found</Text>
      
      <Link
          as={RouterLink} 
          to="/" bg="cyan.700" 
          px="8" py="4" color="white"
          fontWeight="semibold">back to home</Link>
    </Flex>
  )
}

export default NotFout