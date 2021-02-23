import './shop.css'
import React from 'react'
import {useState} from 'react'
const Order = () => {
    const [firstName,fnHandler] = useState('');
    const [lastName,lnHandler] = useState('');
    const [email,emHandler] = useState('');
    const [address,addHandler] = useState('');
    
    const checkBlank = (e) => {
        fnHandler(e.target.value);
    }
    const checkBlank1 = (e) => {
        lnHandler(e.target.value);
    }
    const checkBlank2 = (e) => {
        emHandler(e.target.value);
    }
    const checkBlank3 = (e) => {
        addHandler(e.target.value);
    }
    const check = () => {
        if(!firstName || !lastName || !email || !address) {
            alert("Fields should not be empty!")
        } else {
            alert("Order confirmed!")
        }

    }
    const refresh = () => {
        window.location.reload(false)
    }

    return (
        <div className="order">
          <form action="mailto:polopdoandres@gmail.com" method="POST">
              <h3>Fill up form</h3>
              First Name :<br></br><input type="text" name="First Name" onChange={checkBlank}/><br></br>
              Last Name :<br></br><input type="text" name="Last Name" onChange={checkBlank1} /><br></br>
              Email :<br></br><input type="email" name="Email" onChange={checkBlank2}/><br></br>
              
              Address :<br></br><input type="text" name="Address" onChange={checkBlank3}/><br></br>
              Contact Number :<br></br><input type="number" name="First Name"/><br></br>
              Payment Method :<br></br>
              Gcash/Paymaya :<input type="radio" name="payment" value="Gcash"/><br></br>
              Bank Deposit  <input type="radio" name="payment" value="Bank Deposit"/><br></br>
              Cash on Delivery :<input type="radio" name="payment" value="Cash on Delivery"/><br></br>
              <input type="submit" className="sub" onClick={check} value="Submit"/>
              <input type="button" className="sub" onClick={refresh} value="Cancel"/>
          </form>
        </div>
    )
}

export default Order
