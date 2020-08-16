import React from "react"
import { Table, TableHead, TableRow, TableCell, TableBody, TableFooter, TablePagination } from "@material-ui/core"
import Button from "@material-ui/core/Button";
import Chat from "../../components/Chat";
import TreatmentDialog from "../../components/TreatmentDialog";
import { change, Apporequest } from "./request";


import { withStyles } from '@material-ui/core/styles';
import { styles } from './styles';

class DoctorPatientList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.app.state.userId,
      talkTo: {},
      page: 0,
      itemsPerPage: 6,
      chatOpen: false,
      treatmentDialogOpen: false,
      treatmentId: 0,

      // the data below need a serverCall to get
      patients: [
        {
          id: 0,
          userId: "5f2f5af3c17b5014972cf8ee",
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
          userId: "5f2f5af3c17b5014972cf8ee",
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
          userId: "5f2f5af3c17b5014972cf8ee",
          realName: "John Doe1",
          username: "testUser1",
          description: "headache, fever ...",
          appointTime: "2020-06-20 09:00 am",
          diagnosis: "Some basic flu",
          prescription: "some medicine here",
          status: "Declined"
        },
      ]
    }

  }

  componentDidMount() {
    Apporequest(this)
  }

  renderButton(patient) {
    if (patient.status === "Pending") {
      return (
        <div>
          <Button size="small" onClick={() => this.acceptAppointment(patient.id, patient.appointTime)} variant="contained" color="primary">
            Accept
        </Button>
          <Button size="small" onClick={() => { this.declineAppointment(patient.id) }} variant="contained" color="secondary">
            Decline
        </Button>
        </div>
      );
    } else if (patient.status === "Current") {
      return (<div>
        <Button size="small" onClick={() => this.openChat(patient)} variant="contained" color="primary">
          Chat
        </Button>
        <Button size="small" onClick={() => { this.openTreatmentDialog(patient.id) }} variant="contained" color="primary">
          Treat
        </Button>
      </div>
      );
    } else if (patient.status === "Subsequent") {
      return (<div>
        <Button size="small" onClick={() => this.openChat(patient)} variant="contained" color="primary">
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

  acceptAppointment = (index, time) => {
    const patients = this.state.patients;
    change(this.state.id, index, 0);
    const ddt = new Date(time)
    const now = new Date()
    var SST = 'Pending';

    if ((ddt.getTime() - now.getTime()) < -86400000) {
      SST = "Passed"
    }
    else if ((Math.abs(ddt.getTime() - now.getTime())) <= 86400000) {
      SST = "Current"
    }
    else if ((ddt.getTime() - now.getTime()) > 86400000) {
      SST = "Subsequent"
    }
    patients[index].status = SST;
    this.setState({ patients });
  }

  declineAppointment = (id) => {
    const patients = this.state.patients;
    change(this.state.id, id, 2);
    patients[id].status = "Declined";
    this.setState({ patients });
  }

  returnTreatment = (id, diagnosis, prescription) => {
    const patients = this.state.patients;
    patients[id].diagnosis = diagnosis;
    patients[id].prescription = prescription;
    patients[id].status = "Subsequent";
    this.setState({ patients });
    this.closeTreatmentDialog();
  }

  completeTreatment = (id, diagnosis, prescription) => {
    const patients = this.state.patients;
    patients[id].diagnosis = diagnosis;
    patients[id].prescription = prescription;
    patients[id].status = "Complete";
    this.setState({ patients });
    this.closeTreatmentDialog();
  }

  handleChangePage = (e, page) => {
    this.setState({ page })
  }

  render() {
    const { app, classes} = this.props;
    const page = this.state.page;
    const itemsPerPage = this.state.itemsPerPage;
    return (
      <div className={classes.doctorPatientList}>
        <h3>Patient List</h3>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Patient Name</TableCell>
              <TableCell >Patient Profile</TableCell>
              <TableCell >Description</TableCell>
              <TableCell >Appointment Time</TableCell>
              <TableCell >Treatment</TableCell>
              <TableCell >Status</TableCell>
              <TableCell >Manage</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.patients.reverse()
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
                    {this.renderButton(row)}
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
        <Chat
          open={this.state.chatOpen}
          onClose={this.closeChat}
          talkTo={this.state.talkTo}
          userId={app.state.userId}
        />
        <TreatmentDialog
          id={this.state.treatmentId}
          returnTreatment={this.returnTreatment}
          completeTreatment={this.completeTreatment}
          open={this.state.treatmentDialogOpen}
          handleClose={this.closeTreatmentDialog}
        />
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: false }) (DoctorPatientList);