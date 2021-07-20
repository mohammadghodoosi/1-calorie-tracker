import Layout from './Layout';
import Main from './Main';
import {makeStyles} from '@material-ui/core';

const useStyles=makeStyles({
  bgA:
  {backgroundColor:"lightGrey"
  ,height:"100vh",
  width:'100vw'}
})

function App() {

  const classes=useStyles()
  
  return (
    <div className={classes.bgA}>
    <Layout  >
      <Main/>
    </Layout>
    </div>
  );
}

export default App;
