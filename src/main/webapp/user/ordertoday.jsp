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
<style type="text/css">
.yc_d7 p span {display:inline;float: none;width:auto;padding:4px 6px;margin:4px 2px;border:solid 2px #9aafe5;}
.yc_d7 p span.cur{
border:0px;
border-bottom:solid 1px #2e6ab1;
background:#2e6ab1;
color:#FFFFFF;
}
.yc_d7 p span a{
color:#0063e3;
}
</style>
</head>
<body>
    <div class="wrap">
        <jsp:include page="/common/header.jsp" /> 
        <div class="clear space"></div>
        <div class="gywm">
         <jsp:include page="/common/usermenu.jsp" /> 
            <div class="js720">
                <div class="yc_d1" style="border-right:none;">
                    <div class="yc_d11_2">
                        <p class="rightline"></p>
                        <p style="margin-left:15px;">
                                当日实时数据&nbsp;&nbsp;&nbsp;&nbsp;<img src="/images/conimg07.gif" align="absmiddle" alt="" />&nbsp;
当日收入合计： <span style="color:#ff6600; font-weight:bolder;">￥<c:out value="${income }"/></span>&nbsp;元 
                        </p>
                    </div>
                </div>
                <div class="yc_d7">
                    <p style="margin:0 0 10px 0;"><span class="cur">IVR 实时数据</span></p>
                    <table width="100%" border="0" cellspacing="0" cellpadding="0" >
                        <tr>
                            <td width="11%" class="tit">合作编号</td>
                            <td width="14%" class="tit">子账号</td>
                            <td width="17%" class="tit">IVR 号</td>
                            <td width="15%" class="tit">时长</td>
                            <td width="12%" class="tit">分成价格(元)</td>
                            <td width="23%" class="tit">订购时间</td>
                        </tr>
                        <c:forEach var="dto" items="${detailList}">
                        <tr>
                            <td><c:out value="${dto.wid }"/></td>
                            <td><c:out value="${dto.channel }"/></td>
                            <td><c:out value="${dto.orderdest }"/></td>
                            <td><c:out value="${dto.total }"/></td>
                            <td><c:out value="${dto.feeincome }"/></td>
                            <td><c:out value="${dto.subtime }"/></td>
                        </tr>
                        </c:forEach>
                    </table>
                </div>
            </div>
        </div>
        <jsp:include page="/common/footer.jsp" />
    </div>
</body>
</html>
