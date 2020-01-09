import React,{useEffect} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Avatar from "react-avatar";
import {listEmployees} from '../graphql/queries';
import {deleteEmployee } from '../graphql/mutations'
import {API,graphqlOperation  } from "aws-amplify";

const useStyles = makeStyles({
  card: { maxWidth: 345 },
  media: { height: 140 }
});


export default function Emp(props) {
  const classes = useStyles();
  const [employees, setEmployees] = React.useState([]);
  useEffect( ()=>{
     const fetchData =async ()=>{
        const result = await API.graphql(graphqlOperation(listEmployees))
        console.log(result.data.listEmployees)
       setEmployees(
        result.data.listEmployees.items
       )
        
      }
      fetchData()
  },[])

  let history = useHistory();
  const handleEmployee = emp => {
    history.push("/employee/" + emp.id);
    console.log(emp);
  };
  const handleDelete =async (itemId) => {
      const input ={
        id:itemId
      }
    console.log(itemId)
    const result = await API.graphql(graphqlOperation(deleteEmployee,{input}))
    console.log(result)
    setEmployees(
      employees.filter(ele => {
        return ele.id !== itemId;
      })
    );
  };
  const handleEdit = item => {
    console.log(item);
  };
  return (
    <div className="container">
      <div className="row">
        { employees.length>0? employees.map(item => {
          return (
            <div key={item.id} style={{ display: "inline-block" }}>
              <Card
                className={classes.card}
                style={{ minWidth: 275, marginLeft: 10 }}
              >
                <CardActionArea onClick={() => handleEmployee(item)}>
                  <div>
                    <Avatar name={item.firstname + " " + item.lastname} />
                  </div>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {item.firstname}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {item.lastname}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button
                    size="small"
                    color="primary"
                    onClick={() => handleEdit(item)}
                  >
                    edit
                  </Button>
                  <Button
                    size="small"
                    color="primary"
                    onClick={() => handleDelete(item.id)}
                  >
                    delete
                  </Button>
                </CardActions>
              </Card>
              <br />
            </div>
          );
        }):<h2>Loading employees..</h2>}
      </div>
    </div>
  );
}
