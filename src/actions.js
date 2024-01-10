import {INPUT_IMAGE_URL} from './constants';

export const setInputField = (text) =>{
    console.log('action', text);
    return({
        type:INPUT_IMAGE_URL,
        payload:text
    })
}