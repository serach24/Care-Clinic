import React from "react";
import Button from "@material-ui/core/Button";
import TextField from '@material-ui/core/TextField';

import "./styles.css";
import UserAvatar from './../UserAvatar'
import { changePhoneEmail } from './../../auth/authUtil'

/* Component for the Home page */

class ProfileSide extends React.Component {
    constructor(props) {
        super(props);
        const { app } = this.props;
        this.state = {
            //State should be setted by call backend with Uid this.props.UUid
            // the data below need a serverCall to get
            userId: app.state.userId,
            mainEmail: app.state.profile.mainmail,
            email: app.state.profile.backupemail,
            age: app.state.profile.age,
            name: app.state.profile.realName,
            type: "not loged in",
            phone: app.state.profile.phone,
            changeEmail: false,
            changePhone: false,
            newphone: 0,
            newemail: "a@a.a",
            expertise: "Pediatrics",
            documents: [
                {
                    docName: "sampleCertification1.jpg",
                    location: "/img/sampleCertification1.jpg"
                },
                {
                    docName: "sampleCertification2.pdf",
                    location: "/img/sampleCertification2.pdf"
                }
            ],
            status: "Pending"
        };
    }
    SetPhone(e) {
        this.setState({ newphone: e.target.value })
    }
    SetEmail(e) {
        this.setState({ newemail: e.target.value })
    }

    FunctionPhone() {
        if (!this.state.changePhone) {
            this.setState({
                changePhone: true
            })
        }
        else {
            //info backend
            changePhoneEmail(this, this.props)
            this.setState({
                phone: this.state.newphone,
                changePhone: false
            })
        }
    }
    FunctionEmail() {
        if (!this.state.changeEmail) {
            this.setState({
                changeEmail: true
            })
        }
        else {
            //info backend
            changePhoneEmail(this, this.props)
            this.setState({
                email: this.state.newemail,
                changeEmail: false
            })
        }
    }


    render() {
        const { app } = this.props;
        return (
            <div className="ProfilePanel">
                <div className="Background">
                    <div className="UserDiv">
                        <UserAvatar app={app}></UserAvatar>
                        <div
                            className="userInfo">
                            <div className="ProfileItem">
                                {(app.state.loginState === 0 && "User Type: Developer")}
                                {(app.state.loginState === 1 && "User Type: User")}
                                {(app.state.loginState === 2 && "User Type: Admin")}
                                {(app.state.loginState === 3 && "User Type: Doctor")}
                            </div>
                            <div className="ProfileItem">
                                {"User Uid: " + app.state.userId + "\n"}
                            </div>
                            <div className="ProfileItem">
                                {"Main Email: " + this.state.mainEmail + "\n"}
                            </div>
                            <div className="ProfileItem">
                                {"Age: " + this.state.age + "\n"}
                            </div>
                            <div className="ProfileItem">
                                {"Backup Email: " + this.state.email + "\n"}
                            </div>
                            <div className="ProfileText">
                                {this.state.changeEmail && (<TextField label="New Email" fullWidth={true} variant="filled" onChange={this.SetEmail.bind(this)}></TextField>)}
                            </div>
                            <div className="ProfileItem">
                                <Button variant="contained" onClick={this.FunctionEmail.bind(this)} color="primary">change</Button>
                            </div>
                            <div className="ProfileItem">
                                {"PhoneNumber: " + this.state.phone + "\n"}
                            </div>
                            <div className="ProfileText">
                                {this.state.changePhone && (<TextField label="New PhoneNumber" fullWidth={true} variant="filled" onChange={this.SetPhone.bind(this)}></TextField>)}
                            </div>
                            <div className="ProfileItem">
                                <Button variant="contained" onClick={this.FunctionPhone.bind(this)} color="primary">change</Button></div>
                        </div>

                        {app.state.loginState === 3 &&
                            <div className="ProfileItem"> {"Expertise: " + this.state.expertise + "\n"} </div>}
                        {app.state.loginState === 3 && this.state.documents.map((doc) => (
                            <div className="ProfileItem">
                                <a className="doctor-document" href={doc.location} download={doc.docName}>{doc.docName}</a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default ProfileSide;
