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
                // basicForm是form标签的lay-filter属性值，用于表单数据填充
                form.val('basicForm',res.data)
            }
        })
    }
    loadUserInfo()

    // 控制表单提交
    $('#form').submit(function(e){
        e.preventDefalut()
        // 需要删除username,需要id,值由隐藏域提供
        // serializeArray得到表单的所有数据,返回值fd是数组
        var fd=$(this).serializeArray()
        // 从数组中删除一个元素
        // 1.先找到元素索引，然后根据索引删除
        // 2.使用数组filter方法
        fd=fd.filter(function(item){
            // 属性名称不是username的过滤出来
            return item.name!=='username'
        })
    })
})