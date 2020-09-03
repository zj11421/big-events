$(function(){
    // 判断token是否存在
    localStorage.getItem('mytoken')
    if(!mytoken){
        location.href='./login.html'
    }
})