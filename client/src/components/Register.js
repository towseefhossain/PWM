import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import FormControl from '@material-ui/core/FormControl';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = (theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
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
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    link: {
        textDecoration: "none",
        color: "white"
    }
});


class Register extends React.Component {
    constructor() {
        super();
        this.state = {
            clubs: [
                { name: "UWVR" },
                { name: "UWEntSoc" }
            ],
            selectedClub: ""
        }
    }

    handleChange = (item) => {
        this.setState(
            { selectedClub: item }
        );
    }

    render() {
        const { classes } = this.props;
        return (
            <Container component="main" maxWidth="xs">
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <AccountBalanceWalletIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Waterloo Clubs PWM
        </Typography>
                    <FormControl className={classes.formControl}>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="clubname"
                            label="Club Name"
                            id="clubname"
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="clubemail"
                            label="Club Email"
                            id="clubname"
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Sign Up
          </Button>
                        <Grid container justify="center">
                            <Grid item>
                                <Link to="/login" className={classes.link}>
                                    {"Sign In"}
                                </Link>
                            </Grid>
                        </Grid>
                    </FormControl>
                </div>
            </Container>
        )
    }
}

export default withStyles(useStyles)(Register)