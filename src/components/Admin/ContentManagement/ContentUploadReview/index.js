import React from "react";
import { Table, TableHead, TableRow, TableCell, TableBody, TableFooter, TablePagination } from "@material-ui/core"
import Button from "@material-ui/core/Button";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import {withStyles} from "@material-ui/core/styles";
import {styles} from "./styles"

class ContentUploadReview extends React.Component {
  state = {
    ukey:0,
    page: 0,
    itemsPerPage: 6,
    content: [
      {
        id: 0,
        title: "10 mins lecture to get better cervical spine",
        type: "Article",
        source: "Original",
        uploader: "testDoctor1",
        status: "Pending",
        uploadTime: "2020-06-18 12:23",
      },
      {
        id: 1,
        title: "10 mins lecture to get better cervical spine",
        type: "Video",
        source: "Original",
        uploader: "testDoctor1",
        status: "Pending",
        uploadTime: "2020-06-18 12:23",
      },
      {
        id: 2,
        title: "10 mins lecture to get better cervical spine",
        type: "Video",
        source: "Original",
        uploader: "testDoctor1",
        status: "Pending",
        uploadTime: "2020-06-18 12:23",
      },
      {
        id: 3,
        title: "10 mins lecture to get better cervical spine",
        type: "Article",
        source: "Original",
        uploader: "testDoctor1",
        status: "Pending",
        uploadTime: "2020-06-18 12:23",
      },
      {
        id: 4,
        title: "10 mins lecture to get better cervical spine",
        type: "Article",
        source: "Original",
        uploader: "testDoctor1",
        status: "Accepted",
        uploadTime: "2020-06-18 12:23",
      },
      {
        id: 5,
        title: "10 mins lecture to get better cervical spine",
        type: "Video",
        source: "Original",
        uploader: "testDoctor1",
        status: "Declined",
        uploadTime: "2020-06-18 12:23",
      },

    ],
    contentType: "All",
    chosenContent: []
  }

  componentDidMount() {
    this.setState({
      chosenContent: this.state.content
    })
  }

  switchType = (e) => {
    const type = e.target.value
    this.setState({contentType: type})
    const content = this.state.content;
    if (type === "All") {
      this.setState({
        chosenContent: content
      })
    } else {
      this.setState({
        chosenContent: content.filter(item => (item.type === type))
      })
    }
  }

  handleChangePage = (e, page) => {
    this.setState({ page })
  }

  approveContent = (id) =>{
    const content = this.state.content;
    content[id].status = "Approved";
    this.setState({content});
  }

  declineContent = (id) =>{
    const content = this.state.content;
    content[id].status = "Declined";
    this.setState({content});
  }

  revokeContent = (id) => {
    const content = this.state.content;
    content[id].status = "Pending";
    this.setState({content});
  } 

  render() {
    const {classes} = this.props;
    const page = this.state.page;
    const itemsPerPage = this.state.itemsPerPage;
    return (
      <div>
        <h3>Content Upload Review</h3>
        <Select
          className={classes.select}
          value={this.state.contentType}
          onChange={this.switchType}
        >
          <MenuItem value={"All"}>All</MenuItem>
          <MenuItem value={"Article"}>Article</MenuItem>
          <MenuItem value={"Video"}>Video</MenuItem>
        </Select>

        <Table>
          <TableHead>
            <TableRow>
              <TableCell >Title</TableCell>
              <TableCell >Uploader</TableCell>
              <TableCell >Upload Time</TableCell>
              <TableCell >Type</TableCell>
              <TableCell >Source</TableCell>
              <TableCell >Status</TableCell>
              <TableCell >Manage</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.chosenContent
              .slice(page * itemsPerPage, (page + 1) * itemsPerPage)
              .map((row) => (
                <TableRow key={this.state.ukey++}>
                  <TableCell>{row.title}</TableCell>
                  <TableCell>{row.uploader}</TableCell>
                  <TableCell>{row.uploadTime}</TableCell>
                  <TableCell>{row.type}</TableCell>
                  <TableCell>{row.source}</TableCell>
                  <TableCell>{row.status}</TableCell>
                  <TableCell>
                  {row.status === "Pending"
                    ? <div>
                      <Button size="small" onClick={()=>{this.approveContent(row.id)}} variant="contained" color="primary">
                        Approve
                      </Button>
                      <Button size="small" onClick={()=>{this.declineContent(row.id)}} variant="contained" color="secondary">
                        Decline
                      </Button>
                    </div>
                    : <Button size="small" onClick={()=>{this.revokeContent(row.id)}} variant="contained" color="secondary">Revoke</Button>}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[6]}
                count={this.state.chosenContent.length}
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

export default withStyles(styles, { withTheme: false })(ContentUploadReview);