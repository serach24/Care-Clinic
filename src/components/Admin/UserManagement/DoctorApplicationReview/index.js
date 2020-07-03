import React from "react"
import { Table, TableHead, TableRow, TableCell, TableBody, TableFooter, TablePagination } from "@material-ui/core"
import Button from "@material-ui/core/Button";
class DoctorApplicationReview extends React.Component {
  state = {
    page: 0,
    itemsPerPage: 6,
    doctors: [
      {
        id: 0,
        realName: "John Doe1",
        username: "testDoctor1",
        expertise: "Pediatrics",
        documents: [
          {
            docName: "sampleCertification1.jpg",
            location: "/img/sampleCertification1.jpg"
          },
          {
            docName: "sampleCertification2.pdf",
            location: "/img/sampleCertification2.pdf"
          }
        ],
        status: "Pending"
      },
      {
        id: 1,
        realName: "John Doe2",
        username: "testDoctor2",
        expertise: "Neurosurgery",
        documents: [
          {
            docName: "sampleCertification1.jpg",
            location: "/img/sampleCertification1.jpg"
          },
          {
            docName: "sampleCertification2.pdf",
            location: "/img/sampleCertification2.pdf"
          }
        ],
        status: "Pending"
      }, 
      {
        id: 2,
        realName: "John Doe3",
        username: "testDoctor3",
        expertise: "Dermatology",
        documents: [
          {
            docName: "sampleCertification1.jpg",
            location: "/img/sampleCertification1.jpg"
          },
          {
            docName: "sampleCertification2.pdf",
            location: "/img/sampleCertification2.pdf"
          }
        ],
        status: "Pending"
      }, 
      {
        id: 3,
        realName: "John Doe4",
        username: "testDoctor4",
        expertise: "Pediatrics",
        documents: [
          {
            docName: "sampleCertification1.jpg",
            location: "/img/sampleCertification1.jpg"
          },
          {
            docName: "sampleCertification2.pdf",
            location: "/img/sampleCertification2.pdf"
          }
        ],
        status: "Pending"
      }, 
      {
        id: 4,
        realName: "John Doe5",
        username: "testDoctor5",
        expertise: "ENT",
        documents: [
          {
            docName: "sampleCertification1.jpg",
            location: "/img/sampleCertification1.jpg"
          },
          {
            docName: "sampleCertification2.pdf",
            location: "/img/sampleCertification2.pdf"
          }
        ],
        status: "Pending"
      }, 
      {
        id: 5,
        realName: "John Doe6",
        username: "testDoctor6",
        expertise: "ENT",
        documents: [
          {
            docName: "sampleCertification1.jpg",
            location: "/img/sampleCertification1.jpg"
          },
          {
            docName: "sampleCertification2.pdf",
            location: "/img/sampleCertification2.pdf"
          }
        ],
        status: "Approved"
      }, 
      {
        id: 6,
        realName: "John Doe7",
        username: "testDoctor7",
        expertise: "Stomatology",
        documents: [
          {
            docName: "sampleCertification1.jpg",
            location: "/img/sampleCertification1.jpg"
          },
          {
            docName: "sampleCertification2.pdf",
            location: "/img/sampleCertification2.pdf"
          }
        ],
        status: "Declined"
      }, 
      {
        id: 7,
        realName: "John Doe8",
        username: "testDoctor8",
        expertise: "Neurosurgery",
        documents: [
          {
            docName: "sampleCertification1.jpg",
            location: "/img/sampleCertification1.jpg"
          },
          {
            docName: "sampleCertification2.pdf",
            location: "/img/sampleCertification2.pdf"
          }
        ],
        status: "Declined"
      },
      {
        id: 8,
        realName: "John Doe9",
        username: "testDoctor9",
        expertise: "Respiration",
        documents: [
          {
            docName: "sampleCertification1.jpg",
            location: "/img/sampleCertification1.jpg"
          },
          {
            docName: "sampleCertification2.pdf",
            location: "/img/sampleCertification2.pdf"
          }
        ],
        status: "Declined"
      },
    ]
  }

  approveApplication = (id) =>{
    const doctors = this.state.doctors;
    doctors[id].status = "Approved";
    this.setState({doctors});
  }

  declineApplication = (id) =>{
    const doctors = this.state.doctors;
    doctors[id].status = "Declined";
    this.setState({doctors});
  }

  revokeApplication = (id) => {
    const doctors = this.state.doctors;
    doctors[id].status = "Pending";
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
            .map((row) => (
              <TableRow>
                <TableCell>{row.realName}</TableCell>
                <TableCell>{row.username}</TableCell>
                <TableCell>{row.expertise}</TableCell>
                <TableCell>
                  {row.documents.map((doc) => (
                    <div>
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