import React from "react";
import Drawer from "@material-ui/core/Drawer";

import "./styles.css"
import List from "@material-ui/core/List";
import { ListItem} from "@material-ui/core";

class AdminSideBar extends React.Component {
  state = {
    isSideBarOpen: true,

    // the data below need a serverCall to get
    sideBarList: [
      {
        name: "User Management",
        ref: "user-management",
        index:0,
        nested: [
          { name: "Doctor Application Review",
            ref: "doctor-application-review"
          },
          { name: "User Ban",
          ref: "user-ban"
        }
        ]
      },
      {
        name: "Content Management",
        ref: "content-management",
          index:1,
          nested: [
          { name: "Content Upload Review",
            ref: "content-upload-review" },
          { name: "Content Editing",
            ref: "content-editing" },
        ]
      },
      {
        name: "Feedback Review",
        ref: "feedback-review",
          index:2,
          // nested: [
        //   { "name": "Patient Feedback" },
        //   { "name": "Doctor Feedback" }
        // ]
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

  scrollToAnchor = (anchorName) => {
    if (anchorName) {
        let anchorElement = document.getElementById(anchorName);
        if(anchorElement) { anchorElement.scrollIntoView(); }
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
                  <ListItem button className="sidebar-item">
                    <span onClick={() => this.props.GoTo(row.index)} className="sidebar-item-text">{row.name}</span>
                    {/* <ListItemText primary={row.name} /> */}
                  </ListItem>
                  { row.nested!==undefined &&
                  <List>
                    {row.nested.map(nestedRow => (
                      <ListItem button>
                        <span className="nested-item-text">{nestedRow.name}</span>
                        {/* <ListItemText primary={nestedRow.name} /> */}
                      </ListItem>
                    ))}
                  </List>
  }
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
