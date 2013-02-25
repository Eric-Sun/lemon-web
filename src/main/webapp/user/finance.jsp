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
                        <p style="margin-left:15px;">银行信息</p>
                    </div>
                </div>
                <div class="yc_d7">
                    <p><span>收款行开户姓名：</span><c:out value="${dto.account }"/></p>
                    <p><span>收款银行帐号：</span><c:out value="${dto.bankcard }"/></p>
                    <p><span>收款开户银行：</span><c:out value="${dto.banktype }"/></p>
                    <p><span>收款银行所在省份：</span><c:out value="${dto.province }"/></p>
                    <p><span>收款银行所在市：</span><c:out value="${dto.city }"/></p>
                    <p><span>收款银行详细地址：</span><c:out value="${dto.bankaddr }"/></p>
                </div>
            </div>
        </div>
        <!-- Content end -->
        <jsp:include page="/common/footer.jsp" />
        <!-- Bottom end -->
    </div>
</body>
</html>
