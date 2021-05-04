import React from "react";
import { Wrapper, WrapperVariant } from "./Wrapper";
import classes from "../pages/style.module.scss";
// import Link from 'next/link';
import {Link} from "react-router-dom";
// import { NavBar } from "./Nav";

interface LayoutProps {
  variant?: WrapperVariant;
}

export const Layout: React.FC<LayoutProps> = ({ children, variant }) => {
  return (
    <div className={classes.HomePage}>
        <div className={classes.main_container}>
            <aside className={classes.aside_container}>
                    <div className={classes.desktop_navbar}>
                        <div className={classes.header_24px}></div>
                        <a className={classes.nav_bar_profile_container}>
                            <div className={classes.desktopNavbar__avatar}>
                                <div className={classes.desktopNavbar__avatar_profile_pic}></div>
                            </div>
                            <h2 className={classes.desktopNavbar__avatar_h2}>Mi perfil</h2>
                        </a>
                    </div>
                    <nav className={classes.nav_bar_left_main}>
                        <div className={classes.h_100}>
                            <div className={classes.h_100}>
                                <div className={classes.h_100} id={classes.settings}>
                                    <div className={classes.h_100}>
                                        <div className={classes.nav_bar_avatar_menu}>
                                            <div className={classes.menu__content}>
                                                <div className={classes.settings__tinderPlusContainer}>
                                                    <a className={classes.nav_bar_profile_container2}>
                                                        <span className={classes.nav_bar_menu_span1}>
                                                            <img src="https://tinder.com/static/build/m/b9ba18375fd8ae9b8c1931d56b4d8333.svg">
                                                            </img>
                                                        </span>
                                                        <span className={classes.nav_bar_menu_span2}>
                                                            <div className="">
                                                                <div className={classes.span_string_secondary}>
                                                                    <div className={classes.span_string__s}>
                                                                        Una experience de primera clase
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </span>
                                                    </a>
                                                </div>
                                                <div className={classes.settings__tinderPlusContainer}>
                                                    <a className={classes.nav_bar_profile_container2}>
                                                        <span className={classes.nav_bar_menu_span1}>
                                                            <img src="https://tinder.com/static/build/m/08674b3a0a1ef88ef8d92d887b2f2ad6.svg">
                                                            </img>
                                                        </span>
                                                        <span className={classes.spannav_bar_menu_span2}>
                                                            <div className={""}>
                                                                <div className={classes.span_string_secondary}>
                                                                    <div className={classes.span_string__s}>
                                                                        ¡Descubre a quién le gustas y más!
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </span>
                                                    </a>
                                                </div>
                                                <Link to={`/enterprises`} href="/enterprises" key={"companies"}>
                                                    <div className={classes.settings__tinderPlusContainer}>
                                                        <a className={classes.nav_bar_profile_container2}>
                                                            <span className={classes.nav_bar_menu_span1}>
                                                                <img>
                                                                </img>
                                                            </span>
                                                            <span className={classes.spannav_bar_menu_span2}>
                                                                <div className={""}>
                                                                    <div className={classes.span_string_secondary}>
                                                                        <div className={classes.span_string__s}>
                                                                            Mock Interviews
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </span>
                                                        </a>
                                                    </div>
                                                </Link>
                                                <div className={classes.settings__tinderPlusContainer}>
                                                    <a className={classes.nav_bar_profile_container2}>
                                                        <span className={classes.nav_bar_menu_span1}>
                                                            <img>
                                                            </img>
                                                        </span>
                                                        <span className={classes.spannav_bar_menu_span2}>
                                                            <div className={""}>
                                                                <div className={classes.span_string_secondary}>
                                                                    <div className={classes.span_string__s}>
                                                                        GMAT Type Tests
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </span>
                                                    </a>
                                                </div>
                                                <div className={classes.settings__tinderPlusContainer}>
                                                    <a className={classes.nav_bar_profile_container2}>
                                                        <span className={classes.nav_bar_menu_span1}>
                                                            <img>
                                                            </img>
                                                        </span>
                                                        <span className={classes.spannav_bar_menu_span2}>
                                                            <div className={""}>
                                                                <div className={classes.span_string_secondary}>
                                                                    <div className={classes.span_string__s}>
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
            <main className={classes.main_container}>
              <Wrapper variant={variant}>{children}</Wrapper>
            </main>
        </div>
    </div>  
) 
  // return (
  //   <>
  //     <NavBar />
  //     <Wrapper variant={variant}>{children}</Wrapper>
  //   </>
  // );
};