export default function reducer(state = {
    data: {
        id: null,
        name: null
    },
    fetching: false,
    fetched: false,
    error: null
}, action) {
    switch (action.type) {
        case "FETCH_USER_PENDING": {
            return { ...state, fetching: true, fetched: false };
        }
        case "FETCH_USER_REJECTED": {
            return { ...state, data: { id: null, name: null }, fetching: false, fetched: false, error: action.payload };
        }
        case "FETCH_USER_FULFILLED": {
            return { ...state, data: action.payload, fetching: false, fetched: true, error: null };
        }
    }

    return state;
}