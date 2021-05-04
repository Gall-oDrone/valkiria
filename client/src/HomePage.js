import React, { Component } from "react";
import "./pages/styleModule2.css";
import axios from "axios";
import {Link} from "react-router-dom";
let endpoint = "http://localhost:8080";

// import {Link} from 'react';
export default function HomePage(){
    return (
        <div className={"HomePage"}>
            <div className={"main_container"}>
                <aside className={"aside_container"}>
                        <div className={"desktop_navbar"}>
                            <div className={"header_24px"}></div>
                            <a className={"nav_bar_profile_container"}>
                                <div className={"desktopNavbar__avatar"}>
                                    <div className={"desktopNavbar__avatar_profile_pic"}></div>
                                </div>
                                <h2 className={"desktopNavbar__avatar_h2"}>Mi perfil</h2>
                            </a>
                        </div>
                        <nav className={"nav_bar_left_main"}>
                            <div className={"h_100"}>
                                <div className={"h_100"}>
                                    <div className={"h_100"} id={"settings"}>
                                        <div className={"h_100"}>
                                            <div className={"nav_bar_avatar_menu"}>
                                                <div className={"menu__content"}>
                                                    <div className={"settings__tinderPlusContainer"}>
                                                        <a className={"nav_bar_profile_container2"}>
                                                            <span className={"nav_bar_menu_span1"}>
                                                                <img src="https://tinder.com/static/build/m/b9ba18375fd8ae9b8c1931d56b4d8333.svg">
                                                                </img>
                                                            </span>
                                                            <span className={"nav_bar_menu_span2"}>
                                                                <div className="">
                                                                    <div className={"span_string_secondary"}>
                                                                        <div className={"span_string__s"}>
                                                                            Una experience de primera clase
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </span>
                                                        </a>
                                                    </div>
                                                    <div className={"settings__tinderPlusContainer"}>
                                                        <a className={"nav_bar_profile_container2"}>
                                                            <span className={"nav_bar_menu_span1"}>
                                                                <img src="https://tinder.com/static/build/m/08674b3a0a1ef88ef8d92d887b2f2ad6.svg">
                                                                </img>
                                                            </span>
                                                            <span className={"spannav_bar_menu_span2"}>
                                                                <div className={""}>
                                                                    <div className={"span_string_secondary"}>
                                                                        <div className={"span_string__s"}>
                                                                            ¡Descubre a quién le gustas y más!
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </span>
                                                        </a>
                                                    </div>
                                                    {/* <Link as={`/enterprises`} href="/enterprises" key={"companies"}> */}
                                                        <div className={"settings__tinderPlusContainer"}>
                                                            <a className={"nav_bar_profile_container2"}>
                                                                <span className={"nav_bar_menu_span1"}>
                                                                    <img>
                                                                    </img>
                                                                </span>
                                                                <span className={"spannav_bar_menu_span2"}>
                                                                    <div className={""}>
                                                                        <div className={"span_string_secondary"}>
                                                                            <div className={"span_string__s"}>
                                                                                Mock Interviews
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </span>
                                                            </a>
                                                        </div>
                                                    {/* </Link> */}
                                                    <div className={"settings__tinderPlusContainer"}>
                                                        <a className={"nav_bar_profile_container2"}>
                                                            <span className={"nav_bar_menu_span1"}>
                                                                <img>
                                                                </img>
                                                            </span>
                                                            <span className={"spannav_bar_menu_span2"}>
                                                                <div className={""}>
                                                                    <div className={"span_string_secondary"}>
                                                                        <div className={"span_string__s"}>
                                                                            GMAT Type Tests
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </span>
                                                        </a>
                                                    </div>
                                                    <div className={"settings__tinderPlusContainer"}>
                                                        <a className={"nav_bar_profile_container2"}>
                                                            <span className={"nav_bar_menu_span1"}>
                                                                <img>
                                                                </img>
                                                            </span>
                                                            <span className={"spannav_bar_menu_span2"}>
                                                                <div className={""}>
                                                                    <div className={"span_string_secondary"}>
                                                                        <div className={"span_string__s"}>
                                                                            Practice Cases
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </nav>
                </aside>
                <main className={"main_container"}>Main
                </main>
            </div>
        </div>
        
    ) 
}

// class ToDoList extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       task: "",
//       items: []
//     };
//   }

//   componentDidMount() {
//     this.getTask();
//   }

//   onChange = event => {
//     this.setState({
//       [event.target.name]: event.target.value
//     });
//   };

//   onSubmit = () => {
//     let { task } = this.state;
//     // console.log("pRINTING task", this.state.task);
//     if (task) {
//       axios
//         .post(
//           endpoint + "/api/task",
//           {
//             task
//           },
//           {
//             headers: {
//               "Content-Type": "application/x-www-form-urlencoded"
//             }
//           }
//         )
//         .then(res => {
//           this.getTask();
//           this.setState({
//             task: ""
//           });
//           console.log(res);
//         });
//     }
//   };

//   getTask = () => {
//     axios.get(endpoint + "/api/task").then(res => {
//       console.log(res);
//       if (res.data) {
//         this.setState({
//           items: res.data.map(item => {
//             let color = "yellow";

//             if (item.status) {
//               color = "green";
//             }
//             return (
//               <Card key={item._id} color={color} fluid>
//                 <Card.Content>
//                   <Card.Header textAlign="left">
//                     <div style={{ wordWrap: "break-word" }"}>{item.task}</div>
//                   </Card.Header>

//                   <Card.Meta textAlign="right">
//                     <Icon
//                       name="check circle"
//                       color="green"
//                       onClick={() => this.updateTask(item._id)}
//                     />
//                     <span style={{ paddingRight: 10 }"}>Done</span>
//                     <Icon
//                       name="undo"
//                       color="yellow"
//                       onClick={() => this.undoTask(item._id)}
//                     />
//                     <span style={{ paddingRight: 10 }"}>Undo</span>
//                     <Icon
//                       name="delete"
//                       color="red"
//                       onClick={() => this.deleteTask(item._id)}
//                     />
//                     <span style={{ paddingRight: 10 }"}>Delete</span>
//                   </Card.Meta>
//                 </Card.Content>
//               </Card>
//             );
//           })
//         });
//       } else {
//         this.setState({
//           items: []
//         });
//       }
//     });
//   };

//   updateTask = id => {
//     axios
//       .put(endpoint + "/api/task/" + id, {
//         headers: {
//           "Content-Type": "application/x-www-form-urlencoded"
//         }
//       })
//       .then(res => {
//         console.log(res);
//         this.getTask();
//       });
//   };

//   undoTask = id => {
//     axios
//       .put(endpoint + "/api/undoTask/" + id, {
//         headers: {
//           "Content-Type": "application/x-www-form-urlencoded"
//         }
//       })
//       .then(res => {
//         console.log(res);
//         this.getTask();
//       });
//   };

//   deleteTask = id => {
//     axios
//       .delete(endpoint + "/api/deleteTask/" + id, {
//         headers: {
//           "Content-Type": "application/x-www-form-urlencoded"
//         }
//       })
//       .then(res => {
//         console.log(res);
//         this.getTask();
//       });
//   };
//   render() {
//     return (
//       <div>
//         <div className="row">
//           <Header className="header" as="h2">
//             TO DO LIST
//           </Header>
//         </div>
//         <div className="row">
//           <Form onSubmit={this.onSubmit"}>
//             <Input
//               type="text"
//               name="task"
//               onChange={this.onChange}
//               value={this.state.task}
//               fluid
//               placeholder="Create Task"
//             />
//             {/* <Button >Create Task</Button> */}
//           </Form>
//         </div>
//         <div className="row">
//           <Card.Group>{this.state.items}</Card.Group>
//         </div>
//       </div>
//     );
//   }
// }

// export default ToDoList;