import React from 'react';
import './Header.css'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1
  }
}));

const Header = () => {

    const classes = useStyles();
    

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar variant="dense">
                <IconButton edge="start" className={classes.menuButton} color="inherit" >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" color="inherit">
                    <nav className="navStyle"  variant="contained">
                        <a href="/home">Home</a>
                        <a href="/details">Post Details</a>
                        <a href="/contact">Contact</a>
                    </nav>
                </Typography>
                
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Header;