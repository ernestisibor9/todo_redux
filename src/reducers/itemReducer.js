const initialData = {
    tasks: ["Java", "PHP", "WordPress"]
}

function itemReducer(state = initialData, action) {
    // State
    switch(action.type){
        case "ADD_ITEM": return{
            ...state,
            tasks: [...state.tasks, action.payload]
        }
        default : {
            return state
        }
    }
}

export default itemReducer