import { Box, Spinner, useColorModeValue} from '@chakra-ui/react'
import React, { useContext, useEffect, useState } from 'react'
import ContainerGrid from '../components/ContainerGrid'
import { ResultsContext } from '../context/Resultscontext'


const Home = () => {
  const {result} = useContext(ResultsContext) 

  const bg = useColorModeValue('white', 'gray.800')
  const color = useColorModeValue('black', 'white')

  return (
    <Box d="flex" flexGrow="1" flexDir="column" align="center" mx="auto"
     justifyContent="center" minW="100%" maxW="100%" overflow="hidden" bg={bg} color={color}>

      {result.loading && <Spinner
        thickness='4px'
        speed='0.65s'
        emptyColor='gray.200'
        color='green.700'
        size='xl'
        d="inline-block"
        mx="auto"
      />} 
      {result.error && <p>error try again</p>}
      { <ContainerGrid
        characters={result.results}
        info={result.info}
         /> }
    </Box>
  )
}

export default Home