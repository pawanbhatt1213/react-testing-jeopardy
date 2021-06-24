import { SET_CATEGORIES, SELECT_CATEGORIES } from '../actions/action.type';

export default function categoryReducer(state={categories:[], selectedCategory: null}, action){
    switch(action.type) {
        case SET_CATEGORIES:
            return {...state, categories:action.payload};
        case SELECT_CATEGORIES:
            return {...state, selectedCategory:action.payload};
        default: 
            return {...state};
    }
}