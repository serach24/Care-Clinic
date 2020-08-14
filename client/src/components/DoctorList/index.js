import React from "react";
import DoctorOpenInfo from "./../DoctorOpenInfo";
import Container from '@material-ui/core/Container';
import "./styles.css";
// import a from "./img/1.jpg";
// import b from "./img/2.jpg";
// import c from "./img/3.jpg";
// import d from "./img/3.jpg";


class DoctorList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

render() {
    const {app, doctors} = this.props;
    return (
        <div className="article_container">
          <Container >
            {doctors.map(item => (
            <DoctorOpenInfo
            key={item.username}
            doctor={item}
            UUid = {app.state.userId}
            Uname = {app.state.profile.username}
            Rname = {app.state.profile.realName}
            />
            
        ))}
          </Container>
        </div>
    );
    }
}

export default DoctorList;
