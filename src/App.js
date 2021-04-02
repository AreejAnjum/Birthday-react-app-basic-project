import {  Stack, HStack, VStack, Heading,Text, StackDivider ,Button, EmailIcon} from "@chakra-ui/react"
import './App.css';
import data from './data'
import {useState} from "react"
import List from "./list"
import {FaTrash} from "react-icons/fa"


const App=()=> {

  const [people, setPeople]= useState(data)

 let clearAll=()=>{
   setPeople([])
 }

  return (
    <VStack  bg="red.400" align="center" minH="100vh" w="100vw" justifyContent="center">

    <VStack
     w={["80%", "65%", "45%", "50%" ]}  
    bg="white" boxShadow="2xl"  rounded="lg"  p="6">

  <Text
  fontSize={[ 20, 25, 30, 35] }
  fontWeight="25px">
  Birthday Remainder
  </Text>
    <List people={people} />

  
  <Button onClick={clearAll}
   leftIcon={<FaTrash/>} color='black' bg="red.400" variant="solid"  mt="16">
    Clear all
  </Button>
    {!people.length ? <Text mt="4" fontWeight= "medium">NO birthday today</Text>: null}

</VStack>

    </VStack>
  );
}

export default App;
