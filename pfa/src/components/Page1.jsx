import { Button, Flex, Input, Spinner, Table,TableContainer, Tbody, Td, Th, Thead, Tr, useToast } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getUsers } from "../redux/users/users.action";
import { HandleEdit } from "./functions/HandleEdit";
import "../components/styles/styles.css";
import {CSVLink} from 'react-csv';

export const Page1=()=>{
    const {data,error,loading}=useSelector(store=>store.users);
    const dispatch=useDispatch();
    const [page,setPage]=useState(1);
    const [q,setQ]=useState('');
    const [name,setName]=useState();
    const toast=useToast();
    const [ref,setRef]=useState(false);

    const handleDelete=async(id)=>{
        toast({
            title: 'User Deleted.',
            status: 'success',
            duration: 9000,
            isClosable: true,
          })
          setRef(!ref)
    return await axios.delete(`https://my-backend-7lt8.onrender.com/users/${id}`);
    
    }

    useEffect(()=>{
        dispatch(getUsers(page,name))
    },[page,ref,name])

    const handleSearch=(name)=>{
       setName(name);
    }
    return(<div>
      {loading?<Spinner  thickness='4px' color='red' mt='1rem' mb='1rem' />:""}
      <CSVLink data={data} ><Button mt='2rem'>Download CSV</Button></CSVLink>
      <Flex width='60%' margin='auto' mt='1rem'>
        <Input
        onChange={(e)=>setQ(e.target.value)}
        placeholder="Search by name"
        />
        <Button onClick={()=>handleSearch(q)} >{q===''?<p>Get All</p>:<p>Search</p>}</Button>
      </Flex>
        <TableContainer mt='1rem'>
  <Table variant='striped' colorScheme='cyan' border='2px'>
    <Thead bg='green'>
      <Tr>
        <Th color='white'>Name</Th>
        <Th color='white'>Email</Th>
        <Th color='white'>Address</Th>
        <Th color='white'>Date of birth</Th>
        <Th color='white'>Country</Th>
        <Th color='white'>Update</Th>
        <Th color='white'>Delete</Th>
      </Tr>
    </Thead>
    <Tbody>
      
      {data.map(e=>{
      const date = new Date(e.dob);

      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      const day = date.getDate();
       return  <Tr key={e._id}>
            <Td>{e.name}</Td>
            <Td>{e.email}</Td>
            <Td>{e.address}</Td>
            <Td>{`${day}-${month}-${year}`}</Td>
            <Td>{e.country}</Td>
            <Td><HandleEdit user={e} re={ref} setRef={setRef}/></Td>
            <Td><Button onClick={()=>handleDelete(e._id)} colorScheme='red'>Delete</Button></Td>
        </Tr>}
        )}

    </Tbody>
  </Table>
</TableContainer>
<Flex gap={5} width='60%' margin='auto' padding='1rem' justifyContent='center'>
        <Button disabled={page===1} onClick={()=>setPage(page-1)}>Prev</Button>
        <Button color='red' bg='white'>{page}</Button>
        <Button onClick={()=>setPage(page+1)}>Next</Button>
        </Flex>
    </div>)
}