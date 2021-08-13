import { extendTheme } from '@chakra-ui/react';



export const theme = extendTheme({

    colors: {
        gray: {
            "900": "#47585B",
            "300": "#999999"
        },
        white: {
            "100": "#F5F8FA"
        },
        yellow: {
            "100": "#FFBA08"
        }

    },
    fonts: {
        heading: 'Poppins',
        body: 'Poppins',
    },
    styles: {
        global: {
            body: {
                bg: 'white.100',
                color: 'gray.900',
            }
        }
    }
})