import React from "react";
import Button from '@material-ui/core/Button';
import { withStyles } from "@material-ui/core/styles";
import { styles } from './styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';

import imgforbody from './img/Systems-for-health-topic.jpg';


class RightPart extends React.Component {
    state = {
        categories:[
            {category: "General",open:false, sub:[{
                                        name:"", link:""
                                    }]},
            {category: "Abdomen and Digestive",open:false, sub:[{
                                        name:"", link:""
                                    }]},
            {category: "Bleeding",open:false, sub:[{
                                        name:"", link:""
                                    }]},
            {category: "Brain and Nervous System",open:false, sub:[{
                                        name:"", link:""
                                    }]},
            {category: "Chest and Respiratory",open:false, sub:[{
                                        name:"", link:""
                                    }]},
            {category: "Children's Symptoms",open:false, sub:[{
                                        name:"", link:""
                                    }]},
            {category: "Eye",open:false, sub:[{
                                        name:"", link:""
                                    }]},
            {category: "Genital and Urinary",open:false, sub:[{
                                        name:"", link:""
                                    }]},
            {category: "Ear Nose and Throat",open:false, sub:[{
                                        name:"", link:""
                                    }]},
            {category: "Infection",open:false, sub:[{
                                        name:"", link:""
                                    }]},
            {category: "Joint and Muscle",open:false, sub:[{
                                        name:"", link:""
                                    }]},
            {category: "Oral and Dental",open:false, sub:[{
                                        name:"", link:""
                                    }]}
        ]
    };

    handleClick = (index) => {
        const newcategories = this.state.categories.map((obj, i) => obj === this.state.categories[index] ? {category: obj.category ,open:!obj.open, sub:obj.sub}: obj );
        this.setState({
            categories: newcategories
        }, ()=> console.log(this.state.categories));
    };

    render () {
        const { classes } = this.props;
        return (
            <div className={classes.rightroot}>
                <img src={imgforbody} alt="img for body" className={classes.img}/>
                <List   component="nav"
                        subheader={
                            <ListSubheader component='div' id="nested-health-topics">
                            <strong>Common Topics</strong>
                            </ListSubheader>
                        }
                        className={classes.buttoncard}
                >
                    {this.state.categories.map((item, index) => (
                        <div>
                        <ListItem button onClick={()=> {this.handleClick(index)}}>
                        <ListItemText primary={item.category} />
                        {item.open ? <ExpandLess /> : <ExpandMore />}
                        </ListItem>
                        <Collapse in={item.open} timeout="auto" unmountOnExit>
                                <ListItem button className={classes.nested}>
                                  <ListItemText secondary="Sub categories" />
                                </ListItem>

                        </Collapse>
                        </div>
                    ))}
                </List>
            </div>
        );
    }
}

export default withStyles(styles, { withTheme: false })(RightPart);