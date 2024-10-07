import React from "react";
import {useSelector} from "react-redux";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));


const DisplayItems = ()=>{
    const users = useSelector((state)=> state.users);
    console.log(users);
    return(
        <div className="container">
              <h1>RockinWithThBest CRUD App</h1>
               <button>Create+</button>
              <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>ID</StyledTableCell>
            <StyledTableCell align="right">Description</StyledTableCell>
            <StyledTableCell align="right">Code</StyledTableCell>
            <StyledTableCell align="right">Catergory</StyledTableCell>
            <StyledTableCell align="right">Brand</StyledTableCell>
            <StyledTableCell align="right">Remainder</StyledTableCell>
            <StyledTableCell align="right">Actions</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <StyledTableRow >
              <StyledTableCell component="th" scope="row">{user.id}</StyledTableCell>
              <StyledTableCell align="right">{user.description}</StyledTableCell>
              <StyledTableCell align="right">{user.code}</StyledTableCell>
              <StyledTableCell align="right">{user.category}</StyledTableCell>
              <StyledTableCell align="right">{user.brand}</StyledTableCell>
              <StyledTableCell align="right">{user.Remainder}</StyledTableCell>
              <StyledTableCell align="right"><button>Edit</button><button>Delete</button></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
    
  );

}

export default DisplayItems;
