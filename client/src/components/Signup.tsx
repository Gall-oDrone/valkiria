import React, { useState, useEffect, useReducer, useRef }  from "react";
import { connect } from "react-redux";
import { NavLink, Redirect } from "react-router-dom";
import * as actions from "../store/actions/auth";
import axios from "axios"
import "../assets/auth.css"
// import GoogleLogin from '../components/GoogleLogin';

export default function SignUp() {
    interface UserData {
        email: string;
        password: string;
        prevState: null
      }
    // const [state, dispatch] = useReducer(reducer, initialState);
    const [emailInput, setEmail] = useState<string | readonly string[] | undefined >("");
    const [username, setUsername] = useState<string | readonly string[] | undefined >("");
    const [password, setPassword] = useState<string | readonly string[] | undefined >("");
    const [conditions, setTermsAndConds] = useState<boolean >(false);
    const [createAccount, setAccount] = useState<boolean | undefined >(false);
    const [country, setCountry] = useState<string | readonly string[] | undefined >("");
    const emailInputRef = useRef(null);
    const usernameInputRef = useRef(null);
    const passwordInputRef = useRef(null);
    const countryInputRef = useRef(null);
    const termsAndCondsInputRef = useRef(null);

    useEffect(() => { 
        // document.title = `You clicked ${count} times`;
        //console.log("check: ", emailInput, emailInputRef.current)
        if(checkParamsBeforeUpdate()){
            setAccount(true)
        } else {
            setAccount(false)
        }
    });
    function checkParamsBeforeUpdate():boolean {
        if( 
            emailInput && emailInput.length > 0 && emailInput.includes("@") &&
            username && username.length > 0 &&
            password && password.length > 0 &&
            conditions
          ) { return true }
          return false
    }
    const emailInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.target.id === "email" && setEmail(e.target.value)
    }
    const usernameInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.target.id === "username" && setUsername(e.target.value)
    }
    const passwordInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.target.id === "password" && setPassword(e.target.value)
    }
    const termsAndCondsHandler = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
        if(!conditions){
            setTermsAndConds(true)}
        else { setTermsAndConds(false) }
    }
    const handleSignUpSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        var bodyFormData = new FormData();
        bodyFormData.append('username', String(username));
        bodyFormData.append('email', String(emailInput));
        bodyFormData.append('password', String(password));
        var userRegistration = {
            nickname: String(username),
            email: String(emailInput),
            password: String(password)
          }
          let axiosConfig = {
            headers: {
              'Content-Type': 'application/json'
            }
          }
        axios.post(`http://localhost:8080/api/signup`, userRegistration, axiosConfig)
        // axios({
        //     method: "post",
        //     url: "http://localhost:8080/api/signup",
        //     data: userRegistration,
        //     headers: { "Content-Type": "application/json" },
        //   })
            .then(function (response) {
              //handle success
              console.log("Successfull response", response);
            })
            .catch(function (response) {
              //handle error
              console.log("Failed response", response);
            });          
        // this.props.form.validateFields((err, values) => {
        // if (!err) {
        //     this.props.onAuth(values.userName, values.password);
        //     const {location} = this.props;
        //     if(location.state && location.state.from) {
        //     this.props.history.push(location.state.from);
        //     } else {
        //     this.props.history.push('/');
        //     }
        // }
        // });
    };

    return (  
            <div className="react-root" id="react-container">
            <div className="create-account-container">
                <div className="alert-container w-100 fixed top-0 left-0 z-max"></div>
                <div className="starboard-root starboard-signup-page">
                    <div className="SignupPage-module_accountTypeTransitionBackground__18cZn">
                        <div className="starboard-root OnboardingLayout-module_onboardingLayout__3eq2W OnboardingLayout-module_fullScreen__-FGvr" style={{backgroundImage: "url(&quot;/bundles/8888114b711c678761cb.svg&quot"}}>
                        <div className="OnboardingLayout-module_contentWrapper__3lw0D">
                            <div className="flex items-center OnboardingLayout-module_topBar__3n2Of">
                                <div role="button" tabIndex={-1} className="OnboardingLayout-module_logoLink__1UcqN FocusDiv-module_divFocus__2lKHg">
                                    <a href="/">
                                    <svg width="24" height="24" className="svg-icon brand-color OnboardingLayout-module_logo__17tCd" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M0 12.6199V17.8556C0 18.8198 0.767926 19.6 1.71225 19.6C2.65757 19.6 3.42914 18.8198 3.42914 17.8556V12.6199C3.42914 11.6544 4.19309 10.8728 5.14238 10.8728C6.08836 10.8728 6.85563 11.6544 6.85563 12.6199V17.8556C6.85563 18.8198 7.62355 19.6 8.56887 19.6C9.5175 19.6 10.2851 18.8198 10.2851 17.8556V12.6199C10.2851 11.6544 11.0524 10.8728 11.998 10.8728C12.9476 10.8728 13.7156 11.6544 13.7156 12.6199V17.8556C13.7156 18.8198 14.4832 19.6 15.4275 19.6C16.3728 19.6 17.1407 18.8198 17.1407 17.8556V12.6199C17.1407 11.6544 17.9083 10.8728 18.8576 10.8728C19.8033 10.8728 20.5709 11.6544 20.5709 12.6199V17.8556C20.5709 18.8198 21.3388 19.6 22.2868 19.6C23.2324 19.6 24 18.8198 24 17.8556V12.6199C24 5.87172 18.6262 0.399994 11.998 0.399994C5.37017 0.399994 0 5.87172 0 12.6199Z"></path>
                                    </svg>
                                    </a>
                                </div>
                                <div className="ml-auto flex items-center SignupPage-module_topArea__3vWMC">
                                    <div role="button" tabIndex={-1} className="SignupPage-module_linkFocusLeft__BUjh3 FocusDiv-module_divFocus__2lKHg">
                                    <div className="relative pointer border-radius mr3/2 LanguageSelector-module_languageSelector__3gnMd Dropdown-module_dropdown__1E-NF Dropdown-module_dirty__JoYL3" role="combobox" aria-expanded="false" aria-haspopup="listbox" aria-labelledby="downshift-2-label">
                                        <button data-testid="button-toggle-undefined" className="bg-pure-white relative flex items-center pl3/2 pr3/2 h-100 w-100 tl text-N600 caption-2 border-1 border-radius Dropdown-module_button__2_NAp" type="button" role="button" aria-label="open menu" aria-haspopup="true" data-toggle="true">
                                            <div className="flex h-100 w-100">
                                                <input type="hidden" value="en-us"/>
                                                <div className="w-100 h-100 relative flex items-center"><span className="body-2 db w-100 Dropdown-module_value__2e1z6 Dropdown-module_noLabel__kNwns"><span className="nowrap">U.S. English</span></span></div>
                                                <div className="flex items-center">
                                                <svg width="24" height="24" className="svg-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M12 16L7 10L17 10L12 16Z"></path>
                                                </svg>
                                                </div>
                                            </div>
                                        </button>
                                    </div>
                                    </div>
                                    <div role="button" tabIndex={-1} className="SignupPage-module_linkFocusRight__CNF6K FocusDiv-module_divFocus__2lKHg"><a className="SignupPage-module_signInLink__cLpkK ml2 caption-link-3 text-pure-white" href="/sign-in">Sign In</a></div>
                                </div>
                            </div>
                            <div className="OnboardingLayout-module_contentArea__3AAiC">
                                <div className="OnboardingLayout-module_scrollableArea__14s-K">
                                    <div className="SignupForm-module_form__Nfq21">
                                    <h1 className="title text-N600 mb3">Create your account</h1>
                                    <form onSubmit={e => handleSignUpSubmit(e)} /*action="/sign-up"> */>
                                        <input type="hidden" name="4ff1278948b83b52d13f76652674d2ed2053559c8ddb28680e4438784bd01d49" value="bef54183788d3e763fc7"/><input type="hidden" name="4ff1278948b83b52d13f76652674d2ed2053559c8ddb28680e4438784bd01d49-time" value="92"/>
                                        <div className="mb3">
                                            <div className="flex relative Field-module_container__2SO49 Field-module_negative__2LDT6">
                                                <div className="flex w-100 tl items-center">
                                                    <div className="flex-auto relative flex items-center h-100 bg-pure-white Field-module_FieldItem__2qUNO">
                                                        <label htmlFor="email" className="text-N300 absolute Field-module_floatingLabel__12Szv text-R300">Email</label>
                                                        <input ref={emailInputRef} onChange={emailInputHandler} data-testid="signup-email-field" id="email" name="email" className="w-100 text-N600 h-100 Field-module_input__1PIFR body-2 Field-module_floating__BjUHH pl3/2 pr3/2 Field-module_FX_WWW__8FicW" value={emailInput}/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="SignupForm-module_usernamePasswordFields__2qidk">
                                            <div className="SignupForm-module_usernameField__2kYML">
                                                <div>
                                                <div className="flex relative Field-module_container__2SO49 Field-module_dirty__3nvNf">
                                                    <div className="flex w-100 tl items-center">
                                                        <div className="flex-auto relative flex items-center h-100 bg-pure-white Field-module_FieldItem__2qUNO">
                                                            <label htmlFor="username" className="text-N300 absolute Field-module_floatingLabel__12Szv">Username</label>
                                                            <input ref={usernameInputRef} onChange={usernameInputHandler} data-testid="signup-username-field" id="username" name="username" className="w-100 text-N600 h-100 Field-module_input__1PIFR w-100 body-2 text-N600 h-100 Field-module_input__1PIFR Field-module_floating__BjUHH Field-module_floating__BjUHH body-2 pl3/2 pr3/2 Field-module_FX_WWW__8FicW" value={username}/></div>
                                                    </div>
                                                </div>
                                                </div>
                                            </div>
                                            <div className="SignupForm-module_passwordField__yyegQ" data-reach-tooltip-trigger="">
                                                <div className="flex relative Field-module_container__2SO49 Field-module_dirty__3nvNf">
                                                <div className="flex w-100 tl items-center">
                                                    <div className="flex-auto relative flex items-center h-100 bg-pure-white Field-module_FieldItem__2qUNO">
                                                        <label htmlFor="password" className="text-N300 absolute Field-module_floatingLabel__12Szv">Password</label>
                                                        <input ref={passwordInputRef} onChange={passwordInputHandler} tabIndex={0} data-testid="signup-password-field" type="password" id="password" name="password" className="w-100 text-N600 h-100 Field-module_input__1PIFR w-100 body-2 text-N600 h-100 Field-module_input__1PIFR Field-module_withIconRight__2xwIp Field-module_floating__BjUHH Field-module_floating__BjUHH body-2 pl3/2 pr3/2 Field-module_FX_WWW__8FicW" value={password}/>
                                                        <button className="flex text-N600 Field-module_iconRight__3psFJ" tabIndex={0} type="button" data-testid="show password button">
                                                            <svg width="20" height="20" className="svg-icon" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M17.0711 0.514648L18.4853 1.92886L2.92893 17.4852L1.51472 16.071L7.2924 10.2933C7.29249 10.2935 7.29232 10.2931 7.2924 10.2933L11.293 6.29198C11.2928 6.2919 11.2931 6.29206 11.293 6.29198L17.0711 0.514648ZM9.30148 8.28424C9.29572 8.28986 9.29003 8.29555 9.28441 8.3013L9.30148 8.28424Z"></path>
                                                            <path d="M8.91264 12.9148C9.26655 12.97 9.62933 12.9999 10 12.9999C13.39 12.9999 16.12 10.4999 17.45 8.99992C16.8805 8.35765 16.0544 7.53204 15.0296 6.79785L16.4612 5.36625C18.6964 7.04448 20 8.99992 20 8.99992C20 8.99992 16 14.9999 10 14.9999C9.0277 14.9999 8.10791 14.8424 7.24916 14.5783L8.91264 12.9148Z"></path>
                                                            <path d="M10 2.99992C10.9719 2.99992 11.8912 3.15734 12.7496 3.42118L11.086 5.08481C10.7325 5.02974 10.3702 4.99992 10 4.99992C6.61 4.99992 3.89 7.48993 2.55 8.99992C3.11931 9.64201 3.94515 10.4673 4.96947 11.2014L3.53789 12.6329C1.30328 10.9549 0 8.99992 0 8.99992C0 8.99992 4 2.99992 10 2.99992Z"></path>
                                                            <path d="M10.1664 6.00436C10.1113 6.00135 10.0558 5.99983 10 5.99983C8.34315 5.99983 7 7.34297 7 8.99983C7 9.05565 7.00152 9.11112 7.00453 9.16619L10.1664 6.00436Z"></path>
                                                            <path d="M9.83216 11.9952C9.88772 11.9983 9.94368 11.9998 10 11.9998C11.6569 11.9998 13 10.6567 13 8.99983C13 8.9435 12.9984 8.88754 12.9954 8.83199L9.83216 11.9952Z"></path>
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="relative pointer border-radius mb3 Dropdown-module_dropdown__1E-NF Dropdown-module_dirty__JoYL3" data-testid="country-selector" role="combobox" aria-expanded="false" aria-haspopup="listbox" aria-labelledby="downshift-3-label">
                                            <button data-testid="button-toggle-country" className="bg-pure-white relative flex items-center pl3/2 pr3/2 h-100 w-100 tl text-N600 caption-2 border-1 border-radius Dropdown-module_button__2_NAp" type="button" role="button" aria-label="open menu" aria-haspopup="true" data-toggle="true" name="country" id="country">
                                                <div className="flex h-100 w-100">
                                                <input type="hidden" name="country" value="MX"/>
                                                <div className="w-100 h-100 relative flex items-center">
                                                    <label htmlFor="downshift-3-input" id="downshift-3-label" className="block text-N300 absolute Dropdown-module_label__2oniX Dropdown-module_dirty__JoYL3">Country of residence</label>
                                                    <span className="body-2 db w-100 Dropdown-module_value__2e1z6">
                                                        <span className="nowrap">Mexico</span>
                                                    </span>
                                                </div>
                                                <div className="flex items-center">
                                                    <svg width="24" height="24" className="svg-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M12 16L7 10L17 10L12 16Z"></path>
                                                    </svg>
                                                </div>
                                                </div>
                                            </button>
                                        </div>
                                        <div className="mb3">
                                            <label htmlFor="agreement" data-testid="agreement-checkbox" className="flex items-center">
                                                <div className="Checkbox-module_checkbox__1oJuk flex-shrink-0 SignupForm-module_linkFocusCheckbox__1AK2P mr1">
                                                <div className="Checkbox-module_checkboxWrapper__2Zls-">
                                                    <svg width="24" height="24" className="svg-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path 
                                                        d={conditions === true ? 
                                                                "M5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21ZM10.5 16.991L5.79289 12.2839L7.20711 10.8696L10.5 14.1625L16.7929 7.86965L18.2071 9.28386L10.5 16.991Z"
                                                            :   "M19 5V19H5V5H19ZM19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3Z"
                                                        }
                                                        
                                                        ></path>
                                                    </svg>
                                                    <input ref={termsAndCondsInputRef} onClick={termsAndCondsHandler} id="agreement" name="agreement" type="checkbox"/>
                                                </div>
                                                </div>
                                                <p className="caption-2 text-N400">By continuing I agree to the <a target="_BLANK" rel="nooopener noreferrer" className="SignupForm-module_link__17Tw2 SignupForm-module_underlineFocus__341Bu" href="https://www.kraken.com/en-us/legal">Terms of Service</a> and <a target="_BLANK" rel="nooopener noreferrer" className="SignupForm-module_link__17Tw2 SignupForm-module_underlineFocus__341Bu" href="https://www.kraken.com/en-us/legal/privacy">Privacy Policy</a>.</p>
                                            </label>
                                        </div>
                                        <div className="tr">
                                            <button className="Button-module_button__wXbPI Button-module_primary__2X85A Button-module_large__2Pnjc" type="submit" disabled={createAccount}>
                                                <div className="Button-module_focusRing__qT6o8">
                                                <div className="Button-module_spacer__rMVgk">
                                                    <div className="Button-module_buttonInner__21spx">Create account</div>
                                                </div>
                                                </div>
                                            </button>
                                        </div>
                                        <div className="SignupForm-module_accountTypeSelector__2ekCJ">
                                            <button className="text-brand caption-2 SignupForm-module_link__17Tw2 SignupForm-module_underlineFocus__341Bu" type="button">
                                                <p>Create a business account&nbsp;»</p>
                                            </button>
                                        </div>
                                    </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        )
    }