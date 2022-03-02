$(document).ready(function () {
    "use strict";
    /* ------------------------------
		Convert svg into XML code
 	------------------------------- */
    $(function () {
        jQuery('img.svg').each(function () {
            var $img = jQuery(this);
            var imgID = $img.attr('id');
            var imgClass = $img.attr('class');
            var imgURL = $img.attr('src');
            jQuery.get(imgURL, function (data) {
                // Get the SVG tag, ignore the rest
                var $svg = jQuery(data).find('svg');
                // Add replaced image's ID to the new SVG
                if (typeof imgID !== 'undefined') {
                    $svg = $svg.attr('id', imgID);
                }
                // Add replaced image's classes to the new SVG
                if (typeof imgClass !== 'undefined') {
                    $svg = $svg.attr('class', imgClass + ' replaced-svg');
                }
                // Remove any invalid XML tags as per http://validator.w3.org
                $svg = $svg.removeAttr('xmlns:a');
                // Check if the viewport is set, else we gonna set it if we can.
                if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
                    $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'));
                }
                // Replace image with new SVG
                $img.replaceWith($svg);
            }, 'xml');

        });
    });

    /* ------------------------------
		banner slider Carousel
 	------------------------------- */
    $("#banner").owlCarousel({
        loop: true,
        dots: true,
        nav: true, // Show next and prev buttons
        slideSpeed: 300,
        paginationSpeed: 400,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        singleItem: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: false,
            },
            768: {
                items: 1,
                nav: false
            },
            1000: {
                items: 1,
            }
        }
    });

    /* ------------------------------
		Services Carousel
 	------------------------------- */
    $("#services-slider").owlCarousel({
        loop: true,
        dots: true,
        autoHeight: true,
        autoHeightClass: 'owl-height',
        nav: false, // Show next and prev buttons
        slideSpeed: 600,
        paginationSpeed: 400,
        singleItem: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 1,
                nav: false
            },
            1000: {
                items: 1,
            },
            1024: {
                items: 1,
            }
        }
    });

    /* ------------------------------
		Cases Carousel
 	------------------------------- */
    $("#cases-slider").owlCarousel({
        autoplay: true,
        autoplayHoverPause: true,
        autoplayTimeout: 3000,
        loop: true,
        dots: false,
        dotsEach: true,
        nav: true, // Show next and prev buttons
        slideSpeed: 600,
        paginationSpeed: 400,
        singleItem: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: false,
                dots: true
            },
            768: {
                items: 2,
                nav: false,
                dots: true
            },
            1000: {
                items: 3,
                nav: false,
                dots: false
            },
            1025: {
                items: 4,
                nav: true,
                dots: false
            },
        }
    });

    /* ------------------------------
		Standards Carousel
 	------------------------------- */
    $("#standards").owlCarousel({
        autoplay: true,
        autoplayHoverPause: true,
        autoplayTimeout: 6000,
        loop: true,
        dots: false,
        dotsEach: true,
        nav: true, // Show next and prev buttons
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: false,
                dots: true
            },
            768: {
                items: 2,
                nav: false,
                dots: true
            },
            1000: {
                items: 3,
                nav: true,
                dots: true
            },
            1025: {
                items: 4,
                nav: true,
                dots: true
            },
        }
    });

    /* ------------------------------
		News Carousel
 	------------------------------- */
    $("#news").owlCarousel({
        autoplay: true,
        autoplayHoverPause: true,
        autoplayTimeout: 8000,
        loop: true,
        dots: false,
        margin: 20,
        nav: false, // Show next and prev buttons
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: false,
                dots: false
            },
            768: {
                items: 2,
                nav: false,
                dots: false
            },
            1000: {
                items: 3,
                nav: false,
                dots: false
            },
            1025: {
                items: 3,
                nav: false,
                dots: false
            },
        }
    });
    /* ------------------------------
		Search Toggle
 	------------------------------- */
    $(".search-toggle").on("click", function () {
        if ($(window).width() > 767) {
            if ($(this).hasClass('active')) {
                $(this).removeClass('active');
                $(".search-form").removeClass('open');
                setTimeout(function () {
                    $(".navbar-nav").removeClass('hide');
                }, 300);
            } else {
                $(this).addClass('active');
                $(".search-form").addClass('open');
                $(".search-form .form-control").focus();
                $(".navbar-nav").addClass('hide');
            }
        }
    });

    /* ------------------------------
		Navbar active
 	------------------------------- */
    /* Add active class in navbar according to current section */
    $(window).on("scroll load resize", onScroll);
    $('.primary-navbar .navbar-nav a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        if ($(window).width() < 768) {
            $(".pmd-sidebar-overlay").trigger("click");
        }
        $(document).off("scroll");
        var target = this.hash,
            $target = $(target);
        var headerHeight = $(".navbar").height();
        if ($('body').hasClass('propeller-topbar-body')) {
            $('html, body').stop().animate({
                'scrollTop': $target.offset().top - headerHeight - 48
            }, 500, function () {
                $(document).on("scroll", onScroll);
            });
        } else {
            $('html, body').stop().animate({
                'scrollTop': $target.offset().top - headerHeight
            }, 500, function () {
                $(document).on("scroll", onScroll);
            });
        }
    });
    /* Get current section link */
    function onScroll() {
        var scrollPos = $(document).scrollTop() + 205;
        $('.primary-navbar .nav > li > a').each(function () {
            var currLink = $(this);
            var refElement = $(currLink.attr("href"));
            if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                $('.nav li a').removeClass("active");
                currLink.addClass("active");
                var spanTop = $('.active').offset().left - $('.nav').offset().left;
                var navWidth = $(this).outerWidth();
                $('.nav .nav-active').css({
                    "left": spanTop,
                    "width": navWidth
                });
            } else {
                currLink.removeClass("active");
            }
        });
    }

    /* ------------------------------
		Navbar active add remove
 	------------------------------- */
    $(window).on("load", function () {
        var locationHas = location.hash;
        if (locationHas !== "") {
            scrollToSection(locationHas);
        }
    });

    function scrollToSection(locationHas) {
        $(window).scrollTop(0);
        var headerHeight = $(".navbar").height();
        $("body, html").animate({
            scrollTop: $(locationHas).offset().top - headerHeight
        }, 600);
    }

    /* ------------------------------
    	Sticky Header
    ------------------------------- */
    $(window).on("scroll", function () {
        var pageScroll = $(this).scrollTop();
        if (pageScroll > 56) {
            if ($('.pmd-navbar').hasClass('primary-navbar')) {
                $('nav.navbar').addClass("navbar-small");
                $('nav.navbar').removeClass("navbar-inverse");
            }
        } else {
            if ($('.pmd-navbar').hasClass('primary-navbar')) {
                $('nav.navbar').removeClass("navbar-small");
                $('nav.navbar').addClass("navbar-inverse");
            }
        }
    });

    /* ------------------------------
    	Loader
    ------------------------------- */
    $(window).on('load', function () {
        $('#status').fadeOut();
        $('#preloader').delay(350).fadeOut('slow');
        $('body').delay(350).css({
            'overflow': 'visible'
        });
    });

});


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
