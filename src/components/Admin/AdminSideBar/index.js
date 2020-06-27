import React from "react";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Drawer from "@material-ui/core/Drawer";

import "./styles.css"
import List from "@material-ui/core/List";
import { ListItem, ListItemText } from "@material-ui/core";

class AdminSideBar extends React.Component {
  state = {
    isSideBarOpen: true,
    sideBarList: [
      {
        "name": "User Management",
        "nested": [
          { "name": "Doctor Application Review" },
          { "name": "User Removal" }
        ]
      },
      {
        "name": "Content Management",
        "nested": [
          { "name": "Article Upload Review" },
          { "name": "Article Management" },
          { "name": "Video Upload Review" },
          { "name": "Video Management" },
        ]
      },
      {
        "name": "Feedback Review",
        "nested": [
          { "name": "Patient Feedback" },
          { "name": "Doctor Feedback" }
        ]
      }
    ]
  }

  openSideBar = (e) => {
    if (!this.state.isSideBarOpen) {
      this.setState({
        isSideBarOpen: true,
      })
    }
    else {
      this.setState({
        isSideBarOpen: false,
      })
    }
  }

  render() {
    return (
      <div className="admin-side-bar-wrapper">
        <Drawer containerClassName="admin-side-bar" docked={true} open={this.state.isSideBarOpen} onClose={this.openSideBar} variant="permanent">
          <div>
            <List>
              {this.state.sideBarList.map(row => (
                <div>
                  <ListItem className="sidebar-item">
                    <span className="sidebar-item-text">{row.name}</span>
                    {/* <ListItemText primary={row.name} /> */}
                  </ListItem>
                  <List>
                    {row.nested.map(nestedRow => (
                      <ListItem button>
                        <span className="nested-item-text">{nestedRow.name}</span>
                        {/* <ListItemText primary={nestedRow.name} /> */}
                      </ListItem>
                    ))}
                  </List>
                </div>
              ))}
            </List>
          </div>
        </Drawer>
      </div>
    );
  }
}

export default AdminSideBar;