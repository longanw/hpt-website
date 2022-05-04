$(document).ready(function(){"use strict";$(function(){jQuery("img.svg").each(function(){var a=jQuery(this);var n=a.attr("id");var s=a.attr("class");var e=a.attr("src");jQuery.get(e,function(e){var t=jQuery(e).find("svg");if(typeof n!=="undefined"){t=t.attr("id",n)}if(typeof s!=="undefined"){t=t.attr("class",s+" replaced-svg")}t=t.removeAttr("xmlns:a");if(!t.attr("viewBox")&&t.attr("height")&&t.attr("width")){t.attr("viewBox","0 0 "+t.attr("height")+" "+t.attr("width"))}a.replaceWith(t)},"xml")})});$("#banner").owlCarousel({loop:true,dots:true,nav:true,slideSpeed:300,paginationSpeed:400,autoplay:true,autoplayTimeout:5e3,autoplayHoverPause:true,singleItem:true,responsiveClass:true,responsive:{0:{items:1,nav:false},768:{items:1,nav:false},1e3:{items:1}}});$("#services-slider").owlCarousel({loop:true,dots:true,autoHeight:true,autoHeightClass:"owl-height",nav:false,slideSpeed:600,paginationSpeed:400,singleItem:true,responsiveClass:true,responsive:{0:{items:1},768:{items:1},1e3:{items:1},1024:{items:1}}});$("#cases-slider").owlCarousel({autoplay:true,autoplayHoverPause:true,autoplayTimeout:3e3,loop:true,dots:false,nav:true,slideSpeed:600,paginationSpeed:400,singleItem:true,responsiveClass:true,responsive:{0:{items:1,nav:false,dots:true},768:{items:2,nav:false,dots:true},1e3:{items:3,nav:true,dots:false},1025:{items:4,nav:true,dots:false}}});$("#news").owlCarousel({autoplay:true,autoplayHoverPause:true,autoplayTimeout:8e3,loop:true,dots:false,margin:20,nav:false,slideSpeed:300,paginationSpeed:400,singleItem:true,responsiveClass:true,responsive:{0:{items:1,nav:false,dots:false},768:{items:2,nav:false,dots:false},1e3:{items:3,nav:false,dots:false},1025:{items:3,nav:false,dots:false}}});$(".search-toggle").on("click",function(){if($(window).width()>767){if($(this).hasClass("active")){$(this).removeClass("active");$(".search-form").removeClass("open");setTimeout(function(){$(".navbar-nav").removeClass("hide")},300)}else{$(this).addClass("active");$(".search-form").addClass("open");$(".search-form .form-control").focus();$(".navbar-nav").addClass("hide")}}});$(window).on("scroll load resize",s);$('.primary-navbar .navbar-nav a[href^="#"]').on("click",function(e){e.preventDefault();if($(window).width()<768){$(".pmd-sidebar-overlay").trigger("click")}$(document).off("scroll");var t=this.hash,a=$(t);var n=$(".navbar").height();if($("body").hasClass("propeller-topbar-body")){$("html, body").stop().animate({scrollTop:a.offset().top-n-48},500,function(){$(document).on("scroll",s)})}else{$("html, body").stop().animate({scrollTop:a.offset().top-n},500,function(){$(document).on("scroll",s)})}});function s(){var s=$(document).scrollTop()+205;$(".primary-navbar .nav > li > a").each(function(){var e=$(this);var t=$(e.attr("href"));if(t.position().top<=s&&t.position().top+t.height()>s){$(".nav li a").removeClass("active");e.addClass("active");var a=$(".active").offset().left-$(".nav").offset().left;var n=$(this).outerWidth();$(".nav .nav-active").css({left:a,width:n})}else{e.removeClass("active")}})}$(window).on("load",function(){var e=location.hash;if(e!==""){t(e)}});function t(e){$(window).scrollTop(0);var t=$(".navbar").height();$("body, html").animate({scrollTop:$(e).offset().top-t},600)}$(window).on("scroll",function(){var e=$(this).scrollTop();if(e>56){if($(".pmd-navbar").hasClass("primary-navbar")){$("nav.navbar").addClass("navbar-small");$("nav.navbar").removeClass("navbar-inverse")}}else{if($(".pmd-navbar").hasClass("primary-navbar")){$("nav.navbar").removeClass("navbar-small");$("nav.navbar").addClass("navbar-inverse")}}});$(window).on("load",function(){$("#status").fadeOut();$("#preloader").delay(300).fadeOut("slow");$("body").delay(300).css({overflow:"visible"})})});$(function(){$(".to-top").on("click",function(){$("html,body").stop().animate({scrollTop:0},200)});function n(o){var e=o.parents("div").offset().top,t=o.attr("bolExec");$(document).scrollTop()>e-3*$(window).height()/4&&!t&&(!function(){o.text(o.text().replace(".",""));var n=0,s=o.text()-0,r=(s+"").length,i=setInterval(function(){n++;for(var e=parseInt(s/100*n),t="",a=0;a<r-(e+"").length;a++)t+=0;o.text(t+e);if(n>=100){o.text(o.attr("rel"));clearInterval(i)}},50)}(),o.attr("bolExec",!0))}function e(){var a=$(window).scrollTop();$(".num").each(function(e){var t=$(this).offset().top;if(a>t-800){n($(this))}})}$(window).on("scroll",function(){e()})});var Email={send:function(n){return new Promise(function(t,e){n.nocache=Math.floor(1e6*Math.random()+1),n.Action="Send";var a=JSON.stringify(n);Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?",a,function(e){t(e)})})},ajaxPost:function(e,t,a){var n=Email.createCORSRequest("POST",e);n.setRequestHeader("Content-type","application/x-www-form-urlencoded"),n.onload=function(){var e=n.responseText;null!=a&&a(e)},n.send(t)},ajax:function(e,t){var a=Email.createCORSRequest("GET",e);a.onload=function(){var e=a.responseText;null!=t&&t(e)},a.send()},createCORSRequest:function(e,t){var a=new XMLHttpRequest;return"withCredentials"in a?a.open(e,t,!0):"undefined"!=typeof XDomainRequest?(a=new XDomainRequest).open(e,t):a=null,a}};function blur_fullname(){var e=document.getElementsByName("fullname")[0].value;if(e.length===0){document.getElementById("user_res").innerHTML="<font color='#f00'>您没有输入姓名</font>";return false}else if($.trim(e).length<2){document.getElementById("user_res").innerHTML="<font color='#f00'>姓名不少于两个字</font>";return false}else{document.getElementById("user_res").innerHTML="<font color='#00f'>OK</font>";return true}}function blur_phone(){var e=document.getElementsByName("phone")[0].value;var t=/^1[3456789]\d{9}$/;if(e.length===0){document.getElementById("phone_res").innerHTML="<font color='#f00'>您没有输入手机号码</font>";return false}else if(!t.test(e)){document.getElementById("phone_res").innerHTML="<font color='#f00'>手机号码有误，请核对</font>";return false}else{document.getElementById("phone_res").innerHTML="<font color='#00f'>OK</font>";return true}}function blur_email(){var e=document.getElementsByName("email")[0].value;var t=/^\S+@\S+\.\S+$/;if(e.length===0){document.getElementById("email_res").innerHTML="<font color='#f00'>您没有输入电子邮箱</font>";return false}else if(!t.test(e)){document.getElementById("email_res").innerHTML="<font color='#f00'>电子邮箱有误，请核对</font>";return false}else{document.getElementById("email_res").innerHTML="<font color='#00f'>OK</font>";return true}}function blur_message(){var e=document.getElementsByName("message")[0].value;if(e.length===0){document.getElementById("message_res").innerHTML="<font color='#f00'>您没有输入内容</font>";return false}else if($.trim(e).length<2){document.getElementById("message_res").innerHTML="<font color='#f00'>留言不少于两个字</font>";return false}else{document.getElementById("message_res").innerHTML="<font color='#00f'>OK</font>";return true}}function checkForm(){var e=blur_fullname();var t=blur_phone();var a=blur_email();var n=blur_message();if(e&&t&&a&&n){return true}else{alert("输入有误，请按要求修改再提交。");return false}}function sendEmail(e,t,a){Email.send({SecureToken:"c49f358a-44b9-40cf-b59a-ed4f0593f624",To:"longanw@163.com",From:e,Subject:t,Body:a}).then(e=>{if(e=="OK"){document.getElementById("contact-form").reset();alert("留言成功，感谢您的支持。")}else{console.error(e);alert("抱歉，服务出了点差错，欢迎继续尝试，谢谢！")}})}const form=document.getElementById("contact-form");form.addEventListener("submit",e=>{e.preventDefault();const t=new FormData(e.target);const a=`${t.get("fullname")} 先生/女士( ${t.get("phone")} )的留言`;const n=`留言如下：<br> ${t.get("message")} <br> 电话：${t.get("phone")} <br> 邮箱: ${t.get("email")} `;var s=checkForm();if(s){sendEmail("longanw@gmail.com",a,n)}else{}});form.addEventListener("reset",e=>{$("#user_res").empty();$("#phone_res").empty();$("#email_res").empty();$("#message_res").empty()});$("#viewer_flag").click(function(){var e=$(this).attr("res");if(e==0){$(this).attr("res","1");$(this).html("");$(this).html("连续浏览<img style='height: 12px' src='static/images/swap-left.svg'>翻页浏览")}else{$(this).attr("res","0");$(this).html("");$(this).html("翻页浏览<img style='height: 12px' src='static/images/swap-right.svg'>连续浏览")}});function openFile(e){var t="..%2Fservice%2F";var a=$("#viewer_flag").attr("res");if(a==0){window.open("static/quickviewer.html?file="+t+e)}else{window.open("static/viewer.html?file="+t+e)}}$.hulla=new hullabaloo;setTimeout(function(){$.hulla.send("&#129409操作提示<br>点击图片可以查看详情。","info")},8e3);setTimeout(function(){$.hulla.send("&#127873更多信息有待您的探索与发掘！","success")},9e3);$(function(){var e=0;var t=0;var a=4;n(t,a);$(document).on("click","#load-more-cert",function(){e++;t=e*a;n(t,a)});function n(r,i){$.ajax({type:"GET",url:"static/json/cert.json",dataType:"json",success:function(e){var t=e.lists;var a=e.lists.length;var n="";if(a-r<i){i=a-r}for(var s=r;s<r+i;s++){if(s<i){n+='<div class="col-lg-3 col-md-3 col-sm-6 col-xs-12"><div class="pmd-card pmd-card-border pmd-z-depth"><div class="cert pmd-card-media pmd-card-media-overlay"><img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" data-src="'+t[s].pic+'" alt="'+t[s].alt+'" title="'+t[s].title+'" class="lazyload img-responsive" />'+"</div></div></div>"}else{n+='<div class="col-lg-3 col-md-3 col-sm-6 col-xs-12"><div class="pmd-card pmd-card-border pmd-z-depth"><div class="cert pmd-card-media pmd-card-media-overlay"><img src="'+t[s].pic+'" alt="'+t[s].alt+'" title="'+t[s].title+'" class="img-responsive" />'+"</div></div></div>"}}$(".lists-cert").append(n);if(r+i>=a){$("#load-more-cert").hide()}else{$("#load-more-cert").show()}},error:function(e,t){setTimeout(function(){$.hulla.send("&#9889读取数据出错！","warning")},500)}})}});$(function(){var e=0;var t=0;var a=4;n(t,a);$(document).on("click","#load-more-partner",function(){e++;t=e*a;n(t,a)});function n(r,i){$.ajax({type:"GET",url:"static/json/partner.json",dataType:"json",success:function(e){var t=e.lists;var a=e.lists.length;var n="";if(a-r<i){i=a-r}for(var s=r;s<r+i;s++){if(s<i){n+='<div class="col-lg-3 col-md-3 col-sm-6 col-xs-12"><div class="pmd-card pmd-z-depth"><div class="pmd-card-media"><img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" data-src="'+t[s].pic+'" alt="'+t[s].alt+'" title="'+t[s].title+'" class="lazyload img-responsive" />'+"</div></div></div>"}else{n+='<div class="col-lg-3 col-md-3 col-sm-6 col-xs-12"><div class="pmd-card pmd-z-depth"><div class="pmd-card-media"><img src="'+t[s].pic+'" alt="'+t[s].alt+'" title="'+t[s].title+'" class="img-responsive" />'+"</div></div></div>"}}$(".lists-partner").append(n);if(r+i>=a){$("#load-more-partner").hide()}else{$("#load-more-partner").show()}},error:function(e,t){setTimeout(function(){$.hulla.send("&#9889服务器出错！","warning")},1e3)}})}});$(function(){var e=0;var t=0;var a=5;n(t,a);$(document).on("click","#load-more-standards",function(){e++;t=e*a;n(t,a)});function n(r,i){$.ajax({type:"GET",url:"static/json/standards.json",dataType:"json",success:function(e){var t=e.lists;var a=e.lists.length;var n="";if(a-r<i){i=a-r}for(var s=r;s<r+i;s++){n+='<div class="lb_thumb" style="margin: 20px"><div class="lb_book-cover" style="background-image: url('+t[s].pic+');" onclick=\'javascript:openFile("'+t[s].src+'");\'><span class="lb_book-title">'+t[s].title+"</span></div></div>"}$(".lists-standards").append(n);if(r+i>=a){$("#load-more-standards").hide()}else{$("#load-more-standards").show()}},error:function(e,t){setTimeout(function(){$.hulla.send("&#9889服务器未返回数据！","warning")},1e3)}})}});var nativeShare=new NativeShare;var shareData={title:document.title,desc:"互配金属制品（广东）有限公司，专注供水行业不锈钢管制造、销售十余载，为供水行业提供互联互通整体解决方案。",link:window.location.href,icon:window.location.href+"static/images/favicon.png",success:function(){setTimeout(function(){$.hulla.send("&#127873分享成功！","success")},2e3)},fail:function(){setTimeout(function(){$.hulla.send("&#9889分享失败！","warning")},1e3)}};nativeShare.setShareData(shareData);function call(e){try{nativeShare.call(e)}catch(e){setTimeout(function(){$.hulla.send("&#9889浏览器不支持分享！","warning")},1e3)}}(function(){var e=navigator.userAgent.indexOf("MSIE")!=-1&&!window.opera;function f(e){return document.getElementById(e)}function h(e){return document.createElement(e)}var v=[19416,19168,42352,21717,53856,55632,91476,22176,39632,21970,19168,42422,42192,53840,119381,46400,54944,44450,38320,84343,18800,42160,46261,27216,27968,109396,11104,38256,21234,18800,25958,54432,59984,28309,23248,11104,100067,37600,116951,51536,54432,120998,46416,22176,107956,9680,37584,53938,43344,46423,27808,46416,86869,19872,42448,83315,21200,43432,59728,27296,44710,43856,19296,43748,42352,21088,62051,55632,23383,22176,38608,19925,19152,42192,54484,53840,54616,46400,46496,103846,38320,18864,43380,42160,45690,27216,27968,44870,43872,38256,19189,18800,25776,29859,59984,27480,21952,43872,38613,37600,51552,55636,54432,55888,30034,22176,43959,9680,37584,51893,43344,46240,47780,44368,21977,19360,42416,86390,21168,43312,31060,27296,44368,23378,19296,42726,42208,53856,60005,54576,23200,30371,38608,19415,19152,42192,118966,53840,54560,56645,46496,22224,21938,18864,42359,42160,43600,111189,27936,44448];var m="甲乙丙丁戊己庚辛壬癸";var p="子丑寅卯辰巳午未申酉戌亥";var g="鼠牛虎兔龙蛇马羊猴鸡狗猪";var y=["小寒","大寒","立春","雨水","惊蛰","春分","清明","谷雨","立夏","小满","芒种","夏至","小暑","大暑","立秋","处暑","白露","秋分","寒露","霜降","立冬","小雪","大雪","冬至"];var $=[0,21208,43467,63836,85337,107014,128867,150921,173149,195551,218072,240693,263343,285989,308563,331033,353350,375494,397447,419210,440795,462224,483532,504758];var w="日一二三四五六七八九十";var b=["正","二","三","四","五","六","七","八","九","十","十一","腊"];var A="初十廿卅";var T={"0101":"*1元旦节","0214":"情人节","0305":"学雷锋纪念日","0308":"妇女节","0312":"植树节","0315":"消费者权益日","0321":"世界森林日 世界儿歌日","0322":"世界水日","0323":"世界气象日","0324":"世界防治结核病日","0401":"愚人节","0407":"世界卫生日","0422":"世界地球日","0501":"*1劳动节","0504":"青年节","0505":"碘缺乏病防治日","0508":"世界红十字日","0512":"国际护士节","0515":"国际家庭日","0517":"世界电信日","0518":"国际博物馆日","0520":"全国学生营养日","0523":"国际牛奶日","0531":"世界无烟日","0601":"儿童节","0605":"世界环境日","0606":"全国爱眼日","0616":"防治荒漠化和干旱日","0623":"国际奥林匹克日","0625":"全国土地日","0626":"国际反毒品日","0701":"建党节 香港回归纪念 国际建筑日","0707":"中国人民抗日战争纪念日","0711":"世界人口日","0801":"建军节","0908":"国际扫盲日","0909":"毛泽东逝世纪念","0910":"教师节","0916":"国际臭氧层保护日","0920":"国际爱牙日","0927":"世界旅游日","0928":"孔子诞辰",1001:"*3国庆节",1004:"世界动物日",1006:"老人节",1008:"全国高血压日 世界视觉日",1009:"世界邮政日",1015:"国际盲人节",1016:"世界粮食日",1017:"世界消除贫困日",1024:"联合国日",1108:"中国记者日",1109:"消防宣传日",1112:"孙中山诞辰纪念",1114:"世界糖尿病日",1117:"国际大学生节",1201:"世界艾滋病日",1203:"世界残疾人日",1209:"世界足球日",1220:"澳门回归纪念",1224:"平安夜",1225:"圣诞节",1226:"毛泽东诞辰纪念",1229:"国际生物多样性日"};var M={"0101":"*2春节","0115":"元宵节","0505":"*1端午节","0707":"七夕情人节","0715":"中元节","0815":"*1中秋节","0909":"重阳节",1208:"腊八节",1223:"小年","0100":"除夕"};function I(e){function t(e,t){var a=new Date(31556925974.7*(e-1900)+$[t]*6e4+Date.UTC(1900,0,6,2,5));return a.getUTCDate()}function i(e){var t,a=348;for(t=32768;t>8;t>>=1){a+=v[e-1900]&t?1:0}return a+o(e)}function a(e){return m.charAt(e%10)+p.charAt(e%12)}function o(e){if(l(e)){return v[e-1900]&65536?30:29}else{return 0}}function l(e){return v[e-1900]&15}function c(e,t){return v[e-1900]&65536>>t?30:29}function n(e){var t,a=0,n=0;var s=new Date(1900,0,31);var r=(e-s)/864e5;this.dayCyl=r+40;this.monCyl=14;for(t=1900;t<2050&&r>0;t++){n=i(t);r-=n;this.monCyl+=12}if(r<0){r+=n;t--;this.monCyl-=12}this.year=t;this.yearCyl=t-1864;a=l(t);this.isLeap=false;for(t=1;t<13&&r>0;t++){if(a>0&&t==a+1&&this.isLeap==false){--t;this.isLeap=true;n=o(this.year)}else{n=c(this.year,t)}if(this.isLeap==true&&t==a+1){this.isLeap=false}r-=n;if(this.isLeap==false){this.monCyl++}}if(r==0&&a>0&&t==a+1){if(this.isLeap){this.isLeap=false}else{this.isLeap=true;--t;--this.monCyl}}if(r<0){r+=n;--t;--this.monCyl}this.month=t;this.day=r+1}function s(e){return e<10?"0"+e:e}function r(e,t){var a=e;return t.replace(/dd?d?d?|MM?M?M?|yy?y?y?/g,function(e){switch(e){case"yyyy":var t="000"+a.getFullYear();return t.substring(t.length-4);case"dd":return s(a.getDate());case"d":return a.getDate().toString();case"MM":return s(a.getMonth()+1);case"M":return a.getMonth()+1}})}function u(e,t){var a;switch(e,t){case 10:a="初十";break;case 20:a="二十";break;case 30:a="三十";break;default:a=A.charAt(Math.floor(t/10));a+=w.charAt(t%10)}return a}this.date=e;this.isToday=false;this.isRestDay=false;this.solarYear=r(e,"yyyy");this.solarMonth=r(e,"M");this.solarDate=r(e,"d");this.solarWeekDay=e.getDay();this.solarWeekDayInChinese="星期"+w.charAt(this.solarWeekDay);var d=new n(e);this.lunarYear=d.year;this.shengxiao=g.charAt((this.lunarYear-4)%12);this.lunarMonth=d.month;this.lunarIsLeapMonth=d.isLeap;this.lunarMonthInChinese=this.lunarIsLeapMonth?"闰"+b[d.month-1]:b[d.month-1];this.lunarDate=parseInt(d.day);this.showInLunar=this.lunarDateInChinese=u(this.lunarMonth,this.lunarDate);if(this.lunarDate==1){this.showInLunar=this.lunarMonthInChinese+"月"}this.ganzhiYear=a(d.yearCyl);this.ganzhiMonth=a(d.monCyl);this.ganzhiDate=a(d.dayCyl++);this.jieqi="";this.restDays=0;if(t(this.solarYear,(this.solarMonth-1)*2)==r(e,"d")){this.showInLunar=this.jieqi=y[(this.solarMonth-1)*2]}if(t(this.solarYear,(this.solarMonth-1)*2+1)==r(e,"d")){this.showInLunar=this.jieqi=y[(this.solarMonth-1)*2+1]}if(this.showInLunar=="清明"){this.showInLunar="清明节";this.restDays=1}this.solarFestival=T[r(e,"MM")+r(e,"dd")];if(typeof this.solarFestival=="undefined"){this.solarFestival=""}else{if(/\*(\d)/.test(this.solarFestival)){this.restDays=parseInt(RegExp.$1);this.solarFestival=this.solarFestival.replace(/\*\d/,"")}}this.showInLunar=this.solarFestival==""?this.showInLunar:this.solarFestival;this.lunarFestival=M[this.lunarIsLeapMonth?"00":s(this.lunarMonth)+s(this.lunarDate)];if(typeof this.lunarFestival=="undefined"){this.lunarFestival=""}else{if(/\*(\d)/.test(this.lunarFestival)){this.restDays=this.restDays>parseInt(RegExp.$1)?this.restDays:parseInt(RegExp.$1);this.lunarFestival=this.lunarFestival.replace(/\*\d/,"")}}if(this.lunarMonth==12&&this.lunarDate==c(this.lunarYear,12)){this.lunarFestival=M["0100"];this.restDays=1}this.showInLunar=this.lunarFestival==""?this.showInLunar:this.lunarFestival;this.showInLunar=this.showInLunar.length>3?this.showInLunar.substr(0,2)+"...":this.showInLunar}var D=function(){var i={};i.lines=0;i.dateArray=new Array(42);function a(e){return e%4===0&&e%100!==0||e%400===0}function o(e,t){return[31,a(e)?29:28,31,30,31,30,31,31,30,31,30,31][t]}function l(e,t){e.setDate(e.getDate()+t);return e}function t(e){var t=0;var a=new I(new Date(e.solarYear,e.solarMonth-1,1));var n=a.solarWeekDay-1==-1?6:a.solarWeekDay-1;i.lines=Math.ceil((n+o(e.solarYear,e.solarMonth-1))/7);for(var s=0;s<i.dateArray.length;s++){if(a.restDays!=0){t=a.restDays}if(t>0){a.isRest=true}if(n-- >0||a.solarMonth!=e.solarMonth){i.dateArray[s]=null;continue}var r=new I(new Date);if(a.solarYear==r.solarYear&&a.solarMonth==r.solarMonth&&a.solarDate==r.solarDate){a.isToday=true}i.dateArray[s]=a;a=new I(l(a.date,1));t--}}return{init:function(e){t(e)},getJson:function(){return i}}}();var t=function(){var s=f("top").getElementsByTagName("SELECT")[0];var r=f("top").getElementsByTagName("SELECT")[1];var i=f("top").getElementsByTagName("SPAN")[0];var o=f("top").getElementsByTagName("SPAN")[1];var l=f("top").getElementsByTagName("INPUT")[0];function t(e){i.innerHTML=e.ganzhiYear;o.innerHTML=e.shengxiao}function a(e){s[e.solarYear-1901].selected=true;r[e.solarMonth-1].selected=true}function c(){var e=s.value;var t=r.value;var a=new I(new Date(e,t-1,1));D.init(a);C.draw();if(this==s){a=new I(new Date(e,3,1));i.innerHTML=a.ganzhiYear;o.innerHTML=a.shengxiao}var n=new I(new Date);l.style.visibility=e==n.solarYear&&t==n.solarMonth?"hidden":"visible"}function n(){var e=new I(new Date);t(e);a(e);D.init(e);C.draw();l.style.visibility="hidden"}function u(e,t){for(var a=1901;a<2050;a++){var n=h("OPTION");n.value=a;n.innerHTML=a;if(a==e){n.selected="selected"}s.appendChild(n)}for(var a=1;a<13;a++){var n=h("OPTION");n.value=a;n.innerHTML=a;if(a==t){n.selected="selected"}r.appendChild(n)}s.onchange=c;r.onchange=c}function d(e){u(e.solarYear,e.solarMonth);i.innerHTML=e.ganzhiYear;o.innerHTML=e.shengxiao;l.onclick=n;l.style.visibility="hidden"}return{init:function(e){d(e)},reset:function(e){a(e)}}}();var C=function(){function t(){var e=D.getJson();var t=e.dateArray;f("cm").style.height=e.lines*38+2+"px";f("cm").innerHTML="";for(var a=0;a<t.length;a++){if(t[a]==null){continue}var n=h("DIV");if(t[a].isToday){n.style.border="1px solid #a5b9da";n.style.background="#ffe3c1 url(static/images/t01a7805144fcb47ee7.gif) no-repeat top"}n.className="cell";n.style.left=a%7*60+"px";n.style.top=Math.floor(a/7)*38+2+"px";var s=h("DIV");s.className="so";s.style.color=a%7>4||t[a].isRest?"#c60b02":"#313131";s.innerHTML=t[a].solarDate;n.appendChild(s);var r=h("DIV");r.style.color="#666";r.innerHTML=t[a].showInLunar;n.appendChild(r);n.onmouseover=function(t){return function(e){o.show({dateIndex:t,cell:this})}}(a);n.onmouseout=function(){o.hide()};n.onmouseup=function(){};f("cm").appendChild(n)}var i=h("DIV");i.id="fd";f("cm").appendChild(i);o.init(i)}return{draw:function(e){t(e)}}}();var o=function(){var s;function r(e,n){if(arguments.length>1){var t=/([.*+?^=!:${}()|[\]\/\\])/g,a="{".replace(t,"\\$1"),s="}".replace(t,"\\$1");var r=new RegExp("#"+a+"([^"+a+s+"]+)"+s,"g");if(typeof n=="object"){return e.replace(r,function(e,t){var a=n[t];return typeof a=="undefined"?"":a})}}return e}function t(e){var t=D.getJson().dateArray[e.dateIndex];var a=e.cell;var n="#{solarYear}年#{solarMonth}月#{solarDate}日 #{solarWeekDayInChinese}";n+="<br><b>农历 #{lunarMonthInChinese}月#{lunarDateInChinese}</b>";n+="<br>#{ganzhiYear}年 #{ganzhiMonth}月 #{ganzhiDate}日";if(t.solarFestival!=""||t.lunarFestival!=""||t.jieqi!=""){n+="<br><b>#{lunarFestival} #{solarFestival} #{jieqi}</b>"}s.innerHTML=r(n,t);s.style.top=a.offsetTop+a.offsetHeight-5+"px";s.style.left=a.offsetLeft+a.offsetWidth-5+"px";s.style.display="block"}function e(){s.style.display="none"}return{show:function(e){t(e)},hide:function(){e()},init:function(e){s=e}}}();var a=new I(new Date);if(e){window.attachEvent("onload",function(){t.reset(a)})}t.init(a);D.init(a);C.draw()})();(function(){var e=new Date;var t=e.getFullYear();var a=e.getMonth()+1;var n=e.getDate();console.log(t+"年"+a+"月"+n+"日 星期"+"日一二三四五六".charAt(e.getDay()));$("#time").html(t+"年"+a+"月"+n+"日<br> 星期"+"日一二三四五六".charAt(e.getDay()));if(a==12&&n==13){document.getElementById("preloader").setAttribute("class","hidden");$(function(){$("#nmd-dialog").modal({keyboard:true})});console.log("默哀...")}else if(a==4&&n==1){$("html").addClass("incline")}else{console.log("过去已成定数，无法更改！")}})();