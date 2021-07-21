import {Card,Grid,Paper,makeStyles,TextField, Button} from '@material-ui/core'
import {useState} from 'react'

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

  const [food,setFood]=useState('')
  const [serving,setServing]=useState('')
  const [data,setData]=useState([])
  const classes=useStyles()

  function handleChange1(e){
    setFood(e.target.value)
  }
  function handleChange2(e){
    setServing(e.target.value)
  }
  function handleClick(){
      fetch(`https://api.nal.usda.gov/fdc/v1/foods/search?query=${food}&pageSize=1&dataType=Survey (FNDDS)&api_key=g0v6KUIALGsi6DIcuy0bHbvVvMBfxv6iTYTMpbfL`).then(res=>res.json())
      .then(data=>setData([
        data.foods[0].
        foodNutrients.filter((a,index)=>{
          if(index<4){return a[1]}
        })]))
  }
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
          onChange={handleChange1}
          variant='outlined'/>
          <TextField 
          fullWidth 
          label='serving' 
          onChange={handleChange2}
          className={classes.fields}
          variant='outlined'/>
          <Button 
          type='submit'
          variant='contained'
          className={classes.buttons}
          onClick={(food&&serving)&&handleClick}
          color='primary'
          >add</Button>
        </Paper>
      </Grid>
    </Grid>
  </div> );
}
 
export default Main;