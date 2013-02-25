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
    <script type="text/javascript" src="js/jquery.min.js" ></script>
    <script>
        $(function() {
            $("#menulist a").click(function() {
                var id = $(this).attr("refid");
                $("#menulist a").removeClass("cur");
                $(this).addClass("cur");
                $(".js720").hide();
                $("#" + id).show();
            });
        });
    </script>
</head>

<body>
    <div class="wrap">
        <jsp:include page="/common/header.jsp" ></jsp:include>
        <div class="clear space"></div>
        <!-- Content begin -->
        <div class="gywm">
            <div class="js230">
                <div class="zc_d1"><img src="images/gsjs.jpg" /></div>
                <div id="menulist" class="zc_d2">
                    <a href="javascript:void(0);" class="cur" refid="aboutus"><span>关于乐盟</span></a>
                    <a href="javascript:void(0);" refid="customer"><span>客服中心</span></a>
                    <a href="javascript:void(0);" refid="service"><span>服务条款</span></a>
                    <a href="javascript:void(0);" refid="cooperation"><span>商务合作</span></a>
                </div>
                <div class="zc_d2"><img src="images/bottom.jpg"></div>
            </div>

            <div id="aboutus" class="js720">
                <div class="yc_d1">
                    <div class="yc_d11"><a href="#" style="color:#bec300">关于我们</a> &gt;&gt; 关于乐盟</div>
                </div>
                <div class="yc_d2">
                	<c:out value="${AboutDTO.aboutUs}" escapeXml="false"/>
                    <p class="picbg01"></p>
                </div>
            </div>

            <div id="customer" class="js720" style="display:none;">
                <div class="yc_d1">
                    <div class="yc_d11"><a href="#" style="color:#bec300">关于我们</a> &gt;&gt; 客服中心</div>
                </div>
                <div class="yc_d2" style="padding-left:10px;">
                <c:out value="${AboutDTO.customer}"  escapeXml="false"/>
                    <p class="picbg02"></p>
                </div>
            </div>

            <div id="service" class="js720" style="display:none;">
                <div class="yc_d1">
                    <div class="yc_d11"><a href="#" style="color:#bec300">关于我们</a> &gt;&gt; 服务条款</div>
                </div>
                <div class="yc_d2" style="padding-left:10px;">
                <c:out value="${AboutDTO.services} "  escapeXml="false"/> 
                </div>
            </div>

            <div id="cooperation" class="js720" style="display:none;">
                <div class="yc_d1">
                    <div class="yc_d11"><a href="#" style="color:#bec300">关于我们</a> &gt;&gt; 商务合作</div>
                </div>
                <div class="yc_d2">
                 <c:out value="${AboutDTO.cooperation}"  escapeXml="false"/>
                    <p class="picbg01"></p>
                </div>
            </div>
        </div>
        <!-- Content end -->
        <jsp:include page="common/footer.jsp" ></jsp:include>
        <!-- Bottom end -->
    </div>
</body>
</html>
