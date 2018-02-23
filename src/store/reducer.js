import * as actionTypes from './actions';

const initialState = {
    cuantosDias: [],
    resultadoFinal: [],
    cuantosNum: [] 
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
                cuantosNum: state.cuantosNum.concat({ id: new Date().valueOf(), editando: false, mejillones: 1, dia: action.payloadDia })
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
        case actionTypes.NUEVORESULTADO:
            return {
                ...state,
                resultadoFinal: state.resultadoFinal.concat(action.payloadResultado)
            }
        case actionTypes.NUEVODIA:
            return {
                ...state,
                cuantosDias: state.cuantosDias.concat(action.payloadTexto)
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