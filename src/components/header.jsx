import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import AddEmp from './add-emp'

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}
const useStyles = makeStyles(theme => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));

export default function Header(props) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
        setAnchorEl(null);
    };

    const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
    handleClose();
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

    return (
    <div>
         <AppBar position="static">
              <Toolbar>
                   <Typography variant="h6"> BuildOps </Typography>
                    <Button component={Link} to="/" > Employees </Button> 
                    <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}> Manage </Button>
                     <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose} > 
                     <MenuItem onClick={handleOpen}>Add Employee</MenuItem>
                      </Menu> 
                </Toolbar>
                </AppBar> 
                <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleCloseModal}
      >
        <div style={modalStyle} className={classes.paper}>
         <button className="close" onClick={handleCloseModal}>
             X
         </button>
         <AddEmp closeModal={handleCloseModal}/>
        </div>
      </Modal>
    </div>
            );
}