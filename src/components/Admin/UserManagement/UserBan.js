import React from "react";
import { withStyles } from '@material-ui/core/styles';
import { Table, TableHead, TableRow, TableCell, TableBody, TableFooter, TablePagination } from "@material-ui/core"
import Button from "@material-ui/core/Button";

import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search"
import InputBase from "@material-ui/core/InputBase";
import Paper from "@material-ui/core/Paper"


import { styles } from './styles';

class UserBan extends React.Component {
  state = {
    page: 0,
    itemsPerPage: 6,
    users: [
      {
        id: 0,
        username: "testDoctor1",
        role: "Doctor",
        recentIPAddress: "99.227.163.185",
        status: "Active",
        banTime: 0,
      },
      {
        id: 1,
        username: "testUser1",
        role: "Normal",
        recentIPAddress: "99.227.163.186",
        status: "Active",
        banTime: 0,
      },
      {
        id: 2,
        username: "testDoctor2",
        role: "Doctor",
        recentIPAddress: "99.227.164.145",
        status: "Active",
        banTime: 0,
      },
      {
        id: 3,
        username: "testUser2",
        role: "Normal",
        recentIPAddress: "99.237.163.185",
        status: "Active",
        banTime: 0,
      },
      {
        id: 4,
        username: "IAmNotADoctor",
        role: "Normal",
        recentIPAddress: "99.237.163.185",
        status: "Banned",
        banTime: 24,
      },
      {
        id: 5,
        username: "asdfasdf",
        role: "Normal",
        recentIPAddress: "99.237.163.185",
        status: "Banned",
        banTime: 24,
      },    
      {
        id: 6,
        username: "IAmNotAnAdmin",
        role: "Normal",
        recentIPAddress: "99.237.163.185",
        status: "Banned",
        banTime: 24,
      },
      {
        id: 7,
        username: "ADoctor",
        role: "Doctor",
        recentIPAddress: "99.237.163.185",
        status: "Banned",
        banTime: 24,
      },
      {
        id: 8,
        username: "whatever",
        role: "Normal",
        recentIPAddress: "99.237.163.185",
        status: "Banned",
        banTime: 24,
      },
    ],
    username: "",
    chosenUsers: []
  }

  componentDidMount(){
    this.setState({
      chosenUsers: this.state.users
    })
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
    const users = this.state.users;
    users[id].status = "Banned";
    this.setState({users});
  }

  revokeBanUser = (id) =>{
    const users = this.state.users;
    users[id].status = "Active";
    this.setState({users});
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