const dataInitial = {
    array: [],
}

export default function charactersReducer (state = dataInitial, {type, payload}) {
    switch (type) {
        case 'NADA_PRUEBA':
            return state;
        default:
            return state
    }
}