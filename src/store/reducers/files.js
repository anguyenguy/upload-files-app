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
        default :
            return {
                state
            }
    }
};

export default reducer;