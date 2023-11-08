import { CHANGE_THEME } from "./actionType"

const initialState ={
  themeDark:false
}

export const reducer = (state=initialState,{type,payload})=>{

    switch(type){
        case CHANGE_THEME:
            return {themeDark:payload}
            default : return state
    }
}