import { Box, Flex, Image, Text, Icon, Tooltip  } from "@chakra-ui/react";
import React from "react";
import { Cities } from "../../components/Cities/inde";
import { Header } from "../../components/Header";
import { FiAlertCircle } from 'react-icons/fi';

export default function Continent() {
    return (
        <>
            <Header />
            <Image w={1440}  h={500} src="/images/continent-banner-ue.png"></Image>
            <Flex mx="auto" maxWidth={1160} justify="center" mt="80px" align="center">
                <Box maxWidth={600} textAlign="justify" fontSize="24px">
                    A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
                </Box>

                <Flex  justify="space-between" ml={70} align="center" w={490}>
                    <Flex direction="column" align="center">
                        <Text  fontSize="48px" fontWeight="600" lineHeight="72px" color="yellow.100">50</Text>
                        <Text fontSize="24px">países</Text>
                    </Flex>
                    <Flex direction="column" align="center">
                        <Text  fontSize="48px" fontWeight="600" lineHeight="72px" color="yellow.100">60</Text>
                        <Text fontSize="24px">línguas</Text>
                    </Flex>
                    <Flex direction="column" align="center">
                        <Text  fontSize="48px" fontWeight="600" lineHeight="72px" color="yellow.100">27</Text>
                        <Flex align="center">
                            <Text mr="2" fontSize="24px">cidades +100</Text>
                            <Tooltip label="Hey, I'm here!" aria-label="A tooltip">
                                <span><FiAlertCircle/></span>
                            </Tooltip>

                        </Flex>
                    </Flex>
                </Flex>
            </Flex>

            <Flex mb="35px" mt="80px" mx="auto" maxWidth={1160} direction="column">
                    <Text mb="40px" fontWeight="500" fontSize="36px">Cidades +100</Text>
                    <Cities></Cities>
            </Flex>
           
        </>
        

    );
}