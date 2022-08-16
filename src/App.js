import React from "react";
import './App.css';
import $ from "jquery";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Header from "./Components/Header"
import Home from "./Components/Home"
import AboutMe from "./Components/AboutMe"


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      resumeData: {}
    };
  }

  componentDidMount() {
    this.loadResumePath();
  }

  loadResumePath = () => {
    $.ajax({
      url: 'resumeInfo.json',
      dataType: "json",
      cache: false,
      success: function (data) {
        this.setState({ resumeData: data });
      }.bind(this),
      error: function (xhr, status, err) {
        alert(err);
      },
    });
  }

  render() {
    return (
      <Router>
        <Header/>
        <Switch>
          <Route exact path={"/"}>
            <Home
                resumeData={this.state.resumeData}
            />
          </Route>
          <Route path={"/AboutMe"}>
            <AboutMe/>
          </Route>
        </Switch>
      </Router>
    )
  }
}

export default App;
