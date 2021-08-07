import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { Header } from '../components/Header'
import { TravelTypes } from '../components/TravelType'

export default function Home() {
  return (
    <>
      <Header />
      <Image src="/images/banner.png" />
      <TravelTypes />
      <Flex w="100%" mx="auto" justify="center" textAlign="center"  my="52px">
        <Text  fontWeight="500" fontSize="36px">Vamos nessa? <br />Então escolha seu continente</Text>
      </Flex>
    </>
  )
}
