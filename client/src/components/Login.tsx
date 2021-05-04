import React, { useState, useEffect, useReducer }  from "react";
import { connect } from "react-redux";
import { NavLink, Redirect } from "react-router-dom";
import * as actions from "../store/actions/auth";
import "../assets/auth.css"
// import "../assets/blockchain_layout_test.css";
// import GoogleLogin from '../components/GoogleLogin';
// import FacebookLogin from '../components/FacebookLogin';

// const initialState = {count: 0};

// function reducer(state, action) {
//   switch (action.type) {
//     case 'increment':
//       return {count: state.count + 1};
//     case 'decrement':
//       return {count: state.count - 1};
//     default:
//       throw new Error();
//   }
// }

export default function NormalLoginForm() {
    // const [state, dispatch] = useReducer(reducer, initialState);
    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     this.props.form.validateFields((err, values) => {
    //     if (!err) {
    //         this.props.onAuth(values.userName, values.password);
    //         const {location} = this.props;
    //         if(location.state && location.state.from) {
    //         this.props.history.push(location.state.from);
    //         } else {
    //         this.props.history.push('/');
    //         }
    //     }
    //     });
    // };

    return (  
        <div className="react-root" id="react-container">
            <div className="login-container">
                <div className="flex flex-grow-1 justify-center content-wrapper relative">
                    <div className="content flex flex-column w-100">
                        <div className="header flex justify-center mb20 tc"><span>Secure Sign-In</span></div>
                        <div className="flex flex-column login-form-container">
                            <form className="form login-form login-form-2fa" method="POST" tabIndex={-1}>
                                <input type="hidden" name="csr"/><input className="challenge-input" type="hidden" name="ac" value="318810565"/><input type="hidden" name="5ac13d7e741b3256d80b9f16cf4b0227aca28a7ac30db60de395492aa0f54799" value="9dac3a61ddb9a99dbcde"/><input type="hidden" name="5ac13d7e741b3256d80b9f16cf4b0227aca28a7ac30db60de395492aa0f54799-time" value="121"/>
                                <div className="flex flex-column">
                                    <div className="" data-testid="login-basic">
                                        <div className="flex justify-center mb20"><i className="tfa-lock-icon" aria-hidden="true"></i></div>
                                        <div className="flex justify-center mb10">
                                            <div className="input flex items-center dib ba w-100 overflow-hidden dirty">
                                                <div className="relative dib w-100">
                                                    <input id="username" name="username" type="text" autoComplete="current-username" spellCheck="false" className="dirty" value="DGallo117"/>
                                                    <label className="form-label f5 nowrap absolute top-0 h1 ma0" htmlFor="username">
                                                        <span className="required-label"><span>Username</span>
                                                        </span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex justify-center mb10">
                                            <div className="password-input w-100 relative">
                                                <div className="input flex items-center dib ba w-100 overflow-hidden dirty">
                                                    <div className="relative dib w-100"><input id="password" name="password" type="password" autoComplete="current-password" className="dirty" value="residentEvil0:"/><label className="form-label f5 nowrap absolute top-0 h1 ma0" htmlFor="password"><span className="required-label"><span>Password</span></span></label></div>
                                                </div>
                                                <button className="visibility-toggle absolute bn right-0 top-0 f5x z-1 bg-transparent" type="button"><i className="fas fa-eye"></i></button>
                                            </div>
                                        </div>
                                        <div className="flex justify-center mb20">
                                            <button className="button di fw4 submit w-100 maintain-style starboard" type="submit">
                                                <div className="flex justify-center items-center"><span className="f6x lh-solid ttu ls-1"><span>Sign In</span></span></div>
                                            </button>
                                        </div>
                                        <div className="flex self-service-links justify-center"><button className="flex self-service-link brand-color underline" type="button"><span>Trouble signing in?</span></button></div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
    );
  }


// const WrappedNormalLoginForm = Form.create()(NormalLoginForm);

// const mapStateToProps = state => {
//   return {
//     loading: state.auth.loading,
//     error: state.auth.error
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     onAuth: (username, password) => dispatch(actions.authLogin(username, password))
//   };
// };

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(WrappedNormalLoginForm);
