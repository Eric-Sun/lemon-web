<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>

<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<base href="<%=basePath%>">
    <meta http-equiv="Content-type" content="text/html; charset=utf-8" />
    <title>乐盟-无线营销第一品牌</title>
    <meta name="keywords" content="广告联盟,网络广告,网站联盟,无线联盟,短信联盟,乐盟,lemon001,lemon" />
    <meta name="description" content="乐盟(lemon001.com)始终以学术态度在技术、产品、服务上不断优化、创新，以好产品、高收入为中国站长的成长助力" />
    <link rel="stylesheet" type="text/css" href="css/style.css" />
    <link rel="stylesheet" type="text/css" media="all" href="/css/js.css" />
    <script type="text/javascript" src="/js/jquery.min.js"></script>
    <script>
        function setTab(name, cursel, n) {
            for (i = 1; i <= n; i++) {
                var menu = document.getElementById(name + i);
                var con = document.getElementById("con_" + name + "_" + i);
                menu.className = (i == cursel ? "hover" : "");
                con.style.display = (i == cursel ? "block" : "none");
            }
        }
    </script>
</head>
<body>
    <div class="wrap">
        <jsp:include page="common/header.jsp" /> 
        <!-- Content begin -->
        <div class="xwlby">
            <div class="clear space"></div>
            <img src="images/bar01.jpg" alt="" />
            <div class="clear space"></div>
            <!-- Content begin -->
            <div class="xwlbylist">
                <p>当前位置：<a href="#" style="color:#bec300;">首页</a> &gt; 联盟新闻</p>
                <ul>
                	<c:forEach var="news" items="${list}">
                    <li>
                        <span><c:out value="${news.createtime }"/></span>
                          <c:choose>
                                    <c:when test="${news.flag>0}">
                                       <a href="news?id=<c:out value='${ news.id}'/>" target="_blank" style="color: red; font-weight: bold" ><c:out value="${news.title }"/></a>
                                    </c:when>
                                    <c:otherwise>
                                    	<a href="news?id=<c:out value='${ news.id}'/>" target="_blank" ><c:out value="${news.title }"/></a>
                                    </c:otherwise>
                          </c:choose>
                        <p><c:out value=" ${fn:substring(news.brief,0 ,39 )}..."/></p>
                    </li>
                    <li style="background:none; padding:0px; margin:0px;"><img src="images/line01.gif" alt="" /></li>
                    </c:forEach>
                </ul>
            </div>
            <!-- 右侧客服信息开始 -->
            <div class="kfxx2">
                <img src="images/img5.jpg" alt=""/>
                <div class="tpsc">
                    <div class="tpsc_title title01" style="border-bottom:none; padding-left:0px;">
                        <ul>
                            <li id="ss1" onclick="setTab('ss', 1, 2)" class="hover"><span>商务</span></li>
                            <li id="ss2" onclick="setTab('ss', 2, 2)"><span>客服</span></li>
                        </ul>
                    </div>
                    <div id="con_ss_1" class="tpsc_con con02">
                        <c:out value="${kf.content }" escapeXml="false"/>
                    </div>
                    <div id="con_ss_2" class="tpsc_con con02" style="display:none">
                       <c:out value="${kf.content }" escapeXml="false"/>
                    </div>
                </div>
            </div>
            <!-- 右侧客服信息结束-->
        </div>
        <!-- Content end -->
      <jsp:include page="common/footer.jsp" /> 
        <!-- Bottom end -->
    </div>
</body>
</html>
