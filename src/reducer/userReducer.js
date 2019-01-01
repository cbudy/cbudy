const initial = {
    usern: '',
    pasw: '',
    nme: '',
    mail: '',
    confirmPasw: '',
    users: []
}
const userReducer = (state = initial, action) => {
    switch (action.type) {
        case "USERNAME":
            return {
                ...state,
                usern: action.payload,
            };
        case "EMAIL":
            return {
                ...state,
                mail: action.payload,
            };
        case "PASSWORD":
            return {
                ...state,
                pasw: action.payload,
            };
        case 'NAME':
            return {
                ...state,
                nme: action.payload,
            };
        case 'REGISTER':
            return {
                ...state,
                users: [...state.users, action.payload]
            };
        default:
            return state;
    }
};

export default userReducer;