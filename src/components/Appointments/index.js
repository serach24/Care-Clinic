import React from "react"
import { Table, TableHead, TableRow, TableCell, TableBody, TableFooter, TablePagination } from "@material-ui/core"
import Button from "@material-ui/core/Button";
class Appointments extends React.Component {
  state = {
    page: 0,
    itemsPerPage: 3,
    doctors: [
      {
        id: 0,
        realName: "John Doe1",
        username: "testDoctor1",
        expertise: "department0",
        date: "2020 06 23",
      },
      {
        id: 1,
        realName: "John Doe24",
        username: "testDoctor24",
        expertise: "department91",
        date: "2020 07 25",
      },      {
        id: 2,
        realName: "John Doe1",
        username: "testDoctor1",
        expertise: "department4",
        date: "2020 07 27",
      },      {
        id: 3,
        realName: "John Doe3",
        username: "testDoctor3",
        expertise: "department4",
        date: "2020 07 28",
      },
    ]
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
