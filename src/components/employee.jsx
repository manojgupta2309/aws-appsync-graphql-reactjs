import React , {useEffect}from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import AddIcon from "@material-ui/icons/Add";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import {deleteSkill} from '../graphql/mutations';
import {deleteAddress} from '../graphql/mutations';
import {getEmployee} from '../graphql/queries'
import {API,graphqlOperation  } from "aws-amplify";
import AddAdrs from "./add-adrs";
import EditAdrs from "./edit-adrs"
import Modal from '@material-ui/core/Modal';
import AddSkill from "./add-skill"
import EditSkill from "./edit-skill"
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
    root: { flexGrow: 1, maxWidth: 752 },
    demo: { backgroundColor: theme.palette.background.paper },
    title: { margin: theme.spacing(4, 0, 2) }
  }));

export default function Employee(props) {
  
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
};

const handleClose = () => {
    setAnchorEl(null);
};

const classes = useStyles();


  const [dense] = React.useState(false);
  const [secondary] = React.useState(false);

  const [employee, setemployee] = React.useState(null);
  const [skills, setskills] = React.useState([]);
  const [address, setaddress] = React.useState([]);
  const [currentAdrs, setCurrentAdrs] = React.useState({});
  const [currentSkill, setCurrentSkill] = React.useState({});
  const [editEnable, setEditEnable] = React.useState(false);
  const [skillEnable, setSkillEnable] = React.useState({
    editEnable:"false",
    addEnable:"false"
  });
  useEffect( ()=>{
    const fetchData =async ()=>{
        const input = {
            id: props.match.params.id
       }
       const result = await API.graphql(graphqlOperation(getEmployee,input))
       setemployee(result.data.getEmployee)
       setskills(result.data.getEmployee.skills.items)
       setaddress(result.data.getEmployee.address.items)
       console.log(result.data)       
     }
     fetchData()
  },[])
 const handleDelete =async (item) => {
    const input ={
        id:item.id
    }
  console.log(item)
  const result = await API.graphql(graphqlOperation(deleteSkill,{input}))
  console.log(result)
  setskills(
    skills.filter(ele => {
      return ele.id !== item.id;
    })
  );
  };
  const handleDeleteAddrs = async (id)=>{
    const input ={
      id:id
  }
  //console.log(id)
  const result = await API.graphql(graphqlOperation(deleteAddress,{input}))
  //console.log(result)
  setaddress(
  address.filter(ele => {
    return ele.id !== id;
  })
  );
  }
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
   // setEditEnable(false)
   // handleClose();
  };
  const handleAdd =(flag)=>{
    if(flag=="skill")
    setSkillEnable({
      ...editEnable,addEnable:true
    })
     else{
      setSkillEnable({
        ...editEnable,addEnable:false
      })
       setEditEnable(false)
     }
    handleOpen()
  }
  const handleCloseModal = (resp) => {
    console.log(resp)
    if(resp.createSkill)
    setskills([...skills,resp.createSkill])
    if(resp.updateAddress)
    setaddress([resp.updateAddress,...address.filter(e=>e.id!==resp.updateAddress.id)])
    else if(resp.createAddress)
    setaddress([...address,resp.createAddress])
    else if(resp.updateSkill)
    setskills([
      resp.updateSkill,...skills.filter(e=>e.id!==resp.updateSkill.id)
    ])
    setOpen(false);
    setEditEnable(false)
    setSkillEnable({
      editEnable:false,
      addEnable:false
    })
  };
  const handleEdit = (flag,item) => {

    console.log(item);
    if(flag=="skill"){
      setCurrentSkill({
        ...item
      })
      setSkillEnable({
        ...skillEnable,editEnable:true
      })
      
    }else{
      setEditEnable(true)
      setCurrentAdrs({
       ...item

      })
    }
   
    handleOpen()
  };
 
  return (
     <div>

    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <Typography variant="h6" className={classes.title}>
           Employee Details
          </Typography>
          {
              employee ? <div>
              <h4>First Name:{employee.firstname}</h4> <p>Last Name:{employee.lastname}</p>
              </div>:<h4>loading..</h4>
          }
          
        </div>
        <div className="col-md-6">
          <Grid item xs={12} md={6}>
            <Typography variant="h6" className={classes.title}>
              Skills
              <IconButton edge="end" aria-label="add" onClick={()=>handleAdd("skill")}>
                <AddIcon />
              </IconButton>
            </Typography>
            <div className={classes.demo}>
              <List dense={dense}>
                
                {skills.map((skill, key) => {
                  return (
                    <ListItem key={skill.id}>
                      
                      
                      <ListItemText
                        primary={skill.name}
                        secondary={secondary ? "Secondary text" : null}
                      />
                      <ListItemSecondaryAction>
                        <IconButton edge="end" aria-label="edit"  onClick={()=>handleEdit("skill",skill)}>
                         
                          <EditIcon />
                        </IconButton>
                        <IconButton edge="end" aria-label="delete"  onClick={()=>handleDelete(skill)}>
                         
                          <DeleteIcon />
                        </IconButton>
                      </ListItemSecondaryAction>
                    </ListItem>
                  );
                })}
              </List>
            </div>
          </Grid>
        </div>
      </div>
      <div className="row">
        <div className="col-md-3">
          <Typography variant="h6" className={classes.title}>
            Address
            <IconButton edge="end" aria-label="add" onClick={()=>handleAdd("addrs")}>
              <AddIcon />
            </IconButton>
          </Typography>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12">
        {address.map((addrs,key) => {
          return (
            <div key={key} style={{ display: "inline-block" }}>
              <Card
                className={classes.card}
                style={{ minWidth: 275, marginLeft: 10 }}
              >
                <CardContent>
                  <Typography variant="h6" component="h2">
                    {addrs.city}
                  </Typography>
                  <Typography className={classes.pos} color="textSecondary">
                    {addrs.state}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary"  onClick={() => handleEdit("addrs",addrs)}>
                    edit
                  </Button>
                  <Button size="small" color="primary" onClick={()=>handleDeleteAddrs(addrs.id)} >
                    delete
                  </Button>
                </CardActions>
              </Card>
              
            </div>
          );
        })}
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
         {
            
            skillEnable.addEnable? <AddSkill {...employee} closeModal={handleCloseModal}/>:skillEnable.editEnable?<EditSkill empId={props.match.params.id} {...currentSkill} closeModal={handleCloseModal}/>:
            editEnable?<EditAdrs empId={props.match.params.id} adrs={currentAdrs} closeModal={handleCloseModal}/>: <AddAdrs {...employee} closeModal={handleCloseModal}/>
         }
        
        </div>
      </Modal>
      </div>
      
      </div>
     
    </div>
  
     </div>
  );
}
