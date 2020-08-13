import React from "react"
import { Table, TableHead, TableRow, TableCell, TableBody, TableFooter, TablePagination } from "@material-ui/core"
import Button from "@material-ui/core/Button";
import { Apporequest } from "./request";

import Chat from "../Chat";

class Appointments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      talkTo: {},
      chatOpen: false,
      page: 0,
      itemsPerPage: 3,
      id: this.props.app.state.userId,
      passedNorT: true,
      // the data below need a serverCall to get
      doctors: []
    }
    Apporequest(this)
  }

  openChat = (talkTo) => {
    this.setState({
      talkTo,
      chatOpen: true,
    })
  }

  closeChat = () => {
    this.setState({
      chatOpen: false,
    })
  }

  handleChangePage = (e, page) => {
    this.setState({ page })
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
              <TableCell >Talk</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.doctors
              .slice(page * itemsPerPage, (page + 1) * itemsPerPage)
              .map((doctor) => (
                <TableRow key={doctor.id}>
                  <TableCell>{doctor.realName}</TableCell>
                  <TableCell>{doctor.username}</TableCell>
                  <TableCell>{doctor.expertise}</TableCell>
                  <TableCell>{doctor.date}</TableCell>
                  <TableCell ><Button onClick={() => this.openChat(doctor)}>Talk</Button></TableCell>
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
        <Chat
          open={this.state.chatOpen}
          onClose={this.closeChat}
          talkTo={this.state.talkTo}
          userId={this.props.app.state.userId}
        />
      </div>
    );
  }
}

export default Appointments;
