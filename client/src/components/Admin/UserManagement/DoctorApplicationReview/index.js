import React from "react"
import { Table, TableHead, TableRow, TableCell, TableBody, TableFooter, TablePagination } from "@material-ui/core"
import Button from "@material-ui/core/Button";
import {change,Pendingrequest} from './request';
class DoctorApplicationReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ukey: 0,
      page: 0,
      itemsPerPage: 6,
      doctors: [
        {
          id: 0,
          realName: "",
          username: "",
          expertise: "",
          documents: [
            {
              docName: "",
              location: ""
            },
            {
              docName: "",
              location: ""
            }
          ],
          status: ""
        },
      ]
    }
    
  }
  componentDidMount(){
    Pendingrequest(this)
  }
  

  approveApplication = (id) =>{
    const doctors = this.state.doctors;
    doctors[id].status = "Approved";
    change(doctors[id].trueId,1);
    this.setState({doctors});
  }

  declineApplication = (id) =>{
    const doctors = this.state.doctors;
    doctors[id].status = "Declined";
    change(doctors[id].trueId,2);
    this.setState({doctors});
  }

  revokeApplication = (id) => {
    const doctors = this.state.doctors;
    doctors[id].status = "Pending";
    change(doctors[id].trueId,0);
    this.setState({doctors});
  } 

  handleChangePage = (e,page) =>{
    this.setState({page})
  }

  render() {
    const page = this.state.page;
    const itemsPerPage = this.state.itemsPerPage;
    return (
      <div>
        <h3>Doctor Application Review</h3>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Doctor Name</TableCell>
              {/* TODO: add username to profile link */}
              <TableCell >Username</TableCell>
              <TableCell >Area of Expertise</TableCell>
              <TableCell >Documents</TableCell>
              <TableCell >Status</TableCell>
              <TableCell >Manage</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.doctors
            .slice(page * itemsPerPage, (page+1) * itemsPerPage)
            .map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.realName}</TableCell>
                <TableCell>{row.username}</TableCell>
                <TableCell>{row.expertise}</TableCell>
                <TableCell>
                  {row.documents.map((doc,index) => (
                    <div key={index+100}>
                      <a className="doctor-document" href={doc.location} download={doc.docName}>{doc.docName}</a>
                    </div>
                  ))}
                </TableCell>
                <TableCell>{row.status}</TableCell>
                <TableCell>
                  {row.status === "Pending"
                    ? <div>
                      <Button size="small" onClick={()=>{this.approveApplication(row.id)}} variant="contained" color="primary">
                        Approve
                      </Button>
                      <Button size="small" onClick={()=>{this.declineApplication(row.id)}} variant="contained" color="secondary">
                        Decline
                      </Button>
                    </div>
                    : <Button size="small" onClick={()=>{this.revokeApplication(row.id)}} variant="contained" color="secondary">Revoke</Button>}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[6]}
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

export default DoctorApplicationReview;