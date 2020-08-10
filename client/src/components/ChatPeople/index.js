import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Avatar from "@material-ui/core/Avatar";
import Popover from "@material-ui/core/Popover";
import ListItemText from "@material-ui/core/ListItemText";
import { withStyles } from '@material-ui/core/styles';

import Chat from "../Chat";
import { styles } from "./styles";

class ChatPeople extends React.Component {
  state = {
    ukey: 0,
    chatOpen: false,

    talkTo: {},
    // the data below need a serverCall to get
    people: [
      {
        id: "asdf",
        name: "testUser1",
        avatar: "/img/test-user1.png",
        recentMessage: "Hello!",
      },
      {
        id: "qwer",
        name: "testUser1",
        avatar: "/img/test-user1.png",
        recentMessage: "Hello!",
      },
    ],
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

  render() {
    const { open, onClose, anchorEl, classes } = this.props;
    const people = this.state.people;
    return (
      <Popover
        className={classes.chatPeople}
        open={open}
        anchorEl={anchorEl}
        onClose={onClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <List className="chat-people">
          {people.map(person => (
            <ListItem key={this.state.ukey++} onClick={() => this.openChat(person)} className={classes.chatPerson} alignItems="flex-start">
              <Avatar className="chat-self-avatar" alt="currentUser" src={person.avatar} />
              <ListItemText
                primary={person.name}
                secondary={person.recentMessage}
              />
            </ListItem>
          ))}
        </List>
        <Chat
          open={this.state.chatOpen}
          onClose={this.closeChat}
          talkTo={this.state.talkTo}
          userId={this.props.userId}
        />
      </Popover>
    );
  }
}

export default withStyles(styles, { withTheme: false })(ChatPeople);