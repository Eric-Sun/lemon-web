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
                        <p style="margin-left:15px;">个人信息</p>
                    </div>
                </div>
                <form id="registerForm" action="/user/modify1" method="post">
                    <div class="yc_d7">
                        <p><span>身份证号：</span><c:out value="${dto.identity }"/></p>
                        <p class="clear"><span>EMAIL：</span><c:out value="${dto.email }"/></p>
                        <p class="clear">
                            <span>手机号码：</span>
                            <input id="mobile" name="mobile" maxLength="12" value="<c:out value="${dto.mobile }"/>" regtype="mobile" irequired="手机号"/>
                        </p>
                        <p class="clear">
                            <span>固定电话：</span>
                            <input type="text" value="<c:out value="${dto.telephone }"/>" name="telephone" id="telephone" regtype="phone"/>
                        </p>
                        <p class="clear">
                            <span>QQ：</span>
                            <input id="qq" name="qq" value="<c:out value="${dto.qq }"/>" maxlength="12" regex="/^\d{6,12}$/" irequired="QQ号"/>
                        </p>
                        <p class="clear">
                            <span>真实姓名：</span>
                            <input id="truename" name="truename" value="<c:out value="${dto.truename }"/>" type="text" irequired="真实姓名" regex="/^[\u4e00-\u9fa5]{2,10}$/" maxlength="10"/>
                        </p>
                        <p class="clear"><span>联系地址：</span><input id="address" name="address" value="<c:out value="${dto.address }"/>" maxLength="100" irequired="联系地址" /></p>
                        <p class="clear"><span>&nbsp;</span><input type="image" src="/images/conbtn08.gif" style="width:95px;height:26px;border:0"/></p>
                    </div>
                </form>
                <div class="clear" style="margin-bottom:50px;"></div>
            </div>
        </div>
        <!-- Content end -->
         <jsp:include page="/common/footer.jsp" /> 
        <!-- Bottom end -->
    </div>
</body>
</html>
