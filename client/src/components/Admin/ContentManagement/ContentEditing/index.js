import React from "react";
import { Table, TableHead, TableRow, TableCell, TableBody, TableFooter, TablePagination } from "@material-ui/core"
import Button from "@material-ui/core/Button";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { withStyles } from '@material-ui/core/styles';

import { styles } from './styles';

class ContentEditing extends React.Component {
  state = {
    ukey: 0,
    page: 0,
    itemsPerPage: 6,

    // the data below need a serverCall to get
    content: [
      {
        id: 0,
        title: "10 mins lecture to get better cervical spine",
        type: "Article",
        source: "Original",
        uploader: "testDoctor1",
        uploadTime: "2020-06-18 12:23",
      },
      {
        id: 1,
        title: "20 mins lecture to get better cervical spine",
        type: "Article",
        source: "Original",
        uploader: "testDoctor1",
        uploadTime: "2020-06-18 12:23",
      },
      {
        id: 2,
        title: "10 mins lecture to be away from diabete",
        type:"Video",
        source: "Original",
        uploader: "testDoctor1",
        uploadTime: "2020-06-18 12:23",
      },
      {
        id: 3,
        title: "this course is futile",
        type: "Video",
        source: "Original",
        uploader: "testDoctor1",
        uploadTime: "2020-06-18 12:23",
      },
      {
        id: 4,
        title: "whatever you say",
        type: "Article",
        source: "Original",
        uploader: "testDoctor1",
        uploadTime: "2020-06-18 12:23",
      },
      {
        id: 5,
        title: "the most popular cure in the world",
        type: "Video",
        source: "Original",
        uploader: "testDoctor1",
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
        chosenContent: content.filter(item => (item!==null))
      })
    } else {
      this.setState({
        chosenContent: content.filter(item => (item!==null && item.type === type))
      })
    }
  }

  deleteContent = (id) => {
    const content = this.state.content;
    const type = this.state.contentType;
    // content.splice(id, 1);
    content[id] = null;
    this.setState({content})
    if (type === "All") {
      this.setState({
        chosenContent: content.filter(item => (item!==null))
      })
    } else {
      this.setState({
        chosenContent: content.filter(item => (item!==null && item.type === type))
      })
    }
  } 

  handleChangePage = (e, page) => {
    this.setState({ page })
  }

  render() {
    const {classes} = this.props;
    const page = this.state.page;
    const itemsPerPage = this.state.itemsPerPage;
    return (
      <div>
        <h3>Content Editing</h3>
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
              <TableCell >Manage</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.chosenContent
              .slice(page * itemsPerPage, (page + 1) * itemsPerPage)
              .map((row,index) => (
                <TableRow key={index+10}>
                  <TableCell>{row.title}</TableCell>
                  <TableCell>{row.uploader}</TableCell>
                  <TableCell>{row.uploadTime}</TableCell>
                  <TableCell>{row.type}</TableCell>
                  <TableCell>{row.source}</TableCell>
                  <TableCell>
                    {/* <Button size="small" onClick={() => { this.editContent(row.id) }} variant="contained" color="secondary">
                      Edit
                    </Button> */}
                    <Button size="small" onClick={() => { this.deleteContent(row.id) }} variant="contained" color="primary">
                      Delete
                    </Button>
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

export default withStyles(styles, { withTheme: false })(ContentEditing);