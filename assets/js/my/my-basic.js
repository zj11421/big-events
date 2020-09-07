$(function(){
    // 获取layui的form对象
    var form=layui.form
    // 调用接口加载用户信息
    function loadUserInfo(){
        $.ajax({
            type:'get',
            url:'my/userinfo',
            success:function(){
                // 把数据填充到表单
                // $('#form input[name=id]').val(res.data.id)
                // $('#form input[name=username]').val(res.data.username)
                // $('#form input[name=nickname]').val(res.data.nickname)
                // $('#form input[name=email]').val(res.data.email)
                // 基于layui填充表单
                form.val('basicForm',res.data)
            }
        })
    }
    loadUserInfo()
})