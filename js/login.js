// 密码登录
$('.m_login').click(function(){
    $('.form1').css('display','block');
    $('.form2').css('display','none');
    $('.m_login').css('border-bottom','2px solid #000');
});
$('.msg_login').click(function(){
    $('.form1').css('display','none');
    $('.form2').css('display','block');
    $('.msgs_login').css('border-bottom','2px solid #000')
});
//下拉菜单（电话国际编号）////
  $('.p_num').click(function(){
      $('.pho_num').css('display','block');
  })
  $('.pho_num li').click(function(){
      $('.p_num').html('+' + $(this).val());
      $('.pho_num').css('display','none');
  })
  //iconfont点击
  $('.pc_e').click(function(){
      $('.bottom2').css('display','block');
      $('.bottom').css('display','none');
  })
  $('.pc_c').click(function(){
    $('.bottom').css('display','block');
    $('.bottom2').css('display','none');
})
//点击登录跳转页面
// form1
$('#login').click(function(){
    $.ajax({
        url:"../json/login.json",
        data:{
            username:$('#username').val(),
            password:$('#password').val()
        },
        dataType:"json",
        success:function(res){
            if (res.code == 1) {
                if (/^\w{2,4}/.test($('#username').val())) {
                    if (/^[\w~!@#\$%\^&*\.]{6,12}$/.test($('#password').val())) {
                        // 登录成功，信息添加到本地存储
                        localStorage.setItem('name', $('#username').val());
                        localStorage.setItem('password', $('#password').val());
                        location.href = "../index.html"
                    } else {
                        $('#password').next().html('密码有误');
                    }
                } else {
                    $('#username').val('用户名有误！请重新输入')
                }
            }
        }
    });
});
// form2
$('#_login').click(function(){
    $.ajax({
        url:"../json/login.json",
        data:{
            username:$('._username_').val(),
            password:$('.pwd_').val()
        },
        dataType:"json",
        success:function(res){
            if (res.code == 1) {
                if (/^\w{6,11}/.test($('#username').val())) {
                    // 登录成功，信息添加到本地存储
                    localStorage.setItem('name', $('._username_').val());
                    localStorage.setItem('password', $('._pwd_').val());
                    location.href = "../index.html"
                } else {
                    $('._username_').val('用户名有误！请重新输入')
                }
            }
        }
    });
});