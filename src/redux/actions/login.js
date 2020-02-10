import  actionTypes  from './actionType'

export const setUserInfo =(info) =>{
    return {
        type:actionTypes.SAVEUSERINFO,
        info:info
    }
}
//redux Action 异步
export const setUserInfoAsync = info => dispatch =>{
    setTimeout(() =>{
        dispatch(setUserInfo(info))
    },100)
}



