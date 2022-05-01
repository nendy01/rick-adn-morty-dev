import { Container, Flex } from '@chakra-ui/react'
import Layout from './components/Layout'
import ResultsProvider from './context/Resultscontext'

const App = () => {

  return (
    <ResultsProvider>
      <Container d="flex" minH="100vh" flexDir="column"
       justifyContent="space-between" maxW="1400px"
        mx="auto" borderWidth="2" 
      >
        <Layout />
      </Container>
    </ResultsProvider>
  )
}

export default App
