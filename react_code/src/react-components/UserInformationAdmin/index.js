import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

import "./styles.css";

const List = [];

class UserInfo{
    constructor(Id,UID,Name,State) {
        this.Id = Id;
        this.Uid = UID;
        this.Name = Name;
        this.State = State;
    }

    FunctionDeactive(){
        if(this.State == "Banned"){
            this.State = "Active";
            return;
        }
        this.State = "Banned";
    }
}
/*Sample Users*/
List.push(new UserInfo(0,"UZ01234891","Bo","Active"));
List[0].FunctionDeactive();
List.push(new UserInfo(1,"UZ23132312","Liu","Active"));
List.push(new UserInfo(2,"UZ83265176","Cotton","Active"));
List.push(new UserInfo(3,"UZ46747321","Bol","Active"));
List.push(new UserInfo(4,"UZ46367312","Liub","Active"));
List.push(new UserInfo(5,"UZ23655176","Con","Active"));

class UserList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: List
        };
    }

    HandleBan(event){
        const target = event.target;
        List[target.id].FunctionDeactive();
        this.SetState(List);
    }

    SetState(NewList) {
        this.setState({
            list: NewList
        });
    }

      render() {
        return (
        <div className="Whole">
          <table>
              <thead>
                <tr className = "Head">
                    <th>UID</th>
                    <th>Name</th>
                    <th>State</th>
                    <th></th>
                </tr>
              </thead>
              <tbody>
              {this.state.list.map((item =>
                      <tr>
                        <td> {item.Uid} </td>
                        <td> {item.Name} </td>
                        <td> {item.State} </td>
                        <td> <button className ="BanButton" id={item.Id} onClick={this.HandleBan.bind(this)}> Ban </button> </td>
                      </tr>
                ))}
                </tbody>
          </table>
      </div>
    );
  }
}

export default UserList;
