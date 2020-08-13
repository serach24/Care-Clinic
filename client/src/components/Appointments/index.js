import React from "react"
import { Table, TableHead, TableRow, TableCell, TableBody, TableFooter, TablePagination } from "@material-ui/core"
import Button from "@material-ui/core/Button";
import {Apporequest} from "./request";
class Appointments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      itemsPerPage: 3,
      id: this.props.app.state.userId,
      passedNorT: true,
      // the data below need a serverCall to get
      doctors: 
      [
      ]
    }
    Apporequest(this)
}

  handleChangePage = (e,page) =>{
    this.setState({page})
  }
  render() {
    const page = this.state.page;
    const itemsPerPage = this.state.itemsPerPage;
    return (
      <div>
        <h3>Upcoming Appointments</h3>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Doctor Name</TableCell>
              {/* TODO: add username to profile link */}
              <TableCell >Doctor Username</TableCell>
              <TableCell >Department</TableCell>
              <TableCell >Date</TableCell>
              <TableCell >Status</TableCell>
              <TableCell >Talk</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.doctors
            .slice(page * itemsPerPage, (page+1) * itemsPerPage)
            .map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.realName}</TableCell>
                <TableCell>{row.username}</TableCell>
                <TableCell>{row.expertise}</TableCell>
                <TableCell>{row.date}</TableCell>
                <TableCell >{row.status}</TableCell>
                <TableCell ><Button onClick={()=>{console.log(row)}}>Talk</Button></TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[3]}
              count={this.state.doctors.length}
              rowsPerPage={this.state.itemsPerPage}
              page={this.state.page}
              onChangePage={this.handleChangePage}
            />
          </TableRow>
        </TableFooter>
        </Table>
      </div>
    );
  }
}

export default Appointments;
