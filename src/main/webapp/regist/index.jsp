<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>


<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <title>乐盟-用户注册</title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <link rel="stylesheet" type="text/css" href="/css/style.css" />
    <link rel="stylesheet" type="text/css" media="all" href="/css/js.css" />
    <script type="text/javascript" src="js/jquery.min.js" ></script>
    <script type="text/javascript">
        function isNull(str) {
            return (str == null || str.length == 0);
        }

        $(function() {
            $("#form1").submit(function() {
                var siteurl = $("#siteurl").val();
                var sitename = $("#sitename").val();
                var sitetype = $("#sitetype").val();
                var beian = $("#beian").val();
                if (isNull(siteurl)) {
                    alert("请输入注册网站的域名!");
                    return false;
                }
                if (isNull(sitename)) {
                    alert("请输入注册网站名称!");
                    return false;
                }
                if (isNull(beian)) {
                    alert("请输入注册网站备案号!");
                    return false;
                }
                return true;
            });
        });
    </script>
</head>
<body>
    <div class="wrap">
        <!-- Top begin -->
        <jsp:include page="/common/header.jsp" />
        <div class="clear space"></div>
        <!-- Content begin -->
        <form id="form1" action="/regist/step2"  >
            <input type="hidden" id="vf_result" name="vf_result" value="1" />
            <div class="pd20">
                <p class="zs"><img src="images/conimg01.gif" alt="" />&nbsp;友情提示：为保护您的权益，请先对您的网站进行验证，才能继续注册！</p>
                <p class="p1" style="margin-top:50px;"><span>您的网站域名：</span>http://<input type="text" id="siteurl" name="siteurl" value=""  style="margin-top:0px;"/>&nbsp;<a href="#"><img id="vf_download" src="/images/conbtn01.gif" align="absmiddle" alt="下载验证文件" /></a>&nbsp;<a href="#"><img src="/images/conbtn02.gif" id="vf_verify" align="absmiddle" alt="验证网站是否可注册" /></a></p>
                <p class="p2">
                    1. 输入域名<br />
                    2. 下载验证文件<br />
                    3. 将验证文件放置于您所配置域名（如 www.yoursite.com）的根目录下<br />
                    4. 验证网站可否注册<br />
                    <span class="redlh">注意：如果网站的默认端口不为 80，则在域名加上端口号，如 www.yoursite.com:8080</span>
                </p>
                <p class="p1 clear"><span>您的网站名称：</span><input type="text" id="sitename" name="sitename" value="" /></p>
                <p class="p1 clear"><span>您的网站类型：</span> 
                    <select id="sitetype" name="sitetype">
                        <option value="1" selected>音乐&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</option>
                        <option value="2">影视</option>
                        <option value="3">网址大全</option>
                        <option value="4">影视宽带</option>
                        <option value="5">图片网站</option>
                        <option value="6">爱情交友</option>
                        <option value="7">企业网站</option>
                        <option value="8">电脑网络</option>
                        <option value="9">体育运动</option>
                        <option value="10">聊天论坛</option>
                        <option value="11">财经证券</option>
                        <option value="12">足彩博彩</option>
                        <option value="13">网络游戏</option>
                        <option value="14">明星美女</option>
                        <option value="15">娱乐八卦</option>
                        <option value="16">星相命理</option>
                        <option value="17">动漫卡通</option>
                        <option value="18">幽默笑话</option>
                        <option value="19">硬件资讯</option>
                        <option value="20">软件下载</option>
                        <option value="21">文学小说</option>
                        <option value="22">教育培训</option>
                        <option value="23">医疗保健</option>
                        <option value="24">两性生活</option>
                        <option value="25">生活服务</option>
                        <option value="26">网上购物</option>
                        <option value="27">综合网站</option>
                        <option value="28">其他</option>
                    </select>
                </p>
                <p class="p1 clear"><span>您的网站备案号：</span><input type="text" id="beian" name="beian" value="" /></p>
                <p class="p2" style="padding:10px 0px 30px 0px;"><input type="image" src="/images/conbtn03.gif" align="absmiddle" width="96" height="27" /></p>
            </div>
        </form>
        <!-- Content end -->
       <jsp:include page="/common/footer.jsp" />
        <!-- Bottom end -->
    </div>
</body>
</html>
