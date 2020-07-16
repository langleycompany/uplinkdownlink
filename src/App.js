import React from "react";
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

import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

/* var userSession = new UserSession();
let options = {
  encrypt: false,
  decrypt: false
}; */

const appConfig = new AppConfig(["store_write", "publish_data"]);
ReactBlockstack({appConfig});

export default function App() {
  const {userSession, authenticated, signOut} = useBlockstack();

  /* pages */

  /* signed in page */
  function SignedInPage(props) {
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
                <a href="https://mail.uplinkdownlink.com">MAIL</a>
                <p id="description-box">Mail is under development right now.</p>
              </Col>
              <Col xs={3} id="dashboard-box">
                Coming soon...
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
            <Route path="/uplink">
              <p>testing</p>
            </Route>
            <Route path="/">
              {authenticated ? (
                <SignedInPage signOut={signOut} />
              ) : (
                <LoginPage />
              )}
            </Route>
          </Switch>
        </Connect>
      </Router>
    </div>
  );
}
