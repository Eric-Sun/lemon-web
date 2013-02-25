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
    <link rel="stylesheet" type="text/css" media="all" href="css/js.css"  />
    <script type="text/javascript" src="/js/jquery.min.js" ></script>
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
                <p>当前位置：<a href="#" style="color:#bec300;">首页</a>&nbsp;&gt;&nbsp;联盟新闻</p>
            </div>
            <div class="clear xwwzy xwcon">
                <p class="title"><c:out value="${LemNewsDTO.title }" />
                <div class="con"><c:out value="${LemNewsDTO.content }" escapeXml="false"/></div>
                <p class="ly">发布人:乐盟运营部  发布时间:<c:out value="${LemNewsDTO.createtime }" /></p>
            </div>
        </div>
        <!-- Content end -->
        <jsp:include page="common/footer.jsp" /> 
        <!-- Bottom end -->
    </div>
</body>
</html>
