import React from "react"
import { Table, TableHead, TableRow, TableCell, TableBody, TableFooter, TablePagination } from "@material-ui/core"
import Button from "@material-ui/core/Button";
import Chat from "../Chat";
import TreatmentDialog from "../TreatmentDialog";

class DoctorPatientList extends React.Component {
  state = {
    page: 0,
    itemsPerPage: 6,
    chatOpen: false,
    treatmentDialogOpen: false,
    treatmentId: 0,
    patients: [
      {
        id: 0,
        realName: "John Doe1",
        username: "testUser1",
        description: "headache, fever ...",
        appointTime: "2020-06-28 09:00 am",
        diagnosis: "",
        prescription: "",
        status: "Pending"
      },
      {
        id: 1,
        realName: "John Doe1",
        username: "testUser1",
        description: "headache, fever ...",
        appointTime: "2020-06-28 09:00 am",
        diagnosis: "",
        prescription: "",
        status: "Pending"
      },
      {
        id: 2,
        realName: "John Doe1",
        username: "testUser1",
        description: "headache, fever ...",
        appointTime: "2020-06-20 09:00 am",
        diagnosis: "Some basic flu",
        prescription: "some medicine here",
        status: "Declined"
      },
      {
        id: 3,
        realName: "John Doe1",
        username: "testUser1",
        description: "headache, fever ...",
        appointTime: "2020-06-28 09:00 am",
        diagnosis: "Some basic flu",
        prescription: "some medicine here",
        status: "Current"
      },
      {
        id: 4,
        realName: "John Doe1",
        username: "testUser1",
        description: "headache, fever ...",
        appointTime: "2020-06-28 09:00 am",
        diagnosis: "Some basic flu",
        prescription: "some medicine here",
        status: "Current"
      },
      {
        id: 5,
        realName: "John Doe1",
        username: "testUser1",
        description: "headache, fever ...",
        appointTime: "2020-06-28 09:00 am",
        diagnosis: "TCU 1/52, severe",
        prescription: "some medicine here",
        status: "Subsequent"
      },
      {
        id: 6,
        realName: "John Doe1",
        username: "testUser1",
        description: "headache, fever ...",
        appointTime: "2020-06-28 09:00 am",
        diagnosis: "TCU 1/7, hypertension",
        prescription: "some medicine here",
        status: "Subsequent"
      },
      {
        id: 7,
        realName: "John Doe1",
        username: "testUser1",
        description: "headache, fever ...",
        appointTime: "2020-06-28 08:00 am",
        diagnosis: "hypertension",
        prescription: "some medicine here",
        status: "Finished"
      },
      {
        id: 8,
        realName: "John Doe1",
        username: "testUser1",
        description: "headache, fever ...",
        appointTime: "2020-06-20 09:00 am",
        diagnosis: "mental anxiety",
        prescription: "some medicine here",
        status: "Finished"
      },
      {
        id: 9,
        realName: "John Doe1",
        username: "testUser1",
        description: "headache, fever ...",
        appointTime: "2020-06-20 09:00 am",
        diagnosis: "mental anxiety",
        prescription: "some medicine here",
        status: "Finished"
      },
    ]
  }

  renderButton(id) {
    if (this.state.patients[id].status === "Pending") {
      return (<div>
        <Button size="small" onClick={() => { this.acceptAppointment(id) }} variant="contained" color="primary">
          Accept
        </Button>
        <Button size="small" onClick={() => { this.declineAppointment(id) }} variant="contained" color="secondary">
          Decline
        </Button>
      </div>
      );
    } else if (this.state.patients[id].status === "Current") {
      return (<div>
        <Button size="small" onClick={this.openChat} variant="contained" color="primary">
          Chat
        </Button>
        <Button size="small" onClick={()=>{this.openTreatmentDialog(id)}} variant="contained" color="primary">
          Treat
        </Button>
      </div>
      );
    } else if (this.state.patients[id].status === "Subsequent") {
      return (<div>
        <Button size="small" onClick={this.openChat} variant="contained" color="primary">
          Chat
        </Button>
      </div>
      );
    }
  }

  openTreatmentDialog = (id) => {
    this.setState({
      treatmentId: id,
      treatmentDialogOpen: true
    });
  }

  closeTreatmentDialog = () => {
    this.setState({
      treatmentDialogOpen: false
    });
  }

  openChat = () => {
    this.setState({
      chatOpen: true,
    })
  }

  closeChat = () => {
    this.setState({
      chatOpen: false,
    })
  }

  acceptAppointment = (id) => {
    const patients = this.state.patients;
    patients[id].status = "Current";
    this.setState({ patients });
  }

  declineAppointment = (id) => {
    const patients = this.state.patients;
    patients[id].status = "Declined";
    this.setState({ patients });
  }

  returnTreatment = (id, diagnosis, prescription) => {
    const patients = this.state.patients;
    patients[id].diagnosis=diagnosis;
    patients[id].prescription=prescription;
    patients[id].status = "Subsequent";
    this.setState({ patients });
    this.closeTreatmentDialog();
  }

  completeTreatment = (id, diagnosis, prescription) => {
    const patients = this.state.patients;
    patients[id].diagnosis=diagnosis;
    patients[id].prescription=prescription;
    patients[id].status = "Complete";
    this.setState({ patients });
    this.closeTreatmentDialog();
  }

  handleChangePage = (e, page) => {
    this.setState({ page })
  }

  render() {
    const page = this.state.page;
    const itemsPerPage = this.state.itemsPerPage;
    return (
      <div>
        <h3>Patient List</h3>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Patient Name</TableCell>
              {/* TODO: redirect username to profile link */}
              <TableCell >Patient Profile</TableCell>
              <TableCell >Description</TableCell>
              <TableCell >Appointment Time</TableCell>
              <TableCell >Treatment</TableCell>
              <TableCell >Status</TableCell>
              <TableCell >Manage</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.patients
              .slice(page * itemsPerPage, (page + 1) * itemsPerPage)
              .map((row) => (
                <TableRow>
                  <TableCell>{row.realName}</TableCell>
                  <TableCell>{row.username}</TableCell>
                  <TableCell>{row.description}</TableCell>
                  <TableCell>{row.appointTime}</TableCell>
                  <TableCell>
                    <div>{row.diagnosis}</div>
                    <div>{row.prescription}</div>
                  </TableCell>
                  <TableCell>{row.status}</TableCell>
                  <TableCell>
                    {this.renderButton(row.id)}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[6]}
                count={this.state.patients.length}
                rowsPerPage={this.state.itemsPerPage}
                page={this.state.page}
                onChangePage={this.handleChangePage}
              />
            </TableRow>
          </TableFooter>
        </Table>
        <Chat open={this.state.chatOpen} onClose={this.closeChat} />
        <TreatmentDialog
                id={this.state.treatmentId}
                returnTreatment={this.returnTreatment}
                completeTreatment={this.completeTreatment}
                open={this.state.treatmentDialogOpen}
                handleClose={this.closeTreatmentDialog}
                // diagnosis={this.state.patients[this.state.treatmentId].diagnosis}
                // prescription={this.state.patients[this.state.treatmentId].prescription}
              />
      </div>
    );
  }
}

export default DoctorPatientList;