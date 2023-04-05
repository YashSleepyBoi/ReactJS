import Counter from './components/Counter';
import {Provider, useSelector} from 'react-redux'

import Auth from './components/Auth'
import Header from './components/Header'

function App() {

  const logInStatus=useSelector(state=>state.auth.loggedIn)
  return (
    <>
    
      {logInStatus&&<Header></Header>}
      {!logInStatus&&<Auth></Auth>}
      
      <Counter />
   
    
      </>
    
  );
}

export default App;
