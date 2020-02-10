import React, { Component } from 'react'
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import '../App.css';
import { Route , Link, Switch,withRouter,Redirect   } from 'react-router-dom';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
// @withRouter


class Home extends Component {
    constructor(props){
        super(props)
        // console.log(props)
        //path 参数是为了显示路劲 刷新后不会重置
        //open 参数是为了显示打开的某一栏
        this.state={path:['/'],open:""}
    }
    componentWillMount(){
        //获取默认路径 并设置state
        console.log(this.props.history)
        let name=this.props.history.location.pathname+'';
        this.setState({path:[name] })
    }
    handClick(){
        // this.props.history.push({pathname:'/test2',query:{id:1}});
        this.props.history.push({ pathname : '/test2',query:{ aa: 'aa'} })
    }
    render() {
        return (
            <>
           
              <Layout className="conitar">
                <Header className="header">
                <div className="logo" />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    style={{ lineHeight: '64px' }}
                >
                    <Menu.Item key="1">nav 1</Menu.Item>
                    <Menu.Item key="2">nav 2</Menu.Item>
                    <Menu.Item key="3">nav 3</Menu.Item>
                </Menu>
                </Header>
                <Layout>
                <Sider width={200} style={{ background: '#fff' }}>
                    {/*   selectedKeys={[this.props.history.location.pathname]} */}
                    <Menu
                    mode="inline"
                    defaultSelectedKeys={this.state.path}
                    defaultOpenKeys={['sub1']}
                    style={{ height: '100%', borderRight: 0 }}
                    
                    >
                    <SubMenu
                        key="sub1"
                        title={
                        <span>
                            <Icon type="user" />
                            subnav 1
                        </span>
                        }
                    >
                        <Menu.Item key="/">
                           
                           <Link to="/">test1</Link>
                        </Menu.Item>
                        {/* <Menu.Item key="2"><Link to="/test2">test2</Link></Menu.Item>
                         handClick*/}
                         <Menu.Item key="/test2" onClick={this.handClick.bind(this)}>test2</Menu.Item>
                        <Menu.Item key="3">option3</Menu.Item>
                        <Menu.Item key="4">option4</Menu.Item>
                    </SubMenu>
                    <SubMenu
                        key="sub2"
                        title={
                        <span>
                            <Icon type="laptop" />
                            subnav 2
                        </span>
                        }
                    >
                        <Menu.Item key="5">option5</Menu.Item>
                        <Menu.Item key="6">option6</Menu.Item>
                        <Menu.Item key="7">option7</Menu.Item>
                        <Menu.Item key="8">option8</Menu.Item>
                    </SubMenu>
                    <SubMenu
                        key="sub3"
                        title={
                        <span>
                            <Icon type="notification" />
                            subnav 3
                        </span>
                        }
                    >
                        <Menu.Item key="9">option9</Menu.Item>
                        <Menu.Item key="10">option10</Menu.Item>
                        <Menu.Item key="11">option11</Menu.Item>
                        <Menu.Item key="12">option12</Menu.Item>
                    </SubMenu>
                    </Menu>
                </Sider>
                <Layout style={{ padding: '0 24px 24px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    <Content
                    style={{
                        background: '#fff',
                        padding: 24,
                        margin: 0,
                        minHeight: 280,
                    }}
                    >
                        <Switch>
                        {
                            this.props.route.map(route => (
                                <Route key={route.path} path={route.path} component={route.component}  exact={route.exact} />
                            ))
                        }
                        <Redirect from="*" to="/" />
                        {/* <Route component={ Error } /> */}
                    </Switch>
                    </Content>
                </Layout>
                </Layout>
            </Layout>  
            </>
        )
    }
}
// withRouter用于把不是通过路由切换过来的组件中，将react-router 的 history、location、match 三个对象传入props对象上
export default  withRouter(Home)