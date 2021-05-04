import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";// import the Container Component from the semantic-ui-react
import { Container } from "semantic-ui-react";// import the ToDoList component
// import HomePage from "./HomePage";
import HomePage2 from "./containers/HomePage2";
import Login from "./components/Login";
import BaseRouter  from "./routes";
import {userContext} from './userContext';
import { BrowserRouter as Router } from "react-router-dom";
import LPRouter from "./routes2";
import * as actions from "./store/actions/auth";
import LandingPage from "./containers/LandingPage";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
    // this.logout = this.logout.bind(this);
  }
  componentDidMount() {
    this.props.onTryAutoSignup();
  }
  render() {
    const value = {
      user: this.state.user,
      logoutUser: this.logout
    }
    return (
      <Router>
      {value.user ?
            <userContext.Provider value={this.state.user}>
              <HomePage2 key="main" value={value} {...this.props} >
                <BaseRouter />
              </HomePage2>
            </userContext.Provider>
            :
          // <LandingPage key="landing" {...this.props}>
            <LPRouter />
          // </LandingPage>
        }
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null,
    loading: state.auth.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

// const mapStateToProps = state => {
//   return {
//     null: null
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     null: null
//   };
// };

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(App);