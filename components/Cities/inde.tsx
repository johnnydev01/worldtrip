import { Box, Flex, Icon, Image, Text } from "@chakra-ui/react";
import React from "react";

export function Cities() {
    return (
        <Flex flexWrap="wrap" >
            <Box w={256} fontFamily="Barlow" mr="45px">
                <Image src="/images/london.svg"></Image>
                <Flex
                justify="space-between"
                p="6"
                align="center"
                border="1px"
                borderRadius="4px"
                borderColor="yellow.100"
                >
                    <Flex direction="column">
                        <Text fontWeight="600" fontSize="20px">Londres</Text>
                        <Text fontWeight="500" fontSize="16px" color="gray.300">Reino Unido</Text>
                    </Flex>
                    <Image src="/images/uk.svg"></Image>
                </Flex>
            </Box>
            <Box w={256} fontFamily="Barlow" mr="45px">
                <Image src="/images/paris.svg"></Image>
                <Flex
                justify="space-between"
                p="6"
                align="center"
                border="1px"
                borderRadius="4px"
                borderColor="yellow.100"
                >
                    <Flex direction="column">
                        <Text fontWeight="600" fontSize="20px">París</Text>
                        <Text fontWeight="500" fontSize="16px" color="gray.300">França</Text>
                    </Flex>
                    <Image src="/images/fr.svg"></Image>
                </Flex>
            </Box>
            <Box w={256} fontFamily="Barlow" mr="45px">
                <Image src="/images/rome.svg"></Image>
                <Flex
                justify="space-between"
                p="6"
                align="center"
                border="1px"
                borderRadius="4px"
                borderTop="none"
                borderColor="yellow.100"
                >
                    <Flex direction="column">
                        <Text fontWeight="600" fontSize="20px">Roma</Text>
                        <Text fontWeight="500" fontSize="16px" color="gray.300">Itália</Text>
                    </Flex>
                    <Image src="/images/it.svg"></Image>
                </Flex>
            </Box>
            <Box w={256} fontFamily="Barlow" >
                <Image src="/images/prague.svg"></Image>
                <Flex
                justify="space-between"
                p="6"
                align="center"
                border="1px"
                borderRadius="4px"
                borderTop="none"
                borderColor="yellow.100"
                >
                    <Flex direction="column">
                        <Text fontWeight="600" fontSize="20px">Praga</Text>
                        <Text fontWeight="500" fontSize="16px" color="gray.300">República Tcheca</Text>
                    </Flex>
                    <Image src="/images/cz.svg"></Image>
                </Flex>
            </Box>
            <Box w={256} fontFamily="Barlow" mt="48px">
                <Image src="/images/amsterdam.svg"></Image>
                <Flex
                justify="space-between"
                p="6"
                align="center"
                border="1px"
                borderRadius="4px"
                borderTop="none"
                borderColor="yellow.100"
                >
                    <Flex direction="column">
                        <Text fontWeight="600" fontSize="20px">Amseterdã</Text>
                        <Text fontWeight="500" fontSize="16px" color="gray.300">Holanda</Text>
                    </Flex>
                    <Image src="/images/nl.svg"></Image>
                </Flex>
            </Box>
        </Flex>
    );
}