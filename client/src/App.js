import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Login from "./components/Login";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
// import "./App.css";



class App extends Component {
  state = {
    response: ''
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/login');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  render() {
    return (
      <Router>
      <div>
        <Nav />
        <Wrapper>
          <Route exact path="/Home" component={Home} />
          <Route exact path="/Login" component={Login} />
          {/* <Route exact path="/signup" component={Discover} /> */}
        </Wrapper>
        <Footer />
      </div>
    </Router>
    );
  }
}

export default App;
