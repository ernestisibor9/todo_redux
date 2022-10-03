const initialData = {
    count: 10,
    cart: ["Love me"]
}


function numberCount(state = initialData, action) {
    switch(action.type){
        case "ADD_NUM": return{
            count: ++state.count
        }
        case "SUB_NUM": return{
            count: --state.count
        }
        case "ADD_CART": return{
            ...state,
            cart: [...state.cart, action.payload]
        }
        default:{
            return state
        }
    }
}

export default numberCount
