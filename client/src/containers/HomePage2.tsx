//import "../assets/blockchain_layout.css";
import "../assets/blockchain_layout_test.css";
import { Link } from "react-router-dom";
import Wrapper from "../components/Wrapper2"

import {ReactNode} from 'react';
interface IProps {
    children: ReactNode;
}

export default function HomePage2({...props}: IProps){
    return (

      <>
      <nav className="navbar navbar-expand navbar-dark bg-dark static-top">
         <a className="navbar-brand" href="/home">Valkiria</a>
         <button className="btn btn-link btn-sm text-white order-1 order-sm-0" id="sidebarToggle">
         <i className="fas fa-bars"></i>
         </button>
         <div className="collapse navbar-collapse" id="navbarSupportedContent">
         </div>
         <ul className="navbar-nav ml-auto ml-md-0">
            <li className="nav-item">
               <Link className="nav-link" to="/login/">Log In</Link>
            </li>
            <li className="nav-item">
               <Link className="nav-link" to="/register/">Register</Link>
            </li>
         </ul>
      </nav>
      <div id="wrapper">
         <ul className="sidebar navbar-nav">
            <li className="nav-item">
               <a className="nav-link" href="/home">
               <i className="fas fa-home"></i>
               <span>Home</span>
               </a>
            </li>
            <li className="nav-item">
               <a className="nav-link" href="/blockchain">
               <i className="fas fa-dice-d20"></i>
               <span>Blockchain Viewer</span>
               </a>
            </li>
            <li className="nav-item">
               <a className="nav-link" href="/transaction">
               <i className="far fa-credit-card"></i>
               <span>Make a Transaction</span></a>
            </li>
            <li className="nav-item">
               <a className="nav-link" href="/minerPage">
               <i className="fas fa-hammer"></i>
               <span>Mine Blocks</span>
               </a>
            </li>
            <li className="nav-item">
               <a className="nav-link" href="/node">
               <i className="fas fa-network-wired"></i>
               <span>Become a Node</span></a>
            </li>
            <li className="nav-item">
               <a className="nav-link" href="/purchase">
               <i className="fas fa-store"></i>
               <span>Buy GymCoin</span></a>
            </li>
         </ul>
         <div id="content-wrapper">
            <Wrapper children={props} {...props}/>
            <footer className="sticky-footer">
               <div className="container my-auto">
                  <div className="copyright text-center my-auto">
                     <span>Copyright © GymCoin 2019</span>
                     <br></br>
                     <span>Created by @nang149</span>
                  </div>
               </div>
            </footer>
         </div>
      </div>
      <a className="scroll-to-top rounded" href="#page-top">
      <i className="fas fa-angle-up"></i>
      </a>
      <div className="modal fade" id="logoutModal" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
         <div className="modal-dialog" role="document">
            <div className="modal-content">
               <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
                  <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                  </button>
               </div>
               <div className="modal-body">Select "Logout" below if you are ready to end your current session.</div>
               <div className="modal-footer">
                  <button className="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                  <a className="btn btn-primary" href="/logout">Logout</a>
               </div>
            </div>
         </div>
      </div>
      </>
   ) 
}