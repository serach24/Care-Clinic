import React from "react"
import { Table, TableHead, TableRow, TableCell, TableBody, TableFooter, TablePagination } from "@material-ui/core"
import { Apporequest } from "./request";
class PassedAppointments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      itemsPerPage: 3,
      id: this.props.app.state.userId,
      passedNorT: false,
      // the data below need a serverCall to get
      doctors:
        [
        ]
    }
    Apporequest(this)
  }
  handleChangePage = (e, page) => {
    this.setState({ page })
  }

  render() {
    const page = this.state.page;
    const itemsPerPage = this.state.itemsPerPage;
    return (
      <div>
        <h3>Passed Appointments</h3>
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
              .slice(page * itemsPerPage, (page + 1) * itemsPerPage)
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

export default PassedAppointments;
