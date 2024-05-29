import './App.css';
import { loadProvider, loadNetwork, loadAccount } from './store/reducers/interactions'
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap'

function App() {
  // declaring dispatch
const dispatch = useDispatch();
// use State statments
const [loadingBlockchain, setLoadingBlockchain] = useState(false)

const loadBlockchain = async () => {
  // changing the state of the loading statment to true as in it is loading.
  setLoadingBlockchain(true)
  // load provider
  loadProvider(dispatch)
  // load accounts
  await loadAccount(provider, chainId, dispatch)


    // once all the blockchain has finished loading, set to loading blockchain to false
    setLoadingBlockchain(false)
}
useEffect(() => {
  if(!loadingBlockchain || !account == null) {
    try{
      loadBlockchain()
    } catch (error) {
      window.alert('error loading blockchain ', error)
    }
  }
},[loadingBlockchain, account])

  return (
    <div className="App">
      <Button onClick={loadBlockchain}>connect provider</Button>
      <header className="App-header">
        <h1 className='h1'>This is the header</h1>
        <h5>buttons here</h5>
        <Button onClick={""}>click me for...</Button>
        <Button onClick={""}>click me for...</Button>
        <Button onClick={""}>click me for...</Button>
        <Button onClick={""}>click me for...</Button>
      </header>
      <div>
        <p>this is the body</p>
      </div>
    </div>
  );
}

export default App;
