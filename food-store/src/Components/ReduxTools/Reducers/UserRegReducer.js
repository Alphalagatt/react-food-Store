function UserRegReducer(ListOfUsers=[],action){
    switch (action.type) {
        case 'SIGN_UP':
            return [...ListOfUsers,action.payload];
        case 'SIGN_IN':
            return ListOfUsers.filter(user=>user.email === action.payload.email && user.password === action.payload.password);
        default:
            return ListOfUsers;
    }
}

export default UserRegReducer;