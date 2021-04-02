import React, {useContext} from 'react';
import {AppBar, Toolbar, Grid} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import {NavLink} from "react-router-dom";
import {LOGIN_ROUTE} from "../utils/consts";
import {Context} from "../index";
import {useAuthState} from "react-firebase-hooks/auth";



export const Navbar = () => {


    const {auth} = useContext(Context);
    const [user] = useAuthState(auth);


    return (
        <AppBar position="static" color='secondary'>
            <Toolbar variant={"dense"}>
                <Grid container justify={`flex-end`}  >
                    {
                        user ? <Button onClick={()=>{auth.signOut()}} variant={`outlined`}>Logout</Button>
                            : <NavLink to={LOGIN_ROUTE}>
                                <Button variant={`outlined`}>Login</Button>
                            </NavLink>
                    }
                </Grid>
            </Toolbar>
        </AppBar>

    );
};

