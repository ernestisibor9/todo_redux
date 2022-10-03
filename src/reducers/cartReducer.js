const initialData = {
  count: 0,
  firstName: "Andrew",
};

function cartReducer(state = initialData, action) {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        count: ++state.count,
      };
    case "MINUS":
      return {
        ...state,
        count: --state.count,
      };
    case "CHANGE_FIRSTNAME":
      return {
        ...state,
        firstName: action.payload,
      };
    default: {
      return state;
    }
  }
}

export default cartReducer;
