import { Center, Text, useColorModeValue, VStack } from '@chakra-ui/react'
import React from 'react'
import Socials from './Socials'



const Footer = () => {
  const bg = useColorModeValue('gray.300', 'gray.800')
  const color = useColorModeValue('black', 'white')

  return (
    <VStack as="footer" p="2" borderTopColor="cyan.700" borderTopWidth="4px" bg={bg} color={color}>
        <Text fontWeight="semibold">Website create by <Text as="a" target="_blank" href='https://www.linkedin.com/in/juliotorres2001/'
          fontWeight="bold">@Julio Torres</Text></Text>
        <Socials/>
    </VStack>
  )
}

export default Footer