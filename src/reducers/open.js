import {OPEN_SCANWORD} from "../constants/actionTypes";

const INITIAL_STATE = []

const applyOpenScanword = (state, action) =>
    [...state, action.id]

function openReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case OPEN_SCANWORD: {
            return applyOpenScanword(state, action);
        }
        default:
            return state;
    }
}

export default openReducer;
