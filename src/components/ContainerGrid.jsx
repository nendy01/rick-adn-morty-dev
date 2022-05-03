import React, { useEffect, useState } from 'react'
import { Flex, Grid, Heading, Spinner, Text } from '@chakra-ui/react'
import Card from './Card'
import Pagination from './pagination/Pagination'
import { ResultsContext } from '../context/Resultscontext'



const ContainerGrid = ({ characters }) => {

  const [result, setResult] = useState({})
 // console.log(result);

  const [activePage, setActivePage] = useState(1)

  useEffect(() => {
    setResult({ loading: true })
    fetch(`https://rickandmortyapi.com/api/character/?page=${activePage}`)
      .then(res => res.ok ? res.json() : Promise.reject(true))
      .then(({ results, info }) => {
        setResult({ ...result, error: false, loading: false, results: results, info })
      })
      .catch(err => {
        setResult({ error: true, loading: false })
      })
  }, [activePage])

  const handleClick = (e) => {
    e.preventDefault();
    if (e.target.matches('.soy-numero')) {
      const page = parseInt(e.target.textContent)
      setActivePage(page)
    }
    if (e.target.matches('button[aria-label="next page"]') && e.target.disabled === false) {
      setActivePage(activePage + 1)
    }
    if (e.target.matches('button[aria-label="prev page"]') && e.target.disabled === false) {
      setActivePage(activePage + 1)
    }
  }

  return (
    <>
      {result.error && <Heading>no hay personajes</Heading>}
      {result.loading && <Spinner
        thickness='4px'
        speed='0.65s'
        emptyColor='gray.200'
        color='green.700'
        size='xl'
        d="inline-block"
        mx="auto"
      />}
      {result.results &&
        <>
          <Flex mx="auto" onClick={handleClick} mt="4">
            <Pagination
              activePage={activePage}
              pages={result.info.pages} />
          </Flex>

          {result.info && <Text mt="2" textAlign="left" fontWeight="semibold">total: {result?.info.count}</Text>}

          <Grid templateColumns={["1fr ", "1fr 1fr ", "1fr 1fr 1fr", "1fr 1fr 1fr 1fr"]}
            gap={6} w="100%" mx="" my="20" overflowY="hidden" rowGap={8}>
            {result.results.map(character => <Card character={character}
              key={character.id} />)}
          </Grid>

          <Flex mx="auto" onClick={handleClick} mb="4">
            <Pagination activePage={activePage} />
          </Flex>
        </>}
    </>
  )
}

export default ContainerGrid