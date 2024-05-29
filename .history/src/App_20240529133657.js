import './App.css';
import { loadProvider, loadNetwork, loadAccount } from './store/reducers/interactions'
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { Button, Card, Nav, Navbar, Container, Image } from 'react-bootstrap'

import MyAccount from './pages/myAccount';
import Home from './pages/home';
import Rewards from './pages/rewards'

function App() {
  // declaring dispatch
const dispatch = useDispatch();
const account = useSelector(state => state.provider.account)
const provider = useSelector(state => state.provider.connection)
const chainId = useSelector(state => state.provider.chainId)
// use State statments
const [loadingBlockchain, setLoadingBlockchain] = useState(false)

const loadBlockchain = async () => {
  if (loadBlockchain) {
    try{
      // changing the state of the loading statment to true as in it is loading.
      setLoadingBlockchain(true)
      // load provider
      loadProvider(dispatch)
      // load accounts
      await loadAccount(dispatch)
      // load chain id
      await loadNetwork(provider, dispatch)
      // once all the blockchain has finished loading, set to loading blockchain to false
      setLoadingBlockchain(true)
    } catch (error) {
      console.log("error loading blockchain", error)
    }
  }
}
useEffect(() => {
  // Load account address and reload page when account has been changed.
  window.ethereum.on('accountsChanged', async () => {
    loadBlockchain()
  })
  if(!loadingBlockchain || account == 0) {
    try{
      loadBlockchain()
    } catch (error) {
      window.alert('error loading blockchain ', error)
    }
  }
},[loadingBlockchain, account, loadBlockchain])

  return (
    <div className="App">
      <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">AR</Navbar.Brand>
          <Image src='' roundedCircle/>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/">Rewards</Nav.Link>
            <Nav.Link href="/">My Account</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </>
      { !account == 0 && !chainId == 0? (
      <>
        <header className="App-header">
          <Card>
            <Card.Text>
              Name: maybe need to create an if statement to say if customer or consultant? <br></br>
              Account: {account.slice(0,6)} <br></br>
              Points:
            </Card.Text>
            </Card>
        <h1 className='h1'>This is the header</h1>
        <h5>buttons here</h5>
        </header>
      </>
      ) : (
        <><Button onClick={loadBlockchain}>Connect Wallet</Button></>
      )}
      <div>
        <p>this is the body</p>
      </div>
    </div>
  );
}

export default App;
