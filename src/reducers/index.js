import { normalize } from 'normalizr';
import { actor } from '../normalizr/schemas';

const reducer = (state, action) => {
    let normalizedData;
    switch (action.type) {
        case 'DESERIALIZE_ACTOR':
            normalizedData = normalize(action.payload, actor);
            return {
                ...state,
                ...normalizedData.entities,
                current_actor_id: normalizedData.result,
            };
        case 'SET_ACTOR':
            return {
                ...state,
                actor: action.payload,
            };
        case 'SET_MOVIES':
            return {
                state,
                movies: action.payload,
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
