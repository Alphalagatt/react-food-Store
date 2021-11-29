export const AddProduct = (id,prodName) => {
    return {
        type:'ADD_PRODUCT',
        payload:{
            id:id,
            prodName:prodName
        }
    }
}

export const DeleteProduct = (id) => {
    return {
        type:'DELETE_PRODUCT',
        payload:{
            id:id,
        }
    }
}

export const SignUp = (id,fullname,email,password)=>{
    return{
        type:'SIGN_UP',
        payload:{
            id:id,
            fullName:fullname,
            email:email,
            password:password,
        }
    }
}
export const SignIn = (email,password)=>{
    return{
        type:'SIGN_IN',
        payload:{
            email:email,
            password:password,
        }
    }
}



