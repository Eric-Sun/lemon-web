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
    <link rel="stylesheet" type="text/css" href="/css/style.css" />
    <link rel="stylesheet" type="text/css" media="all" href="/css/js.css" />
    <script type="text/javascript" src="/js/jquery.min.js"></script>
    <script type="text/javascript" src="/js/jquery-ui.min.js"></script>
    <script type="text/javascript">
        function setTab(name, cursel, n) {
            for (i = 1; i <= n; i++) {
                var menu = document.getElementById(name + i);
                var con = document.getElementById("con_" + name + "_" + i);
                menu.className = (i == cursel ? "hover" : "");
                con.style.display = (i == cursel ? "block" : "none");
            }
        }

        $(function() {
            $(".ui-tabs-nav").tabs({fx:{opacity: "toggle"}}).tabs("rotate", 10000);
            $(".ui-tabs-nav-item > a").click(function() {
                $(".ui-tabs-nav").tabs("rotate", 0, false);
            });
            $('<li class="bottom"></li>').appendTo('.nav_menu li ul');
            $("ul.logo_container li").mouseover(function() {
                $(this).css({'z-index' : '10'});
                $(this).find('img').addClass("hover").stop()
                    .animate({
                        marginTop: '-85px',
                        marginLeft: '-85px',
                        top: '50%',
                        width: '170px',
                        left: '50%',
                        height: '170px'
                });
            });
            $("ul.logo_container li").mouseout(function() {
                $(this).css({'z-index' : '0'});
                $(this).find('img').removeClass("hover").stop() 
                    .animate({
                        marginTop: '0',
                        marginLeft: '0',
                        top: '0',
                        left: '0',
                        width: '70px',
                        height: '70px'
                });
            });
        });
    </script>
</head>

<body>
    <div class="wrap">
        <jsp:include page="/common/header.jsp" flush="true"></jsp:include>
        <!-- Banner begin -->
        <div class="bannerbg">
            <div class="wrap">
                <div class="banner">
                    <div class="hero">
                        <div id="teaser">
                            <div class="teaser ui-tabs-panel " id="teaser1">
                                <p><img alt="" class="alignleft size-full wp-image-1685" height="294" src="/upload/<c:out value="${tdto.link1}"/>" width="636" /></p>
                            </div>
                            <div class="teaser ui-tabs-panel ui-tabs-hide" id="teaser2">
                                <p><img alt="" class="alignleft size-full wp-image-1686" height="294" src="/upload/<c:out value="${tdto.link2 }"/>" width="636" /></p>
                            </div>
                            <div class="teaser ui-tabs-panel ui-tabs-hide" id="teaser3">
                                <p><img alt="" class="alignleft size-full wp-image-1687" height="294" src="/upload/<c:out value="${tdto.link3 }"/>" width="636" /></p>
                            </div>
                            <div class="teaser ui-tabs-panel ui-tabs-hide" id="teaser4">
                                <p><img alt="" class="alignleft size-full wp-image-938" height="294" src="/upload/<c:out value="${tdto.link4 }"/>" width="636" /></p>
                            </div>
                            <ul class="ui-tabs-nav">
                                <li class="ui-tabs-nav-item ui-tabs-selected" id="nav-fragment-1">
                                    <a href="#teaser1"> <strong><c:out value="${tdto.title1 }"/></strong>
                                        <p><c:out value="${tdto.origin1 }"/></p>
                                    </a>
                                </li>
                                <li class="ui-tabs-nav-item ui-tabs-selected" id="nav-fragment-2">
                                    <a href="#teaser2"> <strong><c:out value="${tdto.title2 }"/></strong>
                                        <p><c:out value="${tdto.origin2 }"/></p>
                                    </a>
                                </li>
                                <li class="ui-tabs-nav-item ui-tabs-selected" id="nav-fragment-3">
                                    <a href="#teaser3"> <strong><c:out value="${tdto.title3 }"/></strong>
                                        <p><c:out value="${tdto.origin3 }"/></p>
                                    </a>
                                </li>
                                <li class="ui-tabs-nav-item ui-tabs-selected" id="nav-fragment-4">
                                    <a href="#teaser4"> <strong><c:out value="${tdto.title4 }"/></strong>
                                        <p><c:out value="${tdto.origin4 }"/></p>
                                    </a>
                                </li>
                            </ul>
                            <div style="clear: both; height: 0pt; overflow: hidden;"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Banner end -->
        <div class="space clear"></div>
        <!-- Content begin -->
        <div class="hzlc">
            <div class="title01">合作流程</div>
            <img src="images/imglc.jpg" alt="" />
        </div>
        <div class="rmtj">
            <div class="tbnew"></div>
            <div class="title01">热门推荐</div>
            <div class="con01" style="height:305px;">
                <div class="rmbtn left"><a href="#"><img src="/images/btnleft.gif" alt="" /></a></div>
                <c:forEach var="p" items="${pdto }" varStatus="status">
                    <div class="rmlist" style="
                    <c:if test='${status.count%2==1 }'>
                    	background: url(images/conbg02.gif) right 30px no-repeat;
                    </c:if>
                    <c:if test='${status.count%2==0 }'>
                    	padding:0px 0px 0px 25px;
                    </c:if>
                    ">
                        <p class="tit01"><a href="#"><c:out value="${p.name}"/></a></p>
                        <p class="tit02">分成比例：<c:out value="${p.commission}"/></p>
                        <img src="<c:out value='${p.thumbnail}'/>" alt="<c:out value="${p.name}"/>" />
                        <p style="line-height:21px;">说明：<c:out value="${p.brief}"/></p>
                    </div>
                    
                </c:forEach>
                <div class="rmbtn right"><a href="#"><img src="/images/btnright.gif" alt="" /></a></div>
            </div>
        </div>
        <div class="xwgg">
            <div class="title01"><span class="more"><a href="/newslist">MORE >></a></span>新闻公告</div>
            <div class="con01">
                <ul>
                	<c:forEach var="news" items="${ndto}" varStatus="status">
                		
                    <li><a href="/news<c:out value="${news.id }"/>" 
                    <c:if test="${news.flag>0}">
                    style='color:red;font-weight:bold;'
                    </c:if> target="_blank"
                    /><c:out value="${news.title }"/></a></li>
                    </c:forEach>
                </ul>
            </div>
            <img src="images/kfdh.jpg" alt="" />
        </div>
        <div class="clear"></div>
        <div style=" overflow:auto">
            <div class="hyzx">
                <div class="title01"><span class="more"><a href="/faq">MORE >></a></span>常见问题</div>
                <div class="con01">
                    <ul>
                        <li><a href="/faq#1">如何加入乐盟 </a></li>
                        <li><a href="/faq#2">我有多个网站，可以同时投放广告吗？ </a></li>
                        <li><a href="/faq#3">网站主作弊行为判断标准？ </a></li>
                        <li><a href="/faq#4">如何验证网站？</a></li>
                        <li><a href="/faq#5">收入和结算类问题须知 </a></li>
                        <li><a href="/faq#6">广告代码类常见问题 </a></li>
                        <li><a href="/faq#7">我可以自己更改代码尺寸吗？ </a></li>
                        <li><a href="/faq#8">安全和违规常见问题 </a></li>
                    </ul>
                </div>
            </div>
            <div class="hyzx">
                <div class="title01"><span class="more"><a href="/newslist">MORE >></a></span>行业资讯</div>
                <div class="con01">
                    <ul>
                    <c:forEach items="${hangye}" var="news">
                        <li><a href="/news?id=<c:out value="${news.id}"/>" target="_blank"><c:out value="${news.title }"/></a></li>
                    </c:forEach>
                    </ul>
                </div>
            </div>
            <div class="kfxx">
                <img src="images/img4.jpg" alt="" />
                <div class="tpsc">
                    <div class="tpsc_title title01" style="border-bottom:none; padding-left:0px;">
                        <ul>
                            <li id="ss1" onclick="setTab('ss', 1, 2)" class="hover"><span>商务</span></li>
                            <li id="ss2" onclick="setTab('ss', 2, 2)"><span>客服</span></li>
                        </ul>
                    </div>
                    <div id="con_ss_1" class="tpsc_con con02" >
						<c:out value="${kf.content }"/>
                    </div>
                    <div id="con_ss_2" class="tpsc_con con02" style="display:none">
                        <c:out value="${kf.content }"/>
                    </div>
                </div>
            </div>
        </div>
        <!-- Content end -->
       <jsp:include page="/common/footer.jsp" flush="true"></jsp:include>
        <!-- Bottom end -->
    </div>
</body>
</html>
