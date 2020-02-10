import actionTypes from "../actions/actionType"

const user={
    name:"游客",
    id:"",
    token:"0"
}

export default (state = user, action) =>{
        switch(action.type){
            case actionTypes.SAVEUSERINFO:
                return action.info;
            default:
                return state
        }
}












