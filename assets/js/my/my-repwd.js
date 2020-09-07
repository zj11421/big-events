$(function(){
    // 处理表单验证
    var form=layui.form
    // 自定义验证规则
    // 1.新密码和原来密码不一样
    // 2.确认密码必须一致
    form.verify({
        diff:function(value){
            // 密码和原来密码不一样
            // 获取原来密码
            var oldPwd=$('#form input[name=oldPwd]').val()
            if(oldPwd===value){
                return '新密码不能与原密码相同'
            }
        },
        same:function(){
             // 获取原来密码
             var oldPwd=$('#form input[name=newPwd]').val()
             if(newPwd!==value){
                 return '两次输入的密码不相同'
             }
        }
    })
    // 控制表单提交
    $('#form').submit(function(e){
        e.preventDefault()
        // 获取表单数据
        var fd=$(this).serialize()
        // 调用接口修改密码
        $.ajax({
            type:'post',
            url:'my/updatepwd',
            data:fd,
            success:function(res){
                if(res.status===0){
                    layer.msg(res.message)
                }else{
                    layer.msg(res.message)
                }
            }
        })
    })
})