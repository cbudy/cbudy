const initial = {
    loged: {}, 
}
const userDataReducer = (state = initial, action) => {
    switch (action.type) {
        case "LOGED":
            return {
                ...state,
                loged: action.payload,
            }; 
        default:
            return state;
    }
};

export default userDataReducer;