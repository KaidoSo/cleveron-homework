import React, { useEffect, useState } from 'react';
import Cleveron from './cleveron-logo.png';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import validation from './validation';
import './App.css';


const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
        submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function SignUp({ submitForm }) {
    const classes = useStyles();
    const [values, setValues] = useState({
        fullname: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [errors, setErrors] = useState({});
    const [dataIsCorrect, setDataIsCorrect] = useState(false);

    const handleChange = (event) =>{
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        });
    };
    const handleFormSubmit = (event) =>{
        event.preventDefault();
        setErrors(validation(values));
        setDataIsCorrect(true);
    };

    useEffect(() =>{
        if(Object.keys(errors).length === 0 && dataIsCorrect){
            submitForm(true)
        }
    }, [dataIsCorrect, errors, submitForm]);

    return (
        <Container component="main" maxWidth="xs">
        <CssBaseline />
            <div className={classes.paper}>
                <a className="logo-link" href="https://cleveron.eu/et" target="_blank" rel="noreferrer">
                        <img className='cleveron-logo' src={Cleveron} alt="cleveron logo" />
                </a>
                <Typography component="h1" variant="h5">
                    Sign up
                </Typography>
                <form className={classes.form} noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                autoComplete="fullname"
                                name="fullname"
                                value={values.fullname}
                                error={Boolean(errors.fullname)}
                                helperText={(errors.fullname)}
                                variant="outlined"
                                required
                                fullWidth
                                id="fullname"
                                label="Full Name"
                                autoFocus
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                value={values.email}
                                error={Boolean(errors.email)}
                                helperText={(errors.email)}
                                autoComplete="email"
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="password"
                                value={values.password}
                                error={Boolean(errors.password)}
                                helperText={(errors.password)}
                                label="Password"
                                type="password"
                                id="password"
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="confirmPassword"
                                value={values.confirmPassword}
                                error={Boolean(errors.confirmPassword)}
                                helperText={(errors.confirmPassword)}
                                label="Confirm Password"
                                type="password"
                                id="confirmPassword"
                                onChange={handleChange}
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={handleFormSubmit}
                    >
                        Sign Up
                    </Button>
                    <Grid container justify="flex-end">
                        <Grid item>
                            <Link href="#" variant="body2">
                                Already have an account? Sign in
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>
    );
}
