import * as actionTypes from './actions';

const initialState = {
    editando: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.EDITANDO:
            return {
                ...state,
                editando: state.editando = true
            }
            case actionTypes.NOEDITANDO:
            return {
                ...state,
                editando: state.editando = false
            }
    }
  
    return state;

};

export default reducer;