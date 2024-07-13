import { COLORCHANGED, STATUSCHANGED } from "./actionTypes"

export const statusChanged = (status) =>{
    return {
      type: STATUSCHANGED,
      payload: status,
    };
}

export const colorChanged =(changeType,color)=>{
    return{
        type: COLORCHANGED,
        payload: {
            changeType,
            color
        }
    }
}