import { Box, Image, Spinner } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import OnlyCharacter from '../components/OnlyCharacter';

const InfoCharacter = () => {
      const [result, setResult] = useState({})
      const {id} = useParams();
      
      useEffect(() => {
            setResult({loading:true})
            fetch(`https://rickandmortyapi.com/api/character/${id}`)
              .then(res => res.ok ? res.json() : Promise.reject(true))
              .then((character) => {
                setResult({...result,error:false,loading:false,character})
              })
              .catch(err =>{
             //   console.log(err)
                setResult({error:true,loading:false})
              })
        
          },[])

         // console.log(result.character);
      

  return (
      <Box d="flex" flexGrow="1" flexDir="column" align="center" justifyContent="center" 
      maxW="100%" overflow="hidden" minH="100%" >
      {result.loading && <Spinner
        thickness='4px'
        speed='0.65s'
        emptyColor='gray.200'
        color='green.700'
        size='xl'
        d="inline-block"
        mx="auto"
      /> }
      {result.error && <p>error try again</p>}
      {result.character && <OnlyCharacter character={result.character}/> }
    </Box>
  )
}

export default InfoCharacter