// 通用的接口调用设置
var baseURL='http://ajax.frontend.itheima.net/'
$.ajaxPrefilter(function(option){
    // 行参option是jQuery请求方法的配置信息
    // 1.配置通用的url地址
    option.url=baseURL+option.url
    // 2.设置接口的请求头信息
    if(option.url.lastIndexOf('/my')!==-1){
        // 所以包含my的请求路径需要进行权限验证
        // headers默认不存在，所以需要设置一个对象
        option.headers={
            Authorization:localStorage.getItem('mytoken')
        }
    }
    // 3.设置通用的异常情况
    // 服务器响应结束时触发
    option.complete=function(res){
        // 处理失败的情况
        if(res.responseJSON.status===1&&res.responseJSON.message==='身份认证失败！'){
            // 删除无效token
            localStorage.removeItem('mytoken')
            // 身份验证失败，跳转到登陆页面
            location.href='./login.html'
        }
    }
})