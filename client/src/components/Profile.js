import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles({
    tableContainer: {
        margin: "20px",
        width: "auto"
    }
});

const rows = [
    {
        name: "Facebook",
        link: "facebook.com",
        password: "bad password"
    }
];

export default function SimpleTable() {
    const classes = useStyles();

    return (
        <TableContainer className={classes.tableContainer} component={Paper}>
            <Table stickyHeader className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell >App</TableCell>
                        <TableCell align="right">Link</TableCell>
                        <TableCell align="right">Password</TableCell>
                        <TableCell align="right" />
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.name}>
                            <TableCell component="th" scope="row">{row.name}</TableCell>
                            <TableCell align="right">{row.link}</TableCell>
                            <TableCell align="right">{row.password}</TableCell>
                            <TableCell align="right">
                                <DeleteIcon />
                            </TableCell>
                        </TableRow>
                    ))}
                    <TableRow >
                        <TableCell align="center"></TableCell>
                        <TableCell align="right">Add Entry</TableCell>
                        <TableCell align="center"></TableCell>
                        <TableCell align="right">
                            <AddIcon />
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
}