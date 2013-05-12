<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<!-- Top begin -->
<div class="top">
    <form action="/user/login" method="post" onsubmit="return checkLogin();">
        <div class="left logo"><img src="/images/logo.jpg" alt="" /></div>
        <c:choose>
        	<c:when test="${empty sessionScope.wid}">
        		<div class="right denglu">乐盟网欢迎您：<a id="loginimg" href="javascript:void();"><img src="/images/btndenglu.gif" alt="登录" align="absmiddle" onclick="showlogin();"/></a>&nbsp;或&nbsp;<a href="/regist/"><img src="/images/btnzhuce.gif" alt="注册" align="absmiddle" /></a></div> 
        	</c:when>
        	<c:otherwise>
        		<div class="right denglu f14">欢迎您，<a href="#" class="fontgreen"><c:out value="${sessionScope.username}"/></a> &nbsp;&nbsp;&nbsp;&nbsp;计费ID：<c:out value="${sessionScope.wid}"/> | <a href="/logout" class="fontgreen"><strong>[安全退出]</strong></a>  </div>
        	</c:otherwise>
        </c:choose>
        <div id="loginform" class="tcdl" style="display: none">
            <p><input id="username" name="username" type="text" value="请输入用户名" onclick="this.value='';"/></p>
            <p><input id="password" name="password" type="password" value="" /></p>
            <p>
                <input name="remember" type="checkbox" value="1" checked="checked" style="width:20px; border:none;"/>
                记住我
            </p>
            <p><input type="image" src="/images/btndenglu02.gif" style="width:60px;height:22px;border:0"/>&nbsp;<a href="javascript:void();" style="color:#4c9202">忘记密码?</a></p>
        </div>
    </form>
</div>
<!-- Top end -->


<script type="text/javascript">
    document.getElementById("username").focus();
    function checkLogin() {
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;
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
            // alert("用户名或密码错误, 请确认正确输入.");
            // return false;
        }
        return true;
    }
    function showlogin() {
        if (document.getElementById("loginform").style.display == "") {
            document.getElementById("loginform").style.display = "none";
        } else {
            document.getElementById("loginform").style.display = "";
        }
    }
    $(function() {
        document.onclick = function(e) {
            var ev = window.event || e;
            var srcElement = ev.srcElement || ev.target;
            var sObj = srcElement;
            var nclose = true;
            while (sObj.parentNode) {
                sObj = sObj.parentNode;
                var ss = sObj.id;
                if (typeof sObj.id != 'undefined' && (sObj.id == 'loginform' || sObj.id == 'loginimg')) {
                    nclose = false;
                    break;
                }
            }
            if (nclose)
                $('#loginform').hide();
        }
    });
</script>

<!-- 导航 begin -->
<div class="nav">
    <ul>
        <li><a href="/" class="">首页</a></li>
        <li><img src="/images/navdiv.gif" alt="" /></li>
        <li><a href="/user/index" class="">我的乐盟</a></li>
        <li><img src="/images/navdiv.gif" alt="" /></li>
        <li><a href="/user/index" class="">广告代码</a></li>
        <li><img src="/images/navdiv.gif" alt="" /></li>
        <li><a href="/newslist" class="">联盟新闻</a></li>
        <li><img src="/images/navdiv.gif" alt="" /></li>
        <li><a href="/faq" class="">常见问题</a></li>
        <li><img src="/images/navdiv.gif" alt="" /></li>
        <li><a href="/about" class="">关于我们</a></li>
    </ul>
</div>
<!-- 导航 end -->
