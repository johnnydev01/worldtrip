import { Box, Flex, HStack, Image, Text } from "@chakra-ui/react";

export function TravelTypes(){
    return (
        <Flex flexDir="column" justify="center" mx="auto" maxWidth={1160}>
            <HStack
              spacing="60px"
              mx="auto"
              h="145px"
              fontWeight="500"
              fontSize="24px"
            >
                <Box w="158px" align="center" justify="center" >
                    <Image src="/images/cocktail.svg"></Image>
                    <Text mt="6">vida noturna</Text>
                </Box>
                <Box w="158px" align="center" justify="center" >
                    <Image src="/images/surf.svg"></Image>
                    <Text mt="6">praia</Text>
                </Box>
                <Box w="158px" align="center" justify="center" >
                    <Image src="/images/building.svg"></Image>
                    <Text mt="6">moderno</Text>
                </Box>
                <Box w="158px" align="center" justify="center" >
                    <Image src="/images/museum.svg"></Image>
                    <Text mt="6">clássico</Text>
                </Box>
                <Box w="158px" align="center" justify="center" >
                    <Image src="/images/earth.svg"></Image>
                    <Text mt="6" >e mais...</Text>
                </Box>
            </HStack>
            <Box mt="20" mx="auto" >
                <Flex as="span" borderBottom="2px" borderColor="gray.900" w="90px" direction="column"></Flex>
            </Box>
        </Flex>
    );
}