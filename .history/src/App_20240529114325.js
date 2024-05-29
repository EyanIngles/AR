import './App.css';
import { loadProvider, loadNetwork, loadAccount } from './store/reducers/interactions'
import { useDispatch, useSelector } from 'react-redux';


const loadBlockchain = async () => {
    await loadProvider(dispatch)
}

function App() {
  return (
    <div className="App">
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
