import React from 'react'
import {HStack,Stack, VStack, Avatar, Text} from "@chakra-ui/react"

const list = (props) => {
    return (
        <Stack direction='column' justify='center' align='left' spacing="4">
        {props.people.map((eachperson)=>{
            let {id, name, age, image} =eachperson
            return(
        <HStack mt={12} spacing=" 8"key={id} alignContent="centre" >  
        <Avatar  src={image} 
            loading="lazy" size="lg"
        />
        <VStack ml="4" align='left'>
            <Text fontWeight="bold">{name}</Text>
            <Text>{age} years </Text>
        </VStack>
        </HStack>
        )
        
        })}
       
        
        </Stack>
    )
}

export default list
