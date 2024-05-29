import './App.css';
import { loadProvider, loadNetwork, loadAccount } from './store/reducers/interactions'
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap'

function App() {
  // declaring dispatch
const dispatch = useDispatch();
const account = useSelector(state => state.provider.account)
const provider = useSelector(state => state.provider.connection)
const chainId = useSelector(state => state.provider.chainId)
// use State statments
const [loadingBlockchain, setLoadingBlockchain] = useState(false)

const loadBlockchain = async () => {
  // changing the state of the loading statment to true as in it is loading.
  setLoadingBlockchain(true)
  // load accounts
  await loadAccount(dispatch)
  // load provider
  loadProvider(dispatch)
  // load chain id
  await loadNetwork(provider, dispatch)

  console.log('loading')
  console.log(chainId)
    // once all the blockchain has finished loading, set to loading blockchain to false
    setLoadingBlockchain(true)
}
useEffect(async () => {
  if(!loadingBlockchain || account == null) {
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
        <Button>{}</Button>
        <Button>{}</Button>
        <Button>{}</Button>
        <Button>{}</Button>
      </header>
      <div>
        <p>this is the body</p>
      </div>
    </div>
  );
}

export default App;
