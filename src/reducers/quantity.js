import {
    INCREASECART,
    DECREASECART, UPDATECART
} from '../actions'

export default (state = 0, action) => {
    switch (action.type) {
        case INCREASECART :
            return state + 1;
        case DECREASECART :
            return state - 1;
        case UPDATECART :
            return state;
    }


    return state;
}
