import { Box, Flex, Icon, Image, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { FiChevronLeft } from 'react-icons/fi';

export function Header() {
    const { asPath } = useRouter();

    return (
        <Flex 
            as="header"
            h="100"
            maxWidth={1480}
            align="center"
        >   
            {asPath === '/continent' && (
                <Box position="absolute" ml="36">
                    <Link href="/">
                        <Icon cursor="pointer" as={FiChevronLeft} w="32px" h="32px"></Icon>
                    </Link>    
                </Box>
            )}
            <Flex w="100%" justify="center">
                <Link href="/">
                    <a>
                        <Image src="/images/logo.svg"></Image>        
                    </a>
                </Link>
            </Flex>
        </Flex>
    );
}