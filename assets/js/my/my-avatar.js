$(function(){
    // 实现裁剪基本初始化效果
    var $image= $('.cropper-box img')
    var options={
        // 纵横比
        aspectRatio:1,
        // 指定预览区域
        preview:'.img-preview'
    }
    $image.cropper(options)

    // 绑定上传图片按钮的点击事件
    $('#uploadImg').click(function(){
        // 点击上传按钮，但是要触发file标签的点击行为
        // trigger触发器
        $('#selectImg').trigger('click')
    })
    // 获取选中文件的信息
    $('#selectImg').change(function(e){
        // change事件触发条件：表单输入域内容发生变化时触发
        // 选中文件后触发该事件
        // 获取选中的文件信息
        var file=e.target.files[0]
        // 获取到文件后需要显示到左边图片区域
        // URL.createObjectURL():根据选中的文件生成一个预览URL地址
        var newImgURL=URL.createObjectURL(file)
        // 把地址更新到图片的src属性上即可
        // 1.先销毁旧的剪裁区域
        $image.cropper('destroy')
        // 2.更新图片地址
              .attr('src',newImgURL)
            //3.重新生成一份新的裁剪区
              .cropper(options)
    })

    // 点击确定按钮进行文件上传
    $('#okbtn').click(function(){
        // 获取裁剪后的图片信息
        var imgURL=$image.cropper('getCroppedCanvas',{
            width:100,
            height:100
        })
        // 生成一张图片
        .toDataURL('image/png')
        // 把图片地址上传到服务器
        $.ajax({
            type:'post',
            url:'my/update/avatar',
            data:{
                avatar:imgURL
            },
            success:function(res){
                if(res.status===0){
                    // 更新成功
                    layer.msg(res.message)
                }
            }
        })
    })
})