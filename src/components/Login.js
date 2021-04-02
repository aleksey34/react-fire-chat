import React, {useContext} from 'react';
import {Box, Button, Container, Grid} from "@material-ui/core";
import {Context} from "../index";

export const Login = () => {

    const {auth , firebase} = useContext(Context);

    const login = async ()=>{
const provider = new firebase.auth.GoogleAuthProvider();
const {user} = await auth.signInWithPopup(provider);
console.log(user)
    }


    return (
        <Container>
            <Grid
                container
                style={{height: window.innerHeight -50   }}
                alignItems={"center"}
                justify={"center"}

            >
                <Grid
                    justify={'center'}
                    direction={"column"}
                    container
                      style={{background: "lightgrey" , width: 400}}
                      alignItems={"center"}>
                    <Box p={5}>
                        <Button onClick={login} variant={"outlined"}>Enter with Google</Button>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};



