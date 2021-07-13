import { PUSH } from "../actions/actionTypes";

const initialState={
    historyData:[]
};

export const arrayReducer=(state=initialState, action:any)=>{
    switch(action.type){
        case PUSH:
            if(state.historyData.length === 0 ){
                return {...state, historyData: [action.payload, ...state.historyData]};
            }
            let idAlreadyExists = state.historyData.findIndex(( item:any ) =>  item.character === action.payload.character);
            if(idAlreadyExists === -1){
                return {...state, historyData: [ ...state.historyData,action.payload]};
            }else{
                return state;
            }
        default:
            return state;            
    }
}