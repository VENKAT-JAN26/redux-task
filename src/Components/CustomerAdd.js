import React, { useState } from "react";
import { addCustomer as addCustomerAction } from "../Slices/CustomerSlice";
import { useDispatch } from "react-redux";

const CustomerAdd = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  //      const [customers, setCustomers]= useState([])

  function addCustomer() {
    if (input) {
      // setCustomers((previousState)=>[...previousState,input])
      dispatch(addCustomerAction(input));
      setInput("");
    }
  }

  return (
    <>
      <div style={{ textAlign: "center" }}>
        
        <h3 style={{ color:'Blue',}}> Add New Customer</h3>
        
        
        <input
          type="text"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <button style={{backgroundColor:'Blue', color:'white',padding:'3px', borderRadius:'4px',marginLeft: '10px' }} onClick={addCustomer}> Add</button>
      </div>
    </>
  );
};

export default CustomerAdd;
