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
    <link rel="stylesheet" type="text/css" media="all" href="/css/js.css"  />
    <script type="text/javascript" src="js/jquery.min.js" ></script>
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
                <p>当前位置：<a href="index.php" style="color:#bec300;">首页</a>&nbsp;&gt;&nbsp;常见问题</p>
            </div>
            <div class="clear xwwzy" style="background:none; margin-bottom:20px;">
                <p class="title" style="text-align:left;">关于诺基亚手机软件兼容的资讯</p>
                <p class="con"><strong><a name="1">1、如何加入乐盟</a></strong> <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;1)登录http://www.lemon001.com注册，需要审核通过，才能开通账号提取广告代码； <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;2)注册后您将获得在乐盟唯一的计费ID、用户名和密码，注意牢记和保密； <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;3)点击“产品代码”，选择适合您网站的尺寸及风格的广告代码；<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;4)将广告代码添加在您网站适宜的位置；<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;5)点击当天实时数据随时了解自己的用户及收入情况 ；<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;6)提供满100元结算，不扣量、不扣税的将您所得佣金汇至您的账户。乐盟，站长首选联盟<br/>
                </p>
                <p class="con"><strong><a name="2">2、我有多个网站，可以同时投放广告吗？</a></strong> <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;可以，但是每个网站都必须通过乐盟的网站验证以及审核，否则广告代码无法显示或不计收益。<br/>
                </p>
                <p class="con"><strong><a name="3">3、网站主作弊行为判断标准？ </a></strong><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;所有非正常投放均属于作弊，包括但不限于：以任何语言或者形式诱导、误导、要求或强制访问者进行订购，在乐盟不允许投放的站点投放等。一经发现作弊即终止合作，扣除佣金，并不排除进一步追究当事人法律责任。<br/>
                </p>
                <p class="con"><strong><a name="4">4、如何验证网站？</a></strong><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;将下载的验证文件上传至您网站的根目录，提交审核后，审核专员会在24小时内审核，若长时间未通过，可咨询审核qq：1845444928<br/>
                </p>
                <p class="con"><strong><a name="5">收入和结算类问题须知 </a></strong><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;A )乐盟是怎么结算的： <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;按自然周结算，每周一至周日，为一个结算周期。当您帐户中的应付佣金超过人民币100元（含100元），我们会在次周的周一下午17:30前通过招行银行转账方式支付给您。为了您实时收到佣金，建议您使用招行卡。使用非招行一般到帐会比支付时间晚2-3个工作日，请您耐心等待 <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;B )我的收款信息需要修改，为何后台修改不了？ <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;为了确保会员的佣金安全，收款信息都须由我们的工作人员经过核实后方能修改，故请联系我们的客服人员电话：010-59705361或QQ：1845444928为您修改。<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;C )乐盟的数据是实时的吗？ <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;是实时的，您可以通过点击我的乐盟当天实时数据查看当天的收益。<br/>
                </p>
                <p class="con"> <strong><a name="6">广告代码类常见问题</a></strong> <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;我想区分不同广告位的广告效果，怎么办啊？ <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;使用子账号功能即可满足您的这一要求， <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;1、请先登记您的子帐号,子帐号使用数字标识.<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;2、替换广告代码里channel参数.channel 为乐盟分辨各个子帐号参数(默认为1).<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<span class="redlh">(您可以在乐盟的后台查看到每一个子账号带来的收益。如在使用过程遇到问题请联系客服qq：1845444928)</span><br/>
                </p>
                <p class="con"><strong><a name="7">我可以自己更改代码尺寸吗？ </a></strong><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;可以缩小尺寸使用，但是尺寸不要变化太多，以免影响代码美观。如有特殊尺寸需要，请联系乐盟的工作人员。<br/>
                </p>
                <p class="con"><strong><a name="8">安全和违规常见问题</a></strong> <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;一、乐盟严禁合作伙伴有 “欺诈注册”、“短信群发”、“刷卡自消费”等现象，请各合作伙伴自重，一经发现，将终止合作并扣发佣金以及配合相关部门查证。<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(1)表现行为：利用免费、求职招聘、色情页面、电影下载、人体艺术、聊天、会员注册、低价、Q币、Q号等误导欺诈用户注册，利用各类短信群发设备群发短信误导用户注册，购买手机卡自行注册等。<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(2)05年至今，国内司法机关对上述行为以诈骗、盗窃罪已处理过多起案件，请勿以身试法，乐盟提倡君子爱财取之有道！<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="redlh">（注：以每条2元资费来说，你分成到500元，实际扣用户1000元，你已经触犯了刑法，可判有期徒刑3－7年）</span> <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;二、恶意修改广告代码及使用其他方式作弊者，一经发现，将终止合作并扣发佣金。<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;三、乐盟自上线之日起，就本着健康网络营销理念，愿与踏实发展的站长一起开创美好的网络广告前景！<br/>
                </p>
            </div>
        </div>
        <!-- Content end -->
        <jsp:include page="common/footer.jsp" />
        <!-- Bottom end -->
    </div>
</body>
</html>
