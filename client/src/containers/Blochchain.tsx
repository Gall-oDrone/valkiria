import "../assets/blockchain_layout_test.css";
import "../assets/blockchain_layout_test.css";
export default function Blockchain(){
               <>
                  <h1>Current Verified Blockchain</h1>
                  <p>Backed by decentralized nodes.</p>
                  <div className="container">
                     <div className="card-columns" inline-block="">
                        <div className="card border-primary mb-3" style={{width: "16rem"}}>
                           <div className="card-body">
                              <h5 className="card-title">Block<small className="text-muted">(1)</small></h5>
                           </div>
                           <ul className="list-group list-group-flush">
                              <li className="list-group-item">
                                 <span className="">Hash</span>
                                 <br/>
                                 <div className="text-truncate">
                                    <small>0e8eb280adc09e9e22da</small>
                                 </div>
                              </li>
                              <li className="list-group-item">
                                 <span className="">Hash of previous block</span>
                                 <br/>
                                 <div className="text-truncate">
                                    <small>None</small>
                                 </div>
                              </li>
                              <li className="list-group-item">
                                 <span className="">Timestamp</span><br/>
                                 <div className="text-truncate text-muted">
                                    <small>04/08/2021, 21:56:37</small>
                                 </div>
                              </li>
                              <li className="list-group-item">
                                 <button className="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapse1" aria-expanded="false" aria-controls="collapse">
                                 View Transactions
                                 </button>
                              </li>
                              <li className="list-group-item">
                                 <div className="collapse" id="collapse1">
                                    <span className="">No Transactions</span>
                                 </div>
                              </li>
                           </ul>
                        </div>
                     </div>
                  </div>
               </>
            
}