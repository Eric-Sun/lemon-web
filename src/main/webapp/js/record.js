function GetCookieVal(offset){
	var endstr = document.cookie.indexOf (";", offset);
	if (endstr == -1)
	endstr = document.cookie.length;
	return unescape(document.cookie.substring(offset, endstr));
}


function setCookie( name, value, expires, path, domain, secure ) {
	var today = new Date();
	today.setTime(today.getTime());
	if ( expires ) {
		expires = expires * 1000 * 60 * 60;
	}

	var expires_date = new Date( today.getTime() + (expires) );
	var cookieex = name+'='+escape(value)+((expires)?';expires='+expires_date.toGMTString():'') + ((path)?';path='+path:'')+((domain)?';domain=' + domain:'')+((secure)?';secure':'');
	
	document.cookie = cookieex;
} 

function DelCookie(name){
	var exp = new Date();
	exp.setTime (exp.getTime() - 1);
	var cval = GetCookie (name);
	document.cookie = name + "=" + cval + "; expires="+ exp.toGMTString();
}

function getCookie(name){
	var arg = name + "=";
	var alen = arg.length;
	var clen = document.cookie.length;
	var i = 0;
	while (i < clen)
	{
	var j = i + alen;
	if (document.cookie.substring(i, j) == arg)
	return GetCookieVal (j);
	i = document.cookie.indexOf(" ", i) + 1;
	if (i == 0) break;
	}
	return null;
}

var refof;
var reftf;
var refpf;
var refvp = location.href;
var refsf=document.referrer;

try{reftf=top.document.referrer;}catch(e){}
try{refpf=window.parent.document.referrer;}catch(e){}

refof=refsf;
if(refpf){refof=refpf;}
if(reftf){refof=reftf;}

if(refof != null && refof.length > 0 && refof.indexOf("http://www.lemon001.com") != 0 && refof.indexOf("http://127.0.0.1") != 0) {
	var refold = getCookie("referrer");
	var vpold = getCookie("refvpage");
	if(refold != escape(refof) || vpold != escape(refvp)) {
		setCookie("referrer", refof, 1, "/");
		setCookie("refvpage", refvp, 1, "/");
		document.write('<img style="width:0px;height:0px" src="/common/record" />');
	}
}