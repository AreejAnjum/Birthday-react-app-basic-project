
//here we are customizing the chakra provided components , using theme, theme extend and
//then providing theme to chakra provider 

import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
  components: {
    Button: {
      // 1. We can update the base styles
      baseStyle: {
        fontWeight: "bold", // Normally, it is "semibold"
        
      },
      // 2. We can add a new button size or extend existing
      sizes: {
        xl: {
          h: "56px",
          fontSize: "lg",
          px: "32px",
        },
      },
      // 3. We can add a new visual variant
      variants: {
        "with-shadow": {
          bg: "red.400",
          boxShadow: "0 0 2px 2px #efdfde",
        },
        // 4. We can override existing variants
        solid: (props) => ({
          bg: props.colorMode === "dark" ?  "teal.800" :"red.400" ,
          _hover: props.colorMode === "dark" ? {bg:"teal.700"} : {bg:"red.300"},
          _active: props.colorMode === "dark" ?{bg:"teal.800"} :{bg:"red.400"},
          _focus: props.colorMode === "dark" ? {outline:"yellow", bg:"teal.800"}:{border:"none", bg:"red.400"}
        }),
      },


    },
  },

    config : {
    initialColorMode: "light",
    useSystemColorMode: false,
  }
})

export default theme