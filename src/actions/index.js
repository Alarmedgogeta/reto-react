export const setActor = (payload) => ({
    type: 'SET_ACTOR',
    payload,
});

export const setLoading = (payload) => ({
    type: 'SET_LOADING',
    payload,
});

export const setError = (payload) => ({
    type: 'SET_ERROR',
    payload,
});

export const deserializeActor = (payload) => ({
    type: 'DESERIALIZE_ACTOR',
    payload,
});
