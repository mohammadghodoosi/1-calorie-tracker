import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import FastfoodIcon from '@material-ui/icons/Fastfood';import {makeStyles} from '@material-ui/core';

const useStyles=makeStyles((theme)=>({
 
 top:theme.mixins.toolbar
}))

function Layout({children}){
  const classes=useStyles()
  return (
    <div >
     <AppBar>
       <Toolbar>
          <FastfoodIcon/>
         <Typography>calorie tracker</Typography>
        </Toolbar>
      </AppBar>
      <div>
        <div className={classes.top}>
        </div>
        {children}
      </div>
      </div>
      
      );
}
 
export default Layout;