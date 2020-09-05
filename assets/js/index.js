$(function(){
    // 判断token是否存在
    localStorage.getItem('mytoken')
    if(!mytoken){
        // token不存在，跳转到登陆页面
        location.href='./login.html'
    }
    // 首页加载时需要调用后台接口获取用户信息
    function loadUserInfo(){
        $.ajax({
            type:'get',
            url:'http://ajax.frontend.itheima.net/my/userinfo',
            headers:{
                Authorization:localStorage.getItem('mytoken')
            },
            success:function(res){
                //获取用户信息
                // 先判断状态
                if(res.status===0){
                    var info=res.data
                    // 把用户信息填充到指定位置
                    $('#welcome-username').html(info.username)
                    $('#nav-username').html(info.username)
                    // 填充头像信息
                    if(info.user_pic){
                        // 存在头像数据
                    }
                }
            }
        })
    }
    loadUserInfo()
})