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
    console.log(this.state.talkTo.userId + "fuk1");
    console.log(this.state.talkTo.userId + "fuk2");
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
              <TableCell >Status</TableCell>
              <TableCell >Talk</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.doctors

            .slice(page * itemsPerPage, (page+1) * itemsPerPage)
            .map((row) => (
              <TableRow key={row.userid}>
                <TableCell>{row.realName}</TableCell>
                <TableCell>{row.username}</TableCell>
                <TableCell>{row.expertise}</TableCell>
                <TableCell>{row.date}</TableCell>
                <TableCell >{row.status}</TableCell>
                <TableCell ><Button onClick={() => this.openChat(row)}>Talk</Button></TableCell>
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
