$(function(){
    // layui是全局对象，通过它得到form对象
    var form=layui.form
    // 基于layui自定义表单验证规则
    form.verify({
        // 必须是6-8位字符,不包括空格
        uname:[/^[\S]{6,8}$/, '用户名必须是6-8位字符'],
        //密码必须是6位数字
        pwd:function(value,item){
            var reg=/^\d{6}$/
            if(!reg.test(value)){
                return '密码必须是6位数字'
            }
        }
    })
    //控制表单元素
    $('.layui-form').submit(function(e){
        // 组织表单默认行为
        e.preventDefault()
        // 获取表单输入域的用户名和密码
        var formData=$(this).serialize()
        // 提交表单之前需要做表单验证，借助layui

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