import { Text } from "@chakra-ui/react"
import { NavLink } from "react-router-dom"
export const Navbar=()=>{
    const active={color:"black"}
    const noActive={color:"white"}
return (<>
       <div style={{display:'flex',justifyContent:"space-around",padding:'10px',backgroundColor:'violet',position:'sticky',top:'0'}}>
       <NavLink to="/" style={({isActive})=>isActive?active:noActive} >
       <Text fontWeight='bold' >Add Profile</Text>
        </NavLink>
        <NavLink to="/page1" style={({isActive})=>isActive?active:noActive} >
        <Text fontWeight='bold' >Page 1</Text>
            </NavLink>
        <NavLink to="/page2" style={({isActive})=>isActive?active:noActive} >
        <Text fontWeight='bold' >Page 2</Text>
            </NavLink>     
    </div>
    
    </>)
}