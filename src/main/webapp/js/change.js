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
{saveCookie("bookmark","yes",1);window.external.AddFavorite('/','UC������');}}
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
{url="/newmessage.php?tosys=1&title="+title+"&content="+top.window.location.href+"%0D%0A%0D%0A�ٱ�ԭ�����£�"
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
{return'�������������°Ӱհڰܰ���������������������������������ʱϱбձ߱�����������������������������βϲвѲҲӲԲղֲײ޲����������������������������������������������³ĳųƳͳϳҳճٳ۳ܳݳ�������������������������������������´ǴʴʹϴдѴӴԴմܴ������������������������������������������Ƶ˵еӵݵ޵��������������������������������������ĶƶͶ϶жҶӶԶֶٶ۶�����������������������������������÷ķɷϷѷ׷طܷ߷������������������������������øƸǸɸϸѸӸԸոָٸڸ޸����������������������������ƹ˹йع۹ݹ߹�����������������������������Һ׺غ���������������������������������������������ƻѻӻԻٻ߻���������������������������������������������üƼǼʼ̼ͼмԼռּؼۼݼ߼����������������������������������������������������������������½ýĽŽȽɽʽνϽս׽ھ����������������������ǾɾԾپݾ�����ܽ������������������������������������������ſǿοѿҿٿ��������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������¢£¤¥¦§¨«¬­®¯°±²³¸»¼½¿����������������������������������������������������������������������������������������áèêíóôùûþ����������������������������������ıĶ����������������������������������������šŢťŦŧŨũűŵŷŸŹŻŽ���ӹ���������ƭƮƵƶƻƾ������������������������������ǣǤǥǦǨǩǫǮǯǱǳǴǵǹǺǽǾǿ��������������������������������������������ȣȧȨȰȴȵ������������������������������������ɡɥɧɨɬɱɴɸɹ��������������������������������������ʤʥʦʨʪʫʬʱʴʵʶʻ��������������������������������˧˫˭˰˳˵˶˸˿��������������������������������������̷̸̡̢̧̯̰̱̲̳̾��������������������������������ͭͳͷͼͿ������������������������������ΤΥΧΪΫάέΰαγν������������������������������������������������ϮϰϳϷϸϺϽϿ��������������������������������������������������������ХЫЭЮЯвгдклп��������������������������ѡѢѤѧѫѯѰѱѵѶѷѹѻѼ������������������������������������������������ҡҢңҤҥҩүҳҵҶҽҿ��������������������������������������ӣӤӥӦӧӨөӪӫӬӱӴӵӶӸӻӽӿ������������������������������������ԤԦԧԨԯ԰ԱԲԵԶԸԼԾԿ������������������������������������������������������������������աբթիծձյնշոջս����������������������������������������ְִֽֿ֣֤֡֯��������������������������������������������פרשת׬׮ׯװױ׳״׶׸׹׺׻����������������������������ôΪֻ��׼������������й';}
function FTPYStr()
{return'�}�@�K���O�\�W���T�[���C�k�O�ͽ��^�r������U݅ؐ�^�N��v���P�����]߅���H׃�q�p���T�l�I�e�P����K�g�N�a���Q���M�K�N�nœ�}����ȃԜy��Ԍ�v���s�׋�p�P�b�U��L�L���c�S���n܇�؉m��r�ηQ���\�G�V�t�Y�u�X��_�x�����P�I�I�h���N�z�r�A���|̎�����J���N���b�o�~�n�[��ą����Z�e�_���J��������đ���Q�������hʎ�n�v�u�\���I���������f���c�|늝���{��ՙ�B���Vӆ�|�ӗ����Y�٪��xـ�呔྄��ꠌ����D�g�Z�Z�~Ӟ���I�����D�E�l�P�y�m�\�C����؜��L���w�U�M�����^���S�S���h�L���T�p�S�P�wݗ���o�x�}ؓӇ�D�`ԓ�}�w���s���M����䓾V���V怔R���w�t���o���m�ؕ�h�Ϙ�ُ���M��P�^�^�T؞�VҎ���w���|܉Ԏ���F��݁�L假��^��n�h�u�Q�R�M�Z���t����o����W�A����Ԓ�щĚg�h߀���Q�������o�S�e�]�x���V�x���Z���M�d�Lȝ��ⷫ@؛�����C�e���I�u�����O݋���D���E����Ӌӛ�H�^�o�A�v�a�Z⛃r�{���O�Թ{�g�D�}�O�z�A�|���캆���p�]���b�`�vҊ�IŞ���T�u�R���{�Y�����v�u�z���ɔ��q�C�e�_��U�g�I�^�M�A���o�@���i�o�R���d���Q�m���f�x�e��䏑ք��N���ܝ��Y�]�þo�\�H֔�M�x�a�M���G�X�Q�E�^�x܊�E�_�P�w���n��������ѝ�F�K�~���V��r̝�h�Q�����U�Ϟ�D�R��ه�{�ڔr�@�@�m��׎���[���|���E�Ƅڝ����D��I�h�x�Y���Y������[�ўr�`�zɏ�B砑z�i����Ę朑ٟ����Z�����vՏ���|炫C�R���[�C�U�g⏜R�`�X�I�s�����@���\�Ŕn�]�Ǌ䓧�t�J�R�B�]�t���u̔���T�����H���X�H�ҿ|�]�V�G�n���\���y��݆�����S�]Փ�}�_߉茻j��j�����aΛ�R�R���I���u�~�}�m�z�U�M֙؈�^�T�Q���q�]�V�T�����i���i��Ғ�d���R�瑑�}�Q�և�\���c�{�y���X���[�Hā�f����B�m�懙���帔Q���o�~ē���r���Z�W�t���I�a�P�������r���i�_�h�lؚ�O�{�u���H��䁘��VĚ�R�T�M���◉ә���L�T�U�w���t�X�Q���\�l�q���ܠ��N�����@��̃S�N�[�`�J�H�p��A�Ո�c���Fڅ�^�|��x�E����s�o׌���_�@���g�J�x�s�qܛ�J�c�����_�wِ����}�ߝ������Y���W�٠�����p���B�d�z���O�������I�B�K���}���{��Ԋ�ƕr�g���R����ҕԇ�۫F��ݔ���H���g���Q�����p�l����f�T�q�z��Z��A�b�\�K�V�C�m���q�O�p�S�s���i�H��E��؝�c�����TՄ�U���C���l�v�`�R�}�w�ϗl�N�F�d �N�~�y�^�D�T�F�j͑Ó�r�W�E�D�m�����B�f�W�f�`�����H�SȔ���^���^�l���y�����Y��΁�u�C���u���_�oʏ�ǉ]�F���`�a���u��㊑��rݠ�{�b�M�B�v�r�w�y�t��e�@�U�F�I�h�W�w��������lԔ��ʒ�N�ԇ[ϐ�f���y�{�C���a�x�\��d���n�C̓�u��S�w�m܎���x�_�k�W��ԃ���ZӖӍ�d���f������Ӡ鎟��}�����W�������V�����P��ꖰW�B�Ӭ��u���b�G�{ˎ��퓘I�~�t��U�z�x��ρˇ�|���xԄ�h�x�g���[�a��yы������t��Ξ�I��ω�f�ѓ��b�xԁ�����n�]♪q�[�Tݛ�~�O���c�Z�Z�n�R�z�u�A�S�x�Y�@�@�T�A���hs�S耎[�������y���E�\�N�j����s���d����ٝ�E�v菗��^؟��t���\ٛ����܈��l�p�S���ֱK��ݚ�䗣��`���q���~Û�w�U�H�N�@ؑᘂ��\�ꇒ걠�b�����C���̼����S���|�R�K�N�[�\�a�S�����E�i�T�D�T�����A�T�B�v���u�Dٍ���f�b�y�Ѡ��F٘���YՁ��Ɲ�Y�nۙ�C���v�u�{�M荿@��N���b���ʆ���e�Z�N倛�';}