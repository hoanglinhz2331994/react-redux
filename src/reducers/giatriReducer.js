const giatriReducerInitialState = true
const giatriReducer = (state = giatriReducerInitialState, action) => {
    switch (action.type) {
        case "CHANGE_EDIT_STATUS":
            return !state
        default:
            return state
    }
}
export default giatriReducer;