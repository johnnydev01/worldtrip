import { Flex, Image, Text } from "@chakra-ui/react";

export function Header() {
    return (
        <Flex 
            as="header"
            h="100"
            maxWidth={1480}
            align="center"
            justify="center"
        >
            <Image src="/images/logo.svg"></Image>
        </Flex>
    );
}