import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

import "./styles.css";

const List = [];

class DoctorInfo{
    constructor(Id,UID,Name,State) {
        this.Id = Id;
        this.Uid = UID;
        this.Name = Name;
        this.State = State;
    }

    FunctionApprove(){
        this.State = "Approve";
        //message backend
    }
    FunctionDecline(){
        this.State = "Decline";
        //message backend
    }
}
/*Sample Doctors*/
List.push(new DoctorInfo(0,"DC99234891","Fake Dr Bo","Pending"));
List.push(new DoctorInfo(1,"DC99132312","Fake Dr Liu","Pending"));
List.push(new DoctorInfo(2,"DC99265176","Fake Dr Cotton","Pending"));

class PendingDoctors extends React.Component {
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

    HandleApprove(event){
        const target = event.target;
        List[target.id].FunctionApprove();
        List.splice(target.id,1);
        var i;
        for (i = 0; i < List.length; i++) {
            List[i].Id = i;
        }
        this.SetState(List);
    }

    HandleDecline(event){
        const target = event.target;
        List[target.id].FunctionDecline();
        List.splice(target.id,1);
        var i;
        for (i = 0; i < List.length; i++) {
            List[i].Id = i;
        }
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
                        <td class = "PendingDocButtons">
                        <button className ="Approve2" id={item.Id} onClick={this.HandleApprove.bind(this)}> Approve </button>
                        <button className ="Decline2" id={item.Id} onClick={this.HandleDecline.bind(this)}> Decline </button>
                        </td>
                      </tr>
                ))}
                </tbody>
          </table>
      </div>
    );
  }
}

export default PendingDoctors;
