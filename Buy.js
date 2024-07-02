import React from 'react'
import { useDispatch } from 'react-redux'
//import { bindActionCreators } from 'redux';
import actionCreators, { ActionCreators }  from './state/index'

export const Buy = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <h2>
        <button className=' btn btn-primary mx-2'onClick={()=>{dispatch(ActionCreators.withdrawMoney(100))}}>-</button>
        update bal
        <button className=' btn btn-primary mx-2'onClick={()=>{dispatch(ActionCreators.depositMoney(100))}}>+</button>
      </h2>
    </div>
  )
}
export default Buy
