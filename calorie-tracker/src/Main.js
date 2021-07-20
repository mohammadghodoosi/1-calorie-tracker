import {Card,Grid,Paper,makeStyles,TextField, Button} from '@material-ui/core'

const useStyles=makeStyles({
  input:
  {
     padding:'30px',
     margin:'20px',
     backgroundColor:'darkGrey'
  },
  fields:
  {
    margin:'10px'
  },
  buttons:
  {
    width:'50%',
    marginLeft:'25%',
    marginTop:'10px'
  }

})

function Main () {

  const classes=useStyles()

  return ( <div>
    <Grid container>
      <Grid 
      item 
      xs={12} 
      lg={6} >
        <Paper 
        className={classes.input}>
          <TextField 
          fullWidth 
          label='food' 
          className={classes.fields}
          variant='outlined'/>
          <TextField 
          fullWidth 
          label='serving' 
          className={classes.fields}
          variant='outlined'/>
          <Button 
          variant='contained'
          className={classes.buttons}
          color='primary'
          >add</Button>
        </Paper>
      </Grid>
    </Grid>
  </div> );
}
 
export default Main;