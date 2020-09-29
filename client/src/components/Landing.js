import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

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

    },
    link: {
        textDecoration: 'none',
        margin: theme.spacing(1, 0, 1),
    }
});


class Login extends React.Component {

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
                    <Link to="/register" className={classes.link}>
                        <Button
                            fullWidth
                            variant="contained"
                            color="primary"
                        >
                            Register
          </Button>
                    </Link>
                    <Link to='/login' className={classes.link}>
                        <Button
                            fullWidth
                            variant="contained"
                            color="primary"
                        >
                            Login
                        </Button>
                    </Link>
                </div>
            </Container>
        )
    }
}

export default withStyles(useStyles)(Login)