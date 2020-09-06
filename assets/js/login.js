$(function(){
    // layui是全局对象，通过它得到form对象
    var form=layui.form
    // 基于layui自定义表单验证规则
    form.verify({
        // 必须是6-8位字符,不包括空格
        uname:[/^[\S]{6,8}$/, '用户名必须是6-8位字符'],
        //密码必须是6位数字
        pwd:function(value,item){
            // 形参value表示对应输入域的值
            // item表示DOM元素
            // 验证6位数字
            var reg=/^\d{6}$/
            if(!reg.test(value)){
                return '密码必须是6位数字'
            }
        },
        // 验证确认密码和原油密码一致
        same:function(value){
            // 获取原始密码
            var pwd=$('#registerForm input[type=password]').val()
            if(pwd!==value){
                return '两次输入的密码必须一致'
            }
        }
    })
    //控制登陆表单元素
    $('#loginForm').submit(function(e){
        // 组织表单默认行为
        e.preventDefault()
        // 获取表单输入域的用户名和密码
        var formData=$(this).serialize()
        // 提交表单之前需要做表单验证，借助layui

        // 调用后台接口
        $.ajax({
            type:'post',
            url:'api/login',
            data:formData,
            success:function(res){
                // console.log(res)
                // 登录成功后，跳转到主页面
                if(res.status===0){
                    // 把登陆成功的标志存储在客户端
                    localStorage.setItem('mytoken',res.token)
                    location.href='./index.html'
                }
            }
        })
    })

    // 控制注册表单的提交
    $('#registerForm').submit(function(e){
        e.preventDefault()
        // 获取表单数据(表单输入域必须提供name属性，值必须和接口文档一致)
        var formData=$(this).serialize()
        // 调用接口进行注册
        $.ajax({
            type:'post',
            url:'api/reguser',
            data:formData,
            success:function(res){
                if(res.status===0){
                    // 注册成功，显示登陆框
                    $('#registerForm a').click()
                }else{
                    // 注册失败
                    // alert(res.message)
                    layer.msg(res.message);
                }
            }
        })
    })

    // 登录表单的底部链接
    $('#loginForm a').click(function(){
        $('#loginForm').hide()
        $('#registerForm').show()
    })
    // 注册表单的底部链接
    $('#registerForm a').click(function(){
        // 点击后切换表单的现实和隐藏
        $('#loginForm').show()
        $('#registerForm').hide()
    })
})