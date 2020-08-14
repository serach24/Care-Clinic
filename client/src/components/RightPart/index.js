import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { styles } from './styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { Link } from "react-router-dom";
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import imgforbody from './img/Systems-for-health-topic.jpg';


class RightPart extends React.Component {
    state = {
        ukey: 0,

        // the data below need a serverCall to get
        categories: [
            {
                category: "General", open: false, sub: [
                    {
                        name: "Family physician",
                        link: "/finddoctor/Family physician"
                    }
                ]
            },
            {
                category: "Abdomen and Digestive", open: false, sub: [
                    {
                        name: "Endocrinologists",
                        link: "/finddoctor/Endocrinologists"
                    }
                ]
            },
            {
                category: "Bleeding", open: false, sub: [{
                    name: "Dermatology", link: "/finddoctor/Dermatology"
                }]
            },
            {
                category: "Brain and Nervous System", open: false, sub: [{
                    name: "Neurosurgery", link: "/doctorlist/Neurosurgery"
                }]
            },
            {
                category: "Chest and Respiratory", open: false, sub: [{
                    name: "Respiration", link: "/doctorlist/Respiration"
                }]
            },
            {
                category: "Children's Symptoms", open: false, sub: [{
                    name: "Pediatrics", link: "/doctorlist/Pediatrics"
                }]
            },
            {
                category: "Eye", open: false, sub: [{
                    name: "Ophthalmologists", link: "/doctorlist/Ophthalmologists"
                }]
            },
            {
                category: "Genital and Urinary", open: false, sub: [{
                    name: "Sub category 1", link: "/doctorlist"
                }]
            },
            {
                category: "Ear Nose and Throat", open: false, sub: [{
                    name: "ENT", link: "/doctorlist/ENT"
                }]
            },
            {
                category: "Infection", open: false, sub: [{
                    name: "Infectious", link: "/doctorlist/Infectious"
                }]
            },
            {
                category: "Joint and Muscle", open: false, sub: [{
                    name: "Orthopedic", link: "/doctorlist/Orthopedic"
                }]
            },
            {
                category: "Oral and Dental", open: false, sub: [{
                    name: "Stomatology", link: "/doctorlist/Stomatology"
                }]
            }
        ]
    };

    handleClick = (index) => {
        const newcategories = this.state.categories.map((obj, i) => obj === this.state.categories[index] ? { category: obj.category, open: !obj.open, sub: obj.sub } : obj);
        this.setState({
            categories: newcategories
        });
    };

    render() {
        const { classes, app } = this.props;
        return (
            <div className={classes.rightroot}>
                <img src={imgforbody} alt="img for body" className={classes.img} />
                <List component="nav"
                    subheader={
                        <ListSubheader component='div' id="nested-health-topics">
                            <strong>Common Topics</strong>
                        </ListSubheader>
                    }
                    className={classes.buttoncard}
                >
                    {this.state.categories.map((item, index) => (
                        <div key={index}>
                            <ListItem button onClick={() => { this.handleClick(index) }}>
                                <ListItemText primary={item.category} />
                                {item.open ? <ExpandLess /> : <ExpandMore />}
                            </ListItem>
                            <Collapse in={item.open} timeout="auto" unmountOnExit>
                                {item.sub.map((cate, index) => (
                                    <ListItem key={100 + index} button className={classes.nested} component={Link} to={cate.link} >
                                        <ListItemText secondary={cate.name} />
                                    </ListItem>
                                ))}
                            </Collapse>
                        </div>
                    ))}
                    {console.log(app.state.loginState + "state")}
                </List>
            </div>
        );
    }
}

export default withStyles(styles, { withTheme: false })(RightPart);