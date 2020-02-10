
import { setUserInfo } from '../redux/actions/login'
class Base{
    getRoute(pages){
        let store=window.store
        let routes=[];
        pages.keys().forEach(i => {
        routes = routes.concat(pages(i).default)
        });
        return routes;
        //在base.js 里面调用store
        // let y={
        //     name:"但是",
        //     id:"1",
        //     token:"3"
        //   }
        //   store.dispatch(setUserInfo(y))
        
    }

    
}

export default Base;
