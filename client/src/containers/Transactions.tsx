//import "../assets/blockchain_layout.css";
import "../assets/blockchain_layout_test.css";
export default function Transactions(){
    return (
      <div className="container-fluid">
         <h1>Create a Secure Transaction</h1>
         <p>Transfer some money to someone!</p>
         <form method="POST" action="">
            <input id="csrf_token" name="csrf_token" type="hidden" value="IjMxNDQyOTRiOTc1NTAwY2EyOTNmN2NmMjgwNmE1OGUzZTBkYzY3ZDYi.YHEnHg.MudmwEY-zeNvKBe8WHmnTu8IFys"/>
            <div className="form-group">
               <label htmlFor="sender">Sender:</label>
               <input className="form-control form-control-lg" id="dummy" name="dummy" type="text" value=""/>
               <small id="fromAddressHelp" className="form-text text-muted">
               This is your username, and funds will come from wallet address. Each transaction is verified by a crypto hash signature!
               </small>
            </div>
            <div className="form-group">
               <label htmlFor="reciever">Reciever:</label>
               <input className="form-control form-control-lg" id="reciever" name="reciever" type="text" value=""/>
               <small id="fromAddressHelp" className="form-text text-muted">
               Enter in the username of who you want the crytocurrency to go to!
               </small>
            </div>
            <div className="form-group">
               <label htmlFor="amount">Amount:</label>
               <input className="form-control form-control-lg" id="amount" name="amount" type="text" value=""/>
            </div>
            <div className="form-group">
               <input className="btn btn-info btn-block" id="submit" name="submit" type="submit" value="Sign in to make a transaction!"/>
            </div>
         </form>
      </div>
   ) 
}