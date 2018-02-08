import * as actionTypes from './actions';

const initialState = {
    //editando: false,
    // pulsado: false,
    // habemusIntentus: false,
    // cuantosDias: [],
    // endResult: [],
    cuantosNum: [] // conchas
    //valueInput: []  // mejillones

}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.EDITANDOCONCHA:
            const editaCuantosNum = [
                ...state.cuantosNum.slice(0, action.payloadPosicion),
                Object.assign({}, state.cuantosNum[action.payloadPosicion], { editando: true }),
                ...state.cuantosNum.slice(action.payloadPosicion + 1)
            ];
            return {
                ...state,
                cuantosNum: editaCuantosNum
            }
        case actionTypes.NOEDITANDOCONCHA:
            const noeditaCuantosNum = [
                ...state.cuantosNum.slice(0, action.payloadPosicion),
                Object.assign({}, state.cuantosNum[action.payloadPosicion], { editando: false }),
                ...state.cuantosNum.slice(action.payloadPosicion + 1)
            ];
            return {
                ...state,
                cuantosNum: noeditaCuantosNum
            }
        case actionTypes.NUEVACONCHA:
            return {
                ...state,
                cuantosNum: state.cuantosNum.concat({ id: new Date().valueOf(), editando: false, mejillones: 1 })
            }
        case actionTypes.ELIMINACONCHA:
            const eliminaCuantosNum = state.cuantosNum.filter(result => result.id !== action.payloadId);
            return {
                ...state,
                cuantosNum: eliminaCuantosNum
            }
        case actionTypes.SUMAMEJILLON:
            const sumaMejillon = [
                ...state.cuantosNum.slice(0, action.payloadPosicion),
                Object.assign({}, state.cuantosNum[action.payloadPosicion], { mejillones: state.cuantosNum[action.payloadPosicion].mejillones + 1 }),
                ...state.cuantosNum.slice(action.payloadPosicion + 1)
            ];
            return {
                ...state,
                cuantosNum: sumaMejillon
        }
        case actionTypes.RESTAMEJILLON:
            const restaMejillon = [
                ...state.cuantosNum.slice(0, action.payloadPosicion),
                Object.assign({}, state.cuantosNum[action.payloadPosicion], { mejillones: state.cuantosNum[action.payloadPosicion].mejillones - 1 }),
                ...state.cuantosNum.slice(action.payloadPosicion + 1)
            ];
            return {
                ...state,
                cuantosNum: restaMejillon
        }
        default:
            return state;
    }

    //return state;

};

export default reducer;

// dia: {
//     id_dia: [],
//     pruebas: {
//         conchas: [],
//         mejillones: [],
//         resultado: (res) => {
//             res = dia.pruebas.conchas - dia.pruebas.mejillones;
//             return res;}
//     },
//     resultado_dia: ""
// }