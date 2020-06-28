import React from "react";
import "./styles.css";

import { Connect, useConnect } from "@blockstack/connect";
import ReactBlockstack, { useBlockstack, didConnect } from "react-blockstack";
import { AppConfig } from "blockstack";

import { NeuButton } from "neumorphism-react";

import {
  Container,
  Header,
  Body,
  Content,
  Aside,
  Footer
} from "react-holy-grail-layout";

const appConfig = new AppConfig(["store_write", "publish_data"]);
ReactBlockstack({ appConfig });

function SignedInPage(props) {
  return (
    <Container>
      <Header p={2}>
        <div className="header-main-page">
          <div className="left-side">
            <span className="title">UPLINKdownlink (test)</span>
          </div>
          <div className="right-side">
            <NeuButton
              id="loginButton"
              width="10rem"
              height="5rem"
              onClick={props.signOut}
              color="#e0e0e0"
            >
              Logout
            </NeuButton>
          </div>
        </div>
      </Header>
      <Body>
        <Content p={2} className="page-content-loggedin">
          Welcome to the first version :)
          <br />
          <br />
          <br />
          <br />
          <textarea
            className="codePoint"
            style={{ resize: "none", width: "25rem", height: "20rem" }}
          />
          <br />
          <br />
          <NeuButton
            id="loginButton"
            width="6rem"
            height="3rem"
            color="#e0e0e0"
            onclick={alert("Coming soon!")}
          >
            Submit
          </NeuButton>
        </Content>
        <Aside left primary p={2} />
        <Aside right p={2} />
      </Body>
      <Footer p={2}>Made by Langley Company</Footer>
    </Container>
  );
}

function LoginPage() {
  const { doOpenAuth } = useConnect();

  return (
    <Container>
      <Header p={2}>
        <div className="header-main-page">
          <div className="left-side">
            <span className="title">UPLINKdownlink (test)</span>
          </div>
          <div className="right-side">
            <NeuButton
              id="loginButton"
              width="10rem"
              height="5rem"
              onClick={() => doOpenAuth(true)}
              color="#e0e0e0"
            >
              Login
            </NeuButton>
          </div>
        </div>
      </Header>
      <Body>
        <Content p={2} className="page-content-login">
          A decentralized all-in-one app.
        </Content>
        <Aside left primary p={2} />
        <Aside right p={2} />
      </Body>
      <Footer p={2}>Made by Langley Company</Footer>
    </Container>
  );
}

export default function App() {
  const { userSession, authenticated, signOut } = useBlockstack();

  const authOptions = {
    redirectTo: "/",
    finished: ({ userSession }) => {
      didConnect({ userSession });
    },
    appDetails: {
      name: "UPLINKdownlink",
      icon:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0CAYAAADL1t+KAAAAAXNSR0IArs4c6QAAAAlwSFlzAAAOxAAADsQBlSsOGwAAIABJREFUeJzt3W1o1ff9//FXLg4knBsJyX4EwqG5oNmBgCksxlqI1JIUi0obL6hr1dZYzIxwMMbGHNcbWpjzRNGkF8wrGjuW6VrU6mi6yiJtaWC2SQdVyDhTEi0hIENJboQEcvW/s/bftdaqOed8zvd9no+bU895Ucae+6R+vt+0ubm5OQEAAE9Ldz0AAADMH0EHAMAAgg4AgAEEHQAAAwg6AAAGEHQAAAwg6AAAGEDQAQAwgKADAGAAQQcAwACCDgCAAQQdAAADCDoAAAYQdAAADCDoAAAYQNABADCAoAMAYABBBwDAAIIOAIABBB0AAAMIOgAABhB0AAAMIOgAABhA0AEAMICgAwBgAEEHAMAAgg4AgAEEHQAAAwg6AAAGEHQAAAwg6AAAGEDQAQAwgKADAGAAQQcAwACCDgCAAQQdAAADCDoAAAYQdAAADCDoAAAYQNABADCAoAMAYABBBwDAAIIOAIABBB0AAAMIOgAABhB0AAAMIOgAABhA0AEAMICgAwBgAEEHAMAAgg4AgAEEHQAAAwg6AAAGEHQAAAwg6AAAGEDQAQAwgKADAGAAQQcAwACCDgCAAQQdAAADCDoAAAYQdAAADCDoAAAYQNABADCAoAMAYABBBwDAAIIOAIABBB0AAAMIOgAABhB0AAAMIOgAABhA0AEAMICgAwBgAEEHAMAAgg4AgAEEHQAAAwg6AAAGEHQAAAwg6AAAGEDQAQAwgKADAGAAQQcAwACCDgCAAQQdAAADCDoAAAYQdAAADCDoAAAYQNABADCAoAMAYABBBwDAAIIOAIABBB0AAAMIOgAABhB0AAAMIOgAABhA0AEAMICgAwBgAEEHAMAAgg4AgAEEHQAAAwg6AAAGEHQAAAwg6AAAGEDQAQAwgKADAGAAQQcAwACCDgCAAQQdAAADCDoAAAYQdAAADCDoAAAYQNABADCAoAMAYABBBwDAAIIOAIABBB0AAAMIOgAABhB0AAAMIOgAABhA0AEAMICgAwBgAEEHAMAAgg4AgAEEHQAAAwg6AAAGEHQAAAwg6AAAGEDQAQAwgKADAGAAQQcAwACCDgCAAQQdAAADCDoAAAYQdAAADCDoAAAYQNABADCAoAMAYABBBwDAAIIOAIABBB0AAAMI+k+YmJhQZWWljh49qsnJSddzAAC4J4L+E44dO6Z//vOfamxsVHFxsdra2jQ2NuZ6FgAAd5U2Nzc353pEspmenlZRUZFGRkb+5z/PyclRY2OjmpqaVFBQ4GgdAAA/xgn9Lrq6un4Uc0kaGxtTJBJRcXGxtm3bpqGhIQfrAAD4MU7oPzA3N6dgMKhr16797O/NyMjQunXrFA6HtWDBggSsAwDg7jih/8CFCxfuK+aSNDMzo1OnTqmiokIrV65Ub29vnNcBAHB3nNB/YPHixfriiy8e+s9XV1dr9+7dWr58eQxXAQBwbwT9ez799FM99dRTMfmsqqoqhcNh1dXVKT2dH4QAAOKLoH/PM888o4sXL8b0M4PBoFpbW7Vhwwb5fL6YfjYAAN8i6P/11VdfqaqqSvH6xxEIBLRz505t2bJFfr8/Lt8BAEhdBP2/6urqdOHChbh/T35+vkKhkEKhkPLy8uL+fQCA1EDQJV27dk3BYDBup/O78fv9amhoUHNzswKBQMK+FwBgE39bS9K+ffsSGnNJGh8fV3t7u0pLS/XKK68oGo0m9PsBALak/Al9ZGRERUVFmp6edrojPT1dq1atUjgc1sKFC51uAQB4T8qf0A8cOOA85pI0Ozurs2fPqqqqSk8//TQPqQEAPJCUPqGPjo6qsLBQExMTrqfcFQ+pAQDcr5Q+oXd0dCRtzCWpt7dXK1as0GOPPabTp09rZmbG9SQAQJJK2RP6xMSECgsLNTo66nrKfSstLVVLS4s2bdqkrKws13MAAEkkZU/ox44d81TMJWlwcFCNjY0qLi5WW1ubxsbGXE8CACSJlDyhT09Pq6io6K7vPPeSnJwcNTY2qqmpSQUFBa7nAAAcSskTeldXl+djLkljY2OKRCIqLi7Wtm3bNDQ05HoSAMCRlDuhz83NKRgM3vc7z70kIyND69atUzgc1oIFC1zPAQAkUMqd0C9cuGAy5pI0MzOjU6dOqaKiQitXrlR/f7/rSQCABEm5E/rixYv1xRdfuJ6RMLW1tQqHw6qpqXE9BQAQRykV9E8//VRPPfWU6xlOVFVVKRwOq66uTunpKfeDGQAwL6WCvnTpUn322WeuZzgVDAbV2tqqDRs2yOfzuZ4DAIiRlAn65cuX9cQTT7iekTQCgYB27typLVu2yO/3u54DAJinlAl6XV2dLly44HpG0snPz1coFFIoFFJeXp7rOQCAh5QSQb927ZqCwWDC33nuJX6/Xw0NDWpublYgEHA9BwDwgFLib0ft27ePmP+M8fFxtbe3q7S0VK+88oqi0ajrSQCAB2D+hD4yMqKioqKkeOe5l6Snp2vVqlXas2cPD6kBAA8wf0I/cOAAMX8Is7OzOnv27HcPqent7XU9CQBwD6ZP6KOjoyosLEzqd557SXV1tXbv3q3ly5e7ngIA+AHTJ/SOjg5iHkO9vb1asWKFHnvsMZ0+fVozMzOuJwEA/svsCX1iYkKFhYWee+e5l5SWlqqlpUWbNm1SVlaW6zkAkNLMntCPHTtGzONscHBQjY2NKi4uVltbm8bGxlxPAoCUZfKEPj09raKiIhPvPPeSnJwcNTY2qqmpSQUFBa7nAEBKMXlC7+rqIuYOjI2NKRKJqLi4WNu2bdPw8LDrSQCQMsyd0Kenp1VeXm72nede4vP5tHHjRu3atUvBYND1HAAwzdwJ/cyZM8Q8SUxNTamzs1Pl5eVau3at+vv7XU8CALNMndDn5uZUVVWlr776yvUU/ITa2lqFw2HV1NS4ngIAppg6oV+8eJGYJ7menh7V1tZq0aJFOnfunGZnZ11PAgATTJ3Qly5dqs8++8z1DDyAYDCo1tZWbdiwQT6fz/UcAPAsM0G/fPmynnjiCdcz8JACgYB27typLVu2yO/3u54DAJ5jJuh1dXW6cOGC6xmYp/z8fIVCIYVCIeXl5bmeAwCeYebfof/qV79Sfn6+6xmYp9u3b2vv3r165JFH1NLSolu3brmeBACeYOaELknj4+M6ceKEDh06xENNjMjKylJ9fb1aWlpUUlLieg4AJC1TQf/W1NSUurq61NbWpmg06noOYiAjI0Pr1q1TOBzWggULXM8BgKRjMujfmp2d1XvvvadIJKIrV664noMYWbFihcLhsKqrq11PAYCkYTro3/fRRx9p//796u3tdT0FMVJdXa3du3dr+fLlrqcAgHMpE/Rv9fb2KhKJqLu72/UUxEhFRYXC4bCef/55ZWRkuJ4DAE6kXNC/dfXqVUUiEb333nuamZlxPQcxUFpaqpaWFm3atElZWVmu5wBAQqVs0L81NDSkgwcP6uTJk5qcnHQ9BzFQUFCgHTt2aOvWrcrJyXE9BwASIuWD/q1bt26po6NDR44c0djYmOs5iIGcnBw1NjaqpaWFh9QAMI+g/8DY2JiOHj2q9vZ2HmpihN/vV0NDg5qbmxUIBFzPAYC4IOg/YXJyUkePHuUhNYb4fD5t3LhRu3btUjAYdD0HAGKKoP8MHlJjT3p6ulatWqVwOKyFCxe6ngMAMUHQ79Ps7KzOnz+vSCSivr4+13MQI7W1tQqHw6qpqXE9BQDmhaA/hEuXLikSiainp8f1FMRIVVWVwuGw6urqlJ5u5p1FAFIIQZ+H/v5+RSIRffDBB5qdnXU9BzEQDAbV2tqqDRs2yOfzuZ4DAPeNoMdANBrVgQMH9Kc//UlTU1Ou5yAGAoGAdu7cqS1btsjv97ueAwA/i6DH0PDwsA4fPqzjx49rfHzc9RzEQH5+vkKhkJqamnhIDYCkRtDj4M6dO3rrrbf01ltv6fbt267nIAa+fUhNU1OTCgoKXM8BgB8h6HE0Pj6ut99+m4fUGJKVlaX6+nq1tLSopKTE9RwA+A5BT4DJyUm9++67OnjwoAYHB13PQQy0trYqEom4ngEA3yHoCTQzM6P3339fkUhEV65ccT0HDyk7O1vXr19XYWGh6ykA8B0u3CZQRkaGXnjhBX399dfq7u5WdXW160l4CC+99BIxB5B0OKE71tvbq0gkou7ubtdTcB8yMzM1MDCgsrIy11MA4H9wQnesurpaH374oa5cuaIXX3xRGRkZrifhHtasWUPMASQlTuhJZmhoSAcPHtTJkyc1OTnpeg6+Jy0tTX19faqsrHQ9BQB+hKAnqVu3bqmjo0NHjhzR2NiY6zmQ9Nxzz+n8+fOuZwDAXRH0JDc2NqaOjg4eUpME/vGPf2jx4sWuZwDAXRF0jxgfH9eJEyd06NAhDQ8Pu56Tcp588kl9+umnrmcAwE8i6B4zNTWlrq4utbW1KRqNup6TMv72t7/pmWeecT0DAH4SQfeo2dlZnT9/XpFIRH19fa7nmFZZWam+vj6lpaW5ngIAP4lrax6Vnp6u1atX68svv1RPT49qa2tdTzLr1VdfJeYAkh4ndEP6+/sViUT0wQcfaHZ21vUcE8rKyjQwMKDMzEzXUwDgnjihG7Jw4UKdOXNGAwMD2rx5s3w+n+tJntfc3EzMAXgCJ3TDhoeHdfjwYR0/flzj4+Ou53hOYWGhrl+/ruzsbNdTAOBncUI3LBAI6PDhw/rmm28UDoeVk5PjepKnhEIhYg7AMzihp5CxsTEdPXpU7e3tunXrlus5SS03N1dDQ0PKzc11PQUA7gsn9BSSk5Oj1tZW3bhxQ0eOHFFpaanrSUnrN7/5DTEH4Cmc0FPYzMyM3n//fUUiEV25csX1nKSRnZ2t69ev885zAJ7CCT2FZWRk6IUXXtDXX3+t7u5uVVdXu56UFF566SViDsBzOKHjf/T29ioSiai7u9v1FCcyMzM1MDCQ0Heeb9u2Tf/6178S9n3xUFBQoL/85S+uZwApjaDjrq5evapIJKL33ntPMzMzruckzMsvv6x33303od+5ePFiffHFFwn9zlgrKirSjRs3XM8AUho/csddLViwQH/+85917dq1lHlITVpaml577TXXMwDgoRB03FNJSYneeecdDQ4OaseOHfL7/a4nxc2zzz6b0B+1A0AsEXTcl+8/pGbv3r3Kz893PSnmwuGw6wkA8NAIOh5IXl6e9uzZo5s3b6q9vV2BQMD1pJh48skntXjxYtczAOChEXQ8FL/fr6amJg0ODqqzs1PBYND1pHnhdA7A6wg65sXn86m+vl4DAwM6e/asqqqqXE96YJWVlVq2bJnrGQAwLwQdMZGenq7Vq1fryy+/VE9Pj2pra11Pum+vvvqq0tLSXM8AgHkh6Ii5mpoa/f3vf1dfX5/WrFmj9PTk/a9ZWVmZ1q5d63oGAMxb8v4vLTxv4cKFOnPmjAYGBvTiiy8qIyPD9aQfaW5uVmZmpusZADBvBB1xFwwGv3tITWNjo7KyslxPkiQVFhbq5Zdfdj0DAGKCoCNhSkpK9Ic//EE3btxQOBxWTk6O0z2hUEjZ2dlONwBArBB0JFxBQYH279+vmzdvKhKJqKCgIOEbcnNztXXr1oR/LwDEC0GHMzk5OWptbdWNGzd05MgRlZaWJuy7t2/frtzc3IR9HwDEG0GHc1lZWdq6dav+/e9/69SpU6qoqIjr92VnZ6upqSmu3wEAiUbQkTQyMjL0wgsv6Ouvv1Z3d7eqq6vj8j0NDQ2czgGYQ9CRlJYvX67PP/9cn3/+uVasWBGzz83MzNSuXbti9nkAkCwIOpJadXW1PvzwQ125ciUmD6lZv369CgsLY7QOAJIHQYcnLFiw4LuH1GzevFk+n++BPyMtLU2vvfZaHNYBgHsEHZ4SDAb1zjvvaHBwUDt27JDf77/vP/vss8+qrKwsjusAwB2CDk8KBAI6fPiwvvnmG+3du1f5+fk/+2d4RSoAywg6PC0vL0979uzRzZs31d7erkAgcNff9+STT2rx4sUJXgcAiUPQYYLf71dTU5MGBwfV2dmpYDD4P7/O6RyAdQQdpvh8PtXX12tgYEBnz55VVVWVKisrtWzZMtfTACCueG8kTEpPT9fq1au1evVq/ec//1FaWprrSXBo69atSk9PV0tLi0pKSlzPAeKCEzrM+7//+z/XE+DQyMiI3nnnHR05ckRlZWVav369rl696noWEHMEHYBpBw4c0PT0tCRpZmbmu/cFrFy5Ur29vY7XAbFD0AGYNTo6quPHj9/117q7u7VkyRItWbJEH330UYKXAbFH0AGY1dHRoYmJiXv+nt7eXq1YsUKLFi3SuXPnNDs7m6B1QGwRdAAmTUxM6I033rjv39/X16c1a9aovLxcJ0+e1NTUVBzXAbFH0AGYdOzYMY2Ojj7wn4tGo9q8ebNKS0vV0dGh8fHxOKwDYo+gAzBnenpaBw8enNdnDA8Pa8eOHSoqKtLrr7+uO3fuxGgdEB8EHYA5XV1dGhkZicln3b59W3v37tUjjzyi5uZmDQ8Px+RzgVgj6ABMmZub0+9///uYf+74+Lja29tVWlqqV155RdFoNObfAcwHQQdgyoULF3Tt2rW4ff7U1JQ6OztVXl6utWvXqr+/P27fBTwIgg7AjLm5Of3ud79LyHfNzs5+976Ap59+mofUwDmCDsCMixcv6quvvkr49/b09PCQGjhH0AGYEYlEnH7/tw+peeyxx3T69GnNzMw43YPUQtABmHD58mV99tlnrmdIkq5cuaIXX3xRv/zlL3X06FFNTk66noQUQNABmOD6dH43g4ODamxsVHFxsdra2jQ2NuZ6Egwj6AA879q1a/rrX//qesZPunXrlsLhsIqKirR7927dunXL9SQYRNABeN6+ffs0NzfnesbPGhsbUyQSUXFxsbZt26ahoSHXk2AIQQfgaSMjI/rzn//sesYDmZyc1JEjR1RWVqb169fr6tWrrifBAIIOwNMOHDig6elp1zMeyszMjE6dOqWKigqtXLmSh9RgXgg6AM8aHR3V8ePHXc+Iie7u7u8eUnPp0iXXc+BBBB2AZ3V0dGhiYsL1jJjq6elRbW2tFi1apHPnzml2dtb1JHgEQQfgSRMTE3rjjTdcz4ibvr4+rVmzRuXl5Tp58qSmpqZcT0KSI+gAPOnYsWMaHR11PSPuotGoNm/erNLSUnV0dGh8fNz1JCQpgg7AcyYmJnTw4EHXMxJqeHhYO3bsUFFRkV5//XXduXPH9SQkmbQ5L1zeBIDvOXr0qBobG13PcMrv96uhoUHNzc0KBAKu5yAJEHQAnjI9Pa3y8vK4vvPcS3w+nzZu3Khdu3YpGAy6ngOH+JE7AE85c+YMMf+eqakpdXZ2qry8XGvXruUhNSmMEzoAz5ibm1NVVZWTd557yYoVKxQOh1VdXe16ChKIEzoAz7h48SIxvw/d3d1asmSJlixZoo8++sj1HCQIJ3QAnrF06dKkeee5l1RUVCgcDuv5559XRkaG6zmIE4IOwBMuX76sJ554wvUMTystLVVLS4s2bdqkrKws13MQYwQdgCfU1dXpwoULrmeYUFBQoB07dmjr1q3KyclxPQcxQtABJL1r164pGAx64p3nXpKTk6PGxkY1NTWpoKDA9RzME38pDkDS27dvHzGPg7GxMUUiERUXF2vbtm0aHh52PQnzwAkdQFIbGRlRUVGRZ9957iU8pMbbOKEDSGoHDhwg5gnyw4fU9Pf3u56EB8AJHUDSGhkZ0aOPPmrunedeUltbq3A4rJqaGtdT8DM4oQNIWm+++SYxd6ynp0e1tbVatGiRzp07p9nZWdeT8BM4oQNISqOjoyopKUmJd557STAYVGtrqzZs2CCfz+d6Dr6HEzqApHT06FFinoSi0ag2b96s0tJSdXR0aHx83PUk/BcndABJZ2JiQo8++qhGRkZcT8HPyM/PVygUUigUUl5enus5KY0TOoCk88c//pGYe8Tt27e1d+9ePfLII2pubtatW7dcT0pZnNABJJXp6WmVl5fzznOPysrKUn19vVpaWlRSUuJ6TkrhhA4gqZw5c4aYe9jk5KSOHDmisrIyrV+/XlevXnU9KWUQdABJ5Re/+IUWLlzoegbmaWZmRqdOnVJFRYWeeeYZ9fb2up5kHj9yB5CULl26pP379+vSpUuupyBGqqurtXv3bi1fvtz1FJMIOoCk1t/fr/379+v8+fM81MSIiooKhcNhPf/888rIyHA9xwyCDsATotGo2tra1NXVpampKddzEAOlpaVqaWnRpk2blJWV5XqO5xF0AJ4yPDysQ4cO6cSJEzzUxIiCggLt2LFDW7duVU5Ojus5nkXQAXjSnTt39Oabb+rtt9/W7du3Xc9BDOTk5KixsVEtLS08pOYhEHQAnjY+Pq4TJ07o0KFDGh4edj0HMeD3+9XQ0KDm5mYFAgHXczyDoAMwYWpqSl1dXWpra1M0GnU9BzHg8/m0ceNG7dq1S8Fg0PWcpEfQAZgyOzur8+fPa//+/erv73c9BzGQnp6uVatWKRwO84yCeyDoAMziLrs9tbW1CofDqqmpcT0l6RB0AOZxl92eqqoqhcNh1dXVKT2dh55KBB1ACuEuuz3BYFCtra3asGGDfD6f6zlOEXQAKYe77PYEAgHt3LlTW7Zskd/vdz3HCYIOIGVxl92e/Px8hUIhNTU1pdxDagg6gJTHXXZ7vn1ITVNTkwoKClzPSQiCDgD/xV12e7KyslRfX6+WlhaVlJS4nhNXBB0AfoC77PZkZGRo3bp1CofDWrBgges5cUHQAeAeuMtuz4oVKxQOh1VdXe16SkwRdAC4D9xlt6e6ulq7d+/W8uXLXU+JCYIOAA+Au+y2lJWVaWBgQJmZma6nzBuP1wGABxAMBtXZ2anBwUE1NTWl7J1nK5qbm03EXOKEDgDzwl127yosLNT169eVnZ3tekpMcEIHgHnIy8vT3r17dfPmTbW3t/P+bg8JhUJmYi5xQgeAmOIuuzfk5uZqaGhIubm5rqfEDCd0AIghn8+n+vp6DQwM6OzZs7y/O0lt377dVMwlTugAEHfcZU8u2dnZGhkZMRd0TugAEGc1NTXq6elRX1+fVq9ezfu7HWtoaDAXc4kTOgAkHHfZ3cnMzNTNmzdVWFjoekrM8X8TASDBuMvuzvr1603GXOKEDgDOcZc9MdLS0hSNRlVWVuZ6SlwQdABIEryXPb6ee+45nT9/3vWMuCHoAJBkuMsee2lpaerr61NlZaXrKXFD0AEgSfFe9thZtmyZPv74Y9cz4oqgA4AHcJd9fj755BMtXbrU9Yy4IugA4CG8l/3BPf7447p8+bLrGXHHtTUA8JCFCxfq7NmzGhgYUH19vXw+n+tJSS8cDruekBCc0AHAw4aHh3Xo0CGdOHFC4+PjruckncrKSvX19SktLc31lLgj6ABgAHfZ7+706dP69a9/7XpGQhB0ADCEu+z/X1lZmQYGBpSZmel6SkLw79ABwBC/36+mpiYNDg6qs7NTwWDQ9SRnmpubUybmEid0ADAtVe+yFxYW6vr168rOznY9JWE4oQOAYenp6Vq9erX6+vrU09Ojmpoa15MSIhQKpVTMJU7oAJByrN9lz83N1dDQkMl3nt8LJ3QASDHW77Jv37495WIucUIHgJRn6S57dna2RkZGUjLonNABIMUFAgG1t7frm2++0Z49e5Sfn+960kNraGhIyZhLnNABAD/g1bvsmZmZunnzpgoLC11PcYITOgDgf3j1Lvv69etTNuYSJ3QAwM/wwl32tLQ0RaNRlZWVuZ7iDCd0AMA9eeEu+7PPPpvSMZc4oQMAHkIy3WVPS0tTX1+fKisrne5wjaADAB5aNBpVW1uburq6NDU15WTDsmXL9PHHHzv57mRC0AEA8+byLvsnn3yipUuXJvQ7kxFBBwDETKLfy/7444/r8uXLcf8eLyDoAICYS9Rd9g8++EB1dXVx+3wvIegAgLiZmppSV1eX2traFI1GY/rZZWVlikajSktLi+nnehXX1gAAcePz+VRfX6+BgQGdPXtWCxcujNln//a3vyXm38MJHQCQUJcuXdL+/ft16dKlh/6MsrIyDQwMKDMzM4bLvI0TOgAgoWpqatTT06O+vj6tXr1a6ekPnqLm5mZi/gOc0AEATj3oXfbCwkJdv35d2dnZCVjnHZzQAQBOBYNBdXZ2anBwUE1NTfL7/ff8/aFQiJjfBSd0AEBSuddd9tzcXA0NDaXsO8/vhRM6ACCp5OXlae/evbp586ba29sVCAS++7Xt27cT85/ACR0AkNS+vcv+5ptv6pNPPiHoP4GgAwBgAD9yBwDAAIIOAIABBB0AAAMIOgAABhB0AAAMIOgAABhA0AEAMICgAwBgAEEHAMAAgg4AgAEEHQAAAwg6AAAGEHQAAAwg6AAAGEDQAQAwgKADAGAAQQcAwACCDgCAAQQdAAADCDoAAAYQdAAADCDoAAAYQNABADCAoAMAYABBBwDAAIIOAIABBB0AAAMIOgAABhB0AAAMIOgAABhA0AEAMICgAwBgAEEHAMAAgg4AgAEEHQAAAwg6AAAGEHQAAAwg6AAAGEDQAQAwgKADAGAAQQcAwACCDgCAAQQdAAADCDoAAAYQdAAADCDoAAAYQNABADCAoAMAYABBBwDAAIIOAIABBB0AAAMIOgAABhB0AAAMIOgAABhA0AEAMICgAwBgAEEHAMAAgg4AgAEEHQAAAwg6AAAGEHQAAAwg6AAAGEDQAQAwgKADAGAAQQcAwACCDgCAAQQdAAADCDoAAAYQdAAADCDoAAAYQNABADCAoAMAYABBBwDAAIIOAIABBB0AAAMIOgAABhB0AAAMIOgAABhA0AEAMICgAwBgAEEHAMAAgg4AgAEEHQAAAwg6AAAGEHQAAAwg6AAAGEDQAQAwgKADAGAAQQcAwACCDgCAAQQdAAADCDoAAAYQdAAADCDoAAAYQNABADCAoAN6V3p4AAAA6klEQVQAYABBBwDAAIIOAIABBB0AAAMIOgAABhB0AAAMIOgAABhA0AEAMICgAwBgAEEHAMAAgg4AgAEEHQAAAwg6AAAGEHQAAAwg6AAAGEDQAQAwgKADAGAAQQcAwACCDgCAAQQdAAADCDoAAAYQdAAADCDoAAAYQNABADCAoAMAYABBBwDAAIIOAIABBB0AAAMIOgAABhB0AAAMIOgAABhA0AEAMICgAwBgAEEHAMAAgg4AgAEEHQAAAwg6AAAGEHQAAAwg6AAAGEDQAQAwgKADAGAAQQcAwACCDgCAAQQdAAADCDoAAAb8P1cytdIx5AlNAAACEWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSfvu78nIGlkPSdXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQnPz4KPHg6eG1wbWV0YSB4bWxuczp4PSdhZG9iZTpuczptZXRhLycgeDp4bXB0az0nSW1hZ2U6OkV4aWZUb29sIDEwLjgwJz4KPHJkZjpSREYgeG1sbnM6cmRmPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjJz4KCiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0nJwogIHhtbG5zOnBkZj0naHR0cDovL25zLmFkb2JlLmNvbS9wZGYvMS4zLyc+CiAgPHBkZjpBdXRob3I+Sm9yZGFuIFJlZ2VyPC9wZGY6QXV0aG9yPgogPC9yZGY6RGVzY3JpcHRpb24+CgogPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9JycKICB4bWxuczp4bXA9J2h0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8nPgogIDx4bXA6Q3JlYXRvclRvb2w+Q2FudmE8L3htcDpDcmVhdG9yVG9vbD4KIDwvcmRmOkRlc2NyaXB0aW9uPgo8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSdyJz8+pFIl8AAAAABJRU5ErkJggg=="
    },
    userSession
  };

  return (
    <div id="App">
      <Connect authOptions={authOptions}>
        {authenticated ? <SignedInPage signOut={signOut} /> : <LoginPage />}
      </Connect>
    </div>
  );
}
