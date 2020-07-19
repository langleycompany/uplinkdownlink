import React, {useState} from "react";
import "./styles.css";

import {Connect, useConnect} from "@blockstack/connect";
import ReactBlockstack, {useBlockstack, didConnect} from "react-blockstack";
import {AppConfig} from "blockstack";

/* import {UserSession} from "blockstack"; */

import {
  Container,
  Header,
  Body,
  Content,
  Aside,
  Footer
} from "react-holy-grail-layout";

import {Row, Col} from "react-flexbox-grid";

import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

/* var userSession = new UserSession();
let options = {
  encrypt: false,
  decrypt: false
}; */

const appConfig = new AppConfig(["store_write", "publish_data"]);
ReactBlockstack({appConfig});

export default function App() {
  const {userSession, authenticated, signOut} = useBlockstack();
  const [showEmailPage, setShowEmailPage] = useState(false);

  /* pages */

  /* COMMS */

  function Message(props) {
    return (
      <Container id="emailPageModal">
        <Header p={2}>
          <div className="header-main-page">
            <div className="left-side">
              <Link to="/">
                <img
                  src="https://cdn.jsdelivr.net/gh/langleycompany/uplinkdownlink@master/public/uldl-transparent.png"
                  alt="logo"
                  id="logo"
                />
              </Link>
            </div>
            <div className="right-side">
              <Link to="/comms">
                <button id="loginButton">Back</button>
              </Link>
            </div>
          </div>
        </Header>
        <Body>
          <Content p={2} className="page-content-loggedin">
            <h1>UPLINK</h1>
            <br />
            <div className="emailBox">
              <span>
                From: <input id="to-emailBox" />
              </span>
              <br />
              <span>
                To: <input id="to-emailBox" />
              </span>
              <br />
              <span>
                Subject: <input id="to-emailBox" />
              </span>
              <br />
              <span>
                Email: <textarea id="to-emailBox" />
              </span>
            </div>
          </Content>
          <Aside left primary p={2}>
            <button onClick={() => setShowEmailPage(!showEmailPage)}>
              Send
            </button>
          </Aside>
          <Aside right p={2} />
        </Body>
        <Footer p={2}>
          <a href="https://langley.company" id="langley-link">
            LC
          </a>
        </Footer>
      </Container>
    );
  }

  function Comms(props) {
    /* const [filename, setFilename] = useState("");
    const [codeInput, setCodeInput] = useState("");

    const handleSubmit = evt => {
      evt.preventDefault();
      userSession.putFile(filename, codeInput, options).then(() => {
        console.log(filename, codeInput);
      });
    }; */

    return (
      <Container>
        <Header p={2}>
          <div className="header-main-page">
            <div className="left-side">
              <Link to="/">
                <img
                  src="https://cdn.jsdelivr.net/gh/langleycompany/uplinkdownlink@master/public/uldl-transparent.png"
                  alt="logo"
                  id="logo"
                />
              </Link>
            </div>
            <div className="right-side">
              <button id="loginButton" onClick={props.signOut}>
                Logout
              </button>
            </div>
          </div>
        </Header>
        <Body>
          <Content p={2} className="page-content-loggedin">
            <h1>downlink</h1>
            <br />
            <Link to="/comms/message">
              <div className="commsBox">
                <span id="from-commsBox">Giles Posture</span>
                <br />
                <span id="message-commsBox">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Dictum non consectetur a erat nam at lectus urna.
                </span>
              </div>
            </Link>

            <br />

            <Link to="/comms/message">
              <div className="commsBox">
                <span id="from-commsBox">Justin Case</span>
                <br />
                <span id="message-commsBox">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Faucibus et molestie ac feugiat sed lectus vestibulum mattis
                  ullamcorper.
                </span>
              </div>
            </Link>

            <br />

            <Link to="/comms/message">
              <div className="commsBox">
                <span id="from-commsBox">Jason Response</span>
                <br />
                <span id="message-commsBox">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Neque convallis a cras semper.
                </span>
              </div>
            </Link>

            <br />
            <Link to="/comms/message">
              <div className="commsBox">
                <span id="from-commsBox">Jake Weary</span>
                <br />
                <span id="message-commsBox">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Consectetur lorem donec massa sapien faucibus.
                </span>
              </div>
            </Link>
          </Content>
          <Aside left primary p={2} />
          <Aside right p={2} />
        </Body>
        <Footer p={2}>
          <a href="https://langley.company" id="langley-link">
            LC
          </a>
        </Footer>
      </Container>
    );
  }

  /* MAIL */
  function Uplink(props) {
    return (
      <Container id="emailPageModal">
        <Header p={2}>
          <div className="header-main-page">
            <div className="left-side">
              <Link to="/">
                <img
                  src="https://cdn.jsdelivr.net/gh/langleycompany/uplinkdownlink@master/public/uldl-transparent.png"
                  alt="logo"
                  id="logo"
                />
              </Link>
            </div>
            <div className="right-side">
              <Link to="/mail">
                <button id="loginButton">Back</button>
              </Link>
            </div>
          </div>
        </Header>
        <Body>
          <Content p={2} className="page-content-loggedin">
            <h1>UPLINK</h1>
            <br />
            <div className="emailBox">
              <span>
                From: <input id="to-emailBox" />
              </span>
              <br />
              <span>
                To: <input id="to-emailBox" />
              </span>
              <br />
              <span>
                Subject: <input id="to-emailBox" />
              </span>
              <br />
              <span>
                Email: <textarea id="to-emailBox" />
              </span>
            </div>
          </Content>
          <Aside left primary p={2}>
            <button onClick={() => setShowEmailPage(!showEmailPage)}>
              Send
            </button>
          </Aside>
          <Aside right p={2} />
        </Body>
        <Footer p={2}>
          <a href="https://langley.company" id="langley-link">
            LC
          </a>
        </Footer>
      </Container>
    );
  }

  function Mail(props) {
    /* const [filename, setFilename] = useState("");
    const [codeInput, setCodeInput] = useState("");

    const handleSubmit = evt => {
      evt.preventDefault();
      userSession.putFile(filename, codeInput, options).then(() => {
        console.log(filename, codeInput);
      });
    }; */

    return (
      <Container>
        <Header p={2}>
          <div className="header-main-page">
            <div className="left-side">
              <Link to="/">
                <img
                  src="https://cdn.jsdelivr.net/gh/langleycompany/uplinkdownlink@master/public/uldl-transparent.png"
                  alt="logo"
                  id="logo"
                />
              </Link>
            </div>
            <div className="right-side">
              <button id="loginButton" onClick={props.signOut}>
                Logout
              </button>
            </div>
          </div>
        </Header>
        <Body>
          <Content p={2} className="page-content-loggedin">
            <h1>downlink</h1>
            <br />
            <div className="emailBox">
              <span id="from-emailBox">Giles Posture</span>
              <br />
              <span id="subject-emailBox">at lectus</span>
              <br />
              <span id="email-emailBox">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Dictum non consectetur a erat nam at lectus urna.
              </span>
            </div>

            <br />

            <div className="emailBox">
              <span id="from-emailBox">Justin Case</span>
              <br />
              <span id="subject-emailBox">morbi tristique</span>
              <br />
              <span id="email-emailBox">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Faucibus et molestie ac feugiat sed lectus vestibulum mattis
                ullamcorper.
              </span>
            </div>

            <br />

            <div className="emailBox">
              <span id="from-emailBox">Jason Response</span>
              <br />
              <span id="subject-emailBox">hendrerit dolor</span>
              <br />
              <span id="email-emailBox">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Neque convallis a cras semper.
              </span>
            </div>

            <br />

            <div className="emailBox">
              <span id="from-emailBox">Jake Weary</span>
              <br />
              <span id="subject-emailBox">neque gravida</span>
              <br />
              <span id="email-emailBox">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Consectetur lorem donec massa sapien faucibus.
              </span>
            </div>
          </Content>
          <Aside left primary p={2}>
            <Link to="/mail/uplink">
              <button>Compose</button>
            </Link>
          </Aside>
          <Aside right p={2} />
        </Body>
        <Footer p={2}>
          <a href="https://langley.company" id="langley-link">
            LC
          </a>
        </Footer>
      </Container>
    );
  }

  /* signed in page */
  function Home(props) {
    /* const [filename, setFilename] = useState("");
    const [codeInput, setCodeInput] = useState("");

    const handleSubmit = evt => {
      evt.preventDefault();
      userSession.putFile(filename, codeInput, options).then(() => {
        console.log(filename, codeInput);
      });
    }; */

    return (
      <Container>
        <Header p={2}>
          <div className="header-main-page">
            <div className="left-side">
              <img
                src="https://cdn.jsdelivr.net/gh/langleycompany/uplinkdownlink@master/public/uldl-transparent.png"
                alt="logo"
                id="logo"
              />
            </div>
            <div className="right-side">
              <button id="loginButton" onClick={props.signOut}>
                Logout
              </button>
            </div>
          </div>
        </Header>
        <Body>
          <Content p={2} className="page-content-loggedin">
            <h1>dashboard</h1>
            <br />
            <Row between="xs" id="dashboard-row">
              <Col xs={3} id="dashboard-box">
                <Link to="/mail">MAIL</Link>
                <p id="description-box">Mail is under development right now.</p>
              </Col>
              <Col xs={3} id="dashboard-box">
                <Link to="/comms">COMMS</Link>
                <p id="description-box">
                  Comms is under development right now.
                </p>
              </Col>
              <Col xs={3} id="dashboard-box">
                Coming soon...
              </Col>
            </Row>
          </Content>
          <Aside left primary p={2} />
          <Aside right p={2} />
        </Body>
        <Footer p={2}>
          <a href="https://langley.company" id="langley-link">
            LC
          </a>
        </Footer>
      </Container>
    );
  }

  function LoginPage() {
    const {doOpenAuth} = useConnect();

    return (
      <Container>
        <Header p={2}>
          <div className="header-main-page">
            <div className="left-side">
              <img
                src="https://cdn.jsdelivr.net/gh/langleycompany/uplinkdownlink@master/public/uldl-transparent.png"
                alt="logo"
                id="logo"
              />
            </div>
            <div className="right-side">
              <button id="loginButton" onClick={() => doOpenAuth(true)}>
                Login
              </button>
            </div>
          </div>
        </Header>
        <Body>
          <Content p={2} className="page-content-login">
            <h1>UPLINKdownlink</h1>
            <h3>An innovative communication service</h3>
          </Content>
          <Aside left primary p={2} />
          <Aside right p={2} />
        </Body>
        <Footer p={2}>
          Made by{" "}
          <a href="https://langley.company" id="langley-link">
            Langley Company
          </a>
        </Footer>
      </Container>
    );
  }

  const authOptions = {
    redirectTo: "/",
    finished: ({userSession}) => {
      didConnect({userSession});
      console.log(userSession.loadUserData());
    },
    appDetails: {
      name: "UPLINKdownlink",
      icon:
        "https://cdn.jsdelivr.net/gh/langleycompany/uplinkdownlink@master/public/uldl-transparent.png"
    },
    userSession
  };

  /* {showEmailPage && (
          <div id="App">
            <EmailPage />
          </div>
        )} */

  return (
    <div id="App">
      <Router>
        <Connect authOptions={authOptions}>
          <Switch>
            <Route path="/comms/message">
              {authenticated ? <Message signOut={signOut} /> : <LoginPage />}
            </Route>
            <Route path="/comms">
              {authenticated ? <Comms signOut={signOut} /> : <LoginPage />}
            </Route>
            <Route path="/mail/uplink">
              {authenticated ? <Uplink signOut={signOut} /> : <LoginPage />}
            </Route>
            <Route path="/mail">
              {authenticated ? <Mail signOut={signOut} /> : <LoginPage />}
            </Route>
            <Route path="/">
              {authenticated ? <Home signOut={signOut} /> : <LoginPage />}
            </Route>
          </Switch>
        </Connect>
      </Router>
    </div>
  );
}
