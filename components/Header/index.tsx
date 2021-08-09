import { Flex, Image, Text } from "@chakra-ui/react";
import Link from "next/link";

export function Header() {
    return (
        <Flex 
            as="header"
            h="100"
            maxWidth={1480}
            align="center"
            justify="center"
        >
            <Link href="/">
                <a>
                    <Image src="/images/logo.svg"></Image>        
                </a>
            </Link>
        </Flex>
    );
}