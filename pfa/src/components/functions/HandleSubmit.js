import axios from "axios";
export const HandleSubmit=async(creds,toast)=>{

if(creds.name===undefined||creds.email===undefined||creds.address===undefined||creds.dob===undefined||creds.country===undefined){
    return toast({
        title: 'Something is blank.',
        description: "Please fill all the fields.",
        status: 'error',
        duration: 9000,
        isClosable: true,
      })
        }
    
       await axios.post('https://my-backend-7lt8.onrender.com/users',creds, {
            headers: {
                'Content-Type': 'application/json',
            },      
        })      
        .then((response) => {
            return toast({
                title: 'User Added Sccess.',
                description: "We've added your details.",
                status: 'success',
                duration: 9000,
                isClosable: true,
              })
    
        })
        .catch((error) => {
            return toast({
                title: 'Email should be unique',
                 description: "Please add unique email,this email account already exist.",
                 status: 'error',
                 duration: 9000,
                  isClosable: true,
               })
    
        })
    
}