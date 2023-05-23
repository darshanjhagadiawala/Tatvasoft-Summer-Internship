import React, {useEffect,useState,makeStyles} from "react";
import { Button } from "@material-ui/core";
import { Stack } from "@mui/material";
// import styles from "./styles.modules.css";



const User = ( { name, fun } ) => {
    const [num,setNum] = useState(0);
    const fun1 = () => {
        setNum(num+1);
    }
    const fun2 = () => {
        setNum(num-1);
    }
    const fun3 = () => {
        setNum(num*2);
    }
    return (
        <>
            
            
            <h1>{num}</h1>
            <Stack spacing={4}>
                <Stack spacing={2} direction='row'>
                    <Button size='large' color='success' variant='contained' onClick={ fun1 }>Increment</Button>
                    <Button size='large' color='error' variant='contained' onClick={ fun2 }>Decrement</Button>
                    <Button size='large' color='warning' variant='contained' onClick={ fun3 }>Multiply*2</Button>
                </Stack>
            </Stack>
        </>
    );
};

export default User;