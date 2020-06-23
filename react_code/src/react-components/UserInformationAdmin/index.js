import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

import "./styles.css";

const List = [];
var oriList;

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
oriList = List.slice();

class UserList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: List,
            show: true
        };
        this.FunctionHide = this.Functionhide.bind(this);
    }

    Functionhide() {
        this.setState({ show: !this.state.show });
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
    FunctionFilter(e){

        const condition = e.target.value;
        console.log(condition);
        const newList = [];
        var i;
        for (i = 0; i < oriList.length; i++) {
            console.log(i);
            if (oriList[i].Uid.includes(condition) || oriList[i].Name.includes(condition)){
                console.log(i);
                newList.push(oriList[i]);
            }
        }
        this.setState({
            list: newList
        });
    }

      render() {
        return (
        <div className="Whole">
              <div>Search</div>
              <textarea className= "SearchBar" onChange ={this.FunctionFilter.bind(this)}></textarea>
          <table className = "DoctorInfoTable">
              <thead>
                <tr>
                    <th>UID</th>
                    <th>Name</th>
                    <th>State</th>
                    <th>
                      {!this.state.show && (<button onClick={() => this.FunctionHide()}>
                          show
                          </button>
                      )
                      }
                      {this.state.show && (<button onClick={() => this.FunctionHide()}>
                              hide </button>
                          )
                      }
                    </th>
                </tr>
              </thead>
              <tbody>
              {this.state.show && this.state.list.map((item =>
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
