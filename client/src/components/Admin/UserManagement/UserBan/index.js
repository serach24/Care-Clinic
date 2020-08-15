import React from "react";
import { withStyles } from '@material-ui/core/styles';
import { Table, TableHead, TableRow, TableCell, TableBody, TableFooter, TablePagination } from "@material-ui/core"
import Button from "@material-ui/core/Button";

import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search"
import InputBase from "@material-ui/core/InputBase";
import Paper from "@material-ui/core/Paper"


import { styles } from '../styles';
import { getUsers, deUser } from "./request";

class UserBan extends React.Component {
  state = {
    page: 0,
    itemsPerPage: 6,
    users: [
      {
        id: 0,
        username: "",
        role: "",
        recentIPAddress: "",
        status: "",
        banTime: ""
      }
    ],
    username: "",
    chosenUsers: []
  }

  componentDidMount(){
    getUsers(this);
    // this.setState({
    //   chosenUsers: this.state.users
    // })
  }

  searchUser = () => {
    const username = this.state.username;
    const users = this.state.users;
    this.setState({
      chosenUsers: users.filter(user => user.username.startsWith(username))
    })
    // console.log(this.state.chosenUsers);
  }

  banUser = (id) =>{
    const rbody = {}
    rbody.id = id
    rbody.status = "Ban"
    deUser(rbody)
    getUsers(this)
  }

  revokeBanUser = (id) =>{
    const rbody = {}
    rbody.id = id
    rbody.status = "Active"
    deUser(rbody)
    getUsers(this)
  }

  handleChangePage = (e,page) =>{
    this.setState({page})
  }

  render() {
    const {classes} = this.props
    const page = this.state.page;
    const itemsPerPage = this.state.itemsPerPage;
    return (
      <div>
        <h3>User Ban</h3>
      <Paper className={classes.paper}>
      <InputBase
        value={this.state.username}
        onChange={(e)=>(this.setState({username: e.target.value}))}
        className={classes.input}
        placeholder="Search for Users"
        variant="outlined"
      />
      <IconButton onClick={this.searchUser} className={classes.iconButton} aria-label="search">
      <SearchIcon />
      </IconButton>
      {/* TODO: add select to choose specific roles? */}
      </Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Username</TableCell>
              {/* TODO: add username to profile link */}
              <TableCell >Role</TableCell>
              <TableCell >Recent IP Address</TableCell>
              <TableCell >Recent Activity</TableCell>
              <TableCell >Status</TableCell>
              <TableCell >Manage</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.chosenUsers
            .slice(page * itemsPerPage, (page+1) * itemsPerPage)
            .map((row) => (
              <TableRow>
                <TableCell>{row.username}</TableCell>
                <TableCell>{row.role}</TableCell>
                <TableCell>{row.recentIPAddress}</TableCell>
                <TableCell>
                </TableCell>
                <TableCell>{row.status}</TableCell>
                <TableCell>
                  {row.status === "Active"
                    ? <Button size="small" onClick={()=>{this.banUser(row.id)}} variant="contained" color="secondary">
                        Ban
                      </Button>
                    : <Button size="small" onClick={()=>{this.revokeBanUser(row.id)}} variant="contained" color="primary">Restore</Button>}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[6]}
              count={this.state.chosenUsers.length}
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

export default withStyles(styles, { withTheme: false })(UserBan);
// export default UserRemoval;