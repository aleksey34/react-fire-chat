import React, {useContext , useState} from 'react';
import {Context} from "../index";
import {useAuthState} from "react-firebase-hooks/auth";
import {Avatar, Container, Grid} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {useCollectionData} from "react-firebase-hooks/firestore";
import Loader from "./Loader";
import firebase from "firebase";

export const Chat = () => {

    const {auth , firestore  } = useContext(Context);
    const [user] = useAuthState(auth);
    const [messages , loading] = useCollectionData(
        firestore
            .collection('messages')
            .orderBy('createdAt')
    );
    const [value , setValue] = useState("")

    const sendMessage = async ()=>{
     //   console.log(value)
        firestore
            .collection('messages')
            .add({
            uid: user.uid,
            displayName: user.displayName ,
            photoURL: user.photoURL ,
            text: value ,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        })
        setValue('')
    }


    if(loading){
        return <Loader/>
    }

    return (
        <Container>
            <Grid
                container
                style={{height: window.innerHeight -50   }}
                // alignItems={"center"}
                justify={"center"}

            >
                <div style={{width:"80%" ,marginTop:"5px" , height: "70vh" , border: "1px solid grey" , overflowY: "auto"}}>
                    {messages.map((m)=>{
                        return (
                            <div key={m.createdAt} style={{
                                margin: 10 ,
                                border: user.uid === m.uid ? "2px solid green" : "2px dashed red",
                                marginLeft: user.uid === m.uid ? "auto"   : "10px",
                                width: "fit-content",
                                padding: "9px 15px"
                            }}>
                                <Grid container>
                                    <Avatar src={m.photoURL}/>
                                    <div>{m.displayName}</div>
                                </Grid>
                                <div>{m.text}</div>
                            </div>
                        )
                    })}
                </div>
                <Grid
                    container
                    direction={"column"}
                    alignItems={"flex-end"}
                    style={{width: '80%'}}
                >
                    <TextField
                        fullWidth={true}
                        value={value}
                        onChange={e=> setValue(e.target.value)}
                        rowsMax={2}
                        variant={'outlined'} />
                    <Button onClick={sendMessage} variant={'outlined'} style={{marginTop: "5px"}}>Send</Button>
                </Grid>
            </Grid>
        </Container>
    );
};

