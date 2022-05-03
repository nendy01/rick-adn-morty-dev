import { Box, Heading, Image, Button, Grid, GridItem, Text, Avatar, Flex } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'


const RowCharacter = ({character,forDelete,removeToLocalstorage}) => {

      const {name,image,id,status,species,gender} = character

  return (
      <Grid templateColumns='repeat(5, 1fr)' justifyItems="center" alignItems="center" shadow="xl" mb="6" p="2">
            <Flex maxW="100%" direction="column" align="center">
                  <Avatar src={image} size="2xl" mx="auto" borderRadius="50%"/>
                  <Heading as="h3" fontSize={["lg",,,"2xl","3xl"]} 
                   width="100" mx="auto" color="pink.500" mt="2" textAlign="center">{name}</Heading>
            </Flex>
            <GridItem as="ul" colSpan="3" w="100%" d={[,,'flex']}
             justifyContent="space-between" textAlign="center" px="8" >
                  <Text as="li" listStyleType="none" fontWeight="semibold" >{gender}</Text>
                  <Text as="li" listStyleType="none" fontWeight="semibold" >{species}</Text>
                  <Text as="li" listStyleType="none" fontWeight="semibold" >{status}</Text>
            </GridItem>
            {forDelete ?
                  <Button bg="red.500" onClick={() => removeToLocalstorage(id)}>delete</Button> : 
                  <Button bg="teal" as={Link} to={`/characters/${id}`} color="white">watch</Button>
            }
      </Grid>
  )
}

export default RowCharacter