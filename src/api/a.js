import http from "../until/request"

export default {
    getList(id){
        return http.get(`/todos/${id}`);
    }
    //get 
    /***
     * 
     getA(params){
        return http.get('xxx',{params:params})
    }

    postA(params = {}){
        return http.get('xxx',params)
    }
     * 
     */
    
}
