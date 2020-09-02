$(function(){
    //控制表单元素
    $('.layui-form').submit(function(e){
        // 组织表单默认行为
        e.preventDefault()
        // 获取表单输入域的用户名和密码
        var formData=$(this).serialize()
        // 调用后台接口
        $.ajax({
            type:'post',
            url:'http://ajax.frontend.itheima.net/api/login',
            data:formData,
            success:function(res){
                // console.log(res)
                // 登录成功后，跳转到主页面
                if(res.status===0){
                    location.href='./index.html'
                }
            }
        })
    })
})