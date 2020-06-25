import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

import "./styles.css";

const List = [];

class RequestInfo{
    constructor(Id,UID,email,message) {
        this.Id = Id;
        this.Uid = UID;
        this.email = email;
        this.message = message;
        this.state = "Pending";
    }
    FunctionApprove(){
        this.state = "Approved";
        //Message Backend
        alert("Request "+ this.Uid +" Approved");
    }

    FunctionDecline(){
        this.State = "Declined";
        //Message Backend
        alert("Request "+ this.Uid +" Declined");
    }
}

List.push(new RequestInfo(0,"MS0001","Bo@Liu.ca","This is a test message"));
List.push(new RequestInfo(1,"MS0210","Liu@BO.cc","This is the second test message which is much longer then the first one and this is also a sentence without changing line."));
List.push(new RequestInfo(2,"MS1234","Bo@Liu.ca",
    "Available Scripts\n" +
    "In the project directory, you can run:\n" +
    "\n" +
    "npm start\n" +
    "Runs the app in the development mode.\n" +
    "Open http://localhost:3000 to view it in the browser.\n" +
    "\n" +
    "The page will reload if you make edits.\n" +
    "You will also see any lint errors in the console.\n" +
    "\n" +
    "npm test\n" +
    "Launches the test runner in the interactive watch mode.\n" +
    "See the section about running tests for more information.\n" +
    "\n" +
    "npm run build\n" +
    "Builds the app for production to the build folder.\n" +
    "It correctly bundles React in production mode and optimizes the build for the best performance.\n" +
    "\n" +
    "The build is minified and the filenames include the hashes.\n" +
    "Your app is ready to be deployed!"));
class RequestsList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            list: List
        };
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
        if(List.length<=0){
            alert("No new message");
        }
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
        if(List.length<=0){
            alert("No new message");
    }}

    SetState(NewList) {
        this.setState({
            list: NewList
        });
    }

      render() {
        if(List.length>=0){
        return (
        <div className="Whole">
              {this.state.list.map((item =>
                      <div className = "Big" key ={item.Id + "whole"}>
                      <table className="DoctorInfoTable">
                      <tbody>
                        <tr><td>{item.Uid}</td></tr>
                        <tr><td>{item.email}</td></tr>
                        </tbody>
                        </table>

                        <div className="Content" >
                         {item.message}
                        </div>

                        <table className ="twoButtons">
                        <tbody>
                        <tr>
                        <td>
                        <button className ="Approve" id={item.Id} onClick={this.HandleApprove.bind(this)}> Approve </button>
                        </td>
                        </tr>
                        <tr>
                        <td>
                        <button className ="Decline" id={item.Id} onClick={this.HandleDecline.bind(this)}> Decline </button>
                        </td>
                        </tr>
                        </tbody>
                        </table>
                       </div>
                ))}


      </div>
    );}
        else {
            return (
                <div className="Whole">
                <h1>No Pending Request</h1>
                </div>
            );
        }
  }
}

export default RequestsList;
