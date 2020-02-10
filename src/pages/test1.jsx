import React, { Component } from 'react'
import {Button} from 'antd'
import {Aurl} from '../api'
export default class test1 extends Component {
    getTY(){
        Aurl.getList(1).then(r =>{
          console.log(r.data);
        }).catch(r =>{
          console.log(r)
        })
      }

    render() {
        return (
            <div>
                test1
                <Button type="primary" onClick={this.getTY}>服务其代理</Button>
            </div>
        )
    }
}
