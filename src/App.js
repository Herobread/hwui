import logo from './logo.svg';
import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Navigation from './navigation/Navigation';
import Header from './header/Header';
import Table from './table/Table';
import Banner from "./banner/Banner";
import Daily from './daily/Daily';
import { Route, HashRouter as BrowserRouter, Switch, useLocation, Router } from "react-router-dom";
import Typed from 'react-typed';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const Content = (props) => {
  var date = new Date();
  const location = useLocation();

  return (
    <TransitionGroup>
      <CSSTransition timeout={150} classNames='fade' key={location.pathname}>
        <Switch location={location}>
          <Route path="/daily" component={() => <div><Header text={getWeekDay(date) + ", " + date.getDate()} /><Daily /></div>} />
          <Route path="/something" component={() => <Header text={"Something"}></Header>} />
          <Route component={() => <div><Header text={date.toLocaleDateString("en-US", { month: 'long', year: 'numeric' })} /><Table description={props.descArray} /></div>} />
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  );
}

function App(props) {
  var date = new Date();

  return (
    <BrowserRouter>
      <div className="App">

        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <link href="https://fonts.googleapis.com/css2?family=Poppins" rel="stylesheet"></link>
        <script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12"></script>
        <Navigation />

        <Content descArray={props.descArray} />
      </div>
    </BrowserRouter>
  );
}

function getWeekDay(date) {
  let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  return days[date.getDay()];
}

setInterval(resizer, 100);

function resizer() {
  try {
    if (window.innerWidth <= 700) {
      for (var i = 0; i < 6; i += 1) {
        document.getElementById("dayPanel").children[i].style.height = document.getElementById("contentPanel").children[i].clientHeight + 0 + 'px';
        document.getElementById("contentPanel").children[i].style.height = document.getElementById("dayPanel").children[i].clientHeight + 'px';
      }
      //console.log(document.getElementById("dayPanel").children[0].clientHeight);
    }
    else {
      document.getElementById("dayPanel").children[i].style.height = '228px';
    }
  } catch (error) {

  }
}

export default App;