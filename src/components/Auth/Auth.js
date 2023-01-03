import React from 'react'
import { Avatar, Button, Paper, Container, Grow, Grid, Typography, TextField } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import useStyles from './styles';

function Auth() {
    const classes = useStyles();

    const handleChange = () => {
    };
    const handleSubmit = () => {
    };

    const isSignup = false;
  return (
    <Container component="main" maxWidth="xs">
        <Paper className={classes.paper} elevation={3}>
            <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
            </Avatar>
            <Typography variant="h5">{ isSignup ? 'Sign Up' : 'Sign In'}</Typography>
            <form className={classes.form} onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    {
                        isSignup && ( 
                            <>
                                <Grid item xs={6} md={12}>
                                    <TextField name="firstName" handleChang={handleChange} label="First Name" autoFocus xs={6} />
                                </Grid>
                                <Grid item xs={6} md={12}>
                                    <TextField name="lastName" variant="outlined" required fullWidth label="Last Name" />
                                </Grid>
                            </>
                        )
                    }
                </Grid>
            </form>
        </Paper>
    </Container>
  )
}

export default Auth