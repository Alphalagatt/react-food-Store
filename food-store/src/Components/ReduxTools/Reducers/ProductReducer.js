
export default function ProductReducer(ListOfProducts=[],action){
    switch (action.type) {
        case 'ADD_PRODUCT':
            return [...ListOfProducts,action.payload];
    
        case 'DELETE_PRODUCT':
            return ListOfProducts.filter(Prod => Prod.id !== action.payload.id)
        
        default:
            return ListOfProducts;
    }
}
