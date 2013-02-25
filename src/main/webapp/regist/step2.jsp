<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%
	String siteurl = request.getParameter("siteurl");
	String sitename = request.getParameter("sitename");
	int sitetype = new Integer(request.getParameter("sitetype"));
	String beian = request.getParameter("beian");

    String[] types = {"音乐","影视","网址大全","影视宽带","图片网站","爱情交友","企业网站","电脑网络","体育运动","聊天论坛","财经证券","足彩博彩","网络游戏","明星美女","娱乐八卦","星相命理","动漫卡通","幽默笑话","硬件资讯","软件下载","文学小说","教育培训","医疗保健","两性生活","生活服务","网上购物","综合网站","其他"};
%>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-type" content="text/html; charset=utf-8" />
    <title>乐盟-用户注册</title>
    <link rel="stylesheet" type="text/css" href="/css/style.css" />
    <link rel="stylesheet" type="text/css" href="/css/js.css"  />
    <script type="text/javascript" src="/js/jquery.min.js" ></script>
    <script type="text/javascript" src="/js/jquery.validatelus.js"></script>
    <script type="text/javascript" src="/js/country.js"></script>
    <style type="text/css">
        .pd20 p.p4 span.regerror{ display: inline; float: none;font-weight: normal;font-size:12px;  margin-left:8px; height:24px; background:url(/images/ico_error.gif) no-repeat left center; color:red; padding-left:20px;}
        .pd20 p.p4 span.regright{ display: inline; float: none;font-weight: normal;  margin-left:8px; width: 14px; height:24px; background:url(/images/ico_right.gif) no-repeat 0 center;padding-left:20px;}
    </style>
    <script type="text/javascript">
        var s = ["dsy_province", "dsy_city"];
        var opt0 = ["请选择省份", "请选择城市"];
        function setup() {
            for (var i = 0; i < s.length - 1; i++)
                document.getElementById(s[i]).onchange = new Function("dsy.change(" + (i + 1) + ")");
            dsy.change(0);
        }
        $(function() {
            $("#registerForm").validatelus({ tipcss: 'regtip', errcss: 'regerror', rightcss: 'regright', callback: function() {
                var serviceguide = $("#serviceguide");
                if (typeof(serviceguide.attr("id")) != "undefined" && !serviceguide.attr("checked")) {
                    alert("请勾选阅读协仪条款!");
                    return false;
                }
            }});
            setup();
        });
    </script>
</head>
<body>
    <div class="wrap">
        <!-- Top begin -->
        <jsp:include page="/common/header.jsp" />
        <!-- 导航 end -->
        <div class="clear space"></div>
        <!-- Content begin -->
        <div class="pd20">
            <form id="registerForm" action="/register" method="post">
                <input type="hidden" value="<%=siteurl %>" name="siteurl"/>
                <input type="hidden" value="<%=sitename %>" name="sitename"/>
                <input type="hidden" value="<%=sitetype %>" name="sitetype"/>
                <div style="padding: 0px 0px 10px 0px;">
                    <p class="zs" style="font-weight: bolder; color: #FF0000;"><img src="/images/conimg02.gif" alt="" align="absmiddle" />&nbsp;用户信息*</p>
                    <p class="p4 clear">
                        <span>你的登陆名：</span>
                        <input type="text" maxlength="15" id="username2" name="username"  irequired="登录名" regex="/^[0-9a-zA-Z\-_]{4,15}$/" range="4-15" ajax="verify?type=2" />
                        <span class="regtip">用户名由 4~15 位之内的数字、下划线、英文字母组成（此信息填写后不能随意更改）</span>
                    </p>
                    <p class="p4 clear">
                        <span>输入登录密码：</span>
                        <input id="password3" name="password" type="password" irequired="密码" regex="/^\w{6,16}$/" range="6-16"/>
                        <span class="regtip">密码长度为 6~16 位，区分字母大小写。密码可以由字母、数字和特殊字符组成</span>
                    </p>
                    <p class="p4 clear"><span>再次输入密码：</span>
                        <input id="password4" name="password2" type="password" irequired="确认密码" equalto="password3" />
                        <span class="regtip">确认您的登录密码</span>
                    </p>
                </div>
                <div style="padding: 10px 0px;">
                    <p class="zs" style="font-weight: bolder; color: #FF0000;"><img src="/images/conimg03.gif" alt="" align="absmiddle" />&nbsp;网站信息*</p>
                    <p class="p4 clear"><span>网站名称：</span>&nbsp;<%=siteurl %>  </p>
                    <p class="p4 clear"><span>网站地址：</span>&nbsp;<%=sitename %> </p>
                    <p class="p4 clear"><span>网站类别：</span>&nbsp;<%=sitetype %></p>
                    <p class="p4 clear"><span>网站备案号：</span>&nbsp;<%=beian %></p>
                </div>
                <div style="padding: 10px 0px;">
                    <p class="zs" style="font-weight: bolder; color: #FF0000;">
                        <img src="/images/conimg04.gif" alt="" align="absmiddle" />&nbsp;用户信息*
                    </p>
                    <p class="p4 clear">
                        <span>您真实姓名：</span>
                        <input id="truename" name="truename" type="text" irequired="真实姓名" regex="/^[\u4e00-\u9fa5]{2,10}$/" maxlength="10" />
                        <span class="regtip">确认您身份的重要信息，请填写正确的姓名(此信息填写后不能随意更改，更改请联系我们客服)</span>
                    </p>
                    <p class="p4 clear">
                        <span>性别：</span>
                        <input type="radio" class="radio" name="gender" value="1" style="width: 25px; border: none;" checked="checked"/>男&nbsp;
                        <input type="radio" class="radio" name="gender" value="0" style="width: 25px; border: none;"/> 女
                        <span class="regtip">请选择您的性别(此信息填写后不能随意更改，更改请联系我们客服)</span>
                    </p>
                    <p class="p4 clear">
                        <span>身份证号：</span>
                        <input  id="identity" name="identity" type="text" irequired="身份证" regex="/^\d{15}(\d{2}[0-9X])?$/" />
                        <span class="regtip">确认收款人身份的重要信息，请填写正确的身份证号码(此信息填写后不能随意更改，更改请联系我们客服)</span>
                    </p>
                    <p class="p4 clear">
                        <span>付款方式：</span>
                        <select name="banktype">
                            <option value="1">招商银行</option>
                            <option value="2">工商银行</option>
                            <option value="3">农业银行</option>
                            <option value="4">建设银行</option>
                        </select>
                        <span class="regtip">收入结算通过《招商银行》支付，如无招行帐户，将采取跨行支付（跨行汇款会延期到帐) 推荐使用招商银行</span>
                    </p>
                    <p class="p4 clear">
                        <span>开户卡号：</span>
                        <input id="bankcard" name="bankcard" regex="/^\d{6,20}$/" irequired="开户卡号" />
                        <span class="regtip">请填写正确的银行卡号（此信息填写后不能随意更改，更改请联系我们客服）</span>
                    </p>
                    <p class="p4 clear">
                        <span>开户省市：</span>
                        <select id="dsy_province" name="province" style="width: 100px;" regtype="select">
                            <option value="">请选择</option>
                        </select>
                        <select id="dsy_city" name="city" style="width: 100px;" regtype="select">
                            <option value="">请选择</option>
                        </select>
                        <span class="regtip">请选择开户所在省市(此信息填写后不能随意更改，更改请联系我们客服)</span>
                    </p>
                    <p class="p4 clear">
                        <span>银行详细地址：</span>
                        <input id="bankaddr" name="bankaddr" regex="/^[\u4e00-\u9fa5]{1,25}$/" irequired="银行详细地址" />
                        <span class="regtip">请填写你的银行详细地址, 包括省市部分.</span>
                    </p>
                    <p class="p4 clear">
                        <span>开户人姓名：</span>
                        <input id="account" name="account" regex="/^[\u4e00-\u9fa5]{2,}$/" irequired="开户人姓名" />
                        <span class="regtip">请填写您的银行开户名(此信息填写后不能随意更改，更改请联系我们客服)</span>
                    </p>
                    <p class="p4 clear">
                        <span>您的邮箱：</span>
                        <input id="email" name="email" regtype="email" irequired="邮箱" />
                        <span class="regtip">请您正确填写邮箱，以便于及时接收『乐盟』的重要通知</span>
                    </p>
                    <p class="p4 clear">
                        <span>您的 QQ：</span>
                        <input id="qq" name="qq" maxlength="12" regex="/^\d{6,12}$/" irequired="QQ号"/>
                        <span class="regtip">请您正确填写QQ号码，方便我们和您及时的沟通信息</span>
                    </p>
                    <p class="p4 clear">
                        <span>手机号码：</span>
                        <input id="mobile" name="mobile" maxlength="12" regtype="mobile" irequired="手机号"/>
                        <span class="regtip">请填写您的手机号码，信息非常重要，如信息不真实造成联系不到本人后果自担</span>
                    </p>
                    <p class="p4 clear">
                        <span>联系地址：</span>
                        <input id="address" name="address" maxlength="100" irequired="联系地址" />
                        <span class="regtip">请填写您的联系地址，方便我们与您取得联系</span>
                    </p>
                    <p class="p4">
                        <span>&nbsp;</span>
                        <input type="checkbox" id="serviceguide" style="width: 25px; border: none;" /><label for="serviceguide">我已经阅读并接受『乐盟』合作条款</label>
                    </p>
                    <p class="p4" style="margin: 30px;">
                        <span>&nbsp;</span>
                        <input type="image" src="/images/conbtn05.gif" style="width:96px;height:27px;border:0"/>
                    </p>
                </div>
            </form>
        </div>
    <!-- Content end -->
    <jsp:include page="/common/footer.jsp" />
    <!-- Bottom end -->
    </div>
</body>
</html>
