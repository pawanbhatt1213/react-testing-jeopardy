import { SET_CATEGORIES, SELECT_CATEGORIES } from './action.type';

export function setCategories(data){
    return {type: SET_CATEGORIES, payload: data};
}

export function setSelectedCategory(data){
    return {type: SELECT_CATEGORIES, payload: data};
}