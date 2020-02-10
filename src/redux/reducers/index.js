//将多个redurce 合并成一个
import  {combineReducers} from  'redux'
import login from './login'

//导出redurce 并合并
export default combineReducers({
    login
})