const initialData = {
    course: []
}

function taskReducer(state = initialData, action) {
    switch(action.type){
        case "ADD_COURSE": return{
            ...state,
            course: [...state.course, action.payload]
        }
        case "DELETE_COURSE": return{
            ...state,
            course: state.course.filter((courses)=> courses !== action.payload)
        }
        case "EDIT_COURSE": return{
            ...state,
            course: state.course.map((courses)=>{
                if(courses === action.payload.oldtask)
                courses = action.payload.newtask
                return courses
            })
        }
        default : {
            return state
        }
    }
}

export default taskReducer