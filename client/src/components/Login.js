import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import FormControl from '@material-ui/core/FormControl';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { FormHelperText, InputLabel, MenuItem, Select } from '@material-ui/core';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://towseef-react-landing.herokuapp.com/">
                M Towseef Hossain
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    )
}

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
});


class Login extends React.Component {
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
                        <InputLabel id="clubsListLabel">Club</InputLabel>
                        <Select
                            labelId="clubsListLabel"
                            id="clubsList"
                            value={this.state.selectedClub}
                            onChange={this.handleChange}
                        >
                            {this.state.clubs && this.state.clubs.map(club =>
                                (
                                    <MenuItem value={club}>{club.name}</MenuItem>
                                ))}
                        </Select>
                        <FormHelperText>Select your club</FormHelperText>
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
                            Sign In
          </Button>
                        <Grid container justify="center">
                            <Grid item>
                                <Link href="#" variant="body2">
                                    {"Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </FormControl>
                </div>
                <Box mt={8}>
                    <Copyright />
                </Box>
            </Container>
        )
    }
}

export default withStyles(useStyles)(Login)