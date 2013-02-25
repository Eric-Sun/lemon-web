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
    <link rel="stylesheet" type="text/css" href="/js/tinybox/style.css" />
    <script type="text/javascript" src="/js/jquery.min.js" ></script>
    <script type="text/javascript" src="/js/tinybox/tinybox.js"></script>
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
                        <p style="margin-left:15px;">站点管理</p>
                    </div>
                </div>
                <div class="yc_d7">
                    <table width="100%" border="0" cellspacing="0" cellpadding="0" >
                        <tr>
                            <td width="20%" class="tit">合作编号</td>
                            <td width="20%" class="tit">网站名称</td>
                            <td width="20%" class="tit">域名</td>
                            <td width="20%" class="tit">状态</td>
                            <td width="20%" class="tit">加入时间</td>
                        </tr>
						<c:forEach var="dto" items="${siteList }">
                        <tr>
                            <td><c:out value="${sessionScope.wid }"/></td>
                            <td><c:out value="${dto.sitename }"/></td>
                            <td><c:out value="${dto.siteurl }"/></td>
                            <c:choose>
                            <c:when test="${dto.status =='1'}">
                            <td>正常</td>
                            </c:when>
                            <c:otherwise>
                            	<td>暂停</td>
                            </c:otherwise>
                            </c:choose>
                            <td><c:out value="${dto.createtime }"/><?= $row['']; ?></td>
                        </tr>
                        </c:forEach>	
                    </table>
                    <div class="lj"><a href="#" class="fontgreen" style="text-decoration:underline;" onclick="TINY.box.show({iframe:'/user/addsite.jsp',boxid:'frameless',width:530,height:400,fixed:false,maskclick:0})">添加站点&gt;&gt;</a></div>
                </div>
            </div>
        </div>
        <!-- Content end -->
        <jsp:include page="/common/footer.jsp" /> 
        <!-- Bottom end -->
    </div>
</body>
</html>
