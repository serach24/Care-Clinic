import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { styles } from './styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { Link } from "react-router-dom";
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import imgforbody from './img/Systems-for-health-topic.jpg';


class RightPart extends React.Component {
    state = {
        ukey: 0,

        // the data below need a serverCall to get
        categories: [
            {
                category: "General",
                open: false,
                name: "All Doctors",
                link: "/finddoctor/all"

            },
            {
                category: "General",
                open: false,
                name: "Family physician",
                link: "/finddoctor/Family physician"

            },
            {
                category: "Abdomen and Digestive",
                open: false,
                name: "Endocrinologists",
                link: "/finddoctor/Endocrinologists"

            },
            {
                category: "Bleeding",
                open: false,
                name: "Dermatology",
                link: "/finddoctor/Dermatology"

            },
            {
                category: "Brain and Nervous System",
                name: "Neurosurgery",
                link: "/finddoctor/Neurosurgery"

            },
            {
                category: "Chest and Respiratory",
                open: false,
                name: "Respiration",
                link: "/finddoctor/Respiration"

            },
            {
                category: "Children's Symptoms",
                open: false,
                name: "Pediatrics",
                link: "/finddoctor/Pediatrics"

            },
            {
                category: "Eye",
                open: false,
                name: "Ophthalmologists",
                link: "/finddoctor/Ophthalmologists"

            },
            {
                category: "Ear Nose and Throat",
                open: false,
                name: "ENT",
                link: "/finddoctor/ENT"

            },
            {
                category: "Infection",
                open: false,
                name: "Infectious",
                link: "/finddoctor/Infectious"

            },
            {
                category: "Joint and Muscle",
                open: false,
                name: "Orthopedic",
                link: "/finddoctor/Orthopedic"

            },
            {
                category: "Oral and Dental",
                open: false,
                name: "Stomatology",
                link: "/finddoctor/Stomatology"

            }
        ]
    };
    render() {
        const { classes, app, home } = this.props;
        return (
            <div className={classes.rightroot}>
                <img src={imgforbody} alt="img for body" className={classes.img} />
                <List component="nav" subheader={<ListSubheader component='div' id="nested-health-topics">
                            <strong>Categories</strong>
                        </ListSubheader>}
                    className={classes.buttoncard}>   
                {this.state.categories.map((item, index) => (
                    <div key={index}>
                    <Divider/>
                    {home === "home" 
                    ? <ListItem component={Link} to="/doctorlist" > 
                    <ListItemText primary={item.name} /> 
                    </ListItem>
                    :<ListItem button>
                        <ListItemText  component={Button} onClick={()=>app.handleClick(item.name)} primary={item.name} />
                    </ListItem>
                    }
                    </div>
                ))}
                </List>
            </div>
        );
    }
}

export default withStyles(styles, { withTheme: false })(RightPart);