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
  Form,
  Tab,
  Tabs,
} from "react-bootstrap";
import MyAccount from "./pages/myAccount";
import Home from "./pages/home";
import Rewards from "./pages/rewards";
import image1 from "./pages/images/pic1.jpeg";
import image2 from './pages/images/AR LOGO.jpeg'

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
        <Navbar bg="light" data-bs-theme="light" >
          <Container>
          <Image src={image2} className="logo" />
            <Navbar.Brand href="/">AR</Navbar.Brand>
            <Col xs={1} md={0}>
            </Col>
            <Nav className="me-auto">
              <InputGroup className="account">
                {!account == 0 || !chainId == 0 ? (
                  <InputGroup.Text id="basic-addon1" className="account-wallet">
                    {displayAccount}
                  </InputGroup.Text>
                ) : (
                  <Form.Label id="basic-addon1" className="buttonConnect">
                    <Button onClick={loadBlockchain}>Connect Wallet</Button>
                  </Form.Label>
                )}
              </InputGroup>
            </Nav>
          </Container>
        </Navbar>
        <Tabs
          defaultActiveKey="profile"
          id="justify-tab-example"
          className="my-3"
          justify
        >
          <Tab eventKey="account" title="My Account" className="nav">
            <MyAccount />
          </Tab>
          <Tab eventKey="profile" title="Homepage" className="nav">
            <Home />
          </Tab>
          <Tab eventKey="Profile" title="Redeem My Points" className="nav">
            <Rewards />
          </Tab>
        </Tabs>
      </>
      <div>
        <div className="card-bottom">
          <Card.Title>
            <h3 className="h3">
              Embark on a journey towards health, wellness, and a positive
              lifestyle with me.
            </h3>
            <br />
          </Card.Title>
          <Card.Img variant="top" />
          <Card.Img
            className="image"
            variant="top"
            src={image1}
            alt="Image Content"
          />
          <Card.Body className="card-body">
            <Card.Text className="bottom-text">
              <br />
              <h5>Join Us on a Journey of Discovery</h5>
              <hr />
              <p>
                <strong>Interested?</strong>
                <br />
                Start your journey with us and discover your potential. <br/> Make the
                first step by reaching out through the form below or by
                contacting me on social media.<br/> Join our rewards program and
                start earning points with your first purchase.<br/><strong> New participants
                receive bonus points just for signing up today! </strong>
              </p>
            </Card.Text>
            <hr/>
          </Card.Body>

        </div>
        <div>

        </div>
      </div>
      <div className="socials">
      <i className="fa fa-instagram" ></i><br/>
      <i className="fa fa-facebook" ></i>
      </div>
    </div>
  );
}

export default App;
