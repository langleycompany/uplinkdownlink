import React from "react";
import "./styles.css";

/* styles */
import { makeStyles } from "@material-ui/core";
import {
  AppBar,
  Toolbar,
  Typography,
  Button
  /*
  Paper,
  Grid
  */
} from "@material-ui/core";
/* styles */

/* blockstack */
import { Connect, useConnect } from "@blockstack/connect";
import ReactBlockstack, { useBlockstack, didConnect } from "react-blockstack";
import { AppConfig } from "blockstack";
/* blockstack */

/* other */
import {
  BrowserRouter as Router,
  Switch,
  Route /*, Link */
} from "react-router-dom";
/* other */

const useStyles = makeStyles((theme) => ({
  root: {
    background: "#000",
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    fontFamily: "Roboto Mono",
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center"
  }
}));

const appConfig = new AppConfig(["store_write", "publish_data"]);
ReactBlockstack({ appConfig });

export default function App() {
  const { userSession, authenticated, signOut } = useBlockstack();
  const classes = useStyles();

  const authOptions = {
    redirectTo: "/",
    finished: ({ userSession }) => {
      didConnect({ userSession });
      console.log(userSession.loadUserData());
    },
    appDetails: {
      name: "UPLINKdownlink",
      icon:
        "https://cdn.jsdelivr.net/gh/langleycompany/uplinkdownlink@master/public/uldl-transparent.png"
    },
    userSession
  };

  function Home(props) {
    var name = userSession.loadUserData().profile.name;

    function loaduserandtime() {
      var date = new Date();
      var current_hour = date.getHours();
      if (current_hour < 5 || current_hour === 24) {
        return {
          __html: `<h2 id="time">🌉 You should be asleep, ${name}! 🌉</h2>`
        };
      }
      if (current_hour < 24 && current_hour >= 20) {
        return {
          __html: `<h2 id="time">🌚 Good night, ${name}! 🌚</h2>`
        };
      }

      if (current_hour < 20 && current_hour >= 16) {
        return {
          __html: `<h2 id="time">🌆 Good evening, ${name}! 🌆</h2>`
        };
      }

      if (current_hour < 16 && current_hour >= 10) {
        return {
          __html: `<h2 id="time">☀️ Good afternoon, ${name}! ☀️</h2>`
        };
      }

      if (current_hour < 10 && current_hour >= 5) {
        return {
          __html: `<h2 id="time">🌞 Good morning, ${name}! 🌞</h2>`
        };
      }
    }
    return (
      <div className="App">
        <div className={classes.root}>
          <AppBar position="static">
            <Toolbar className={classes.root}>
              <Typography variant="h6" className={classes.title}>
                uldl
              </Typography>
              <Button color="inherit" onClick={props.signOut}>
                Logout
              </Button>
            </Toolbar>
          </AppBar>
        </div>
        <div className="frontpage-desc">
          <div dangerouslySetInnerHTML={loaduserandtime()} />
        </div>
        <div className="frontpage-last">\</div>
      </div>
    );
  }

  function LoginPage() {
    const { doOpenAuth } = useConnect();

    function loadtime() {
      var date = new Date();
      var current_hour = date.getHours();
      if (current_hour < 5 || current_hour === 24) {
        return {
          __html: `<h2 id="front-time">🌉</h2>`
        };
      }
      if (current_hour < 24 && current_hour >= 20) {
        return {
          __html: `<h2 id="front-time">🌚</h2>`
        };
      }

      if (current_hour < 20 && current_hour >= 16) {
        return {
          __html: `<h2 id="front-time">🌆</h2>`
        };
      }

      if (current_hour < 16 && current_hour >= 10) {
        return {
          __html: `<h2 id="front-time">☀️</h2>`
        };
      }

      if (current_hour < 10 && current_hour >= 5) {
        return {
          __html: `<h2 id="front-time">🌞</h2>`
        };
      }
    }

    return (
      <div className="App">
        <div className={classes.root}>
          <AppBar position="static">
            <Toolbar className={classes.root}>
              <Typography variant="h6" className={classes.title}>
                uldl
              </Typography>
              <Button color="inherit" onClick={() => doOpenAuth(true)}>
                Login
              </Button>
            </Toolbar>
          </AppBar>
        </div>
        <div className="frontpage-desc">
          <span id="desc-title">
            <span role="img" aria-label="satellite">
              🛰️
            </span>{" "}
            UPLINKdownlink{" "}
            <span role="img" aria-label="a ground station">
              📡
            </span>
          </span>
          <br />
          <span id="desc-desc">
            uldl is an innovative communication service. it simplifies the email
            process, all while making it look good. we call it "simple mail."
          </span>
        </div>
        <div className="frontpage-last">
          <div dangerouslySetInnerHTML={loadtime()} />
        </div>
      </div>
    );
  }

  return (
    <div id="App">
      <Router>
        <Connect authOptions={authOptions}>
          <Switch>
            <Route path="/">
              {authenticated ? <Home signOut={signOut} /> : <LoginPage />}
            </Route>
          </Switch>
        </Connect>
      </Router>
    </div>
  );
}
