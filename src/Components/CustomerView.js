import React from "react";
import{useDispatch, useSelector} from 'react-redux'
import{deleteCustomer} from '../Slices/CustomerSlice'



const CustomerView = () => {
    const dispatch =useDispatch();
    const customers =  useSelector((state)=>state.customers )
 
    function deleteHandler(index){
          dispatch(deleteCustomer(index))
    }
  
  return (
    <div style={{textAlign:'center'}}>
      <h3 > Customer List</h3>
       <ul style={{listStyle:'none'}}>
        {customers.map((customer,index) => 
          (<li key={index}>{customer}
          <button onClick={()=>deleteHandler(index)}>Delete</button>
          </li> ))}
      </ul> 
    </div>
  );
};

export default CustomerView;


