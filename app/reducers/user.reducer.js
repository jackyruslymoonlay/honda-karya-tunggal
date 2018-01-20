export default function reducer(state = {
    data: {
        id: null,
        name: null
    },
    fetching: false,
    fetched: false,
    error: null
}, action) {
    let newState = Object.assign({}, state);

    switch (action.type) {
        case "FETCH_USER_PENDING": {
            newState.fetching = true;
            newState.fetched = false;
            break;
        }
        case "FETCH_USER_REJECTED": {
            newState.data = {
                id: null,
                name: null
            };
            newState.fetching = false;
            newState.fetched = false;
            newState.error = action.payload;
            break;
        }
        case "FETCH_USER_FULFILLED": {
            newState.data = action.payload;
            newState.fetching = false;
            newState.fetched = true;
            newState.error = null;
            break;
        }
    }

    return newState;
}