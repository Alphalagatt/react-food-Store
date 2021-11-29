import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddProduct, DeleteProduct, } from "../Components/ReduxTools/Actions";

function Products(){

    const idRef = useRef();
    const prodNameRef = useRef();
    const myProducts = useSelector(prod=>prod.products);
    const dispatch = useDispatch();

    function addProdHandler(){
        dispatch(AddProduct(idRef.current.value,prodNameRef.current.value)); 
    }
    

    return <div>
        <h1>This is my products page..</h1>
        <p>Add a product here</p>
        <label htmlFor='id'>Product Id:</label>
        <input type='text' ref={idRef} id='id' />
        <label htmlFor='name'>Product Name:</label>
        <input type = 'text' ref={prodNameRef} id='name'/>
        <button onClick={addProdHandler} >Add Product</button>

        <div>
            <ul>
                {myProducts.map(prod => {
                    return<li>{prod.id}  {prod.prodName} <button onClick = {deleteProd}>Delete Product</button></li>

                    function deleteProd(){
                        dispatch(DeleteProduct(prod.id));
                    }
                })}
            </ul>
        </div>
        </div>
}

export default Products;