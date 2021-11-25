import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, multiply } from "../Components/ComponentCss/ReduxTools/Actions";

function Products(){
    const counter = useSelector(state => state.counter); 
    const dispatch = useDispatch();
    function add(){
        dispatch(increment());
    }
    function remove(){
        dispatch(decrement());
    }
    function mult(){
        dispatch(multiply());
    }
    return(
        <div>
            <p>This is my products page..</p>
            <button onClick={add}>+</button>
            <p>Counter {counter} <button onClick={mult}>x2</button> </p>
            <button onClick={remove}>-</button>
            
        </div>
    )
}

export default Products;