import React from "react";
import { uid } from "react-uid";
import DoctorOpenInfo from "./../DoctorOpenInfo";
import Container from '@material-ui/core/Container';
import "./styles.css";
import a from "./img/1.jpg";
import b from "./img/2.jpg";
import c from "./img/3.jpg";
import d from "./img/3.jpg";


class DoctorList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

            // the data below need a serverCall to get
            doctors: [
                {
                    id: 0,
                    realName: "John Doe1",
                    username: "testDoctor1",
                    expertise: "Pediatrics",
                    gender: "female",
                    img: a,
                },
                {
                    id: 1,
                    realName: "John Doe2",
                    username: "testDoctor2",
                    expertise: "Neurosurgery",
                    gender: "male",
                    img: b,
                },
                {
                    id: 2,
                    realName: "John Doe3",
                    username: "testDoctor3",
                    expertise: "Dermatology",
                    gender: "female",
                    img: a,
                },
                {
                    id: 3,
                    realName: "John Doe4",
                    username: "testDoctor4",
                    expertise: "Pediatrics",
                    gender: "male",
                    img: d,
                },
                {
                    id: 4,
                    realName: "John Doe5",
                    username: "testDoctor5",
                    expertise: "ENT",
                    gender: "female",
                    img: a,
                },
                {
                    id: 5,
                    realName: "John Doe6",
                    username: "testDoctor6",
                    expertise: "ENT",
                    gender: "male",
                    img: c,
                },
                {
                    id: 6,
                    realName: "John Doe7",
                    username: "testDoctor7",
                    expertise: "Stomatology",
                    gender: "female",
                    img: b,
                },
                {
                    id: 7,
                    realName: "John Doe8",
                    username: "testDoctor8",
                    expertise: "Neurosurgery",
                    gender: "male",
                    img: a,
                },
                {
                    id: 8,
                    realName: "John Doe9",
                    username: "testDoctor9",
                    expertise: "Respiration",
                    gender: "male",
                    img: d,
                },
            ]
        }
    }

render() {
    return (
        <div className="article_container">
          <Container >
            {this.state.doctors.map(item => (
            <DoctorOpenInfo
            key={item.username}
            doctor={item}
            UUid = {this.props.UUid}
            />
          ))}
          </Container>
        </div>
    );
    }
}

export default DoctorList;
