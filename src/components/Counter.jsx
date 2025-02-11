import { useReducer } from "react"
import './css/Counter.css'
function Counter() {
    const initialState = {count:0}
    function reducer(state,action){
        switch(action.type){
            case "INCREMENT":
                return {count: state.count+1}
            case "DECREMENT":
                return {count: state.count-1}
            case "RESET":
                return {count: 0}
            default:
                return state;
        }
            
    }
    const [state,dispatch] = useReducer(reducer, initialState)
  return (
    <div className="main-container">
        <div className="counter-container">
            <h1>{state.count}</h1>
            <button onClick={()=>dispatch({type:"INCREMENT"})}>Increment</button>
            <button onClick={()=>dispatch( {type:"DECREMENT"})}>Decrement</button>
            <button onClick={()=>dispatch( {type:"RESET"})}>Reset</button>
        </div>
      
    </div>
  )
}

export default Counter
