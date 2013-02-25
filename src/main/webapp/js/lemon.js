function addfavorite() {
   if (document.all) {
      window.external.addFavorite("http://lemon001.com/","乐盟- 站长首选的广告联盟品牌！");
   }
   else if (window.sidebar) {
      window.sidebar.addPanel("乐盟- 站长首选的广告联盟品牌！", "http://lemon001.com/", "");
   }
}

function copyToClipBoard(txt) {
    if(window.clipboardData) {
        window.clipboardData.clearData();
        window.clipboardData.setData("Text",txt);
    }else if(navigator.userAgent.indexOf("Opera") != -1) {
        window.location = txt;
    } else if (window.netscape) {
        try {
            netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
        } catch (e) {
            alert("被浏览器拒绝！\n请在浏览器地址栏输入'about:config'并回车\n然后将 'signed.applets.codebase_principal_support'设置为'true'");
        }
        var clip = Components.classes['@mozilla.org/widget/clipboard;1'].createInstance(Components.interfaces.nsIClipboard);
        if (!clip)
            return;
        var trans = Components.classes['@mozilla.org/widget/transferable;1'].createInstance(Components.interfaces.nsITransferable);
        if (!trans)
            return;
        trans.addDataFlavor('text/unicode');
        var str = new Object();
        var len = new Object();
        var str = Components.classes["@mozilla.org/supports-string;1"].createInstance(Components.interfaces.nsISupportsString);
        var copytext = txt;
        str.data = copytext;
        trans.setTransferData("text/unicode",str,copytext.length*2);
        var clipid = Components.interfaces.nsIClipboard;
        if (!clip)
            return false;
        clip.setData(trans,null,clipid.kGlobalClipboard);
    }
    alert("你已经成功复制好了广告代码，请直接粘贴到网页上就可以!");
}

function getCookie(c_name) {
    if (document.cookie.length>0) {
        c_start=document.cookie.indexOf(c_name + "=")
        if (c_start!=-1) { 
            c_start=c_start + c_name.length+1 
            c_end=document.cookie.indexOf(";",c_start)
            if (c_end==-1) c_end=document.cookie.length
            return unescape(document.cookie.substring(c_start,c_end))
        } 
    }
    return ""
}

function setCookie(c_name,value,expiredays) {
    var exdate=new Date()
    exdate.setDate(exdate.getDate()+expiredays)
    document.cookie=c_name+ "=" +escape(value)+ ((expiredays==null) ? "" : ";expires="+exdate.toGMTString())
}

function checkCookie(c_name,c_value,c_day) {
    cookies_name=getCookie(c_name)
    if (cookies_name!=null && cookies_name!=""){
        return true
    } else {
            setCookie(c_name,c_value,c_day)
            return false
    }
}

function runCode(obj) {
    var winname = window.open('', "_blank", '');
    winname.document.open('text/html', 'replace');
    winname.document.write(typeof(obj) == "string" ? document.getElementById(obj).value : obj.value);
    winname.document.close();
}