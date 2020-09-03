$(function(){
    // 判断token是否存在
    localStorage.getItem('mytoken')
    if(!mytoken){
        // token不存在，跳转到登陆页面
        location.href='./login.html'
    }
})