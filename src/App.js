import "./App.css";
import {
  loadProvider,
  loadNetwork,
  loadAccount,
} from "./store/reducers/interactions";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import {
  Button,
  Card,
  Nav,
  Navbar,
  Container,
  Image,
  Col,
  InputGroup,
  NavbarCollapse,
  ListGroup,
  Row,
  Form,
} from "react-bootstrap";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import MyAccount from "./pages/myAccount";
import Home from "./pages/home";
import Rewards from "./pages/rewards";

function App() {
  // declaring dispatch
  const dispatch = useDispatch();
  const account = useSelector((state) => state.provider.account);
  const provider = useSelector((state) => state.provider.connection);
  const chainId = useSelector((state) => state.provider.chainId);
  const displayAccount = account?.slice(0, 6) + "..." + account?.slice(36, 42);
  console.log(displayAccount);
  // use State statments
  const [loadingBlockchain, setLoadingBlockchain] = useState(false);

  const loadBlockchain = async () => {
    if (loadBlockchain) {
      try {
        // changing the state of the loading statment to true as in it is loading.
        setLoadingBlockchain(true);
        // load provider
        loadProvider(dispatch);
        // load accounts
        await loadAccount(dispatch);
        // load chain id
        await loadNetwork(provider, dispatch);
        // once all the blockchain has finished loading, set to loading blockchain to false
        setLoadingBlockchain(true);
      } catch (error) {
        console.log("error loading blockchain", error);
      }
    }
  };
  useEffect(() => {
    // Load account address and reload page when account has been changed.
    window.ethereum.on("accountsChanged", async () => {
      loadBlockchain();
    });
    if (!loadingBlockchain && account == 0) {
      try {
        loadBlockchain();
      } catch (error) {
        window.alert("error loading blockchain ", error);
      }
    }
  }, [loadingBlockchain, account, loadBlockchain]);

  return (
    <div className="App">
      <>
        <Navbar bg="light" data-bs-theme="light">
          <Container>
            <Navbar.Brand href="/">AR</Navbar.Brand>
            <Col xs={1} md={0}>
              <Image src="" roundedCircle />
            </Col>
            <NavbarCollapse>
              <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/Rewards">Rewards</Nav.Link>
                <Nav.Link href="/MyAccount">My Account</Nav.Link>
                <InputGroup className="account">
                    {!account == 0 || !chainId == 0 ? (
                <InputGroup.Text id="basic-addon1" className="account-wallet">
                {displayAccount}
              </InputGroup.Text>
                    ) : (
                      <Form.Label id="basic-addon1" className="buttonConnect">
                        <Button onClick={loadBlockchain}>
                          Connect Wallet
                        </Button>
              </Form.Label>
                    )}
                </InputGroup>
              </Nav>
            </NavbarCollapse>
          </Container>
        </Navbar>
      </>
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/MyAccount" element={<MyAccount />}></Route>
            <Route path="/Rewards" element={<Rewards />}></Route>
          </Routes>
        </Router>

        <div className="">
          <Card.Img variant="top" />
          <Card.Img
            variant="top"
            src="holder.js/100px160"
            alt="Image Content"
          />
          <Card.Body className="card-body">
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
        </div>
      </div>
    </div>
  );
}

export default App;
