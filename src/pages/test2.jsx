import React, { Component } from 'react'

export default class test2 extends Component {
    constructor(props){
        super(props);
        this.state={ }
    }
    componentWillMount(){
        var data = this.props.location.query;
        console.log(data)
    }
    render() {
        return (
            <div>
                test2
            </div>
        )
    }
}
