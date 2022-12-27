import { GET_DATA_ERROR, GET_DATA_LOADING, GET_DATA_SUCCESS } from "./users.types"

const inState={
    loading:false,
    error:false,
    data:[]
}

export const userReducer=(state=inState,{type,payload})=>{

switch(type){
    case GET_DATA_LOADING:{return {...state,loading:true,error:false}}

    case GET_DATA_SUCCESS:{return {...state,loading:false,error:false,data:payload} }

    case GET_DATA_ERROR:{return {...state,loading:false,error:true}}

    default:{return state}
}

}