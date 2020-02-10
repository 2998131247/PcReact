import './App.css';
import React, { Component } from 'react'
import {Aurl} from './api'
import Home from './pages/home'
import {BrowserRouter as Router   } from 'react-router-dom';
import { setUserInfo } from './redux/actions/login'
import {connect} from 'react-redux'
const pages=require.context('./pages', true, /.router.js$/)


 class App extends Component {
  constructor(props){
    super(props);
    this.state = {route: []};
  }
  componentWillMount(){
   let routes=[];
    pages.keys().forEach(i => {
      routes = routes.concat(pages(i).default)
    });
    this.setState({
      route:routes
    });
    console.log(window.store.getState())
    // this.props.setUserInfo(y);
  }

   getTY(){
     Aurl.getList(1).then(r =>{
       console.log(r.data);
     }).catch(r =>{
       console.log(r)
     })
   }
  render() {
    return (
      /* 
       <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Button type="primary" onClick={this.getTY}>服务其代理</Button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
      
      **/
     <>
     <Router>
        <Home route={this.props.routes}  />
     </Router>
      
     </>
    )
  }
}

const mapState = (state) =>{
  // console.log(state)
  return{
      App:state.login
  }
}



export default  connect(mapState,{setUserInfo})(App);
