const initialState = {
    cart: []
}

export function cartReducer(state= initialState, action){
    switch(action.type){
        case "add_to_cart":
            console.log(state)
            return{
                cart:[...state.cart,{}]
            }

        case "remove_from_cart":
            return{

            }

        default:
            return state
    }

}

export default cartReducer;
