//import "../assets/blockchain_layout.css";
import "../assets/blockchain_layout_test.css";
import "../assets/blockchain_layout_test.css";
export default function MinningBlock(){
    return (
      <div className="container-fluid">
            <ol className="breadcrumb">
            <li className="breadcrumb-item">
               <a href="index.html">Dashboard</a>
            </li>
            <li className="breadcrumb-item active">Blank Page</li>
            </ol> 
         <div className="container">
            <h1>Mine Blocks for Rewards</h1>
            <p>Current Mining Reward: 50 GymCoins </p>
            <h4>Pending Transactions:</h4>
            <table className="table">
               <thead className="thead-dark">
                  <tr>
                     <th scope="col">#</th>
                     <th scope="col">From</th>
                     <th scope="col">To</th>
                     <th scope="col">Amount</th>
                     <th scope="col">Timestamp</th>
                     <th scope="col">Valid?</th>
                  </tr>
               </thead>
               <tbody>
               </tbody>
            </table>
            <div className=""> 
               <a href="/login"><button type="button" className="btn btn-info">Sign in to mine blocks!</button></a>
            </div>
         </div>
      </div>
   ) 
}