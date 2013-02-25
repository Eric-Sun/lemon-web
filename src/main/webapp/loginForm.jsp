
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%
	int err = new Integer(request.getParameter("err"));
	String errmsg = "";
	if (err != 0) {
	    errmsg = "<p class='zs'><img src='/images/conimg01.gif' align='absmiddle' />&nbsp;";
	    switch(err) {
	        case -1: errmsg += "您刚访问的页面需要登录才能操作，请先登录。"; break;
	        case 1: errmsg += "此用户正在审核中，如有疑问请联系客服。"; break;
	        case 2: errmsg += "用户名或密码错误。"; break;
	        case 3: errmsg += "此用户审核未通过，如有疑问请联系客服。"; break;
	        case 4: errmsg += "此用户已暂停使用，如有疑问请联系客服。"; break;
	        default: errmsg += "登陆失败，如有疑问请联系客服。";
	    }
	    errmsg += "</p>";
	}

%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-type" content="text/html; charset=utf-8" />
    <title>乐盟-无线营销第一品牌</title>
    <meta name="keywords" content="广告联盟,网络广告,网站联盟,无线联盟,短信联盟,乐盟,lemon001,lemon" />
    <meta name="description" content="乐盟(lemon001.com)始终以学术态度在技术、产品、服务上不断优化、创新，以好产品、高收入为中国站长的成长助力" />
    <link rel="stylesheet" type="text/css" href="css/style.css" />
    <script type="text/javascript" src="js/jquery.min.js" ></script>
    <script type="text/javascript">
        function checklogin2(){
            var username = document.getElementById("username2").value;
            var password = document.getElementById("password2").value;
            if (!username || !password) {
                alert("请输入用户名和密码!");
                return false;
            } else {
                if (username.length < 4 || username.length > 15) {
                    alert("请输入正确的用户名!");
                    return false;
                }
                if (password.length < 4 || password.length > 15) {
                    alert("请输入正确的密码!");
                    return false;
                }
                return true;
            }
        }
    </script>
</head>
<body>
    <div class="wrap">
    <jsp:include page="common/header.jsp" /> 
        <form id="loginform" action="/user/login" method="post" onsubmit="return checklogin2();">
            <div class="pd20">
                <%=errmsg %>
                <p class="p3" >还没有乐盟账号？<a href="/regist/">马上注册&gt;&gt;</a></p>
                <p class="p1 clear" style="margin-bottom:20px;"><span>用户名：</span><input name="username" id="username2" type="text" size="20" /></p>
                <p class="p1 clear"><span>密码：</span><input name="password" id="password2" type="password" size="20" /></p>
                <p class="p2" style="padding:10px 0px 60px 0px;"><input type="image" src="/images/conbtn04.gif" style="width:95px;height:26px;border:0;" value="登  陆" />&nbsp;<a href="javascript:void(0);">忘记密码？</a></p>
            </div>
        </form>
        <jsp:include page="common/footer.jsp" />
    </div>
    <script type="text/javascript">document.getElementById("username2").focus();</script>
</body>
</html>
