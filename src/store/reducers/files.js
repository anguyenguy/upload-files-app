import * as actionTypes from '../action';

const initialState = {
    files: []
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.UPLOADFILE:
            return {
                ...state,
                files: state.files.concat({id: new Date(), file: action.file})
            }
        // case actionTypes.DELETE_RESULT:
        //     // const id = 2;
        //     // const newArray = [...state.results];
        //     // newArray.splice(id, 1)
        //     const updatedArray = state.results.filter(result => result.id !== action.resultElId);
        //     return {
        //         ...state,
        //         results: updatedArray
        //     }
    }
    return state;
};

export default reducer;