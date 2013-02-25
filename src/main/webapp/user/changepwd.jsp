<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>


<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-type" content="text/html; charset=utf-8" />
    <title>乐盟-无线营销第一品牌</title>
    <meta name="keywords" content="广告联盟,网络广告,网站联盟,无线联盟,短信联盟,乐盟,lemon001,lemon" />
    <meta name="description" content="乐盟(lemon001.com)始终以学术态度在技术、产品、服务上不断优化、创新，以好产品、高收入为中国站长的成长助力" />
    <link rel="stylesheet" type="text/css" href="/css/style.css" />
    <script type="text/javascript" src="/js/jquery.min.js" ></script>
    <script type="text/javascript" src="/js/jquery.validatelus.js"></script>
    <style type="text/css">
        .yc_d7 span.regtip{display: inline;float: none;font-weight: normal;padding-left:5px;}
        .yc_d7 span.regerror{ display: inline; float: none;font-weight: normal;font-size:12px; margin-left:8px; background:url(/images/ico_error.gif) no-repeat left center; color:red; padding-left:20px;}
        .yc_d7 span.regright{ display: inline; float: none;font-weight: normal;  margin-left:8px; background:url(/images/ico_right.gif) no-repeat 0 center;padding-left:20px;}
    </style>
    <script type="text/javascript">
        $(function() {
            $("#registerForm").validatelus({tipcss:'regtip', errcss:'regerror',rightcss:'regright'});
        });
    </script>
</head>
<body>
    <div class="wrap">
        <!-- Top begin -->
        <jsp:include page="/common/header.jsp" />
        <div class="clear space"></div>
        <!-- Content begin -->
        <div class="gywm">
         <jsp:include page="/common/usermenu.jsp" />
            <div class="js720">
                <div class="yc_d1" style="border-right:none;">
                    <div class="yc_d11_2">
                        <p class="rightline"></p>
                        <p style="margin-left:15px;">修改密码</p>
                    </div>
                </div>
                <form id="registerForm" action="/user/modify2" method="post">
                    <input type="hidden" name="action" value="changepwd"/>
                    <div class="yc_d7">
                        <p class="clear"><span>旧密码：</span><input type="password" name="oldpwd" id="oldpwd" irequired="旧密码" regex=" /^\w{6,16}$/" range="6-16"/></p>
                        <p class="clear"><span>新密码：</span><input type="password" name="newpwd" id="newpwd" irequired="新密码" regex=" /^\w{6,16}$/" range="6-16"/></p>
                        <p class="clear"><span>确认新密码：</span><input type="password" name="newpwd2" id="newpwd2" irequired="确认密码" equalTo="newpwd"/></p>    
                        <p class="clear"><span>&nbsp;</span><input type="image" src="/images/conbtn10.gif" style="width:94px;height:26px;border:0"/></p>     
                    </div>
                </form>
            </div>
        </div>
        <!-- Content end -->
        <jsp:include page="/common/footer.jsp" /> 
        <!-- Bottom end -->
    </div>
</body>
</html>
