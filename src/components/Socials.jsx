import { Flex, Icon, Link } from '@chakra-ui/react'
import React from 'react'

import { BsLinkedin } from 'react-icons/bs';
import { ImGithub } from 'react-icons/im';
import { BiLinkExternal } from 'react-icons/bi';





const Socials = () => {
  return (
    <Flex gap="2">
          <Link href='https://www.linkedin.com/in/juliotorres2001/' target="_blank">
          <Icon as={BsLinkedin} w="6" h="6" color="#0e76a8"/>
          </Link>
          <Link href='https://github.com/nendy01' target="_blank">
          <Icon as={ImGithub} w="6" h="6" color="black"/>
          </Link>
          <Link href='https://julio-portfolio.netlify.app' target="_blank" color="black">
          <Icon as={BiLinkExternal} w="6" h="6" color="blue.800" />
          </Link>
    </Flex>
  )
}

export default Socials