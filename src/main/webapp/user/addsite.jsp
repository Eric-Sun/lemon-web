<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
<title>乐盟-用户注册</title>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<script type="text/javascript" src="/js/jquery.min.js" ></script>
<style type="text/css">
body{font-size:12px;}
.pd20{width:500px; padding:10px;}
.pd20 .zs{ padding:10px 0px; border-bottom:#CCCCCC dashed 1px; margin:10px 30px ;}
.pd20 p.p1{ line-height:35px;margin:10px 0px 10px 10px;}
.pd20 p.p1 input{ border:#18930c solid 1px; width:180px; height:21px; line-height:21px; margin-top:5px; }
.pd20 p.p1 span{ display:block; float:left; width:100px; line-height:35px; text-align:right;}
.pd20 p.p1 select{ border:#18930c solid 1px; width:80px; height:21px; line-height:21px; margin-top:8px; }
.pd20 p.tipcon{padding-left:30px;color:grey;}
.pd20 p.p2{padding-top:15px;padding-left:120px}
.pd20 p.p3{ line-height:35px;margin:20px 0px 50px 60px; font-size:14px; font-weight:bolder; color:#287a24;}
.pd20 p.p3 a:link,
.pd20 p.p3 a:visited{ font-size:18px; color:#bec300;}
.pd20 p.p4{ line-height:35px;margin:10px 0px 10px 30px;}
.pd20 p.p4 input{ border:#18930c solid 1px; width:180px; height:21px; line-height:21px;  }
.pd20 p.p4 span{ display:block; float:left; width:100px; line-height:35px; text-align:right; font-weight:bolder;}

.pd20 p.p4 span.regtip{display: inline;float: none;font-weight: normal;padding-left:5px;}

.pd20 p.p4 select{ border:#18930c solid 1px; width:80px; height:21px; line-height:21px;  }
</style>
<script type="text/javascript">
function isNull(str) {
    return (str==null || str.length == 0);
}

$(function(){

    $("#form1").submit(function(){
        var siteurl = $("#siteurl").val();
        var sitename = $("#sitename").val();
        var sitetype = $("#sitetype").val();
        var beian = $("#beian").val();
        if(isNull(siteurl)) {
            alert("请输入注册网站的域名!");
            return false;
        }
        if(isNull(sitename)) {
            alert("请输入注册网站名称!");
            return false;
        }
        if(isNull(beian)) {
            alert("请输入注册网站备案号!");
            return false;
        }
        if($("#vf_result").val() != "1"){
            alert("请验证你所填写的网站域名!");
            return false;
        }
        //alert("请验证你所填写的网站域名!");
        return true;
    });
});
</script>
</head>
<body>
<div class="wrap">
  <form id="form1" action="/user/createsite" method="post">
  <input type="hidden" id="vf_result" name="vf_result" value="1"/>
  <div class="pd20">
    <p class="p1" style="margin-top:30px;"><span>您的网站域名：</span>http://<input type="text" id="siteurl" name="siteurl" value=""  style="margin-top:0px;"/>&nbsp;<a href="#"><img id="vf_download" src="/images/conbtn01.gif" align="absmiddle" alt="下载验证文件" /></a>&nbsp;<a href="#"><img src="/images/conbtn02.gif" id="vf_verify" align="absmiddle" alt="验证网站是否可注册" /></a></p>
    <p class="tipcon">1.输入域名<br />
      2.下载验证文件<br />
      3.将验证文件放置于您所配置域名(如www.yoursite.com)的根目录下<br />
      4.验证网站可否注册<br />
     <span class="redlh">注意：如果网站的默认端口不为80，则在域名加上端口号，如yoursite.com:8080</span></p>
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
    <p class="p2"><input type="image" src="/images/conbtn03.gif" align="absmiddle" width="96" height="27" /></p>
  </div>
  </form>
</div>
</body>
</html>
