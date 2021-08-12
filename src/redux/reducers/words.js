import {
    GET_WORD_SUCCESS,
    GET_WORD_FAILED,
    GET_WORDS_SUCCESS,
    GET_WORDS_FAILED,
    POST_WORD_SUCCESS,
    POST_WORD_FAILED,
    DELETE_WORD_SUCCESS,
    DELETE_WORD_FAILED
} from '../types'

const initialState = {
    currentWord: "",
    testAnswers: [],
};


const wordsReducer = (state= initialState, action) => {

    // console.log("state", state);

    switch (action.type) {
        case GET_WORD_SUCCESS :
            return {
                ...state,
                currentWord: action.payload
            }
        case GET_WORD_FAILED :
            return {
                currentWord: action.payload,
                testAnswers: "no answers"
            }

        case GET_WORDS_SUCCESS :
            return {
                ...state,
                testAnswers: action.payload
            }
        case GET_WORDS_FAILED :
            return {
                currentWord: "no words",
                testAnswers: "no answers"
            }
        case POST_WORD_SUCCESS :
        case POST_WORD_FAILED :
        case DELETE_WORD_SUCCESS :
        case DELETE_WORD_FAILED :
        default:
            return state;
    }
};

export default wordsReducer;