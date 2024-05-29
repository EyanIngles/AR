import './App.css';
import { loadProvider, loadNetwork, loadAccount } from './store/reducers/interactions'
import { useDispatch, useSelector } from 'react-redux';

function App() {
const dispatch = useDispatch();

const loadBlockchain = async () => {
    await loadProvider(dispatch)
    console.log('loadBlockchain')
}



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
