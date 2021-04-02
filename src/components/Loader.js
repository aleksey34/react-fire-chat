import React from 'react';
import {Box, Button, Container, Grid} from "@material-ui/core";

const Loader = () => {
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
                    style={{ width: 400}}
                    alignItems={"center"}>
                    <div className="lds-spinner">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Loader;
