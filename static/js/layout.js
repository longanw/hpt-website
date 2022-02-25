$(function () {
    //返回顶部
    $('.to-top').on('click', function () {
        $('html,body').stop().animate({
            'scrollTop': 0
        }, 200); //数字动画开始于离页面底部的距离
    });
    //数字滚动效果
    function numscroll(e) {
        var i = e.parents("div").offset().top,
            t = e.attr("bolExec");
        $(document).scrollTop() > i - 3 * $(window).height() / 4 && !t && (! function () {
            e.text(e.text().replace(".", ""));
            var i = 0,
                t = e.text() - 0,
                n = (t + "").length,
                s = setInterval(function () {
                    i++;
                    for (var o = parseInt(t / 100 * i), a = "", l = 0; l < n - (o + "").length; l++) a += 0;
                    e.text(a + o);
                    if (i >= 100) {
                        e.text(e.attr("rel"));
                        clearInterval(s)
                    }
                }, 50); //动画时长
        }(), e.attr("bolExec", !0))
    }
    /*统一固定高度*/
    //页面滚动
    function winScroll() {
        var t_top = $(window).scrollTop();
        $(".num").each(function (i) {
            var wrapTop = $(this).offset().top;
            if (t_top > wrapTop - 800) {
                numscroll($(this));
            }
        });
    }
    $(window).on('scroll', function () {
        winScroll();
    });

});

//表单验证并发送至指定邮箱
//当用户名失去焦点时
function blur_fullname() {
    var user_value = document.getElementsByName("fullname")[0].value;
    if (user_value.length === 0) {
        document.getElementById("user_res").innerHTML = "<font color='#f00'>您没有输入姓名</font>";
        return false;
    } else if ($.trim(user_value).length < 2) {
        document.getElementById("user_res").innerHTML = "<font color='#f00'>姓名不少于两个字</font>";
        return false;
    } else {
        document.getElementById("user_res").innerHTML = "<font color='#00f'>OK</font>";
        return true;
    }
}

//手机号码失去焦点时
function blur_phone() {
    var user_value = document.getElementsByName("phone")[0].value;
    var pattern = /^1[3456789]\d{9}$/; //验证手机号正则表达式
    if (user_value.length === 0) {
        document.getElementById("phone_res").innerHTML = "<font color='#f00'>您没有输入手机号码</font>";
        return false;
    } else if (!pattern.test(user_value)) {
        document.getElementById("phone_res").innerHTML = "<font color='#f00'>手机号码有误，请核对</font>";
        return false;
    } else {
        document.getElementById("phone_res").innerHTML = "<font color='#00f'>OK</font>";
        return true;
    }
}

//电子邮箱失去焦点时
function blur_email() {
    var user_value = document.getElementsByName("email")[0].value;
    var pattern = /^\S+@\S+\.\S+$/; //验证电子邮箱正则表达式
    if (user_value.length === 0) {
        document.getElementById("email_res").innerHTML = "<font color='#f00'>您没有输入电子邮箱</font>";
        return false;
    } else if (!pattern.test(user_value)) {
        document.getElementById("email_res").innerHTML = "<font color='#f00'>电子邮箱有误，请核对</font>";
        return false;
    } else {
        document.getElementById("email_res").innerHTML = "<font color='#00f'>OK</font>";
        return true;
    }
}

//当留言失去焦点时
function blur_message() {
    var user_value = document.getElementsByName("message")[0].value;

        if (user_value.length === 0) {
        document.getElementById("message_res").innerHTML = "<font color='#f00'>您没有输入内容</font>";
        return false;
    } else if ($.trim(user_value).length < 2) {
        document.getElementById("message_res").innerHTML = "<font color='#f00'>留言不少于两个字</font>";
        return false;
    } else {
        document.getElementById("message_res").innerHTML = "<font color='#00f'>OK</font>";
        return true;
    }
}

//提交提交表单验证
function checkForm() {
    var user_flag = blur_fullname();
    var phone_flag = blur_phone();
    var email_flag = blur_email();
    var message_flag = blur_message();
    if (user_flag && phone_flag && email_flag && message_flag) {
        return true;
    } else {
        alert("输入有误，请按要求修改再提交。");
        return false;
    }
}

function sendEmail(from, subject, body) {

    Email.send({
        SecureToken: "c49f358a-44b9-40cf-b59a-ed4f0593f624",
        To: 'longanw@163.com',
        From: from,
        Subject: subject,
        Body: body
    }).then(
        message => {
            if (message == 'OK') {
                document.getElementById("contact-form").reset();
                alert('留言成功，感谢您的支持。');
            } else {
                console.error(message);
                alert('抱歉，服务出了点差错，欢迎继续尝试，谢谢！')
            }
        });
}

const form = document.getElementById("contact-form");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const subject = `${data.get("fullname")} 先生/女士( ${data.get("phone")} )的留言`;
    const body = `留言如下：<br> ${data.get("message")} <br> 电话：${data.get("phone")} <br> 邮箱: ${data.get("email")} `;
    var form_status = checkForm();
    if (form_status) {
        sendEmail("longanw@gmail.com", subject, body);
    } else {

    }
});

//清除提示
form.addEventListener("reset", (e) => {
    $("#user_res").empty();
    $("#phone_res").empty();
    $("#email_res").empty();
    $("#message_res").empty();
});

$('.container .loadMore').loadMoreResults();

var url;

function openFile(url) {
    var fileDir = "..%2F..%2F..%2Fservice%2F"
    window.open("static/pdfjs/web/viewer.html?file=" + fileDir + url);
};
