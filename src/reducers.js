import {INPUT_IMAGE_URL} from './constants';

const initialState = {
    inputText:''
}

export const onInputChange = (state=initialState, action={}) =>{
        console.log('reducers', action.payload)
        switch(action.type){
            case INPUT_IMAGE_URL:
                return Object.assign({}, state, {inputText:action.payload});
            default :
                return state;
        }
}
