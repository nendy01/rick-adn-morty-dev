import { Badge, Box, Center, Grid, Heading, Image, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'


//console.log(getLocalstorage);
const OnlyCharacter = ({ character }) => {
      const getLocalstorage = JSON.parse(localStorage.getItem("favorites")) || []
      const [favorites, setFavorites] = useState(getLocalstorage)
      const [isfavorite, setIsfavorite] = useState(false)

      const { image, name, gender, status, location: { name: locationName }, species, type, id, created } = character

      const addToLocalstorage = (characterId) => {

            const cosa = JSON.parse(localStorage.getItem("favorites"))

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
            localStorage.setItem("favorites",JSON.stringify(filted))
            setFavorites(filted)
      }

      useEffect(() => {
            localStorage.setItem("favorites", JSON.stringify(favorites))
      }, [favorites])

      useEffect(() => {
            if (favorites.includes(id)) setIsfavorite(true)
      }, [])

      return (
            <Center>
                  <Box textAlign="left" maxW="300px">
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

            </Center>
      )
}

export default OnlyCharacter