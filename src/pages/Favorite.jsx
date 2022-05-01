import { Alert, AlertIcon, Box, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import RowCharacter from '../components/RowCharacter'

import { getLocalstorage,setLocalstorage} from '../helpers/localstprage'


const Favorite = () => {
  const getLocal = getLocalstorage("favorites") || []
  const [favorites, setFavorites] = useState(getLocal)
  const [charactersId, setCharactersId] = useState([])

  const removeToLocalstorage = (characterId) =>{
    const filted = favorites.filter(id => id != characterId)
    setLocalstorage("favorites",filted)

    setFavorites(filted)

    const viewfilted = charactersId.filter(character => character.id !== characterId)
    setCharactersId(viewfilted)
}

  useEffect(() => {
    setLocalstorage("favorites", favorites)
}, [favorites])

useEffect(() => {

  if (favorites.length <= 0) return

const idsCharacter = favorites.join(',')

  fetch(`https://rickandmortyapi.com/api/character/${idsCharacter}`)
  .then(res => res.ok ? res.json() : Promise.reject("hubo un error"))
  .then(result => {
    Array.isArray(result) ? setCharactersId(result) : setCharactersId([result])
  })
}, [])


  return (
    <Box flexGrow={1} mt="4">
      {favorites.length <= 0 ?
       <Alert status='info'><AlertIcon />not characters</Alert> 
       : <>
      
        {charactersId.map(character => <RowCharacter character={character} key={character.id}
         forDelete={true} removeToLocalstorage={removeToLocalstorage}/>)} 
        </>
    }
    </Box>
  )
}

export default Favorite