import {  Stack, HStack, useColorMode,IconButton, useColorModeValue, VStack, Heading, Text, StackDivider ,Button, EmailIcon, Flex} from "@chakra-ui/react"
import './App.css';
import data from './data'
import {useState} from "react"
import List from "./list"
import {FaTrash, FaSun,FaMoon } from "react-icons/fa"


const App=()=> {

  const [people, setPeople]= useState(data)

 let clearAll=()=>{
   setPeople([])
 }

 const { toggleColorMode, colorMode } = useColorMode()

 const bg = useColorModeValue("black.400", "red.200")
 const color = useColorModeValue("black", "white")

  return (
<VStack  bg={colorMode==="light"? "red.400": "teal.800"}  align="center" minH="100vh" w="100vw" justifyContent="center">

<VStack  p={4}>
<IconButton alignSelf="flex-end"
  variant="outline"
  colorScheme="teal"
  fontSize="20px"
  onClick={toggleColorMode}
  isRound color="white" bg= 'gray.800' borderColor="gray.700"  
    _hover={{
    bg: "gray.500"
   
  }}
  _active={{
    bg: "gray.800"
   
  }}
  _focus={{
    bg: "gray.800"
   
  }}
  icon={colorMode === 'light' ? <FaSun /> : <FaMoon />}
/></VStack>

    <VStack
     w={["100%", "80%", "70%","50%" ]}  
    bg={colorMode==="light"? "white": "gray.700"} boxShadow="2xl"  rounded="lg"  p="6">

  <Text
  fontSize={[ 20, 25, 30, 35] } color={color}
  fontWeight="25px">
  Birthday Remainder
  </Text>
    <List people={people} />

  
  <Button onClick={clearAll}
   leftIcon={<FaTrash/>} >
    Clear all
  </Button>
    {!people.length ? <Text mt="4" fontWeight= "medium">NO birthday today</Text>: null}

</VStack>



    </VStack>
  );
}



export default App;
