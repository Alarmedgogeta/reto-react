const reducer = (state, action) => {

    switch (action.type) {
        case 'SET_ACTOR':
            return {
                ...state,
                actor: action.payload,
            };
        case 'SET_LOADING':
            return {
                ...state,
                loading: action.payload,
            };
        case 'SET_ERROR':
            return {
                ...state,
                error: action.payload,
            };
        default:
            return state;
    }

};

export default reducer;
