import React from 'react'
import {HStack,Stack, VStack, Avatar, Text} from "@chakra-ui/react"

const list = (props) => {
    return (
        <Stack spacing="4">
        {props.people.map((eachperson)=>{
            let {id, name, age, image} =eachperson
            return(
        <HStack mt="2rem" spacing=" 8"key={id}  >
        <Avatar mt="4" src={image} 
            loading="lazy" size="lg"
        />
        <VStack ml="4">
            <Text fontWeight="bold">{name}</Text>
            <Text>{age}</Text>
        </VStack>
        </HStack>
        )
           
        })}
       
        
        </Stack>
    )
}

export default list
