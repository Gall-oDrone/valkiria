import "../assets/blockchain_layout_test.css";
import { Link } from "react-router-dom";
import Wrapper from "../components/Wrapper2"
import "../assets/landingPageCont.css";
import a from "../assets/files/svg/blockchain-01.svg"
import b from "../assets/files/svg/blockchain-01.png"
import c from "../assets/files/svg/gradient-landing-page-01.png"
import d from "../assets/files/svg/26824-01.png"
import e from "../assets/files/svg/5372578-01.png"
import f from "../assets/files/svg/tech-support-01.png"
import {ReactNode} from 'react';
interface IProps {
    children: ReactNode;
}

export default function HomePage2({...props}: IProps){
    return (

<div id="root">
   <div className="content">
      <div className="fc-0249d7f8-1">
         <div className="fc-f9d524fc-1"></div>
         <header className="kraken-header">
            <a data-testid="site-link" className="fc-0c1e011d-1" href="/en-us/">Valkiria</a>
            <nav className="fc-a4de58d0-1">
               <ul className="fc-a4de58d0-2">
                  <li data-testid="top-nav-Features" className="fc-db0cec94-1 fc-db0cec94-2">
                     <a data-testid="site-link" style={{color:"#fff"}} href="/en-us/features">Features</a>
                     <ul data-testid="submenu-Features-hidden" className="fc-a8a3a929-1 fc-a8a3a929-2">
                        <li className="fc-a8a3a929-3">
                           <div className="fc-a8a3a929-4">
                              <ul>
                                 <li><a data-testid="site-link" href="/en-us/features/security"><span className="fc1 fc-a8a3a929-6 fc11">Security</span></a></li>
                                 <li><a data-testid="site-link" href="/en-us/features/fee-schedule"><span className="fc1 fc-a8a3a929-6 fc11">Fee Structure</span></a></li>
                                 <li><a data-testid="site-link" href="/en-us/features/funding-options"><span className="fc1 fc-a8a3a929-6 fc11">Funding Options</span></a></li>
                                 <li><a data-testid="site-link" href="/en-us/features/staking-coins"><span className="fc1 fc-a8a3a929-6 fc11">Staking</span></a></li>
                                 <li><a data-testid="site-link" href="/en-us/features/24-7-support"><span className="fc1 fc-a8a3a929-6 fc11">24/7 Support</span></a></li>
                                 <li><a data-testid="site-link" href="/en-us/features/liquidity"><span className="fc1 fc-a8a3a929-6 fc11">Liquidity</span></a></li>
                              </ul>
                           </div>
                           <div className="fc-a8a3a929-4">
                              <ul>
                                 <li><a data-testid="site-link" href="/en-us/features/margin-trading"><span className="fc1 fc-a8a3a929-6 fc11">Margin Trading</span></a></li>
                                 <li><a data-testid="site-link" href="/en-us/features/indices"><span className="fc1 fc-a8a3a929-6 fc11">Indices</span></a></li>
                                 <li><a data-testid="site-link" href="/en-us/features/futures"><span className="fc1 fc-a8a3a929-6 fc11">Futures</span></a></li>
                                 <li><a data-testid="site-link" href="/en-us/features/otc-exchange"><span className="fc1 fc-a8a3a929-6 fc11">OTC</span></a></li>
                                 <li><a data-testid="site-link" href="/en-us/features/account-management"><span className="fc1 fc-a8a3a929-6 fc11">Account Management</span></a></li>
                                 <li><a data-testid="site-link" href="/en-us/cryptowatch"><span className="fc1 fc-a8a3a929-6 fc11">Cryptowatch</span></a></li>
                              </ul>
                           </div>
                        </li>
                     </ul>
                  </li>
                  <li data-testid="top-nav-Prices" className="fc-db0cec94-1 fc-db0cec94-3"><a data-testid="site-link" style={{color:"#fff"}} href="/prices">Prices</a></li>
                  <li data-testid="top-nav-Learn" className="fc-db0cec94-1 fc-db0cec94-4">
                     <a data-testid="site-link" style={{color:"#fff"}} href="/en-us/learn">Learn</a>
                     <ul data-testid="submenu-Learn-hidden" className="fc-a8a3a929-1 fc-a8a3a929-2">
                        <li className="fc-a8a3a929-3">
                           <div className="fc-a8a3a929-4">
                              <ul>
                                 <li><a data-testid="site-link" href="/en-us/learn/crypto-guides"><span className="fc1 fc-a8a3a929-6 fc11">Crypto Guides</span></a></li>
                                 <li><a data-testid="site-link" href="/en-us/learn/videos"><span className="fc1 fc-a8a3a929-6 fc11">Videos</span></a></li>
                                 <li><a data-testid="site-link" href="/en-us/learn/podcast"><span className="fc1 fc-a8a3a929-6 fc11">Podcast</span></a></li>
                              </ul>
                           </div>
                        </li>
                     </ul>
                  </li>
                  <li data-testid="top-nav-Support" className="fc-db0cec94-1 fc-db0cec94-5"><a data-testid="site-link" target="_blank" rel="noopener" style={{color:"#fff"}} href="/redirect?url=https%3A%2F%2Fsupport.kraken.com%2Fhc%2Fen-us">Support</a></li>
                  <li data-testid="top-nav-Futures" className="fc-db0cec94-1 fc-db0cec94-6"><a data-testid="site-link" target="_blank" rel="noopener" style={{color:"#fff"}} href="/redirect?url=https%3A%2F%2Ffutures.kraken.com">Futures</a></li>
                  <li data-testid="top-nav-Institutions" className="fc-db0cec94-1 fc-db0cec94-7"><a data-testid="site-link" style={{color:"#fff"}} href="/en-us/institutions">Institutions</a></li>
               </ul>
               <ul className="fc-5a230805-1">
                  <li className="fc-5a230805-2"><a data-testid="site-link" className="kraken-cta inverted" href="/sign-in">Sign In</a></li>
                  <li className="fc-5a230805-2"><a data-testid="site-link" className="kraken-cta" href="/register/">Create Account</a></li>
               </ul>
            </nav>
            <div className="fc-0c1e011d-3 fc-0c1e011d-4"></div>
            <div className="fc-0c1e011d-2 fc-0c1e011d-5"></div>
         </header>
         <article>
            <div className="kraken-components">
               <div className="kraken-component">
                  <div className="kraken-hero-home">
                     <div className="kraken-content-wrapper">
                        <h1><span><strong>Welcome to Valkiria.</strong><br/>
                           <strong>We put the power in your hands</strong> to create digital cryptocurrencies, <br/>NFT and more.</span>
                        </h1>
                        <div className="cta-wrapper"><a data-testid="site-link" className="kraken-cta btn-purple" href="/sign-up">Get Started</a></div>
                        <button className="scroll-down"><span>Learn More</span></button>
                     </div>
                     <div className="illustration">
                        <picture className="kraken-image">
                           {/* <source type="image/webp" srcSet="/_assets/files/2019-02/kraken_desktop_hero/400.webp 400w, /_assets/files/2019-02/kraken_desktop_hero/768.webp 768w, /_assets/files/2019-02/kraken_desktop_hero/1024.webp 1024w, /_assets/files/2019-02/kraken_desktop_hero/1536.webp 1536w, /_assets/files/2019-02/kraken_desktop_hero/2048.webp 2048w, /_assets/files/2019-02/kraken_desktop_hero/2880.webp 2880w"/>
                           <source srcSet="../assets/files/svg/blockchain.svg, /_assets/files/2019-02/kraken_desktop_hero/400.jpg 400w, /_assets/files/2019-02/kraken_desktop_hero/768.jpg 768w, /_assets/files/2019-02/kraken_desktop_hero/1024.jpg 1024w, /_assets/files/2019-02/kraken_desktop_hero/1536.jpg 1536w, /_assets/files/2019-02/kraken_desktop_hero/2048.jpg 2048w, /_assets/files/2019-02/kraken_desktop_hero/2880.jpg 2880w"/> */}
                           <img className="kraken-image" loading="lazy" src={b} />
                           {/* <img className="kraken-image" src={b} loading="lazy" /> */}
                           {/* <img className="kraken-image" alt="kraken bitcoin exchange" loading="lazy"/> */}
                        </picture>
                     </div>
                  </div>
               </div>
               <div className="kraken-component">
                  <div className="kraken-wayfinding">
                     <div className="kraken-content-wrapper">
                        <div className="wayfinder-header">
                           <h2><span><strong>We are Valkiria, consistently rated the best and most secure blockchain market&nbsp;platform.</strong></span></h2>
                           <p>How can we help you get started?</p>
                        </div>
                     </div>
                     <div className="wayfinder-wrapper activate-current">
                        <div>
                           <a data-testid="site-link" className="wayfinding-card current" data-disabled="false" href="#route-beginner">
                              <p className="title">I'm new to crypto. I need someone to explain how it all works.</p>
                           </a>
                           <a data-testid="site-link" className="wayfinding-card" data-disabled="false" href="#route-intermediate">
                              <p className="title">I'm trying to take my digital investments to the next level.</p>
                           </a>
                           <a data-testid="site-link" className="wayfinding-card" data-disabled="false" href="#route-advanced">
                              <p className="title">I'm looking for something my current exchange doesn't offer.</p>
                           </a>
                           <a data-testid="site-link" className="wayfinding-card" data-disabled="false" href="/en-us/institutions">
                              <p className="title">I'm a company with unique needs from my exchange.</p>
                           </a>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="kraken-component">
                  <div className="kraken-components-group" id="route-beginner">
                     <div className="kraken-components">
                        <div className="kraken-component">
                           <div className="kraken-strip-full-screen kraken-strip-standard font-white" style={{backgroundColor: "rgb(13, 12, 82)"}}>
                              <div className="kraken-content-wrapper">
                                 <h2 className="mobile-h2"><span><strong>New to blockchain technologies?&nbsp;</strong> <strong>No problem.</strong> Digital assets may seem confusing, but we're here to help.</span></h2>
                                 <picture className="kraken-image strip-img strip-media-60">
                                    {/* <source type="image/webp" srcSet="/_assets/files/2019-01/kraken_body01_final_01/400.webp 400w, /_assets/files/2019-01/kraken_body01_final_01/768.webp 768w" sizes="(min-width: 1116px) 498px, 44vw"/>
                                    <source srcSet="/_assets/files/2019-01/kraken_body01_final_01/400.png 400w, /_assets/files/2019-01/kraken_body01_final_01/768.png 768w" sizes="(min-width: 1116px) 498px, 44vw"/>
                                    <img className="kraken-image" alt="kraken bitcoin trading platform" loading="lazy"/> */}
                                    <img className="kraken-image" src={c} alt="kraken cryptocurrency exchange " loading="lazy"/>
                                 </picture>
                                 <div className="strip-text kraken-strip-standard strip-media-50">
                                    <div className="body-content">
                                       <h2 className="desktop-h2"><span><strong>New to blockchain technologies?&nbsp;</strong> <strong>No problem.</strong> Digital assets may seem confusing, but we're here to help.</span></h2>
                                       <p dir="ltr"><strong>Our guides will help get you up to speed.</strong></p>
                                       <p dir="ltr">While the concept is simple, we know that aspects of blockchain technology can seem a bit complex.</p>
                                       <p dir="ltr">Our resource center will help guide you through the basics of building digital assets and how it's changing the way the world thinks about money, finance, and other industries.</p>
                                    </div>
                                    <a data-testid="site-link" className="kraken-cta" href="/learn">Learn more about blockchain</a>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="kraken-component">
                           <div className="kraken-strip-full-screen kraken-strip-standard inverted font-white" style={{backgroundColor: "rgb(255, 139, 139)"}}>
                              <div className="kraken-content-wrapper">
                                 <h2 className="mobile-h2"><span><strong>Valkiria gives you the power to hit the ground running,&nbsp;</strong>no matter your experience level or current age.</span></h2>
                                 <picture className="kraken-image strip-img strip-media-60">
                                    {/* <source type="image/webp" srcSet="/_assets/files/2019-01/kraken_body02_final_02/400.webp 400w, /_assets/files/2019-01/kraken_body02_final_02/768.webp 768w" sizes="(min-width: 1116px) 498px, 44vw"/>
                                    <source srcSet="/_assets/files/2019-01/kraken_body02_final_02/400.png 400w, /_assets/files/2019-01/kraken_body02_final_02/768.png 768w" sizes="(min-width: 1116px) 498px, 44vw"/> */}
                                    <img className="kraken-image" src={d} alt="kraken cryptocurrency exchange " loading="lazy"/>
                                 </picture>
                                 <div className="strip-text kraken-strip-standard strip-media-50">
                                    <div className="body-content">
                                       <h2 className="desktop-h2"><span><strong>Valkiria gives you the power to hit the ground running,&nbsp;</strong>no matter your experience level or current age.</span></h2>
                                       <p dir="ltr"><strong>An intuitive experience from the start.</strong></p>
                                       <p dir="ltr">From day one, we designed and built a streamlined blockchain service platform for newcomers and experts alike.</p>
                                       <p dir="ltr">Make easy deposits and withdrawals, measure your portfolio's performance and keep track of all of your digital assets in one convenient place.</p>
                                    </div>
                                    <a data-testid="site-link" className="kraken-cta" href="/en-us/features">Check out all of our features</a>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="kraken-component">
                           <div className="kraken-strip-full-screen kraken-strip-standard font-white" style={{backgroundColor: "rgb(84, 9, 200)"}}>
                              <div className="kraken-content-wrapper">
                                 <h2 className="mobile-h2"><span><strong>Kraken is the most trusted cryptocurrency exchange&nbsp;</strong>on the market.</span></h2>
                                 <picture className="kraken-image strip-img strip-media-60">
                                    {/* <source type="image/webp" srcSet="/_assets/files/2019-01/kraken_body03_final_01/400.webp 400w, /_assets/files/2019-01/kraken_body03_final_01/768.webp 768w" sizes="(min-width: 1116px) 498px, 44vw"/>
                                    <source srcSet="/_assets/files/2019-01/kraken_body03_final_01/400.png 400w, /_assets/files/2019-01/kraken_body03_final_01/768.png 768w" sizes="(min-width: 1116px) 498px, 44vw"/>
                                    <img className="kraken-image" alt="most secure bitcoin exchange" loading="lazy"/> */}
                                    <img className="kraken-image" src={e} alt="most secure bitcoin exchange" loading="lazy" />
                                 </picture>
                                 <div className="strip-text kraken-strip-standard strip-media-50">
                                    <div className="body-content">
                                       <h2 className="desktop-h2"><span><strong>Valkiria is the most trusted blockchain platform&nbsp;</strong>on the market.</span></h2>
                                       <p dir="ltr"><strong>Build with confidence.</strong></p>
                                       <p dir="ltr">Earning the trust of our clients has always been our highest priority. We earn that trust through the best security in the business — most of our digital assets are held safely in cold wallets&nbsp;so bad actors can't reach it.</p>
                                       <p>Our platform provides world className financial stability by maintaining full reserves, healthy banking relationships and the highest standards of legal compliance.</p>
                                    </div>
                                    <a data-testid="site-link" className="kraken-cta" href="/en-us/features/security">Learn more about security</a>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="kraken-component">
                           <div className="kraken-strip-full-screen kraken-strip-standard inverted font-white" style={{backgroundColor: "rgb(254, 181, 141)"}}>
                              <div className="kraken-content-wrapper">
                                 <h2 className="mobile-h2"><span><strong>No matter what,&nbsp;</strong>we're always here for you.</span></h2>
                                 <picture className="kraken-image strip-img strip-media-60">
                                    {/* <source type="image/webp" srcSet="/_assets/files/2019-06/intermediate4/400.webp 400w, /_assets/files/2019-06/intermediate4/768.webp 768w" sizes="(min-width: 1116px) 498px, 44vw"/>
                                    <source srcSet="/_assets/files/2019-06/intermediate4/400.png 400w, /_assets/files/2019-06/intermediate4/768.png 768w" sizes="(min-width: 1116px) 498px, 44vw"/>
                                    <img className="kraken-image" alt="crypto trading platform" loading="lazy"/> */}
                                    <img className="kraken-image" src={f} alt="most secure bitcoin exchange" loading="lazy" />
                                 </picture>
                                 <div className="strip-text kraken-strip-standard strip-media-50">
                                    <div className="body-content">
                                       <h2 className="desktop-h2"><span><strong>No matter what,&nbsp;</strong>we're always here for you.</span></h2>
                                       <p dir="ltr"><strong>Global 24/7/365 support.</strong></p>
                                       <p dir="ltr">We pair our global 24/7/365 live chat with an extensive Support Center to help ensure your questions are answered and your needs are met around the clock -- no matter who or where you are.</p>
                                    </div>
                                    <a data-testid="site-link" target="_blank" rel="noopener" className="kraken-cta" href="/redirect?url=https%3A%2F%2Fsupport.kraken.com">Explore our Support Center</a>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="kraken-component">
                  <div className="kraken-components-group" id="route-intermediate" style={{display: "none"}}>
                     <div className="kraken-components">
                        <div className="kraken-component">
                           <div className="kraken-strip-full-screen kraken-strip-standard font-white" style={{backgroundColor: "rgb(13, 12, 82)"}}>
                              <div className="kraken-content-wrapper">
                                 <h2 className="mobile-h2"><span><strong>So you’re new to Kraken? No problem.</strong> We make it safe and simple to buy and sell cryptocurrency.</span></h2>
                                 <picture className="kraken-image strip-img strip-media-60">
                                    <source type="image/webp" srcSet="/_assets/files/2019-04/intermediate1/400.webp 400w, /_assets/files/2019-04/intermediate1/768.webp 768w" sizes="(min-width: 1116px) 498px, 44vw"/>
                                    <source srcSet="/_assets/files/2019-04/intermediate1/400.png 400w, /_assets/files/2019-04/intermediate1/768.png 768w" sizes="(min-width: 1116px) 498px, 44vw"/>
                                    <img className="kraken-image" alt="Newcomers and experts alike" loading="lazy"/>
                                 </picture>
                                 <div className="strip-text kraken-strip-standard strip-media-50">
                                    <div className="body-content">
                                       <h2 className="desktop-h2"><span><strong>So you’re new to Kraken? No problem.</strong> We make it safe and simple to buy and sell cryptocurrency.</span></h2>
                                       <p dir="ltr"><strong>From day one, we designed and built Kraken for newcomers and experts alike.</strong></p>
                                       <p dir="ltr">While we're proud to be one of the largest bitcoin exchanges, serving clients in over 190 countries, we're just as excited about helping people discover the world of crypto and expand their portfolios to include other digital assets.</p>
                                    </div>
                                    <a data-testid="site-link" target="_blank" rel="noopener" className="kraken-cta" href="/redirect?url=https%3A%2F%2Fsupport.kraken.com%2Fhc%2Fen-us%2Fcategories%2F200187143-Kraken-Trading-Guide">Learn how to start trading on Kraken</a>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="kraken-component">
                           <div className="kraken-strip-full-screen kraken-strip-standard font-white" style={{backgroundColor: "rgb(255, 139, 139)"}}>
                              <div className="kraken-content-wrapper">
                                 <h2 className="mobile-h2">
                                    <h2 dir="ltr"><strong>From simple buying to advanced trading </strong>we have you covered.</h2>
                                 </h2>
                                 <picture className="kraken-image strip-img strip-media-60">
                                    <source type="image/webp" srcSet="/_assets/files/2019-04/intermediate2/400.webp 400w, /_assets/files/2019-04/intermediate2/768.webp 768w" sizes="(min-width: 1116px) 498px, 44vw"/>
                                    <source srcSet="/_assets/files/2019-04/intermediate2/400.png 400w, /_assets/files/2019-04/intermediate2/768.png 768w" sizes="(min-width: 1116px) 498px, 44vw"/>
                                    <img className="kraken-image" alt="Futures trading" loading="lazy"/>
                                 </picture>
                                 <div className="strip-text kraken-strip-standard strip-media-50">
                                    <div className="body-content">
                                       <h2 className="desktop-h2">
                                          <h2 dir="ltr"><strong>From simple buying to advanced trading </strong>we have you covered.</h2>
                                       </h2>
                                       <p dir="ltr"><strong>Our trading platform is chock full of features.</strong></p>
                                       <p dir="ltr">Our easy-to-use interface, quick funding options and wide range of digital currencies allow you to effortlessly execute both long and short-term investment strategies. You can also take advantage of our advanced features, like margin and futures trading, so you can do more with less, leveraging the power of your portfolio.</p>
                                    </div>
                                    <a data-testid="site-link" className="kraken-cta" href="/en-us/features/futures">Explore futures trading</a>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="kraken-component">
                           <div className="kraken-strip-full-screen kraken-strip-standard font-white" style={{backgroundColor: "rgb(84, 9, 200)"}}>
                              <div className="kraken-content-wrapper">
                                 <h2 className="mobile-h2"><span><strong>Fees as low as 0% </strong>so you can keep your money in your wallet where it belongs.</span></h2>
                                 <picture className="kraken-image strip-img strip-media-60">
                                    <source type="image/webp" srcSet="/_assets/files/2019-04/intermediate3/400.webp 400w, /_assets/files/2019-04/intermediate3/768.webp 768w" sizes="(min-width: 1116px) 498px, 44vw"/>
                                    <source srcSet="/_assets/files/2019-04/intermediate3/400.png 400w, /_assets/files/2019-04/intermediate3/768.png 768w" sizes="(min-width: 1116px) 498px, 44vw"/>
                                    <img className="kraken-image" alt="Bye-bye high minimums and hidden fees." loading="lazy"/>
                                 </picture>
                                 <div className="strip-text kraken-strip-standard strip-media-50">
                                    <div className="body-content">
                                       <h2 className="desktop-h2"><span><strong>Fees as low as 0% </strong>so you can keep your money in your wallet where it belongs.</span></h2>
                                       <p dir="ltr"><strong>Bye-bye high minimums and hidden fees. </strong></p>
                                       <p dir="ltr">Unlike traditional trading platforms, we don’t charge a flat fee for every trade you make - and there’s never any guesswork or hidden costs.</p>
                                       <p dir="ltr">The more you trade, the lower your rate. Our volume-based, investor-friendly fee structure rewards you for trading so you can make more trades for less.</p>
                                    </div>
                                    <a data-testid="site-link" className="kraken-cta" href="/en-us/features/fee-schedule">See how our fees work</a>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="kraken-component">
                           <div className="kraken-strip-full-screen kraken-strip-standard font-white" style={{backgroundColor: "rgb(254, 181, 141)"}}>
                              <div className="kraken-content-wrapper">
                                 <h2 className="mobile-h2">
                                    <h2 dir="ltr"><strong>70+ asset pairs available to trade </strong>and we’re still counting.</h2>
                                 </h2>
                                 <picture className="kraken-image strip-img strip-media-60">
                                    <source type="image/webp" srcSet="/_assets/files/2019-06/kraken_body04_final_02/400.webp 400w, /_assets/files/2019-06/kraken_body04_final_02/768.webp 768w" sizes="(min-width: 1116px) 498px, 44vw"/>
                                    <source srcSet="/_assets/files/2019-06/kraken_body04_final_02/400.png 400w, /_assets/files/2019-06/kraken_body04_final_02/768.png 768w" sizes="(min-width: 1116px) 498px, 44vw"/>
                                    <img className="kraken-image" alt="70 cryptocurrencies to trade" loading="lazy"/>
                                 </picture>
                                 <div className="strip-text kraken-strip-standard strip-media-50">
                                    <div className="body-content">
                                       <h2 className="desktop-h2">
                                          <h2 dir="ltr"><strong>70+ asset pairs available to trade </strong>and we’re still counting.</h2>
                                       </h2>
                                       <p dir="ltr"><strong>Our vetted asset list continues to grow.</strong></p>
                                       <p dir="ltr">Kraken’s exchange and trading platform provides access to one of the largest selections of coins to trade with 20+ assets and more coming around the corner.</p>
                                    </div>
                                    <a data-testid="site-link" target="_blank" rel="noopener" className="kraken-cta" href="/redirect?url=https%3A%2F%2Ftrade.kraken.com">See all our coin offerings</a>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="kraken-component">
                  <div className="kraken-components-group" id="route-advanced" style={{display: "none"}}>
                     <div className="kraken-components">
                        <div className="kraken-component">
                           <div className="kraken-strip-full-screen kraken-strip-standard font-white" style={{backgroundColor: "rgb(13, 12, 82)"}}>
                              <div className="kraken-content-wrapper">
                                 <h2 className="mobile-h2"><span dir="ltr"><strong>One platform. A sea of possibilities.</strong>&nbsp;We offer a wide selection of cryptocurrencies from privacy coins to platform tokens.</span></h2>
                                 <picture className="kraken-image strip-img strip-media-60">
                                    <source type="image/webp" srcSet="/_assets/files/2019-04/advanced1/400.webp 400w, /_assets/files/2019-04/advanced1/768.webp 768w" sizes="(min-width: 1116px) 498px, 44vw"/>
                                    <source srcSet="/_assets/files/2019-04/advanced1/400.png 400w, /_assets/files/2019-04/advanced1/768.png 768w" sizes="(min-width: 1116px) 498px, 44vw"/>
                                    <img className="kraken-image" alt="20 Currencies and Counting" loading="lazy"/>
                                 </picture>
                                 <div className="strip-text kraken-strip-standard strip-media-50">
                                    <div className="body-content">
                                       <h2 className="desktop-h2"><span dir="ltr"><strong>One platform. A sea of possibilities.</strong>&nbsp;We offer a wide selection of cryptocurrencies from privacy coins to platform tokens.</span></h2>
                                       <p dir="ltr"><strong>We have the assets.</strong></p>
                                       <p dir="ltr">With 70+ currency pairs to choose from, we provide one of the largest selections of coins to buy, sell and trade -- with new assets added frequently.</p>
                                    </div>
                                    <a data-testid="site-link" target="_blank" rel="noopener" className="kraken-cta" href="/redirect?url=https%3A%2F%2Ftrade.kraken.com%2F">See all our token offerings</a>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="kraken-component">
                           <div className="kraken-strip-full-screen kraken-strip-standard font-white" style={{backgroundColor: "rgb(255, 139, 139)"}}>
                              <div className="kraken-content-wrapper">
                                 <h2 className="mobile-h2"><span dir="ltr"><strong>Our high liquidity&nbsp;</strong>enables faster execution for your strategy.</span></h2>
                                 <picture className="kraken-image strip-img strip-media-60">
                                    <source type="image/webp" srcSet="/_assets/files/2019-04/advanced2/400.webp 400w, /_assets/files/2019-04/advanced2/768.webp 768w" sizes="(min-width: 1116px) 498px, 44vw"/>
                                    <source srcSet="/_assets/files/2019-04/advanced2/400.png 400w, /_assets/files/2019-04/advanced2/768.png 768w" sizes="(min-width: 1116px) 498px, 44vw"/>
                                    <img className="kraken-image" alt="Liquify your assets faster" loading="lazy"/>
                                 </picture>
                                 <div className="strip-text kraken-strip-standard strip-media-50">
                                    <div className="body-content">
                                       <h2 className="desktop-h2"><span dir="ltr"><strong>Our high liquidity&nbsp;</strong>enables faster execution for your strategy.</span></h2>
                                       <p dir="ltr"><strong>Stay agile in shifting markets.</strong></p>
                                       <p dir="ltr">The Kraken Exchange offers the highest liquidity available&nbsp;with tight spreads that allow you to trade at the price you want.</p>
                                       <p dir="ltr">Aside from being the top exchange for bitcoin liquidity, we're consistently among the top exchanges by volume for all of the assets we list.</p>
                                    </div>
                                    <a data-testid="site-link" className="kraken-cta" href="/en-us/features/liquidity">More about liquidity</a>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="kraken-component">
                           <div className="kraken-strip-full-screen kraken-strip-standard font-white" style={{backgroundColor: "rgb(84, 9, 200)"}}>
                              <div className="kraken-content-wrapper">
                                 <h2 className="mobile-h2"><span dir="ltr"><strong>Robust features</strong>&nbsp;built with simplicity and convenience in mind.</span></h2>
                                 <picture className="kraken-image strip-img strip-media-60">
                                    <source type="image/webp" srcSet="/_assets/files/2019-04/advanced3/400.webp 400w, /_assets/files/2019-04/advanced3/768.webp 768w" sizes="(min-width: 1116px) 498px, 44vw"/>
                                    <source srcSet="/_assets/files/2019-04/advanced3/400.png 400w, /_assets/files/2019-04/advanced3/768.png 768w" sizes="(min-width: 1116px) 498px, 44vw"/>
                                    <img className="kraken-image" alt="Supercharge your portfolio" loading="lazy"/>
                                 </picture>
                                 <div className="strip-text kraken-strip-standard strip-media-50">
                                    <div className="body-content">
                                       <h2 className="desktop-h2"><span dir="ltr"><strong>Robust features</strong>&nbsp;built with simplicity and convenience in mind.</span></h2>
                                       <p dir="ltr"><strong>Supercharge your portfolio.</strong></p>
                                       <p dir="ltr">We built a state-of-the-art cryptocurrency exchange that's simple and intuitive for even the most complex trading strategies.</p>
                                       <p dir="ltr">By offering advanced trade functionality like margin trades and futures in a straightforward interface, we have the tools you need to grow your portfolio.</p>
                                    </div>
                                    <a data-testid="site-link" className="kraken-cta" href="/en-us/features">Explore all features</a>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="kraken-component">
                           <div className="kraken-strip-full-screen kraken-strip-standard font-white" style={{backgroundColor: "rgb(254, 181, 141)"}}>
                              <div className="kraken-content-wrapper">
                                 <h2 className="mobile-h2"><span><strong>Stay on top of your investments </strong>with the most advanced charting tools.</span></h2>
                                 <picture className="kraken-image strip-img strip-media-60">
                                    <source type="image/webp" srcSet="/_assets/files/2019-04/advanced4/400.webp 400w, /_assets/files/2019-04/advanced4/768.webp 768w" sizes="(min-width: 1116px) 498px, 44vw"/>
                                    <source srcSet="/_assets/files/2019-04/advanced4/400.png 400w, /_assets/files/2019-04/advanced4/768.png 768w" sizes="(min-width: 1116px) 498px, 44vw"/>
                                    <img className="kraken-image" alt="Supercharge your portfolio" loading="lazy"/>
                                 </picture>
                                 <div className="strip-text kraken-strip-standard strip-media-50">
                                    <div className="body-content">
                                       <h2 className="desktop-h2"><span><strong>Stay on top of your investments </strong>with the most advanced charting tools.</span></h2>
                                       <p dir="ltr"><strong>Chart your course with confidence.</strong></p>
                                       <p dir="ltr">Take your trading to the next level with advanced technical analysis tools, order execution across multiple exchanges, and automated portfolio monitoring. Watch and trade the entire market from a single platform.</p>
                                    </div>
                                    <a data-testid="site-link" className="kraken-cta" href="/en-us/cryptowatch">Learn more about Cryptowatch</a>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="kraken-component">
                  <div className="kraken-wayfinding">
                     <div className="kraken-content-wrapper">
                        <div className="wayfinder-header">
                           <h2><span><strong>Keep sailing the high seas of success!</strong> What’s next?</span></h2>
                        </div>
                     </div>
                     <div className="wayfinder-wrapper activate-current">
                        <div>
                           <a data-testid="site-link" className="wayfinding-card current" data-disabled="false" href="/en-us/why-kraken">
                              <p className="title">I'd like to learn more about why I should choose Kraken.</p>
                           </a>
                           <a data-testid="site-link" className="wayfinding-card" data-disabled="false" href="/en-us/features/fee-schedule">
                              <p className="title">I'm curious how much it will cost me to buy and sell cryptocurrency.</p>
                           </a>
                           <a data-testid="site-link" target="_blank" rel="noopener" className="wayfinding-card" data-disabled="false" href="/redirect?url=https%3A%2F%2Ftrade.kraken.com%2Fmarkets">
                              <p className="title">Show me live crypto prices and how the market's moving right now.</p>
                           </a>
                           <a data-testid="site-link" className="wayfinding-card" data-disabled="false" href="/sign-up">
                              <p className="title">I'm ready to try it out - Let's create my account.</p>
                           </a>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </article>
         <footer className="kraken-footer">
            <div className="kraken-content-wrapper">
               <div className="footer-menus">
                  <div className="footer-sign-in">
                     <p>Take your crypto to the next level with Kraken.</p>
                     <div className="signin-2"><a data-testid="site-link" className="kraken-cta" href="/sign-up">Sign Up</a><a data-testid="site-link" className="kraken-cta inverted" href="/sign-in">Sign In</a></div>
                  </div>
                  <ul className="footer-primary">
                     <li>
                        <span className="menu-title">Features</span>
                        <ul>
                           <li><a data-testid="site-link" href="/en-us/features/24-7-support">24/7 Support</a></li>
                           <li><a data-testid="site-link" href="/en-us/features/account-management">Account Management</a></li>
                           <li><a data-testid="site-link" href="/features/api">API</a></li>
                           <li><a data-testid="site-link" href="/en-us/features/security/bug-bounty">Bug Bounty</a></li>
                           <li><a data-testid="site-link" href="/en-us/features/fee-schedule">Fee Schedule</a></li>
                           <li><a data-testid="site-link" href="/en-us/features/funding-options">Funding Options</a></li>
                           <li><a data-testid="site-link" href="/en-us/features/futures">Futures</a></li>
                           <li><a data-testid="site-link" href="/en-us/features/indices">Indices</a></li>
                           <li><a data-testid="site-link" href="/en-us/features/liquidity">Liquidity</a></li>
                           <li><a data-testid="site-link" href="/en-us/features/margin-trading">Margin Trading</a></li>
                           <li><a data-testid="site-link" href="/en-us/features/otc-exchange">OTC</a></li>
                           <li><a data-testid="site-link" href="/en-us/features/security/pgp">PGP Key</a></li>
                           <li><a data-testid="site-link" href="/en-us/proof-of-reserves-audit">Proof of Reserves</a></li>
                           <li><a data-testid="site-link" href="/en-us/features/security">Security</a></li>
                           <li><a data-testid="site-link" href="/en-us/features/staking-coins">Staking</a></li>
                           <li><a data-testid="site-link" target="_blank" rel="noopener" href="/redirect?url=https%3A%2F%2Fsupport.kraken.com%2Fhc%2Fen-us">Support</a></li>
                           <li><a data-testid="site-link" target="_blank" rel="noopener" href="/redirect?url=https%3A%2F%2Fdocs.kraken.com%2Fwebsockets%2F">WebSockets</a></li>
                        </ul>
                     </li>
                     <li>
                        <span className="menu-title">Prices</span>
                        <ul>
                           <li><a data-testid="site-link" href="/en-us/cryptowatch">Cryptowatch</a></li>
                           <li><a data-testid="site-link" href="/prices">Prices Overview</a></li>
                        </ul>
                     </li>
                     <li>
                        <span className="menu-title">Learn</span>
                        <ul>
                           <li><a data-testid="site-link" target="_blank" rel="noopener" href="/redirect?url=https%3A%2F%2Fblog.kraken.com%2F">Blog</a></li>
                           <li><a data-testid="site-link" href="/en-us/learn/crypto-guides">Crypto Guides</a></li>
                           <li><a data-testid="site-link" href="/en-us/learn/videos">Videos</a></li>
                           <li><a data-testid="site-link" href="/en-us/learn/podcast">Podcast</a></li>
                           <li><a data-testid="site-link" href="/en-us/learn/buy-bitcoin-btc">How to Buy Bitcoin</a></li>
                           <li><a data-testid="site-link" href="/en-us/learn/buy-ripple-xrp">How to Buy Ripple</a></li>
                           <li><a data-testid="site-link" href="/en-us/learn/buy-ethereum-eth">How to Buy Ethereum</a></li>
                           <li><a data-testid="site-link" href="/en-us/learn/buy-bitcoin-cash-bch">How to Buy Bitcoin Cash</a></li>
                           <li><a data-testid="site-link" href="/en-us/learn/buy-litecoin-ltc">How to Buy Litecoin</a></li>
                           <li><a data-testid="site-link" href="/en-us/learn/buy-cardano-ada">How to Buy Cardano</a></li>
                           <li><a data-testid="site-link" href="/en-us/learn/buy-dogecoin-doge">How to Buy Dogecoin</a></li>
                           <li><a data-testid="site-link" href="/en-us/learn/buy-monero-xmr">How to Buy Monero</a></li>
                           <li><a data-testid="site-link" href="/en-us/learn/buy-polkadot-dot">How to Buy Polkadot</a></li>
                        </ul>
                     </li>
                     <li>
                        <span className="menu-title">About</span>
                        <ul>
                           <li><a data-testid="site-link" href="/en-us/why-kraken">Why Kraken</a></li>
                           <li><a data-testid="site-link" href="/en-us/features/cryptocurrency-apps">Mobile Apps</a></li>
                           <li><a data-testid="site-link" href="/en-us/institutions">Institutions</a></li>
                           <li><a data-testid="site-link" href="/en-us/careers">Careers</a></li>
                           <li><a data-testid="site-link" target="_blank" rel="noopener" href="/redirect?url=https%3A%2F%2Fsupport.kraken.com%2Fhc%2Fen-us%2Frequests%2Fnew">Contact</a></li>
                           <li><a data-testid="site-link" href="/en-us/press">Press</a></li>
                           <li><a data-testid="site-link" target="_blank" rel="noopener" href="/redirect?url=https%3A%2F%2Fsupport.kraken.com%2Fhc%2Fen-us%2Farticles%2F360027545252-Kraken-Affiliate-program">Affiliates</a></li>
                           <li><a data-testid="site-link" href="/en-us/features/grants">Grants</a></li>
                           <li><a data-testid="site-link" href="/en-us/bank">Kraken Bank</a></li>
                           <li><a data-testid="site-link" target="_blank" rel="noopener" href="/redirect?url=https%3A%2F%2Fstatus.kraken.com%2F">Status</a></li>
                        </ul>
                     </li>
                  </ul>
               </div>
               <div className="footer-bottom">
                  <div className="logo-wrapper"><a data-testid="site-link" className="footer-logo" href="/">Kraken</a></div>
                  <ul className="social-wrapper">
                     <li><a data-testid="site-link" target="_blank" rel="noopener" className="icon-facebook" data-social="Facebook" title="Facebook" href="/redirect?url=https%3A%2F%2Fwww.facebook.com%2FKrakenFX%2F"></a></li>
                     <li><a data-testid="site-link" target="_blank" rel="noopener" className="icon-twitter" data-social="Twitter" title="Twitter" href="/redirect?url=https%3A%2F%2Ftwitter.com%2Fkrakenfx"></a></li>
                     <li><a data-testid="site-link" target="_blank" rel="noopener" className="icon-linkedin" data-social="Linkedin" title="Linkedin" href="/redirect?url=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fkrakenfx%2F"></a></li>
                  </ul>
                  <div className="copyright-notice">
                     <p>© 2011 - 2021 Payward, Inc.</p>
                     <ul className="legal-links">
                        <li className="" data-testid="privacy-link-en-us-legal-privacy"><a data-testid="site-link" href="/en-us/legal/privacy">Privacy Notice</a></li>
                        <li className="" data-testid="privacy-link-en-us-legal"><a data-testid="site-link" href="/en-us/legal">Terms of Service</a></li>
                        <li className="" data-testid="privacy-link-en-us-legal-cookies"><a data-testid="site-link" href="/en-us/legal/cookies">Cookies Policy</a></li>
                        <li className="" data-testid="privacy-link-en-us-legal-disclosures"><a data-testid="site-link" href="/en-us/legal/disclosures">Disclosures</a></li>
                     </ul>
                  </div>
                  <div className="language-switcher-wrap">
                     <form>
                        <div className="current-language"><label htmlFor="curlang">Language</label></div>
                        <div className="switcher-menu">
                           <select id="curlang" data-testid="curlang">
                              {/* <option selected="" data-lang="en-us" value="en-us">U.S. English</option> */}
                              <option data-lang="en-gb" value="en-gb">British English</option>
                              <option data-lang="es-ES" value="es-es">Español</option>
                              <option data-lang="fil-PH" value="fil-ph">Filipino</option>
                              <option data-lang="fr-FR" value="fr-fr">Français</option>
                              <option data-lang="it-IT" value="it-it">Italiano</option>
                              <option data-lang="pt-BR" value="pt-br">Português</option>
                              <option data-lang="ru-RU" value="ru-ru">Русский</option>
                              <option data-lang="vi-VN" value="vi-vn">Tiếng Việt</option>
                              <option data-lang="tr-TR" value="tr-tr">Türkçe</option>
                              <option data-lang="uk-UA" value="uk-ua">Українська</option>
                              <option data-lang="zh-CN" value="zh-cn">中文</option>
                              <option data-lang="ja-jp" value="ja-jp">日本語</option>
                              <option data-lang="ko-KR" value="ko-kr">한국어</option>
                           </select>
                        </div>
                     </form>
                  </div>
               </div>
            </div>
         </footer>
         <div className="kraken-cookie-warning">
            <div className="warning-container">
               <div className="warning-text">We use cookies, okay?</div>
               <div className="warning-controls"><button className="kraken-cta accept">Accept</button><a className="kraken-cta reject" href="/legal/privacy/">Privacy Notice</a></div>
            </div>
         </div>
      </div>
   </div>
</div>


    )
}