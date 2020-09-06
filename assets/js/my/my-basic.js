$(function(){
    // 调用接口加载用户信息
    function loadUserInfo(){
        $.ajax({
            type:'get',
            url:'my/userinfo',
            success:function(){
                // 把数据填充到表单
                // $('#form input[name=id]').val(res.data.id)
                $('#form input[name=username]').val(res.data.username)
                $('#form input[name=nickname]').val(res.data.nickname)
                $('#form input[name=email]').val(res.data.email)
            }
        })
    }
    loadUserInfo()
})