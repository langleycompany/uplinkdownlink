import React from "react";
import "./styles.css";

/* styles */
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Paper,
  Grid
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

    function loadusername() {
      return {
        __html: `<h2>Hello, ${name}.</h2>`
      };
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
          <div dangerouslySetInnerHTML={loadusername()} />
        </div>
        <div className="frontpage-last">
          <span id="all-movies">All movies</span>
          <br />
          <br />
          <Grid container spacing={3}>
            <Grid item xs>
              <Paper className={classes.paper}>
                <span id="movie-title">Movie 1</span>
                <br />
                <span id="movie-desc">This is movie 1. It's a good movie.</span>
              </Paper>
            </Grid>
            <Grid item xs>
              <Paper className={classes.paper}>
                <span id="movie-title">Movie 2</span>
                <br />
                <span id="movie-desc">
                  This is movie 2. It's also a good movie.
                </span>
              </Paper>
            </Grid>
            <Grid item xs>
              <Paper className={classes.paper}>
                <span id="movie-title">Movie 3</span>
                <br />
                <span id="movie-desc">
                  This is movie 3. I haven't seen this one yet.
                </span>
              </Paper>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }

  function LoginPage() {
    const { doOpenAuth } = useConnect();

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
          <span id="desc-title">UPLINKdownlink</span>
          <br />
          <span id="desc-desc">
            uldl is an innovative communication service. it simplifies the email
            process, all while making it look good. we call it "simple mail."
          </span>
        </div>
        <div className="frontpage-last">
          <span>
            talk to us: <a href="mailto:j@uldl.me">j@uldl.me</a>
          </span>
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
