document.writeln("<script type=\"text/javascript\" id=\"bdshare_js\" data=\"type=tools&amp;mini=1&amp;uid=0\" ></script>");
document.writeln("<script type=\"text/javascript\" id=\"bdshell_js\"></script>");
document.writeln("<script type=\"text/javascript\">");
document.writeln("document.getElementById(\"bdshell_js\").src = \"http://bdimg.share.baidu.com/static/js/shell_v2.js?cdnversion=\" + Math.ceil(new Date()/3600000);");
document.writeln("</script>");




function GetObjcet(){var elements=new Array();for(var i=0;i<arguments.length;i++){var element=arguments[i];if(typeof element=='string')element=document.getElementById(element);Method.Element.apply(element);if(arguments.length==1)return element;elements.push(element);}
return elements;}
function GetObjcetA(list){var arr=[];for(var i=0,len=list.length;i<len;i++){arr[i]=list[i];}
return arr;}
var Method={Element:function(){this.hide=function(){this.style.display="none";return this;};this.show=function(){this.style.display="";return this;};this.getValue=function(){if(this.value===undefined)return this.innerHTML;else return this.value;};this.setValue=function(s){if(this.value===undefined)this.setInnerHTML(s);else this.value=s;};this.subTag=function(){return GetObjcetA(this.getElementsByTagName(arguments[0])).each(function(n){GetObjcet(n);});};this.remove=function(){return this.parentNode.removeChild(this);};this.nextElement=function(){var n=this;for(var i=0,n;n=n.nextSibling;i++)if(n.nodeType==1)return GetObjcet(n);return null;};this.previousElement=function(){var n=this;for(var i=0,n;n=n.previousSibling;i++)if(n.nodeType==1)return GetObjcet(n);return null;};this.getPosition=function(){var e=this;var t=e.offsetTop;var l=e.offsetLeft;while(e=e.offsetParent){if(GetObjcet(e).getStyle('position')=='absolute'||GetObjcet(e).getStyle('position')=='relative')break;t+=e.offsetTop;l+=e.offsetLeft;}return{x:l,y:t};};this.getStyle=function(name){if(this.style[name])return this.style[name];else if(this.currentStyle)return this.currentStyle[name];else if(document.defaultView&&document.defaultView.getComputedStyle){name=name.replace(/([A-Z])/g,"-GetObjcet1").toLowerCase();var s=document.defaultView.getComputedStyle(this,"");return s&&s.getPropertyValue(name);}else return null;};this.setInnerHTML=function(s){var ua=navigator.userAgent.toLowerCase();s=s.replace(/<script([^>]+)src\s*=\s*\"([^>\"\']*)\"([^>]*)>\s*<\/script>/gi,'');if(ua.indexOf('msie')>=0&&ua.indexOf('opera')<0){s='<div style="display:none">for IE</div>'+s;s=s.replace(/<script([^>]*)>/gi,'<scriptGetObjcet1 defer>');this.innerHTML='';this.innerHTML=s;this.removeChild(this.firstChild);}else{var el_next=this.nextSibling;var el_parent=this.parentNode;el_parent.removeChild(this);this.innerHTML=s;if(el_next)el_parent.insertBefore(this,el_next);else el_parent.appendChild(this);}};},Array:function(){this.indexOf=function(){for(i=0;i<this.length;i++)if(this[i]==arguments[0])return i;return-1;};this.each=function(fn){for(var i=0,len=this.length;i<len;i++){fn(this[i],i);}return this;};},String:function(){this.trim=function(){var _re,_argument=arguments[0]||" ";typeof(_argument)=="string"?(_argument==" "?_re=/(^\s*)|(\s*GetObjcet)/g:_re=new RegExp("(^"+_argument+"*)|("+_argument+"*GetObjcet)","g")):_re=_argument;return this.replace(_re,"");};this.stripTags=function(){return this.replace(/<\/?[^>]+>/gi,'');};this.cint=function(){return this.replace(/\D/g,"")*1;};this.hasSubString=function(s,f){if(!f)f="";return(f+this+f).indexOf(f+s+f)==-1?false:true;};}};Method.Array.apply(Array.prototype);Method.String.apply(String.prototype);var Cookie={get:function(n){var dc="; "+document.cookie+"; ";var coo=dc.indexOf("; "+n+"=");if(coo!=-1){var s=dc.substring(coo+n.length+3,dc.length);return unescape(s.substring(0,s.indexOf("; ")));}else{return null;}},set:function(name,value,expires,path,domain,secure){var expDays=expires*24*60*60*1000;var expDate=new Date();expDate.setTime(expDate.getTime()+expDays);var expString=expires?"; expires="+expDate.toGMTString():"";var pathString="; path="+(path||"/");var domain=domain?"; domain="+domain:"";document.cookie=name+"="+escape(value)+expString+domain+pathString+(secure?"; secure":"");},del:function(n){var exp=new Date();exp.setTime(exp.getTime()-1);var cval=this.get(n);if(cval!=null)document.cookie=n+"="+cval+";expires="+exp.toGMTString();}}
var Form={serialize:function(form){var elements=Form.getElements(GetObjcet(form));var queryComponents=new Array();for(var i=0;i<elements.length;i++){var queryComponent=Form.Element.serialize(elements[i]);if(queryComponent)queryComponents.push(queryComponent);}
return queryComponents.join('&');},getElements:function(form){form=GetObjcet(form);var elements=new Array();for(tagName in Form.Element.Serializers){var tagElements=form.getElementsByTagName(tagName);for(var j=0;j<tagElements.length;j++)
elements.push(tagElements[j]);}
return elements;},disable:function(form){var elements=Form.getElements(form);for(var i=0;i<elements.length;i++){var element=elements[i];element.blur();element.disabled='true';}},enable:function(form){var elements=Form.getElements(form);for(var i=0;i<elements.length;i++){var element=elements[i];element.disabled='';}},reset:function(form){GetObjcet(form).reset();}}
Form.Element={serialize:function(element){element=GetObjcet(element);var method=element.tagName.toLowerCase();var parameter=Form.Element.Serializers[method](element);if(parameter){var key=encodeURIComponent(parameter[0]);if(key.length==0)return;if(parameter[1].constructor!=Array)return key+'='+encodeURIComponent(parameter[1]);tmpary=new Array();for(var i=0;i<parameter[1].length;i++){tmpary[i]=key+encodeURIComponent('[]')+'='+encodeURIComponent(parameter[1][i]);}
return tmpary.join('&');}},getValue:function(element){element=GetObjcet(element);var method=element.tagName.toLowerCase();var parameter=Form.Element.Serializers[method](element);if(parameter)return parameter[1];}}
Form.Element.Serializers={input:function(element){switch(element.type.toLowerCase()){case'submit':case'hidden':case'password':case'text':return Form.Element.Serializers.textarea(element);case'checkbox':case'radio':return Form.Element.Serializers.inputSelector(element);}
return false;},inputSelector:function(element){if(element.checked)return[element.name,element.value];},textarea:function(element){return[element.name,element.value];},select:function(element){return Form.Element.Serializers[element.type=='select-one'?'selectOne':'selectMany'](element);},selectOne:function(element){var value='',opt,index=element.selectedIndex;if(index>=0){opt=element.options[index];value=opt.value;if(!value&&!('value'in opt))
value=opt.text;}
return[element.name,value];},selectMany:function(element){var value=new Array();for(var i=0;i<element.length;i++){var opt=element.options[i];if(opt.selected){var optValue=opt.value;if(!optValue&&!('value'in opt))
optValue=opt.text;value.push(optValue);}}
return[element.name,value];}}
var GetObjcetF=Form.Element.getValue;function jieqi_ajax(){this.init=function(){this.handler=null;this.method="POST";this.queryStringSeparator="?";this.argumentSeparator="&";this.URLString="";this.encodeURIString=true;this.execute=false;this.requestFile=null;this.vars=new Object();this.responseStatus=new Array(2);this.failed=false;this.response="";this.asynchronous=true;this.onLoading=function(){};this.onLoaded=function(){};this.onInteractive=function(){};this.onComplete=function(){};this.onError=function(){};this.onFail=function(){};try{this.handler=new ActiveXObject("Msxml2.XMLHTTP");}catch(e){try{this.handler=new ActiveXObject("Microsoft.XMLHTTP");}catch(e){this.handler=null;}}
if(!this.handler){if(typeof XMLHttpRequest!="undefined"){this.handler=new XMLHttpRequest();}else{this.failed=true;}}};this.setVar=function(name,value,encoded){this.vars[name]=Array(value,encoded);};this.encVar=function(name,value,returnvars){if(true==returnvars){return Array(encodeURIComponent(name),encodeURIComponent(value));}else{this.vars[encodeURIComponent(name)]=Array(encodeURIComponent(value),true);}};this.processURLString=function(string,encode){regexp=new RegExp(this.argumentSeparator);varArray=string.split(regexp);for(i=0;i<varArray.length;i++){urlVars=varArray[i].split("=");if(true==encode){this.encVar(urlVars[0],urlVars[1],false);}else{this.setVar(urlVars[0],urlVars[1],true);}}};this.createURLString=function(urlstring){if(urlstring){if(this.URLString.length){this.URLString+=this.argumentSeparator+urlstring;}else{this.URLString=urlstring;}}
this.setVar("ajax_request",new Date().getTime(),false);urlstringtemp=new Array();for(key in this.vars){if(false==this.vars[key][1]&&true==this.encodeURIString){encoded=this.encVar(key,this.vars[key][0],true);delete this.vars[key];this.vars[encoded[0]]=Array(encoded[1],true);key=encoded[0];}
urlstringtemp[urlstringtemp.length]=key+"="+this.vars[key][0];}
if(urlstring){this.URLString+=this.argumentSeparator+urlstringtemp.join(this.argumentSeparator);}else{this.URLString+=urlstringtemp.join(this.argumentSeparator);}};this.runResponse=function(){eval(this.response);};this.runAJAX=function(urlstring){if(this.failed){this.onFail();}else{if(this.requestFile.indexOf(this.queryStringSeparator)>0){var spoint=this.requestFile.indexOf(this.queryStringSeparator);this.processURLString(this.requestFile.substr(spoint+this.queryStringSeparator.length),false);this.requestFile=this.requestFile.substr(0,spoint);}
this.createURLString(urlstring);if(this.handler){var self=this;if(this.method=="GET"){totalurlstring=this.requestFile+this.queryStringSeparator+this.URLString;this.handler.open(this.method,totalurlstring,this.asynchronous);}else{this.handler.open(this.method,this.requestFile,this.asynchronous);try{this.handler.setRequestHeader("Content-Type","application/x-www-form-urlencoded");}catch(e){}}
this.handler.onreadystatechange=function(){switch(self.handler.readyState){case 1:self.onLoading();break;case 2:self.onLoaded();break;case 3:self.onInteractive();break;case 4:self.response=self.handler.responseText;self.responseXML=self.handler.responseXML;self.responseStatus[0]=self.handler.status;self.responseStatus[1]=self.handler.statusText;if(self.execute){self.runResponse();}
if(self.responseStatus[0]=="200"){self.onComplete();}else{self.onError();}
self.URLString="";break;}}
this.handler.send(this.method=="GET"?null:this.URLString);}}};this.submitForm=function(form){if(this.requestFile==null)this.requestFile=GetObjcet(form).attributes["action"].value;this.runAJAX(Form.serialize(form));};this.init();}
var Ajax={Request:function(vname,vars){var ajax=new jieqi_ajax();var param={method:"",parameters:"",asynchronous:true,onLoading:function(){},onLoaded:function(){},onInteractive:function(){},onComplete:function(){},onError:function(){},onFail:function(){}};for(var key in vars)param[key]=vars[key];if(param["parameters"]!="")ajax.processURLString(param["parameters"],false);ajax.asynchronous=param["asynchronous"];ajax.onLoading=param["onLoading"];ajax.onLoaded=param["onLoaded"];ajax.onInteractive=param["onInteractive"];ajax.onError=param["onError"];ajax.onFail=param["onFail"];ajax.onComplete=param["onComplete"];if(GetObjcet(vname)!=null&&GetObjcet(vname).tagName.toLowerCase()=="form"){ajax.method=param["method"]==""?"POST":param["method"];ajax.submitForm(vname);}else{ajax.method=param["method"]==""?"GET":param["method"];ajax.requestFile=vname;ajax.runAJAX();}},Update:function(vname,vars){var param={outid:"",tipid:"",onLoading:"",outhide:0,cursor:"wait",parameters:""};for(var key in vars)param[key]=vars[key];var isform=(GetObjcet(vname)!=null&&GetObjcet(vname).tagName.toLowerCase()=="form")?true:false;if(typeof param["onLoading"]=='function'){var doLoading=param["onLoading"];}else{var doLoading=function(){if(param["cursor"]!="")document.body.style.cursor=param["cursor"];if(param["tipid"]!=null&&param["tipid"]!=""){GetObjcet(param["tipid"]).setValue(param["onLoading"]);GetObjcet(param["tipid"]).show();}
if(isform)Form.disable(vname);}}
var doComplete=function(){if(param["cursor"]!="")document.body.style.cursor="auto";if(param["tipid"]!=null&&param["tipid"]!=""){GetObjcet(param["tipid"]).setValue("");GetObjcet(param["tipid"]).hide();}
if(param["outid"]!=""){GetObjcet(param["outid"]).setValue(this.response);GetObjcet(param["outid"]).show();}
if(param["outhide"]!=""){setTimeout(function(){GetObjcet(param["outid"]).hide()},param["outhide"]);}
if(isform)Form.enable(vname);}
var doError=function(){if(param["outid"]!="")GetObjcet(param["outid"]).setValue("ERROR:"+this.responseStatus[1]+"("+this.responseStatus[0]+")");if(isform)Form.enable(vname);}
var doFail=function(){alert("Your browser does not support AJAX!");if(isform)Form.enable(vname);}
Ajax.Request(vname,{onLoading:doLoading,onComplete:doComplete,onError:doError,onFail:doFail,parameters:param["parameters"]});},Tip:function(event,url,timeout){event=event?event:(window.event?window.event:null);timeout=timeout?timeout:3000;var eid=event.srcElement?event.srcElement.id:event.target.id;var tid=eid+"_tip";var ele=GetObjcet(eid);var pos=ele.getPosition();var atip=GetObjcet(tid);if(!atip){atip=document.createElement("div");atip.id=tid;atip.style.display="none";atip.className="ajaxtip";document.body.appendChild(atip);atip.onclick=function(){GetObjcet(tid).hide();};}
atip.style.top=(pos.y+ele.offsetHeight+2)+"px";atip.style.left=pos.x+"px";atip.innerHTML="";atip.style.display="";this.Update(url,{outid:tid,tipid:tid,onLoading:"Loading...",outhide:timeout,cursor:"wait"});}}
function pageWidth(){return window.innerWidth!=null?window.innerWidth:document.documentElement&&document.documentElement.clientWidth?document.documentElement.clientWidth:document.body!=null?document.body.clientWidth:null;}
function pageHeight(){return window.innerHeight!=null?window.innerHeight:document.documentElement&&document.documentElement.clientHeight?document.documentElement.clientHeight:document.body!=null?document.body.clientHeight:null;}
function pageTop(){return typeof window.pageYOffset!='undefined'?window.pageYOffset:document.documentElement&&document.documentElement.scrollTop?document.documentElement.scrollTop:document.body.scrollTop?document.body.scrollTop:0;}
function pageLeft(){return typeof window.pageXOffset!='undefined'?window.pageXOffset:document.documentElement&&document.documentElement.scrollLeft?document.documentElement.scrollLeft:document.body.scrollLeft?document.body.scrollLeft:0;}
function showMask(){var sWidth,sHeight;sWidth=document.body.scrollWidth;sWidth=window.screen.availWidth>document.body.scrollWidth?window.screen.availWidth:document.body.scrollWidth;sHeight=window.screen.availHeight>document.body.scrollHeight?window.screen.availHeight:document.body.scrollHeight;var mask=document.createElement("div");mask.setAttribute('id','mask');mask.style.width=sWidth+"px";mask.style.height=sHeight+"px";mask.style.zIndex="5000";document.body.appendChild(mask);}
function hideMask(){var mask=document.getElementById("mask");if(mask!=null){if(document.body)document.body.removeChild(mask);else document.documentElement.removeChild(mask);}}
var dialogs=new Array();function displayDialog(html){var dialog;dialog=document.getElementById("dialog");if(dialog!=null)closeDialog();dialog=document.createElement("div");dialog.setAttribute('id','dialog');dialog.style.zIndex="6000";if(document.all){dialog.style.width="250px";dialog.style.height="150px";}
document.body.appendChild(dialog);GetObjcet("dialog").setInnerHTML(html);var dialog_w=parseInt(dialog.scrollWidth);var dialog_h=parseInt(dialog.scrollHeight);if(dialog_w<300){dialog.style.width="250px";dialog_w=parseInt(dialog.clientWidth);}else{dialog.style.width=dialog_w+"px";}
if(dialog_h<200){dialog.style.height="150px";dialog_h=parseInt(dialog.clientHeight);}else{dialog.style.height=dialog_h+"px";}
var page_w=pageWidth();var page_h=pageHeight();var page_l=pageLeft();var page_t=pageTop();var dialog_top=page_t+(page_h/2)-(dialog_h/2);if(dialog_top<page_t)dialog_top=page_t;var dialog_left=page_l+(page_w/2)-(dialog_w/2);if(dialog_left<page_l)dialog_left=page_l+page_w-dialog_w;dialog.style.left=dialog_left+"px";dialog.style.top=dialog_top+"px";dialog.style.visibility="visible";var dialogx=document.createElement("div");dialogx.setAttribute('id','dialogx');document.body.appendChild(dialogx);dialogx.innerHTML='<a onclick="closeDialog()" style="cursor:pointer;font-size:14px;font-weight:bold;font-family:Arial;">X</a>';dialogx.style.position="absolute";dialogx.style.zIndex="6500";dialogx.style.left=(dialog_left+dialog_w-10)+"px";dialogx.style.top=(dialog_top+10)+"px";}
function openDialog(url,mask){if(mask)showMask();if(typeof dialogs[url]=='undefined')Ajax.Request(url,{onLoading:function(){dialogs[url]=this.response;displayDialog('Loading...');},onComplete:function(){dialogs[url]=this.response;displayDialog(this.response);}});else displayDialog(dialogs[url]);}
function closeDialog(){var dialog=document.getElementById("dialog");var dialogx=document.getElementById("dialogx");if(document.body){document.body.removeChild(dialog);document.body.removeChild(dialogx);}else{document.documentElement.removeChild(dialog);document.documentElement.removeChild(dialogx);}
hideMask();}
function loadJs(url){if(arguments.length>=2&&typeof arguments[1]=='function')funload=arguments[1];if(arguments.length>=3&&typeof arguments[2]=='function')funerror=arguments[2];var ss=document.getElementsByTagName("script");for(i=0;i<ss.length;i++){if(ss[i].src&&ss[i].src.indexOf(url)!=-1){if(typeof funload=="function")funload();return;}}
s=document.createElement("script");s.type="text/javascript";s.defer="defer";s.src=url;document.getElementsByTagName("head")[0].appendChild(s);s.onload=s.onreadystatechange=function(){if(this.readyState&&this.readyState=="loading")return;if(typeof funload=="function")funload();}
s.onerror=function(){this.parentNode.removeChild(this);if(typeof funerror=="function")funerror();}}
function GetObj(objName){if(document.getElementById){return eval('document.getElementById("'+objName+'")');}else if(document.layers){return eval("document.layers['"+objName+"']");}else{return eval('document.all.'+objName);}}
function showTab(cid,no)
{for(var i=1;i<10;i++){var tt=GetObj(cid+"_"+i);if(tt!=null){tt.style.display='none';}
else{break;}
var oo=GetObj(cid+i);if(oo!=null){oo.className='';}}
var tt=GetObj(cid+"_"+no);if(tt!=null){tt.style.display='block';}
var oo=GetObj(cid+no);if(oo!=null){oo.className='on';}}
function bookmark()
{if(readCookie("bookmark")!="yes")
{saveCookie("bookmark","yes",1);window.external.AddFavorite('/','UCµç×ÓÊé');}}
function saveCookie(name,value,days){if(days){var date=new Date();date.setTime(date.getTime()+(days*24*60*60*1000))
var expires="; expires="+date.toGMTString()}
else expires=""
document.cookie=name+"="+value+expires+"; path=/"}
function readCookie(name){var nameEQ=name+"="
var ca=document.cookie.split(';')
for(var i=0;i<ca.length;i++){var c=ca[i];while(c.charAt(0)==' ')c=c.substring(1,c.length)
if(c.indexOf(nameEQ)==0)return c.substring(nameEQ.length,c.length)}
return null}
function vote(id)
{url="/modules/article/uservote.php?id="+id;Ajax.Request(url,{onComplete:function(){displayDialog(this.response.replace(/<br[^<>]*>/g,'\n'));}});}
function addbook(bid)
{url="/modules/article/addbookcase.php?bid="+bid;Ajax.Request(url,{onComplete:function(){displayDialog(this.response.replace(/<br[^<>]*>/g,'\n'));}});}
function addbookcase(bid,cid)
{url="/modules/article/addbookcase.php?bid="+bid+"&cid="+cid;Ajax.Request(url,{onComplete:function(){displayDialog(this.response.replace(/<br[^<>]*>/g,'\n'));}});}
function report(title)
{url="/newmessage.php?tosys=1&title="+title+"&content="+top.window.location.href+"%0D%0A%0D%0A¾Ù±¨Ô­ÒòÈçÏÂ£º"
window.open(url);}
function dlglogin()
{}
function addfriend(uid)
{url="/addfriends.php?id="+uid;Ajax.Tip(event,url,3000);}
window.onload=function()
{if(getCookie("goto63_jf")=="ft")
{Switchf_Time();}}
function Switchf_Time()
{setTimeout("Switchf()",50);setCookie("goto63_jf","ft");}
function Switchj_Time()
{setTimeout("Switchj()",50);delCookie("goto63_jf");}
function setCookie(name,value)
{var argv=setCookie.arguments;var argc=setCookie.arguments.length;var expires=(argc>2)?argv[2]:null;if(expires!=null)
{var LargeExpDate=new Date();LargeExpDate.setTime(LargeExpDate.getTime()+(expires*1000*3600*24));}
document.cookie=name+"="+escape(value)+((expires==null)?"":("; expires="+LargeExpDate.toGMTString()))+"; path="+"/";}
function getCookie(Name)
{var search=Name+"=";if(document.cookie.length>0)
{offset=document.cookie.indexOf(search)
if(offset!=-1)
{offset+=search.length
end=document.cookie.indexOf(";",offset)
if(end==-1)end=document.cookie.length
return unescape(document.cookie.substring(offset,end))}
else return"";}}
function delCookie(name)
{var expdate=new Date();expdate.setTime(expdate.getTime()-(86400*1000*1));setCookie(name,"",expdate);}
function Switchf()
{var obj=document.body;SwitchTxtf(obj);SwitchImgf();setCookie("goto63_jf","ft");}
function Switchj()
{var obj=document.body;SwitchTxtj(obj);SwitchImgj();delCookie("goto63_jf");}
function SwitchTxtf(fobj)
{if(typeof(fobj)=="object"){var obj=fobj.childNodes}
else
{return;}
for(var i=0;i<obj.length;i++)
{var aa=obj[i];if(aa.tagName=="TEXTAREA")continue;if(aa.title!=""&&aa.title!=null)aa.title=SwitchBig(aa.title);if(aa.alt!=""&&aa.alt!=null)aa.alt=SwitchBig(aa.alt);if(aa.tagName=="INPUT"&&aa.value!=""&&aa.type!="hidden")
{aa.value=SwitchBig(aa.value);}
if(aa.nodeType==3)
{aa.nodeValue=SwitchBig(aa.nodeValue);}
else
{SwitchTxtf(aa);}}}
function SwitchImgf()
{var Imgobj=document.getElementsByTagName("img");var objRegexp=/gb2312/;for(var i=0;i<Imgobj.length;i++)
{var gg=Imgobj[i].getAttributeNode("src").nodeValue;if(objRegexp.test(gg))
{Imgobj[i].getAttributeNode("src").nodeValue=gg.replace("gb2312","big5");}}}
function SwitchTxtj(fobj)
{if(typeof(fobj)=="object"){var obj=fobj.childNodes}
else
{return;}
for(var i=0;i<obj.length;i++)
{var aa=obj[i];if(aa.tagName=="TEXTAREA")continue;if(aa.title!=""&&aa.title!=null)aa.title=SwitchGb(aa.title);if(aa.alt!=""&&aa.alt!=null)aa.alt=SwitchGb(aa.alt);if(aa.tagName=="INPUT"&&aa.value!=""&&aa.type!="hidden")
{aa.value=SwitchGb(aa.value);}
if(aa.nodeType==3)
{aa.nodeValue=SwitchGb(aa.nodeValue);}
else
{SwitchTxtj(aa);}}}
function SwitchImgj()
{var Imgobj=document.getElementsByTagName("img");var objRegexp=/big5/;for(var i=0;i<Imgobj.length;i++)
{var gg=Imgobj[i].getAttributeNode("src").nodeValue;if(objRegexp.test(gg))
{Imgobj[i].getAttributeNode("src").nodeValue=gg.replace("big5","gb2312");}}}
function SwitchBig(strGb)
{var strBig="";var ss=JTPYStr();var tt=FTPYStr();for(var i=0;i<strGb.length;i++)
{if(strGb.charCodeAt(i)>10000&&ss.indexOf(strGb.charAt(i))!=-1)
{strBig+=tt.charAt(ss.indexOf(strGb.charAt(i)));}
else
{strBig+=strGb.charAt(i);}}
return strBig;}
function SwitchGb(strBig)
{var strGb="";var ss=JTPYStr();var tt=FTPYStr();for(var i=0;i<strBig.length;i++)
{if(strBig.charCodeAt(i)>10000&&tt.indexOf(strBig.charAt(i))!=-1)
{strGb+=ss.charAt(tt.indexOf(strBig.charAt(i)));}
else
{strGb+=strBig.charAt(i);}}
return strGb;}
document.cookie="www.goto63.net="+"1"
function JTPYStr()
{return'°¨°ª°­°®°¿°À°Â°Ó°Õ°Ú°Ü°ä°ì°í°ï°ó°÷°ù°ş±¥±¦±¨±«±²±´±µ±·±¸±¹±Á±Ê±Ï±Ğ±Õ±ß±à±á±ä±ç±è±î±ñ±ô±õ±ö±÷±ı²¦²§²¬²µ²·²¹²Î²Ï²Ğ²Ñ²Ò²Ó²Ô²Õ²Ö²×²Ş²à²á²â²ã²ï²ó²ô²õ²ö²÷²ø²ù²ú²û²ü³¡³¢³¤³¥³¦³§³©³®³µ³¹³¾³Â³Ä³Å³Æ³Í³Ï³Ò³Õ³Ù³Û³Ü³İ³ã³å³æ³è³ë³ì³ï³ñ³ó³÷³ø³ú³û´¡´¢´¥´¦´«´¯´³´´´¸´¿´Â´Ç´Ê´Í´Ï´Ğ´Ñ´Ó´Ô´Õ´Ü´í´ï´ø´ûµ£µ¥µ¦µ§µ¨µ¬µ®µ¯µ±µ²µ³µ´µµµ·µºµ»µ¼µÁµÆµËµĞµÓµİµŞµãµæµçµíµöµ÷µüµıµş¶¤¶¥¶§¶©¶«¶¯¶°¶³¶·¶¿¶À¶Á¶Ä¶Æ¶Í¶Ï¶Ğ¶Ò¶Ó¶Ô¶Ö¶Ù¶Û¶á¶ì¶î¶ï¶ñ¶ö¶ù¶û¶ü·¡·¢·£·§·©·¯·°·³·¶···¹·Ã·Ä·É·Ï·Ñ·×·Ø·Ü·ß·à·á·ã·æ·ç·è·ë·ì·í·ï·ô·ø¸§¸¨¸³¸´¸º¸¼¸¾¸¿¸Ã¸Æ¸Ç¸É¸Ï¸Ñ¸Ó¸Ô¸Õ¸Ö¸Ù¸Ú¸Ş¸ä¸é¸ë¸ó¸õ¸ö¸ø¹¨¹¬¹®¹±¹³¹µ¹¹¹º¹»¹Æ¹Ë¹Ğ¹Ø¹Û¹İ¹ß¹á¹ã¹æ¹è¹é¹ê¹ë¹ì¹î¹ñ¹ó¹ô¹õ¹ö¹ø¹ú¹ıº§º«ºººÒº×ºØºáºäºèºìºóºø»¤»¦»§»©»ª»­»®»°»³»µ»¶»·»¹»º»»»½»¾»À»Á»Æ»Ñ»Ó»Ô»Ù»ß»à»á»â»ã»ä»å»æ»ç»ë»ï»ñ»õ»ö»÷»ú»ı¼¢¼¥¼¦¼¨¼©¼«¼­¼¶¼·¼¸¼»¼Á¼Ã¼Æ¼Ç¼Ê¼Ì¼Í¼Ğ¼Ô¼Õ¼Ö¼Ø¼Û¼İ¼ß¼à¼á¼ã¼ä¼è¼ê¼ë¼ì¼î¼ï¼ğ¼ñ¼ò¼ó¼õ¼ö¼÷¼ø¼ù¼ú¼û¼ü½¢½£½¤½¥½¦½§½¬½¯½°½±½²½´½º½½½¾½¿½Á½Â½Ã½Ä½Å½È½É½Ê½Î½Ï½Õ½×½Ú¾¥¾ª¾­¾±¾²¾µ¾¶¾·¾º¾»¾À¾Ç¾É¾Ô¾Ù¾İ¾â¾å¾ç¾é¾î½Ü½à½á½ë½ì½ô½õ½ö½÷½ø½ú½ı¾¡¾¢¾£¾õ¾ö¾÷¾ø¾û¾ü¿¥¿ª¿­¿Å¿Ç¿Î¿Ñ¿Ò¿Ù¿â¿ã¿ä¿é¿ë¿í¿ó¿õ¿ö¿÷¿ù¿úÀ¡À£À©À«À¯À°À³À´ÀµÀ¶À¸À¹ÀºÀ»À¼À½À¾À¿ÀÀÀÁÀÂÀÃÀÄÀÌÀÍÀÔÀÖÀØÀİÀàÀáÀéÀëÀïÀğÀñÀöÀ÷ÀøÀùÀúÁ¤Á¥Á©ÁªÁ«Á¬Á­Á¯Á°Á±Á²Á³Á´ÁµÁ¶Á·Á¸Á¹Á½Á¾ÁÂÁÆÁÉÁÍÁÔÁÙÁÚÁÛÁİÁŞÁäÁåÁèÁéÁëÁìÁóÁõÁúÁûÁüÁıÂ¢Â£Â¤Â¥Â¦Â§Â¨Â«Â¬Â­Â®Â¯Â°Â±Â²Â³Â¸Â»Â¼Â½Â¿ÂÀÂÁÂÂÂÅÂÆÂÇÂËÂÌÂÍÂÎÂÏÂĞÂÒÂÕÂÖÂ×ÂØÂÙÂÚÂÛÂÜÂŞÂßÂàÂáÂâÂæÂçÂèÂêÂëÂìÂíÂîÂğÂòÂóÂôÂõÂöÂ÷ÂøÂùÂúÃ¡Ã¨ÃªÃ­Ã³Ã´Ã¹Ã»Ã¾ÃÅÃÆÃÇÃÌÃÎÃÕÃÖÃÙÃàÃåÃíÃğÃõÃöÃùÃúÃıÄ±Ä¶ÄÆÄÉÄÑÄÓÄÔÄÕÄÖÄÙÄåÄìÄíÄğÄñÄôÄöÄ÷ÄøÄûÄüÄşÅ¡Å¢Å¥Å¦Å§Å¨Å©Å±ÅµÅ·Å¸Å¹Å»Å½ÅÌÅÓ¹ú°®ÅâÅçÅôÆ­Æ®ÆµÆ¶Æ»Æ¾ÆÀÆÃÆÄÆËÆÌÆÓÆ×ÆêÆëÆïÆñÆôÆøÆúÆıÇ£Ç¤Ç¥Ç¦Ç¨Ç©Ç«Ç®Ç¯Ç±Ç³Ç´ÇµÇ¹ÇºÇ½Ç¾Ç¿ÇÀÇÂÇÅÇÇÇÈÇÌÇÏÇÔÇÕÇ×ÇáÇâÇãÇêÇëÇìÇíÇîÇ÷ÇøÇûÇıÈ£È§È¨È°È´ÈµÈÃÈÄÈÅÈÆÈÈÈÍÈÏÈÒÈÙÈŞÈíÈñÈòÈóÈ÷ÈøÈúÈüÉ¡É¥É§É¨É¬É±É´É¸É¹ÉÁÉÂÉÄÉÉÉËÉÍÉÕÉÜÉŞÉãÉåÉèÉğÉóÉôÉöÉøÉùÉşÊ¤Ê¥Ê¦Ê¨ÊªÊ«Ê¬Ê±Ê´ÊµÊ¶Ê»ÊÆÊÍÊÎÊÓÊÔÊÙÊŞÊàÊäÊéÊêÊôÊõÊ÷ÊúÊıË§Ë«Ë­Ë°Ë³ËµË¶Ë¸Ë¿ËÇËÊËËËÌËÏËĞËÓËÕËßËàËäËçËêËïËğËñËõËöËøÌ¡Ì¢Ì§Ì¯Ì°Ì±Ì²Ì³Ì·Ì¸Ì¾ÌÀÌÌÌÎÌĞÌÚÌÜÌàÌâÌåÌëÌõÌùÌúÌüÌıÌşÍ­Í³Í·Í¼Í¿ÍÅÍÇÍÉÍÑÍÒÍÔÍÕÍÖÍİÍàÍäÍåÍçÍòÍøÎ¤Î¥Î§ÎªÎ«Î¬Î­Î°Î±Î³Î½ÎÀÎÂÎÅÎÆÎÈÎÊÎÍÎÎÎÏÎĞÎÑÎØÎÙÎÚÎÜÎŞÎßÎâÎëÎíÎñÎóÎıÎşÏ®Ï°Ï³Ï·Ï¸ÏºÏ½Ï¿ÏÀÏÁÏÃÏÇÏÊÏËÏÌÏÍÏÎÏĞÏÔÏÕÏÖÏ×ÏØÏÚÏÛÏÜÏßÏáÏâÏçÏêÏìÏîÏôÏúÏşĞ¥Ğ«Ğ­Ğ®Ğ¯Ğ²Ğ³Ğ´ĞºĞ»Ğ¿ĞÆĞËĞÚĞâĞåĞéĞêĞëĞíĞ÷ĞøĞùĞüÑ¡Ñ¢Ñ¤Ñ§Ñ«Ñ¯Ñ°Ñ±ÑµÑ¶Ñ·Ñ¹Ñ»Ñ¼ÑÆÑÇÑÈÑËÑÌÑÎÑÏÑÕÑÖÑŞÑáÑâÑåÑèÑéÑìÑîÑïÑñÑôÑ÷ÑøÑùÑşÒ¡Ò¢Ò£Ò¤Ò¥Ò©Ò¯Ò³ÒµÒ¶Ò½Ò¿ÒÃÒÅÒÇÒÍÒÏÒÕÒÚÒäÒåÒèÒéÒêÒëÒìÒïÒñÒõÒøÒûÓ£Ó¤Ó¥Ó¦Ó§Ó¨Ó©ÓªÓ«Ó¬Ó±Ó´ÓµÓ¶Ó¸Ó»Ó½Ó¿ÓÅÓÇÓÊÓËÓÌÓÎÓÕÓßÓãÓæÓéÓëÓìÓïÓõÓùÓüÓşÔ¤Ô¦Ô§Ô¨Ô¯Ô°Ô±Ô²ÔµÔ¶Ô¸Ô¼Ô¾Ô¿ÔÀÔÁÔÃÔÄÔÆÔÇÔÈÔÉÔËÔÌÔÍÔÎÔÏÔÓÔÖÔØÔÜÔİÔŞÔßÔàÔäÔæÔîÔğÔñÔòÔóÔôÔùÔúÔıÔşÕ¡Õ¢Õ©Õ«Õ®Õ±ÕµÕ¶Õ·Õ¸Õ»Õ½ÕÀÕÅÕÇÕÊÕËÕÍÕÔÕİÕŞÕàÕâÕêÕëÕìÕïÕòÕóÕõÕöÕøÖ¡Ö£Ö¤Ö¯Ö°Ö´Ö½Ö¿ÖÀÖÄÖÊÖÓÖÕÖÖÖ×ÖÚÖßÖáÖåÖçÖèÖíÖîÖïÖòÖõÖöÖüÖıÖş×¤×¨×©×ª×¬×®×¯×°×±×³×´×¶×¸×¹×º×»×Ç×È×Ê×Õ×Ù×Û×Ü×İ×Ş×ç×é×êÖÂÖÓÃ´ÎªÖ»Ğ××¼Æô°åÀïö¨ÓàÁ´Ğ¹';}
function FTPYStr()
{return'°}Ì@µKÛÂOÒ\ŠW‰ÎÁT”[”¡îCŞk½OÍ½‰æ^Ör„ƒï–ŒšˆóõUİ…Øä^ªN‚ä‘v¿‡¹P®…”Àé]ß…¾ÙH×ƒŞqŞpü‚°TlIÙe”Pï“ÜÀãKñgÊNÑa…¢ĞQšˆ‘M‘K NÉnÅ“‚}œæú‚ÈƒÔœyŒÓÔŒ”v“½Ïsğ’×‹ÀpçP®bêUîˆö‡LéLƒ”ÄcS•³ânÜ‡Ø‰mêÒr“Î·Q‘ÍÕ\òG°VßtñYuıXŸë›_ÏxŒ™® ÜP»I¾Iáh™»NäzërµAƒ¦Ó|Ì‚÷¯êJ„“åN¼ƒ¾bŞoÔ~ÙnÂ”Ê[‡èÄ…²œ¸Zåeß_§ÙJ“ú†Îà“ÛÄ‘‘„ÕQ—®”“õühÊ™n“vu¶\Œ§±IŸôà‡”³œìßf¾†üc‰|ëŠÕáÕ{µşÕ™¯Bá”í”åVÓ†–|„Ó—ƒöôY Ùªš×xÙ€åƒå‘”à¾„ƒ¶ê Œ¦‡îDâgŠZùZî~ÓºğIƒº –ğDÙE°lÁPéy¬mµ\âCŸ©¹ ØœïˆÔL¼ïwUÙM¼Š‰Š^‘¼SØS—÷ähïL¯‚ñT¿pÖSøPÄwİ—“áİoÙxÑ}Ø“Ó‡‹D¿`Ô“â}ÉwÖÚs¶’ÚMŒù„‚ä“¾VÅVæ€”Røéwãt‚€½oıŒmì–Ø•âhœÏ˜‹Ù‰òĞMî™„êPÓ^ğ^‘TØVÒÎùšwı”é|Ü‰Ô™™ÙF„£İLå‡øß^ñ”ínhéuúQÙR™MŞZø™¼táá‰Ø×oœû‘ô‡WÈA®‹„Ô’‘Ñ‰Äšg­hß€¾“Q†¾¯ˆŸ¨œoüSÖe“]İxš§ÙV·x•ş Z¡ÖMÕdÀLÈœ†â·«@Ø›µœ“ô™C·eğ‡×Iëu¿ƒ¾ƒ˜Oİ‹¼‰”D×ËE„©úÓ‹Ó›ëHÀ^¼oŠAÇvîaÙZâ›ƒrñ{š±OˆÔ¹{égÆD¾}ÀO™z‰Aû|’ş“ìº†ƒ€œpË]™‘èbÛ`ÙvÒŠæIÅ„¦ğTuR¾{ÊY˜ªª„ÖváuÄz²òœ‹É”‡ãq³CƒeÄ_ïœÀU½gŞIİ^·MëA¹Çoó@½›îiìoçR½¯d¸‚œQ¼mıÅfñxÅe“şä‘Ö„¡ùN½‚Ü½YÕ]ŒÃ¾oå\ƒHÖ”ßM•x a±M„ÅÇGÓX›QÔE½^âxÜŠòEé_„Pîwš¤Õn‰¨‘©“¸ìÑÕF‰Kƒ~Œ’µV•ç›rÌh¸Qğ¢”UéŸÏÅDÈRíÙ‡Ë{™Ú”r»@ê@Ìm‘×”ˆÓ[‘ĞÀ| €E“Æ„Ú³˜·èD‰¾îœI»hëxÑYõ¶Yû…–„îµ[•Ñrë`‚zÂ“ÉßBç ‘ziºŸ”¿Ä˜æœ‘ÙŸ’¾š¼Z›öƒÉİvÕ¯Ÿß|ç‚«CÅRà÷[„CÙUıgâœRì`XîIğs„¢ıˆÃ@‡µ»\‰Å”në]˜ÇŠä“§ºtÌJ±RïB] t“ïûuÌ”ô”ÙTµ“ä›ê‘óH…ÎäX‚HŒÒ¿|‘]V¾Gn”Œ\´y’àİ†‚öœS¾]Õ“Ì}Á_ß‰èŒ»jò…ñ˜½j‹Œ¬”´aÎ›ñRÁR†áÙIûœÙuß~Ã}²mğzĞUMÖ™Øˆå^ãTÙQ÷áüq›]æVéT‚ƒåi‰ôÖi›Ò’¾d¾’Rœç‘‘é}øQã‘Ö‡Ö\®€âc¼{ëy“ÏÄXÀô[ğHÄ”f“Óá„øBÂ™ımè‡æ‡™ªŸå¸”Qôâo¼~Ä“âŞr¯‘ÖZšWútšª‡Ia±Pı‹‡øÛÙr‡Šùiò_ïhîlØšÌO‘{ÔuŠîH“ää˜ã×VÄšıRòTØM†™šâ—‰Ó™ ¿’LâTãUßwºÖtåXãQ“œ\×l‰q˜Œ†Ü ËNŠ“Œæ@˜ò†ÌƒSÂN¸[¸`šJÓHİpšäƒAí•Õˆ‘c­‚¸FÚ……^Ü|òŒıxïE™à„ñ…sùo×Œğˆ”_À@ŸáígÕJ¼x˜s½qÜ›äJéc™¢Ë_öwÙ‚ã†Êò}’ß­š¢¼†ºY•ñéWê„Ù ¿˜‚ûÙpŸı½BÙd”z‘ØÔO¼Œ‹ğÄIBÂ•ÀK„ÙÂ}Ÿª{ñÔŠŒÆ•rÎgŒ×Rñ‚„İáŒï—Ò•Ô‡‰Û«F˜Ğİ”•øÚHŒÙĞg˜äØQ”µ›ëpÕl¶í˜Õf´T q½zï•Â–‘ZíÔAÕb”\ÌKÔVÃCëm½—šqŒO“p¹S¿s¬æi«H“é”E”‚Ø°c©‰¯×TÕ„šUœ« Cı¿lòvÖ`äRî}ówŒÏ—lÙNèFdÂ ŸNã~½yî^ˆD‰TˆFîjÍ‘Ã“ørñWñ„™E¸DÒm³îBÈf¾Wífß`‡ú ‘H¾SÈ”‚¥ƒ^¾•Ö^ĞlœØÂ„¼y·€†–®Y“ëÎœu¸C†èæuõÕ_ŸoÊ…Ç‰]ìF„ÕÕ`åa ŞÒuÁ•ãŠ‘ò¼šÎrİ {‚bªMBåvõrÀwûyÙtã•éeï@ëU¬F«I¿hğWÁw‘—¾€ûè‚àlÔ”í‘í—Ê’äN•Ô‡[Ï…f’¶”yÃ{ÖCŒ‘aÖxä\á…Åd›°çnÀCÌ“‡uíšÔS¾wÀmÜ‘Òßx°_½kŒW„ìÔƒŒ¤ñZÓ–Óßd‰ºøfø††¡†Ó éŸŸû}‡Àî†éØW…’³©ÖVòø„—î“P¯ƒê–°WğB˜Ó¬“uˆòßb¸GÖ{Ë ”í“˜IÈ~átãîUßzƒx¤ÏË‡ƒ|‘›ÁxÔ„×hÕx×g®À[Êaêãyï‹™Ñ‹ëú—‘ªÀt¬“Î IŸÉÏ‰·f†Ñ“í‚ò°bÛxÔœ¥ƒ‘nà]â™ªqß[ÕTİ›ô~OŠÊÅcZÕZ»n¶Rªz×uîAñSøxœYŞ@ˆ@†TˆA¾‰ßhîŠ¼sÜSè€[»›‚é†ë…ày„òëEß\ÌNáj•íësÄİd”€•ºÙÚEóvè——¸^ØŸ“ñ„tÉÙ\Ù›¼™„ÜˆåélÔpıS‚ùšÖ±K”Øİšä—£‘ğ¾`ˆq¤Ù~Ã›ÚwÏUŞHæNß@Ø‘á˜‚ÉÔ\æ‚ê‡’ê± ªb¬à×C¿—ÂšˆÌ¼ˆ“´”SÃÙ|æR½K·NÄ[Ğ\ÖaİS°™•ƒóEØiÖTÕD T²š‡ÚÙAèTºBñvŒ£´uŞDÙ˜¶ÇfÑbŠy‰Ñ îåFÙ˜‰‹¾YÕáÆÙYnÛ™¾C¿‚¿vàuÔ{½Mè¿@çŠüNéëbƒ´œÊ†¢é›ÑeìZğNå€›ª';}