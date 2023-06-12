/* eslint-disable @typescript-eslint/no-unused-vars */
import { mode } from '@chakra-ui/theme-tools'
import {ColorMode, ComponentStyleConfig, DeepPartial, extendTheme, withDefaultProps, withDefaultColorScheme} from "@chakra-ui/react"
import { MantineThemeOverride } from "@mantine/core";


export const ConstKunTheme = {
    primaryColor: "#f08234",
    primaryHoverColor: "yellow.500",
    grayColor: "gray.400",
    secondaryColor: "yellow.300",
    pageSize: "container.md",
    bgColor: '#f1f5f9'
}


export const c = ConstKunTheme.primaryColor

export const primarySchema = 'orange';

const Text:ComponentStyleConfig ={
    baseStyle: {

    },
};

const Button: ComponentStyleConfig = {
    baseStyle: {
        fontWeight: 'bold',
        textTransform: 'uppercase',
        borderRadius: 'base', // <-- border radius is same for all variants and sizes
    },
    // Two sizes: sm and md
    sizes: {
        sm: {
            fontSize: 'sm',
            px: 4, // <-- px is short for paddingLeft and paddingRight
            py: 3, // <-- py is short for paddingTop and paddingBottom
        },
        md: {
            fontSize: 'md',
            px: 6, // <-- these values are tokens from the design system
            py: 4, // <-- these values are tokens from the design system
        },
    },
    // Two variants: outline and solid
    variants: {
        outline: {
            border: '2px solid',
        },
        solid: {
            // bg: 'purple.500',
            color: 'white',
        },
    },
    // The default size and variant values
    defaultProps: {
        size: 'sm',
        variant: 'outline',
    },
}

const FormLabel = {
    baseStyle: {


    },
    defaultProps: {

        size: 'sm'
    }
}

const Input = {
    baseStyle: {
        field: {
            fontSize: 'md',
            '&:hover': {
                // backgroundColor: 'green.500 !important',
            },
            '&:focus': {
                borderColor: `${c} !important`,
                boxShadow: 'none !important',
            }
        }
    },

    defaultProps: {
        _placeholder:{ opacity: 1, color: 'gray.500' },
        // variant: "outline",
        colorScheme: 'orange',
        _hover: { backgroundColor: 'purple !important' },
    },
}
const Textarea = {
    baseStyle: {
        // backgroundColor: 'yellow !important',
        fontSize: 'md',
        colorScheme: 'orange',
        // '&:hover': {
        //     backgroundColor: 'green !important',
        // },
        '&:focus': {
            borderColor: `${c} !important`,
            boxShadow: 'none !important',
        }
    },
    // The default variant value
    defaultProps: {
        _hover: { backgroundColor: 'purple !important' },
        // _focus: {
        //     backgroundColor: 'purple !important',
        // },
        variant: "outline",
        colorScheme: 'orange',
    },
}

const Card = {
    // The styles all Cards have in common
    baseStyle: {
        display: "flex",
        flexDirection: "column",
        background: "white",
        alignItems: "center",
        gap: 6,
    },
    // Two variants: rounded and smooth
    variants: {
        rounded: {
            padding: 8,
            borderRadius: "xl",
            boxShadow: "xl",
        },
        smooth: {
            padding: 6,
            borderRadius: "base",
            boxShadow: "md",
        },
    },
    // The default variant value
    defaultProps: {
        variant: "smooth",
    },
}

const config = {
    initialColorMode: "light" as ColorMode,
    useSystemColorMode: false,
}

// const c = "#F6AD55"
    // "#F6AD55"
// 2. Call `extendTheme` and pass your custom values
// @ts-ignore
// @ts-ignore
export const chakraTheme = extendTheme(
    withDefaultColorScheme({ colorScheme: primarySchema }),
    withDefaultProps({
        defaultProps: {
            size: 'sm'
        }
    }),
    {
    config,
        cssVarPrefix: 'ck',
        styles: {
            global: (props:Record<string, string>) => ({
                body: {
                    color: mode('black', 'whiteAlpha.900')(props),
                },
            }),
        },
    components: {
        Text,
        Textarea,
        Button,
        FormLabel,
        Card,
        Input,
    },
    colors: {
        orange: {
            50: "#FFFAF0",
            100: "#FEEBC8",
            200: "#FBD38D",
            300: "#F6AD55",
            400: "#ED8936",

            500: "#f08234",
            600: "#de6d28",

            700: "#9C4221",
            800: "#7B341E",
            900: "#652B19",
        }
    },

})

export const mThem: MantineThemeOverride=  {
    // Theme is deeply merged with default theme
    colorScheme: 'light' as  DeepPartial<"light" | "dark"> | undefined,

    primaryColor: primarySchema,
    colors: {
        'orange':
            [ "#FFFAF0","#FEEBC8", "#FBD38D", "#F6AD55", "#ED8936", "#f08234", "#de6d28", "#9C4221", "#7B341E", "#652B19"],
    },

    shadows: {
        // other shadows (xs, sm, lg) will be merged from default theme
        md: '1px 1px 3px rgba(0,0,0,.25)',
            xl: '5px 5px 3px rgba(0,0,0,.25)',
    },

    headings: {
        fontFamily: 'Roboto, sans-serif',
            sizes: {
            h1: { fontSize: 30 },
        },
    },
}

