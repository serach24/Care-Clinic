import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

import "./styles.css";
import BanPanel from './../AdminBanPanel'

const List = [];
var oriList;

class DoctorInfo{
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
/*Sample Doctors*/
// the data below need a serverCall to get
List.push(new DoctorInfo(0,"DC01234891","Dr Bo","Active"));
List[0].FunctionDeactive();
List.push(new DoctorInfo(1,"DC23132312","Dr Liu","Active"));
List.push(new DoctorInfo(2,"DC83265176","Dr Cotton","Active"));
oriList = List.slice();

class DoctorList extends React.Component {
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
          <table className ="DoctorInfoTable">
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
                      <tr key = {item.Id}>
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

export default DoctorList;
