import { Badge, Box, Button, Heading, Icon, Image, Text, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import {CgArrowLeft} from 'react-icons/cg'

import {getLocalstorage,setLocalstorage} from '../helpers/localstprage'


//console.log(getLocalstorage);
const OnlyCharacter = ({ character }) => {
      const getLocal = getLocalstorage("favorites") || []
      const [favorites, setFavorites] = useState(getLocal)
      const [isfavorite, setIsfavorite] = useState(false)

      const { image, name, gender, status, location: { name: locationName }, species, type, id, created } = character

      const addToLocalstorage = (characterId) => {

            const cosa = getLocalstorage("favorites")

            if (cosa.includes(characterId)) {
                  setIsfavorite(true)
                  return
            }
            setIsfavorite(true)
            setFavorites([...favorites, characterId])
      }

      const removeToLocalstorage = (characterId) =>{
            setIsfavorite(false)
            const filted = favorites.filter(id => id != characterId)
            setLocalstorage("favorites",filted)
            setFavorites(filted)
      }

      useEffect(() => {
            setLocalstorage("favorites", favorites)
      }, [favorites])

      useEffect(() => {
            if (favorites.includes(id)) setIsfavorite(true)
      }, [])

      return (
            <VStack>
                  <Box textAlign="left" maxW="300px">
                  <Button as={Link} to="/characters" mb="2">
                  <Icon as={CgArrowLeft} fontSize="1rem" w="8" h="8" />
                        back</Button>
                        <Image src={image} alt={name} w="300px" h="300px" bg="dark:black" />
                        <Heading as="h2" size="lg" my="4">{name}</Heading>

                        <Text as="p" ><Text as="span" fontWeight="bold">gender: </Text>{gender}</Text>

                        <Text as="p" my="4"><Text as="span" fontWeight="bold">location: </Text>{locationName}</Text>

                        <Text as="p" > <Text as="span" fontWeight="bold">species: </Text>{species}</Text>

                        {type && <Text as="p" mt="4"> <Text as="span" fontWeight="bold">type: </Text>{type}</Text>}

                        <Text as="p" my="4"> <Text as="span" fontWeight="bold">id: </Text>{id}</Text>
                        <Text as="p" mb="4"> <Text as="span" fontWeight="bold">created: </Text>{created}</Text>


                        {
                              status === "unknown" ? <Badge>{status}</Badge> :
                                    status === "Dead" ? <Badge colorScheme="red">{status}</Badge> :
                                          status === "Alive" && <Badge colorScheme="green" >{status}</Badge>
                        }
                        <br />
                        {isfavorite ?
                              <Box p="4" mt={4} bg="red.500" d="inline-flex"
                                    onClick={() => removeToLocalstorage(id)}
                              >remove favorite</Box> :

                              <Box p="4" mt={4} bg="green.600" d="inline-flex"
                                    onClick={() => addToLocalstorage(id)}
                              >add favorite</Box> 

                        }
                  </Box>

            </VStack>
      )
}

export default OnlyCharacter