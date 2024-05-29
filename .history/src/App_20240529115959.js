import './App.css';
import { loadProvider, loadNetwork, loadAccount } from './store/reducers/interactions'
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';

function App() {
  // declaring dispatch
const dispatch = useDispatch();
// use State statments
const [loadingBlockchain, setLoadingBlockchain] = useState(false)

const loadBlockchain = async () => {
  // changing the state of the loading statment to true as in it is loading.
  setLoadingBlockchain(true)
  // load provider
    await loadProvider(dispatch)
    console.log('loadBlockchain')


    // once all the blockchain has finished loading, set to loading blockchain to false
    setLoadingBlockchain(false)
}
useEffect(() => {
  if(!loadingBlockchain) {
    loadBlockchain()
  } else {
    setLoadingBlockchain(true)
  }
},[loadingBlockchain])

  return (
    <div className="App">
      <button onClick={loadBlockchain}>connect provider</button>
      <header className="App-header">
        <h1 className='h1'>This is the header</h1>
      </header>
      <div>
        <p>this is the body</p>
      </div>
    </div>
  );
}

export default App;
