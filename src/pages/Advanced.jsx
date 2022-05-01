import {
      Alert,AlertIcon,
      Box, Button, ButtonGroup,
      Flex, FormControl, Icon, Input, InputGroup,
      InputLeftElement, Radio, RadioGroup, Select,
      Stack,Text,useColorModeValue
} from '@chakra-ui/react'

import { CgArrowLeft, CgArrowRight } from 'react-icons/cg';

import React, { useEffect, useId, useState } from 'react'
import RowCharacter from '../components/RowCharacter'

const Advanced = () => {
      const [result, setResult] = useState(false)
      const [search, setSearch] = useState({ status: "",name:"",gender:"",specie:"" })
      const {name,status,gender,specie} = search
      const [error, setError] = useState('')

      let species = [
            "Human", "Alien", "Humanoid",
            "Poopybutthole", "Mythological", "Unknown",
            "Animal", "Disease","Robot","Cronenberg","Planet",
          ];

      let genders = ["female", "male", "genderless", "unknown"];

      const bg = useColorModeValue('white', 'gray.800')
      const color = useColorModeValue('black', 'white')

      const makeFetch = (url) => {
            fetch(url)
                  .then(res => res.ok ? res.json() : Promise.reject())
                  .then(({ results, info }) => setResult({ results, info }))
      }

      useEffect(() => {
            
            if ((!name && !status && !gender && !specie )){
                  setResult({results:[]})
                  return
            }

            const url = `https://rickandmortyapi.com/api/character/?name=${search.name}&status=${search.status}&gender=${search.gender}&species=${specie}`
            fetch(url)
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
      }, [name,status,gender,specie])
      
      return (
            <Box width="100%" h="100%" flexGrow="1" px="4" bg={bg} color={color}>
                  <FormControl as="form" w={[, "50%", "25%"]}>
                        <InputGroup mt="2">
                              <InputLeftElement pointerEvents='none' children='🔍' />
                              <Input type='text'
                                    placeholder='search for name'
                                    _focus="border:none"
                                    _hover="border:none"
                                    borderWidth="2px"
                                    borderColor="cyan.700"
                                    name='name'
                                  /*   onKeyDown={(e) => setSearch({ ...search, name: e.target.value })} */
                                    onChange={(e) => setSearch({ ...search, name: e.target.value })}
                                    />

                        </InputGroup>
                        <Text as="label" fontSize="medium" fontWeight="semibold">status:</Text>
                        <RadioGroup>
                              <Stack direction='row'
                                    onChange={(e) => setSearch({ ...search, status: e.target.value })}>
                                    <Radio value='' defaultChecked>all</Radio>
                                    <Radio value='alive'>alive</Radio>
                                    <Radio value='dead'>dead</Radio>
                                    <Radio value='unknown'>unknown</Radio>
                              </Stack>


                        </RadioGroup>
                        <Text as="label" fontSize="medium" fontWeight="semibold">gender:</Text>
                        <RadioGroup>
                              <Stack direction='row'
                                    onChange={(e) => setSearch({ ...search, gender: e.target.value })}>
                                    <Radio value='' defaultChecked>all</Radio>
                                    {genders.map(gender => <Radio value={gender} key={useId()}>{gender}</Radio>)}
                              </Stack>
                        </RadioGroup>
                        <Text as="label" fontSize="medium" fontWeight="semibold">specie:</Text>
                        <Select size='sm' placeholder='select specie' onChange={(e) => setSearch({...search,specie:e.target.value})}>
                            {/*   <option disabled selected>select specie</option> */} 
                              {species.map(specie => <option value={specie} key={useId()}>{specie}</option>)}
                        </Select>
                       {/*  <Button mt={4} colorScheme='teal' type='submit'> Submit </Button> */}
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