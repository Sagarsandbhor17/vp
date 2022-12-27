import {Button, Heading, Input, Stack, useToast} from "@chakra-ui/react"
import { useState } from "react";
import { HandleSubmit } from "./functions/HandleSubmit";

export const Add=()=>{
    const [creds,setCreds]=useState();
     const toast=useToast();
const handleChange=(e)=>{

const {name,value}=e.target;
setCreds({...creds,[name]:value});

}
    return(<div>
        <Heading mt='1rem' color='red' fontFamily='sans-serif' fontWeight='bold'>Add User</Heading>
        <Stack width='60%' margin='auto' padding='1rem' mt='3rem' boxShadow='dark-lg'>
            <Input
            placeholder="Enter Name"
            type='text'
            name="name"
            onChange={handleChange}
            />
             <Input
            placeholder="Enter Email"
            type='text'
            name="email"
            onChange={handleChange}
            />
             <Input
            placeholder="Enter date of birth"
            type="date"
            name="dob"
            onChange={handleChange}
            />
             <Input
            placeholder="Enter address"
            type="text"
            name="address"
            onChange={handleChange}
            />
             <Input
            placeholder="Enter country"
            type="text"
            name="country"
            onChange={handleChange}
            />
            <Button colorScheme='purple' onClick={()=>HandleSubmit(creds,toast)} >Add</Button>

        </Stack>
        
    </div>)
}