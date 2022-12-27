import axios from "axios";
import { GET_DATA_ERROR, GET_DATA_LOADING, GET_DATA_SUCCESS } from "./users.types"


export const getUsers=(page=1,name,size=10)=>async(dispatch)=>{
    dispatch({type:GET_DATA_LOADING});
    try{
        if(name===''){
            name=undefined
        }
        let res=await axios.get(`https://my-backend-7lt8.onrender.com/users?page=${page}&name=${name}`);
        let data=await res.data;
        dispatch({type:GET_DATA_SUCCESS,payload:data});
    }
    catch(e){
        dispatch({type:GET_DATA_ERROR})
    }
}