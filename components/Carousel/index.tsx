import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
    Navigation, Pagination
  } from 'swiper/core';
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import styles from './styles.module.scss';

import { Box, Flex, Image, Text } from "@chakra-ui/react";
import Link from "next/link";

export function Carrousel() {
    SwiperCore.use([Navigation,Pagination]);

    return(
        <Flex maxWidth={1240} mx="auto" align="center" mb="40px">
            <Swiper navigation={true} pagination={true} className={styles.sliderWrapper} >
                <SwiperSlide>
                    <Flex h="450px" justify="center" align="center" flexDir="column" >
                        <Box boxSize="6xl" mt="30" >
                            <Image src="/images/europe.png" ></Image>
                        </Box>
                        <Link href="/continent">
                            <Text cursor="pointer" fontWeight="700" fontSize="48px" color="white.100" position="absolute">Europa</Text>
                        </Link>
                        <Text fontWeight="700" fontSize="24px" color="white.100" position="absolute" mt="24" lineHeight="36px">O continente mais antigo</Text>
                    </Flex>
                </SwiperSlide>
                <SwiperSlide>
                <Flex h="450px" justify="center" align="center">2</Flex>
                </SwiperSlide>
                <SwiperSlide>
                <Flex h="450px" justify="center" align="center">3</Flex>
                </SwiperSlide>
            </Swiper>
        </Flex>
    );
}