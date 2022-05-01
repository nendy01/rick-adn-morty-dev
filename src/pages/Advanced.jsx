import {
      Alert,
      AlertIcon,
      Box, Button, ButtonGroup,
      Flex, FormControl, Icon, Input, InputGroup,
      InputLeftElement, Radio, RadioGroup,
      Stack,
      Text,
      useColorModeValue
} from '@chakra-ui/react'

import { CgArrowLeft, CgArrowRight } from 'react-icons/cg';

import React, { useState } from 'react'
import RowCharacter from '../components/RowCharacter'

const Advanced = () => {
      const [result, setResult] = useState(false)
      const [nameCharacter, setnameCharacter] = useState({ status: "" })
      const [error, setError] = useState('')

      const bg = useColorModeValue('white', 'gray.800')
      const color = useColorModeValue('black', 'white')

      const makeFetch = (url) => {
            fetch(url)
                  .then(res => res.ok ? res.json() : Promise.reject())
                  .then(({ results, info }) => setResult({ results, info }))
      }

      const handleSubmit = (e) => {
            e.preventDefault();

            /* if (nameCharacter.name?.length <= 3) {
                  setResult(false)
                  setError("nombre muy corto")
            } */

            if (!nameCharacter.name) {
                  setError("ingrese un nombre")
                  setResult(false)
                  return
            }


            fetch(`https://rickandmortyapi.com/api/character/?name=${nameCharacter.name}&status=${nameCharacter.status}`)
                  .then(res => res.ok ? res.json() : Promise.reject("character not found"))
                  .then(({ info, results }) => setResult({ results, info }))
                  .catch(err => {
                        setError(err)
                        setResult({})
                        setTimeout(() => {
                              setError('')
                        }, 4000);
                  }
                  )
      }

      return (
            <Box width="100%" h="100%" flexGrow="1" px="4" bg={bg} color={color}>
                  <FormControl as="form" onSubmit={handleSubmit} w={[, "50%", "25%"]}>
                        <InputGroup mt="2">
                              <InputLeftElement pointerEvents='none' children='🔍' />
                              <Input type='text'
                                    placeholder='search for name'
                                    _focus="border:none"
                                    _hover="border:none"
                                    borderWidth="2px"
                                    borderColor="cyan.700"
                                    name='name'
                                    onChange={(e) => {
                                          setnameCharacter({ ...nameCharacter, name: e.target.value })
                                    }
                                    } />

                        </InputGroup>
                        <Text as="label" fontSize="medium" fontWeight="semibold">status:</Text>
                        <RadioGroup>
                              <Stack direction='row'
                                    onChange={(e) => setnameCharacter({ ...nameCharacter, status: e.target.value })}>
                                    <Radio value='' defaultChecked>all</Radio>
                                    <Radio value='alive'>alive</Radio>
                                    <Radio value='dead'>dead</Radio>
                                    <Radio value='unknown'>unknown</Radio>
                              </Stack>
                        </RadioGroup>
                        <Button mt={4} colorScheme='teal' type='submit'> Submit </Button>
                  </FormControl>

                  {error && <Alert status='error' mt={4}><AlertIcon />{error}</Alert>}

                  <ButtonGroup my="4" mx="auto" d="flex" justifyContent="center">
                        {result.info?.prev &&
                              <Button bg="pink.500" color="white"
                                    onClick={() => makeFetch(result.info.prev)}>
                                    <Icon as={CgArrowLeft} fontSize="1rem" w="8" h="8" /> prev
                              </Button>}
                        {result.info?.next &&
                              <Button bg="pink.500" color="white"
                                    onClick={() => makeFetch(result.info.next)}> next
                                    <Icon as={CgArrowRight} w="8" h="8" />
                              </Button>}
                  </ButtonGroup>
                  <Flex direction="column" mb="4" rowGap="4">
                        {result.results && result.results.map((character) => <RowCharacter character={character} key={character.id} />)}
                        {result.info && <p>total: {result.info.count}</p>}
                  </Flex>
            </Box>
      )
}

export default Advanced