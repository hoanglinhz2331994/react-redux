const mang1ReducerInitialState = ["man hinh","chuot","ban phim"]
const mang1Reducer = (state = mang1ReducerInitialState, action) => {
    switch (action.type) {
        case "ADD_NEW":
            // return {...state,mang1:[...state.mang1,"Tivi LCD"]}
            return [...state,action.newItem]
        case "DELETE":
            return state.filter((value,i)=> i !== action.delete)
        default:
            return state
    }
}
export default mang1Reducer;