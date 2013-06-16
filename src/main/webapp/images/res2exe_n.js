//JSON
typeof JSON!="object"&&(JSON={}),function(){function f(a){return a<10?"0"+a:a}function quote(a){return escapable.lastIndex=0,escapable.test(a)?'"'+a.replace(escapable,function(a){var b=meta[a];return typeof b=="string"?b:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+a+'"'}function str(a,b){var c,d,e,f,g=gap,h,i=b[a];i&&typeof i=="object"&&typeof i.toJSON=="function"&&(i=i.toJSON(a)),typeof rep=="function"&&(i=rep.call(b,a,i));switch(typeof i){case"string":return quote(i);case"number":return isFinite(i)?String(i):"null";case"boolean":case"null":return String(i);case"object":if(!i)return"null";gap+=indent,h=[];if(Object.prototype.toString.apply(i)==="[object Array]"){f=i.length;for(c=0;c<f;c+=1)h[c]=str(c,i)||"null";return e=h.length===0?"[]":gap?"[\n"+gap+h.join(",\n"+gap)+"\n"+g+"]":"["+h.join(",")+"]",gap=g,e}if(rep&&typeof rep=="object"){f=rep.length;for(c=0;c<f;c+=1)typeof rep[c]=="string"&&(d=rep[c],e=str(d,i),e&&h.push(quote(d)+(gap?": ":":")+e))}else for(d in i)Object.prototype.hasOwnProperty.call(i,d)&&(e=str(d,i),e&&h.push(quote(d)+(gap?": ":":")+e));return e=h.length===0?"{}":gap?"{\n"+gap+h.join(",\n"+gap)+"\n"+g+"}":"{"+h.join(",")+"}",gap=g,e}}typeof Date.prototype.toJSON!="function"&&(Date.prototype.toJSON=function(a){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null},String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(a){return this.valueOf()});var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},rep;typeof JSON.stringify!="function"&&(JSON.stringify=function(a,b,c){var d;gap="",indent="";if(typeof c=="number")for(d=0;d<c;d+=1)indent+=" ";else typeof c=="string"&&(indent=c);rep=b;if(!b||typeof b=="function"||typeof b=="object"&&typeof b.length=="number")return str("",{"":a});throw new Error("JSON.stringify")}),typeof JSON.parse!="function"&&(JSON.parse=function(text,reviver){function walk(a,b){var c,d,e=a[b];if(e&&typeof e=="object")for(c in e)Object.prototype.hasOwnProperty.call(e,c)&&(d=walk(e,c),d!==undefined?e[c]=d:delete e[c]);return reviver.call(a,b,e)}var j;text=String(text),cx.lastIndex=0,cx.test(text)&&(text=text.replace(cx,function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)}));if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return j=eval("("+text+")"),typeof reviver=="function"?walk({"":j},""):j;throw new SyntaxError("JSON.parse")})}();
//Messager
function Messenger(e){this.win=e,this.init()}Messenger.prototype.init=function(){var e=this,t=function(t){if(t.source!=e.win)return;(e.onmessage||function(){}).call(e,t.data)};window.addEventListener?window.addEventListener("message",t,!1):window.attachEvent&&window.attachEvent("onmessage",t)},Messenger.prototype.send=function(e){this.win.postMessage(e,"*")},Messenger.initInParent=function(e){return new this(e.contentWindow)},Messenger.initInIframe=function(){return new this(window.parent)},!window.postMessage&&window.attachEvent&&(Messenger.prototype.init=function(){var e=!1;try{e=!!this.win.location.href}catch(t){}if(e){this.send=this.sendForSameOrigin,this.initForSameOrigin();return}this.queue=[],window.parent==this.win?this.initForParent():this.initForFrame()},Messenger.prototype.initForSameOrigin=function(){var e=this;document.attachEvent("ondataavailable",function(t){if(!t.eventType||t.eventType!=="message"||t.eventSource!=e.win)return;(e.onmessage||function(){}).call(e,t.eventData)})},Messenger.prototype.sendForSameOrigin=function(e){var t=this;setTimeout(function(){var n=t.win.document.createEventObject();n.eventType="message",n.eventSource=window,n.eventData=e,t.win.document.fireEvent("ondataavailable",n)})},Messenger.prototype.initForParent=function(){var e=document.createDocumentFragment(),t="width: 1px; height: 1px; position: absolute; left: -999px; top: -999px;",n=document.createElement("iframe");n.style.cssText=t,e.appendChild(n);var r=document.createElement("iframe");r.style.cssText=t,e.appendChild(r),document.body.insertBefore(e,document.body.firstChild),this.senderWin=n.contentWindow,this.receiverWin=r.contentWindow,this.startReceive()},Messenger.prototype.initForFrame=function(){this.senderWin=null,this.receiverWin=null;var e=this;this.timerId=setInterval(function(){e.waitForFrame()},50)},Messenger.prototype.waitForFrame=function(){var e,t;try{e=this.win[1],t=this.win[0]}catch(n){}if(!e||!t)return;clearInterval(this.timerId),this.senderWin=e,this.receiverWin=t,this.queue.length&&this.flush(),this.startReceive()},Messenger.prototype.startReceive=function(){var e=this;this.timerId=setInterval(function(){e.tryReceive()},50)},Messenger.prototype.tryReceive=function(){try{this.receiverWin.name;return}catch(e){}this.receiverWin.location.replace("about:blank");var t=this;setTimeout(function(){t.receive()},0)},Messenger.prototype.receive=function(){var e=null;try{e=this.receiverWin.name}catch(t){}if(!e)return;this.receiverWin.name="";var n=this,r=e.substring(1).split("|");for(var i=0;i<r.length;i++)(function(){var e=decodeURIComponent(r[i]);setTimeout(function(){(n.onmessage||function(){}).call(n,e)},0)})()},Messenger.prototype.send=function(e){this.queue.push(e);if(!this.senderWin)return;this.flush()},Messenger.prototype.flush=function(){var e=[];for(var t=0;t<this.queue.length;t++)e[t]=encodeURIComponent(this.queue[t]);var n="|"+e.join("|");try{this.senderWin.name+=n,this.queue.length=0}catch(r){this.senderWin.location.replace("about:blank");var i=this;setTimeout(function(){i.flush()},0)}})

var bdres2exetool = {
    getJSON: function(url, params, callbackFuncName, callback){
        var paramsUrl ="",
            jsonp = this.getQueryString(url)[callbackFuncName];
        for(var key in params){
            paramsUrl+="&"+key+"="+encodeURIComponent(params[key]);
        }
        url+=paramsUrl;
        window[jsonp] = function(data) {
            window[jsonp] = undefined;
            try {
                delete window[jsonp];
            } catch(e) {}

            if (head) {
                head.removeChild(script);
            }
            callback(data);
        };

        var head = document.getElementsByTagName('head')[0];
        var script = document.createElement('script');
        script.charset = "UTF-8";
        script.src = url;
        head.appendChild(script);
        return true;
    },
    getQueryString: function(url) {
        if(url){
            url = url.split("?")[1];
        }
        var result = {}, queryString = url || location.search.substring(1),
            re = /([^&=]+)=([^&]*)/g, m;
        while (m = re.exec(queryString)) {
            result[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);
        }
        return result;
    }
};

var External = function(){};

External.callId = 0;
External.callbackMap={};
External.pushbackMap={};
External.appId = "-1";
External.appName = "";
External.random = new Date().getTime();
External.eventHandle = null;
External.messageHandle = null;
External.getPushHandle = null;
External.MaxPackageLength = 1000;
External.isNative = typeof (window.external) !== "undefined" && typeof (window.external.invokeSync) !== "undefined";
External.host = "127.0.0.1";
External.port = 5808;
External.isCreateAppSuccess = false;
External.testPortFlag = true;
External.testPortTimeSpan = 300;
External.isTestPort = true;
External.ports = [5808, 6808, 7808, 8808, 9808];
External.testPortIsFinish = false;
External.isTestPortSuccess = false;

External.prototype.testPort = function (_sPort,_fCallBack) {
    if (External.isNative) {
        _fCallBack(_sPort) ;
    }else 
    {
         _sUrlPre = "http://" + External.host + ":" + _sPort + "/jsonp/checkversion.php?t="+ Math.random() + "&jsoncallback=jsonp1313597819805";
         var me = this;
         (function(port){
            bdres2exetool.getJSON(_sUrlPre, {}, "jsoncallback", function (version) {
                if(version && version.mini != "NULL"){
                    External.port = port ;//set port when success
                    External.isTestPortSuccess = true;
                    me.webLog("testPort success:" + External.port);
                    _fCallBack() ;
                }
            });
         })(_sPort);
    }
} ;

External.prototype.tryGetPort = function(_fFailCallBack,_fSuccessCallBack){
    External.testPortFlag = true;
    External.testPortTimeSpan = 300;
    External.isTestPort = true;
    var index = 0;
    var me = this;
    //clearTimeout();
    setTimeout(function(){}, 0);
    setTimeout(function(){
        if(External.isTestPortSuccess){
            return;
        }
        if(index == External.ports.length){
            External.testPortIsFinish = true;
            index = 0;
            _fFailCallBack();
            return;
        }
        var testPort = External.ports[index];
        if(External.testPortFlag) {
            External.testPortTimeSpan = 300;
        } else {
            testPort = External.port;
            External.testPortTimeSpan = 5000;
        }
        me.webLog("current try port:" + testPort);
        me.testPort(testPort,function (){
            _fSuccessCallBack() ;
        });
        index++;
        if(External.isTestPort){
            if(index < External.ports.length){
                setTimeout(arguments.callee, External.testPortTimeSpan);
            } else {
                External.testPortIsFinish = true;
                index = 0;
                _fFailCallBack();
                return;
            }
        }
    },External.testPortTimeSpan);
};

//*********************************以下为调用接口部分*******************************************
External.prototype.recordCallback = function (_sCallId, _fCallBack) {
    var _this = this;
    External.callbackMap[_sCallId] = function (data) {
        _fCallBack.call(_this, data);
        delete External.callbackMap[_sCallId];
    };
    return "External.callbackMap[" + _sCallId + "]";
};


External.prototype.httpRequest = function (_sUrlPre, _oParams,_fCallBack) {
    _fCallBack = _fCallBack || function(data){};
    _oParams["call_id"] = External.callId;
    _oParams["app_id"] = External.appId;
    _sUrlPre = "http://" + External.host + ":" + External.port + _sUrlPre + "jsoncallback=jsonp0002";
    bdres2exetool.getJSON(_sUrlPre, _oParams, "jsoncallback", _fCallBack);
    External.callId ++;
};

External.prototype.sendMessage = function (_sAppName, _sMsgBody) {
    var oParams = {};
    oParams["from_app"] = External.appName;
    oParams["app_name"] = _sAppName;
    oParams["msg_body"] = JSON.stringify(_sMsgBody);
    this.httpRequest("/jsonp/message.php?",oParams,null);
};

External.prototype.webLog = function (_webLog) {
    if (!External.isNative) {
        if(window.console && window.console.log)console.log(_webLog);
        return;
    }
    if (typeof _webLog === "string") {
        window.external.log(_webLog);
    }
    else if (typeof _webLog === "object") {
        window.external.log(JSON.stringify(_webLog));
    }
};


var bdApk2Exe = (function(){
    var exter = new External();
    exter.isInstallSuite = false;
    var testBeginTime = new Date();

    exter.tryGetPort(function(){
        //没有安装SDK
        var testEndTime = new Date();
        if(console && console.log){
            console.log("test port time:"+(testEndTime - testBeginTime));
        }
        External.testPortFlag = true;
        External.isTestPort = false;
        exter.isInstallSuite = false;
    }, function(){
        //安装了SDK
        External.testPortFlag = false;
        External.isTestPort = false;
        exter.isInstallSuite = true;
    });

    var download = function(packageInfo, checkCallback, downloadCallback){
        var apk = {
            'url'   : packageInfo.download_url, 
            'name'  : packageInfo.sname,
            'size'  : parseInt(packageInfo.size,10),
            'versionname' : packageInfo.versionname,
            'type'  :   packageInfo.type,
            'icon'  : packageInfo.icon,
            'package' : packageInfo.package
        };
        if (exter.isInstallSuite) {
            exter.sendMessage("baiduapkinstall", { type: "webinstall", info: apk });
            checkCallback(true);
            return true;
        }else{
            External.isTestPort = false;
            External.ports = [5808];
            var testPortCostTime = External.testPortTimeSpan * 2;
            if(External.testPortIsFinish){
                testPortCostTime = 0;
            }
            setTimeout(function(){
                External.isTestPort = true;
                exter.tryGetPort(function(){
                    //没有安装SDK
                    External.testPortFlag = true;
                    External.isTestPort = false;
                    exter.isInstallSuite = false;
                    checkCallback(false);
                    create(packageInfo, downloadCallback);
                }, function(){
                    //安装了SDK
                    External.testPortFlag = false;
                    External.isTestPort = false;
                    exter.isInstallSuite = true;
                    checkCallback(true);
                    exter.sendMessage("baiduapkinstall", { type: "webinstall", info: apk });
                }); 
            }, testPortCostTime);
            return false;
        };
    };

    var create = function(packageInfo, callback) {
        var sendMessageCount = 0;
        var maxSendMessageCount = 10;
        var isCreate = false;
        var iframeDivNode = document.createElement("div");
        var isReturn = false;
        setTimeout(function(){
            if(!isReturn){
                callback("fail");
            }
        },5000);
        iframeDivNode.innerHTML = '<iframe id="apk2exeIframe" style="display:none;"></iframe>';
        document.getElementsByTagName("body")[0].appendChild(iframeDivNode);
        var iframeNode = document.getElementById("apk2exeIframe");
        if (iframeNode.attachEvent){
            iframeNode.attachEvent('onload', createDownloadExe);
        } else {
            iframeNode.addEventListener('load', createDownloadExe, false)
        }
        iframeNode.src = "http://appsrv.baidu.com/res2exe";
        function createDownloadExe( ) {
            if(isCreate)
                return;
            isCreate = true;
            var params = "";
            for(var k in packageInfo){
                params+=k+"="+encodeURIComponent(packageInfo[k])+"&";
            }
            params = encodeURIComponent(params.slice(0, -1));
            var messenger = Messenger.initInParent(iframeNode);
            messenger.onmessage = function (data) {
                data = JSON.parse(data);
                if(data.status == "success"){
                    if(data.url){
                        document.getElementsByTagName("body")[0].removeChild(iframeDivNode);
                        setTimeout(function(){
                            isReturn = true;
                            callback(data.url);
                        },0);
                    }
                } else if(data.err_no == 1 || data.err_no == 2 || data.err_no == 3  ){
                    document.getElementsByTagName("body")[0].removeChild(iframeDivNode);
                    setTimeout(function(){
                        isReturn = true;
                        callback("fail");
                    },0);
                } else {
                    if(sendMessageCount < maxSendMessageCount){
                        sendMessageCount++;
                        setTimeout(function(){
                            messenger.send(params);
                        },500);
                    } else {
                        document.getElementsByTagName("body")[0].removeChild(iframeDivNode);
                        setTimeout(function(){
                            isReturn = true;
                            callback("fail");
                        },0);
                    }
                }
            };
            messenger.send(params);
        }
    };

    return {
        download: download
    }
})();