const proxy = require('http-proxy-middleware')
 
module.exports = function(app) {

  app.use(proxy('/api', 
    {
        target: "https://jsonplaceholder.typicode.com",//目标服务器
        secure: true,//如果是https接口 需要配置这个参数为true
        changeOrigin: true,//默认false，是否需要改变原始主机头为目标URL
        pathRewrite: {
          "^/api": ""// 重写请求，比如我们源访问的是api，那么请求会被解析为/
        }
    }))
    
    //app.use(proxy(...)) //可以配置多个代理
}