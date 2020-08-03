import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'block'
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));


const Page404 =() => {
    const classes = useStyles();
    return (
      <div className={classes.root}>
          <Paper className={classes.paper}>
                     <h1>404 NOT FOUND</h1>
            <Button variant="contained" component={Link} to='/'>Home Page</Button> 
          </Paper>
      </div>
    );
  }

export default Page404;
