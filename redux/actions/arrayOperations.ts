import { PUSH } from "./actionTypes";

export const push =(data:Array<any>) =>({
    type:PUSH,
    payload:data
})
