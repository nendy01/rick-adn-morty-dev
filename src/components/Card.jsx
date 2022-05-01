import { Badge, Button, GridItem, Heading, Image, Text, useColorModeValue } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const Card = ({ character }) => {

    const { image, name, gender, species, status, id } = character

    return (
        <GridItem w='90%' mx="auto" pl="4" textAlign="left" boxShadow='xl'>
            <Image w="150" src={image} alt={name} h="150" rounded="50%" mx="auto" />
            <Heading as="h3" fontSize="xl" my="2">{name}</Heading>
            <Text> <Text as="span" fontWeight="bold">gender:</Text> {gender}</Text>
            <Text my="1"><Text as="span" fontWeight="bold">species:</Text> {species}</Text>
            {
                status === "unknown" ? <Badge>{status}</Badge> :
                    status === "Dead" ? <Badge colorScheme="red">{status}</Badge> :
                        status === "Alive" && <Badge colorScheme="green" >{status}</Badge>
            }
            <Button as={Link} to={`/characters/${id}`}
                colorScheme="pink"
                variant='solid'
                d="flex"
                my="2" mx="auto"
                w="20"
                textAlign='center'>Watch</Button>
        </GridItem>
    )
}

export default Card