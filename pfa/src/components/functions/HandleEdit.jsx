import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
    Input,
    Stack,
    useToast,
  } from '@chakra-ui/react';
import axios from 'axios';
import { useState } from 'react';

  export const HandleEdit=({user})=> {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [creds,setCreds]=useState(user);
    const toast=useToast();

    const handleChange=(e)=>{
       const {name,value}=e.target;
       setCreds({...creds,[name]:value});
    }

const handleSubmit=async(id)=>{
    toast({
        title: 'User updated.',
        status: 'success',
        duration: 9000,
        isClosable: true,
      })
await axios.patch(`https://my-backend-7lt8.onrender.com/users/${id}`,creds);
window.location.reload();
}

    return (
      <>
        <Button onClick={onOpen} colorScheme='green'>Edit</Button>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Update Details</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
            </ModalBody>
            <Stack width='60%' margin='auto' padding='1rem' mt='3rem' boxShadow='dark-lg'>
            <Input
            placeholder="Enter Name"
            value={creds.name}
            type='text'
            name="name"
            onChange={handleChange}
            />
             <Input
            placeholder="Enter Email"
            value={creds.email}
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
            value={creds.address}
            type="text"
            name="address"
            onChange={handleChange}
            />
             <Input
            placeholder="Enter country"
            value={creds.country}
            type="text"
            name="country"
            onChange={handleChange}
            />
            </Stack>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
              </Button>
              <Button onClick={()=>handleSubmit(user._id)} colorScheme='cyan' variant='solid'>Submit</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }