import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";

export default function Header(props) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
    <div>
         <AppBar position="static">
              <Toolbar>
                   <Typography variant="h6"> BuildOps </Typography>
                    <Button component={Link} to="/" > Employees </Button> 
                    <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}> Manage </Button>
                     <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose} > 
                     <MenuItem onClick={handleClose} component={Link} to="/add-employee">Add Employee</MenuItem>
                      </Menu> 
                </Toolbar>
                </AppBar> 
    </div>
            );
}