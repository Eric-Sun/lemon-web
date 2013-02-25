<%@page import="org.lemon.web.util.Requests"%>
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
    response.sendRedirect("/login?err=-1");
    return;
}
int wid = Strings.parseInt(webowner.get("wid"));
String subdate = Dates.getShortNow();
//合计
String showincome = Strings.trimFloat(DbUtils.getValue("select sum(showincome) as showincome from lez_webowner_bill where wid = ? and payflag = 0", wid));

int pageNo = Requests.getIntParm(request, "pageNo");
int pageSize = 15;
String catalogid = "1";
if(pageNo < 1 || pageNo > 10) {
  pageNo = 1;
}
int prevPage = pageNo == 1 ? 1 : pageNo-1;
int start = (pageNo-1) * pageSize;
String[][] result = DbUtils.getResultSetArray("select billdate, showcount, showincome, payflag, paytime from lez_webowner_bill where wid = ? order by subtime desc limit ?, ?", wid, start, pageSize);
%>
<html>
<head>
<title>我的乐盟</title>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<link href="/css/css.css" rel="stylesheet" type="text/css">
<script type="text/javascript" src="/js/jquery.js"></script>
<script type="text/javascript">
$(function(){
});
</script>
</head>
<body>
<table width="1003" border="0" align="center" cellpadding="0" cellspacing="0">
  <jsp:include page="/common/header.jsp" flush="true"><jsp:param value="2" name="menutype"/></jsp:include>
  <tr class="bgpic">
    <td height="558" valign="top">
    <table width="932" border="0" align="center" cellpadding="0" cellspacing="0">
      <tr>
        <td valign="middle">
        <jsp:include page="/common/usermenu.jsp" flush="true"><jsp:param value="5" name="menutype"/></jsp:include>
    <table width="100%" height="480" border="0" cellpadding="0" cellspacing="0">
    <tr>
      <td width="705" valign="top" bgcolor="e8e8e4"><br/>
      <table width="676" height="91" border="0" align="center" cellpadding="0" cellspacing="1" bgcolor="#7a7a79" style="text-align: center;margin-top:10px;">
        <tr bgcolor="#cacac7" class="profont1">
          <td height="33"><div align="center">帐单日期</div></td>
          <td><div align="center">数量</div></td>
          <td><div align="center">佣金</div></td>
          <td><div align="center">处理状态</div></td>
          <td><div align="center">更新日期</div></td>
        </tr>
        <%
           if(result != null && result.length > 0) { 
               for(int i = 0; i < result.length; i++) {
                   String[] order = result[i];
        %>
        <tr>
            <td height="21" bgcolor="#dadad6" class="newfont"><%=order[0] %></td>
            <td height="21" bgcolor="#dadad6" class="newfont"><%=order[1] %></td>
            <td height="21" bgcolor="#dadad6" class="newfont"><%=order[2] %></td>
            <td height="21" bgcolor="#dadad6" class="newfont"><%="1".equals(order[3])?"已支付":"未支付" %></td>
            <td height="21" bgcolor="#dadad6" class="newfont"><%=Strings.sNull(order[4]) %></td>
        </tr>
        <%}} %>
        <tr>
          <td height="33" colspan="6" bgcolor="#dadad6" class="newfont"><div align="right"> <span class="myfont２">未结算收入总计: <%=showincome %>元&nbsp;</span></div></td>
        </tr>
      </table>
      <% if(result != null && result.length > 0) {%>
                <div class="pager" style="text-align:center;"><a href="?pageNo=<%=prevPage%>">上一页</a>&nbsp;&nbsp;<a href="?pageNo=<%=pageNo+1%>">下一页</a></div>
      <%} %>
      <p>&nbsp;</p>
      <p>&nbsp;</p></td><td width="9" valign="top">&nbsp;</td>
      <td width="218" valign="top"><div align="right"><img src="/images/tel.gif" width="218" height="206"></div></td>
    </tr>
  </table>
        </td>
        </tr>
    </table></td>
  </tr>
  <jsp:include page="/common/footer.jsp" flush="true"></jsp:include>
</table>
</body>
</html>