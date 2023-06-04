import React from 'react'
import { Box, Container,Text } from "@chakra-ui/react";

const Homepage = () => {
  return (
    <Container maxW='x1' centerContent>
      <Box
        d='flex'
        justifyContent="center"
        p={3}
        bg={"white"}
        w="100%"
        m="40px 0 15 px 0"
        borderRadius="lg"
        borderWidth="1px"
        
      >
        <Text fontSize="4xl" fontFamily="work sans">Talk-A-Tive</Text>
      </Box>
      <Box bg="white" w="100%" p={4} borderrRadius="lg" borderWidth="1px"></Box>
   </Container>
  )
}

export default Homepage
