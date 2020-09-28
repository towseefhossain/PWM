import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Button,
    TextField, Typography
} from '@material-ui/core';
import {
    Delete,
    Add
} from '@material-ui/icons'

const useStyles = makeStyles({
    tableContainer: {
        margin: "20px",
        width: "auto",
    },
    addEntry: {
        margin: "20px",
        width: "auto"
    },
    profileRoot: {
        textAlign: "center"
    }
});

const rows = [
    {
        name: "Facebook",
        link: "facebook.com",
        password: "bad password"
    }
];

export default function Profile() {
    const classes = useStyles();

    return (
        <div class={classes.profileRoot}>

            <TableContainer class={classes.tableContainer} component={Paper}>
                <Table stickyHeader className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell >App</TableCell>
                            <TableCell >Link</TableCell>
                            <TableCell >Password</TableCell>
                            <TableCell align="right" />
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.name}>
                                <TableCell component="th" scope="row">{row.name}</TableCell>
                                <TableCell >{row.link}</TableCell>
                                <TableCell >{row.password}</TableCell>
                                <TableCell align="right">
                                    <Button>
                                        <Delete />
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                        {/* <TableRow >
                        <TableCell width="100%" align="right">Add Entry</TableCell>
                        <TableCell width="100%" align="right">
                        <AddIcon />
                        </TableCell>
                    </TableRow> */}

                    </TableBody>
                </Table>
            </TableContainer>
            <Button
                type="submit"

                variant="contained"
                color="primary"
                className={classes.addEntry}
            >
                Add Entry
          </Button>
        </div>
    );
}