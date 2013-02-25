<%@page import="org.lemon.web.util.Requests"%>
<%@page import="java.util.Date"%>
<%@page import="org.lemon.lang.Strings"%>
<%@page import="java.util.Map"%>
<%@page import="java.sql.Connection"%>
<%@page import="org.lemon.dao.jdbc.DbConnectionManager"%>
<%@page import="org.lemon.dao.jdbc.DbUtils"%>
<%@page import="org.lemon.lang.dtime.Dates"%>
<%@page import="com.lemon.service.WebownerService"%>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%
Map<String, String> webowner = WebownerService.getLoginUser(request, response);
if(webowner == null || webowner.size() == 0) {
    response.sendRedirect("/?err=-1");
    return;
}
int wid = Strings.parseInt(webowner.get("wid"));
String subdate = Dates.getShortNow();
String yesterday = Dates.format(Dates.addDay(new Date(), -1), Dates.FORMAT_SHORT);
//当日合计
String totalincome = Strings.trimFloat(DbUtils.getValue("select sum(feeincome) as feeincome from lez_ivr_detail where wid = ? and feeflag = 1 and subtime >= ?", wid, subdate));


int pageNo = Requests.getIntParm(request, "pageNo");
int pageSize = 15;
String catalogid = "1";
if(pageNo < 1 || pageNo > 10) {
  pageNo = 1;
}
int prevPage = pageNo == 1 ? 1 : pageNo-1;
int start = (pageNo-1) * pageSize;
String[][] result = DbUtils.getResultSetArray("select channel, orderdest, total, feeincome, subtime from lez_ivr_detail where wid = ? and subtime >= ? and 1 <> 1 order by subtime desc limit ?, ?", wid, subdate, start, pageSize);
%>
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
  <!-- Top begin -->
  <jsp:include page="/common/header.jsp" flush="true"><jsp:param value="2" name="menutype"/></jsp:include>
  <div class="clear space"></div>
  <!-- Content begin -->
  <div class="gywm">
    <jsp:include page="/common/usermenu.jsp" flush="true"><jsp:param value="2" name="menutype"/></jsp:include>
    <div class="js720">
      <div class="yc_d1" style="border-right:none;">
        <div class="yc_d11_2">
          <p class="rightline"></p>
          <p style="margin-left:15px;">
                                当日实时数据&nbsp;&nbsp;&nbsp;&nbsp;<img src="/images/conimg07.gif" align="absmiddle" alt="" />&nbsp;
                                当日收入合计： <span style="color:#ff6600; font-weight:bolder;">￥<%=totalincome %></span>&nbsp;元 
          </p>
        </div>
      </div>
      <div class="yc_d7">
        <p style="margin:0 0 10px 0;"><span class="cur">短信实时数据</span><span><a href="/user/ordertoday">IVR实时数据</a></span></p>
        <table width="100%" border="0" cellspacing="0" cellpadding="0" >
          <tr>
            <td width="7%" class="tit">序号</td>
            <td width="11%" class="tit">合作编号</td>
            <td width="14%" class="tit">子账号</td>
            <td width="17%" class="tit">计费号码</td>
            <td width="15%" class="tit">产品名称</td>
            <td width="12%" class="tit">分成价格(元)</td>
            <td width="23%" class="tit">订购时间</td>
          </tr>
          <%
           if(result != null && result.length > 0) {
               for(int i = 0; i < result.length; i++) {
                   String[] order = result[i];
          %>
          <tr>
            <td><%=start + i+1 %></td>
            <td><%=wid %></td>
            <td><%=order[0] %></td>
            <td><%=order[1] %></td>
            <td><%=order[2] %></td>
            <td><%=order[3] %></td>
            <td><%=order[4] %></td>
          </tr>
          <%}} %>
        </table>
        <% if(result != null && result.length > 0) {%>
                <p class="fy"><a href="?pageNo=<%=prevPage%>">上一页</a>&nbsp;&nbsp;<a href="?pageNo=<%=pageNo+1%>">下一页</a></p>
        <%} %>
      </div>
    </div>
  </div>
  <!-- Content end -->
  <jsp:include page="/common/footer.jsp" flush="true"></jsp:include>
  <!-- Bottom end -->
</div>
</body>
</html>