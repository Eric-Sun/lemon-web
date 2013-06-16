$(document).ready(function () {

        var appName = $('#appname').text();
		
		if ($.browser.msie && $.browser.version == 6){
			$('.safety').bind({
				mouseover : function(){
					$('.tip-safety').show();
				},
				mouseout  : function(){
					$('.tip-safety').hide();
				}
			});
		}
         $(".safety").live({
            mouseover : function(){
                $(".app-attr-tips",this).hide();             
                $(".app-attr-tips",this).show();             
            },
            mouseout : function(){
                $(".app-attr-tips",this).hide();             
            }
        });

        $(".ad_icon").live({
            mouseover : function(){
                $(".content-tip",this).hide();
                var data_info = $(this).attr("data-info").split("|"),
                    data_info_container = $(".content-tip-right", this);
                data_info_container.empty();
                for(var key in data_info){
                    $("<p class='content-tip-content'>应用包含" + data_info[key] + "</p>").appendTo(data_info_container);
                }
                $(".content-tip",this).show();             
            },
            mouseout : function(){
                $(".content-tip",this).hide();             
            }
        });
		$(".energy_icon").live({
            mouseover : function(){
                $(".content-tip",this).hide();             
                $(".content-tip .content-tip-content",this).text($(this).attr("data-info"));             
                $(".content-tip",this).show();             
            },
            mouseout : function(){
                $(".content-tip",this).hide();             
            }
        });
        $(".safe_icon").live({
            mouseover : function(){
                $(".app-attr-tips",this).hide();             
                $(".app-attr-tips .tip-right",this).text($(this).attr("data-info"));             
                $(".app-attr-tips",this).show();             
            },
            mouseout : function(){
                $(".app-attr-tips",this).hide();             
            }
        });


        $(".useqrcode").live({
          mouseenter : function(){
                $(".tipsinfo_show").show();
          },
          mouseleave : function(){
                $(".tipsinfo_show").hide();
          }  

        
        });


        /*
        $(".com").live("click",function(){
           var di = $(".origin-list").css("display"); 
           if(di=='block'){
                di = $(".origin-list").css("display","none"); 
           }
        });
        */

		//猜你喜欢鼠标hover事件
		$('.title-start').live({
			mouseenter: function(){
				$('.s-index-star',this).hide();
				$('.btn-wrap',this).show();
			},
			mouseleave: function(){
				$('.btn-wrap',this).hide();
				$('.s-index-star',this).show();				
			}
		});

        //详细页面，来源下来列表事件
        $('.origin-target').live('click', function(){
            var element = $(this),
                next = element.next();
            if(next.css('display') == 'none'){
                next.css('display','inline-block');
            }else{
                next.hide();
            }
        });

		$('body').live('click', function(event){
		
			var element = event.target, 
				isOuter = true;

			while(element.tagName != 'BODY'){
			
				if($(element).attr('class') == 'origin-list' || $(element).attr('class') == 'origin-target'){				
					isOuter = false;
					break;
				}
				
				element = element.parentNode;				
			}
			
			if(isOuter){
				$('.origin-list').hide();
			}
			
		});
		
        $('.origin-list li a').live('click', function(){
			var element = $(this),
			      text = $(element).text(),
			      ajaxUrl = $(element).attr('data-ajaxurl');
			
			$('.origin-target').text(text);
			$('.origin-list').hide();
		      	//todo ajax back data
			$.ajax({
			    type: 'GET',
			    url: ajaxUrl,
			    success: function (data){
					var json = $.parseJSON(data),
						appSize,
						liArr = [],
						screenshots = json['screenshots'],
						len = screenshots.length,
						liHtmlStr = '',
                        ceilSize = Math.ceil(len / 2),
                        availableRight = ceilSize - 1,
						arrowLeft = $('.data-arrow-left'),
						arrowRight = $('.data-arrow-right'),
						platform = '';

					if (json['size'] >= 1048574) {
					  appSize = Math.round(json['size'] / (1024 * 1024)) + 'MB';
					} else {
					  appSize = Math.ceil(json['size'] / 1024) + 'KB';
					}

					if (json['platform_version'] != '') {
					  platform = json['platform'] + json['platform_version'] + '及以上';
					} else {
					  platform = '未知';
					}

					$('.data-screenshots').attr('data-size', len);

					//"安装"按钮属性
					$('.info-btn-install').attr('href', json['downloadUrl']);
                    //下载地址
                    $('#down_as_durl').attr('href',json['downloadUrl']);
                    //广告
                    if(json['ad_display_info']==""){
                         $(".ad_icon").css("display","none");
                    }else{
                         $(".ad_icon").attr("data-info","应用包含"+json['ad_display_info']);  
                         $(".ad_icon").css("display","inline-block");
                    }
                    //安全标示
                    if(json['security']==0){
                         if(json['security_display']!=""){
                                $(".safety-data-table").html(json['security_display']); 
                                $(".safety").css("display","inline-block"); 
                         }else{
                                $(".safety").css("display","none"); 
                         }
                    }else{
                        $(".safety").css("display","none"); 
                    }

					//参数
					$('.params-fee').text(json['fee']);
					$('.params-catename').text(json['catename']);
					$('.params-size').text(appSize);
					$('.params-vname').text(json['vname']);
					$('.params-updatetime').text(json['updatetime']);
					$('.params-platform').text(platform);
                    $('.data-code').attr('data-imgsrc', json['qrcode']);

					for (var i = 0; i < len; i++) {
					  liArr[liArr.length] = '<li><img src="' + screenshots[i] + '" alt="' + json['sname'] + '" /></li>'
					}

					liHtmlStr = liArr.join('');

					$('.data-screenshots').html(liHtmlStr);

					$('.data-screenshots').attr('data-size', len);
					$('.data-screenshots').attr('data-offset', 0);
					$('.data-screenshots').css({
					  'marginLeft':'0'
					});

					$('.brief-short').html(json['shortdes'] + '<br><a href="javascript:;" target="_self" class="brief-fold data-fold" data-show="brief-des">展开</a>');
					$('.brief-des').html(json['des'] + '<br><a href="javascript:;" target="_self" class="brief-unfold data-fold" data-show="brief-short">收起</a>');

					arrowRight.attr('data-available', availableRight);
					arrowRight.attr('data-totaltime', availableRight);
					arrowLeft.attr('data-available', 0);
					arrowLeft.hide();

                    if (len > 2) {
					  arrowRight.show();
					} else {
					  arrowRight.hide();
					}

					$('.apppushdata input[name=docid]').val(json['docid']);
				},
				error: function(err){
					//console.log(err);
				}
			});
        });
       
        function loginBox() {
            instance.show();
        }

        //判断是否登陆
        function isLogin() {
            var isLogin = $('.apppushdata input[name=is_login]').val();
            if (isLogin == 'true' || isLogin == '1') {
                return true;
            } else {
                return false;
            }
        }

        //发短信验证码
        function change_mobile_vcode(){
            var dom = $(".info-send-vcode-img");
            var vcodeurl = dom.attr("ajax-vcode-url");
            vcodeurl = vcodeurl+"?type=getvcode&v="+new Date().getTime();
            $.ajax({
			    type: 'GET',
			    url: vcodeurl,
			    success: function (data){
					var json = $.parseJSON(data);
                    if(json['status']==1000){
                         var vcode_str = json['vcode_str'];
                         var imgurl = json['imgurl'];
                         $("#mobile_vcode_str").val(vcode_str);
                         $(".info-send-vcode-img img").attr("src",imgurl);
                         dom.show("slow");
                         $(".info-send-vcode").show("slow");
                    }
                }
            });

        }
        
        $(".info-send-vcode-img img").live('click',function(){
            change_mobile_vcode();             
        });

        function sendMsg_wait(){
           var sec = $("#info-send-btn").attr('data-waitsec'); 
           sec = parseInt(sec);
           if(sec>0){
              sec = sec -1;  
              $("#info-send-btn").attr("data-waitsec",sec);
           }else{
              $("#info-send-btn").attr("data-waitsec","0");
           }
        }

        //手机号输入框聚焦事件
        $('.data-infophone').live({
            focus:function () {
                if($(this).val()=='输入手机号，免费发送下载网址'){
                   $(this).val('');
                   var vcode_str = $("#mobile_vcode_str").val();
                   if(vcode_str==""){
                        change_mobile_vcode();
                   }
                }      
                $(this).addClass('inputnumber');
            },
            blur:function () {
                if($(this).val()==''){
                    $(this).val('输入手机号，免费发送下载网址');
                    if($(this).hasClass('inputnumber')){
                         $(this).removeClass('inputnumber'); 
                    }
                }
            },
            keyup:function () {
                var value = $.trim($(this).val());
                if (/^\d{11}$/.test(value) && /^1[3|4|5|8][0-9]\d{4,8}$/.test(value)) {
                    $('.info-send-btn').addClass('ready');
                } else if ($('.info-send-btn').hasClass('ready')) {
                    $('.info-send-btn').removeClass('ready')
                }
            }
        });

        function send_error_tips(content,ishtml){
            if(ishtml==false){
            var html = '<p class="info-send-tips" style="color:#ff0000;">'+content+'</p>';
            }else{
            var html = content; 
            }
            $(".info-send-tips-line").html(html);
            $(".info-send-tips-line").show("slow");
            setTimeout(function () {
                $('.info-send-tips-line').fadeOut("slow");
            },
            3000);
        }

        //短信下发网址事件
        $(".data-send-msg").live('click', function () {
            if (!$('#info-send-btn').hasClass('ready')) {
                return;
            }
            var sec = $("#info-send-btn").attr('data-waitsec');
            if(sec>0){
                var html = '<p class="info-send-tips" style="color:#ff0000;">'+sec+'秒后可再次发送！<span style="color:#333;font-weight:normal;">(每天可发送5条短信)</span></p>';
                send_error_tips(html);
                return;
            }

            var acturl = $(this).attr("acturl");
            var sendmsg_docid = $("#sendmsg_docid").val();
            var mobile = $(".data-infophone").val();
            var input = $("#mobile_vcode").val(); 
            var vcode_str = $("#mobile_vcode_str").val(); 
            var ctime = new Date().getTime();

            $.ajax({
                type:"GET",
                url:acturl,
                data:"mobile=" + mobile + "&docid=" + sendmsg_docid + "&input=" + input + "&vcode_str=" +vcode_str+ "&ctime=" + ctime,
                error:function () {
                    send_error_tips('网络繁忙！');
                },
                success:function (data) {
                    data = $.parseJSON(data);

                    if (data == 1000) {
                        var html = '<p class="info-send-sucess"><b class="info-tips-sucess">短信已成功发送至手机!<span style="color:#333;font-weight:normal;">(60秒后可再次发送)</span></b></p><p class="info-send-tips">系统繁忙时会有3-5分钟的发送延迟,请勿在短时间内重复下载。</p>';
                        $("#info-send-btn").attr("data-waitsec","60");
                        setInterval(sendMsg_wait,1000);
                    } else if (data == 8004) {
                        var html = '<p class="info-send-tips" style="color:#ff0000;">已经超过了每小时允许发送的短信数！</p>';
                    } else if (data == 8003) {
                        var html = '<p class="info-send-tips" style="color:#ff0000;">亲，请输入正确的手机号哦！</p>';
                        $(".data-infophone").focus();
                    } else if (data == 8002) {
                        var html = '<p class="info-send-tips" style="color:#ff0000;">亲，每天只能发5条短信哦！</p>';
                        $(".info-send-com").addClass("class", "disabled");
                    } else if (data == 8001) {
                        var html = '<p class="info-send-tips" style="color:#ff0000;">亲，请输入您的手机号哦！</p>';
                    } else if (data == 8005) {
                        var html = '<p class="info-send-tips" style="color:#ff0000;">亲，验证码输入有误哦！</p>';
                        $("#mobile_vcode").focus();
                    } else {
                        var html = '<p class="info-send-tips" style="color:#ff0000;">短信发送失败！</p>';
                    }
                    send_error_tips(html,ishtml=true);
                }
            });

        });

        //显示浮层方法
        function showDialog(jsonParam) {
            var jsonParam = jsonParam || {};
            jsonParam['title'] = jsonParam['title'] || '未知标题';
            jsonParam['content'] = jsonParam['content'] || '';
            jsonParam['height'] !== undefined && $('.mod-supernatant-outer').css('height', jsonParam['height']);
            $('.mod-supernatant-title').html(jsonParam['title']);
            $('.mod-supernatant-main').html(jsonParam['content']);
            $('.mod-mask').css({
                height:$(document).height() + 'px',
                display:'block'
            });
            $('.mod-supernatant-outer').css({
                display:'block'
            });
        }

        //关闭浮层方法
        function closeDialog() {
            $('.mod-supernatant-outer').css('height', '');
            $('.mod-mask').css({
                display:'none'
            });
            $('.mod-supernatant-outer').css({
                display:'none'
            });
        }

        //遮罩事件-点击关闭按钮关闭浮层
        $('.mod-supernatant-close').live('click', function () {
            closeDialog();
        });
        

        //遮罩事件-二维码
        (function () {
            var dom = $('.data-code'),
                searchUrl = dom.attr('data-searchurl'),
                tjurl = dom.attr('data-tjurl'),
                imgSrc = dom.attr('data-imgsrc');

            if (imgSrc != '') {
                dom.click(function () {
                    showDialog({
                        title:'二维码下载',
                        content:'<p class="inner-title">使用二维码下载到手机:</p><p class="inner-intro">点击<a href="' + searchUrl + '" tjurl="' + tjurl + '" class="tjitem">这里</a>下载二维码扫描软件，安装并打开二维码扫描软件，将手机摄像头对准网页上的二维码图片扫描即可</p><p class="inner-code"><img src="' + imgSrc + '" alt="二维码"></p>'
                    });
                });
            } else {
                dom.hide();
            }
        })();

        //ABTest豌豆荚-浮层事件-发送到手机
        (function () {
            var dom, sendUrl;
            if (dom = $('.data-phone')) {
                sendUrl = dom.attr('data-sendurl');

                dom.click(function () {
                    showDialog({
                        title:'发送手机短信',
                    content: '<p class="inner-title">免费发送下载网址短信到手机:</p><div class="inner-main"><div class="info-send-com available"><div class="input-bg">输入手机号，免费发送下载网址</div><input type="text" name="infophone" class="info-phone data-infophone" id="infophone" value="" /><a href="javascript:;" target="_self" class="info-send-btn data-send-msg" acturl="' + sendUrl + '">发    送</a></div></div><div class="data-tips"></div>'
                    });
                });
            }
        })();

        //百度云推送
        $('.data-push').click(function () {
			var infotext = '*使用云推送服务前，需登陆百度账号';
			var username = $('#com_userbar .user').html();
			if(username!=null){
				infotext = '*您已经登陆百度账号，请点击按钮完成推送';
			}
			closeDialog();
			showDialog({
				title:'\u767e\u5ea6\u4e91\u63a8\u9001',
				content:'<p class="inner-title">使用云推送下载：</p><div class="inner-login"><p class="hezuo-login-tips">使用百度账号推送：</p><p><span class="loginbtnspan tjitem" tjurl="http://as.baidu.com/a/download?tj=web_am_cloud_login"><a href="javascript:;" id="push_login" target="_self" class="baidu-btn-push btn-login"></a></span><span class="spantext">'+infotext+'</span></p></div>',
                height:'350'
			});
        });

        function push_callback_action(msg) {
            var urlDom = $('.col-content .data-push');
            var login_url = urlDom.attr("data-login-url") //云推送登录
            var username = $('#com_userbar .user').text();
            var tjurl = urlDom.attr("data-baidu-appdowntj"); //免费下载统计
            var downurl = urlDom.attr("data-baidu-appdownurl"); //免费下载地址
            var updateurl = urlDom.attr("data-push-update-url"); //绑定更新
            var cur_vname = $('.params-vname:first').text(); //版本号
            var cur_updatetime = $('.params-updatetime:first').text(); //更新时间
            var cur_size = $('.params-size:first').text(); //应用大小
            var cur_logo = $('#app-logo').attr('src'); //应用icon
            var cur_appname = (function (appname) { //截断后的应用名称
                if (appname.length > 15) {
                    appname = appname.substring(0, 13) + '...';
                }
                return appname;
            })($('#appname').text());
            var tjurlLogin = $('#bd-push').attr('data-login-tjurl');
            var urlAppmobileDownload = 'http://shouji.baidu.com/download/1426l/AppSearch_Android_1426l.apk'; //新版本客户端下载地址
			
		    var infotext = '*使用云推送服务前，需登陆百度账号';
			var username = $('#com_userbar .user').html();
			if(username!=null){
				infotext = '*您已经登陆百度账号，请点击按钮完成推送';
			}

            data = $.parseJSON(msg);
            switch (data) {
                //未登录 　　
                case 6001:
                    closeDialog();
                    showDialog({
                        title:'\u767e\u5ea6\u4e91\u63a8\u9001',
                        content:'<p class="inner-title">使用云推送下载：</p><div class="inner-login"><p class="hezuo-login-tips">使用百度账号推送：</p><p><span class="loginbtnspan tjitem" tjurl="http://as.baidu.com/a/download?tj=web_am_cloud_login"><a href="javascript:;" id="push_login" target="_self" class="baidu-btn-push btn-login"></a></span><span class="spantext">'+infotext+'</span></p><p class="hezuo-login-tips" style="padding-top:15px;">使用第三方账号推送：</p><p><span class="loginbtnspan tjitem" tjurl="http://as.baidu.com/a/download?tj=web_am_weibo_cloud_login"><a href="javascript:;" id="push_login_weibo" target="_self" class="weibo-btn-push-login btn-login" ></a></span><span class="spantext">*安装新版微博客户端才能使用云推送 <a class="spantextdown" href="http://as.baidu.com/a/item?pid=596887424&f=weibo_push" target="_blank">立即下载</span></div>'
                    });

                    break;
                //已登录未绑定
                case 6002:
                    closeDialog();
                    $('.mod-supernatant-outer').css({
                        height:"auto",
                        marginTop:"-309px"
                    });
                    $('.mod-supernatant-con').css({
                        textAlign:"center"
                    });
                    showDialog({
                        title:'\u767e\u5ea6\u4e91\u63a8\u9001',
                        content:'<p class="inner-title"><span class="color-black">' + username + '</span><span class="color-red">尚未绑定移动设备，请按以下两步完成绑定</span></p><div class="inner-edu"><p class="intro-appmobile">下载百度移动客户端</p><a href="' + downurl + '"target="_self"class="btn-freedownload tjitem"tjurl="' + tjurl + '">免费下载</a><div class="attention">安装新版客户端才能绑定成功</div><p class="intro-login-appmobile">打开客户端使用百度同一账号登录</p><a href="javascript:;"target="_self"class="btn-refresh-push">刷新推送</a><p class="refresh-tips">绑定完成后，刷新推送</p></div>'
                    });
                    break;
                //在线推送成功
                case 7001:
                    closeDialog();
                    showDialog({
                        "title":"\u767e\u5ea6\u4e91\u63a8\u9001",
                        "content":'<p class="inner-title">' + username + '</p><div class="inner-push"><div class="fright push-main"></div><div class="fleft app-info"><table><tbody><tr><td><img src="' + cur_logo + '" alt="" /></td><td><p>' + cur_appname + '</p><p class="color-green">\u514d\u8d39</p></td></tr><tr><td colspan="2">\u7248\u672c\uff1a' + cur_vname + '</td></tr><tr><td colspan="2">\u5e94\u7528\u5927\u5c0f\uff1a' + cur_size + '</td></tr><tr><td colspan="2">\u66f4\u65b0\u65e5\u671f\uff1a' + cur_updatetime + '</td></tr></tbody></table></div><div class="clear"></div><div class="push-success-tips w2">\u5e94\u7528\u5df2\u6210\u529f\u63a8\u9001\u81f3\u79fb\u52a8\u8bbe\u5907</div><div class="tips-update-appmobile">\u5982\u672a\u6210\u529f\u63a5\u6536\uff0c\u8bf7\u66f4\u65b0\u5ba2\u6237\u7aef<a href="' + urlAppmobileDownload + '" target="_self">\u7acb\u5373\u66f4\u65b0</a></div><p class="warm-prompt"></p></div>'
                    });
                    break;
                //离线推送成功
                case 7002:
                    closeDialog();
                    showDialog({
                        title:'\u767e\u5ea6\u4e91\u63a8\u9001',
                        content:'<p class="inner-title">' + username + '</p><div class="inner-push"><div class="fright push-main"><p>*请您关注：</p><p>1.若您的手机处于关机或网络不可用状态，推送将会在开机或网络可用时到达</p><p>2.若您的手机处于WAP网络下，请切换网络以接受推送</p></div><div class="fleft app-info"><table><tbody><tr><td><img src="' + cur_logo + '" alt="" /></td><td><p>' + cur_appname + '</p><p class="color-green">免费</p></td></tr><tr><td colspan="2">版本：' + cur_vname + '</td></tr><tr><td colspan="2">应用大小：' + cur_size + '</td></tr><tr><td colspan="2">更新日期：' + cur_updatetime + '</td></tr></tbody></table></div><div class="push-success-tips">离线推送成功</div><div class="tips-update-appmobile" style="padding-bottom:30px;">如未成功接收，请更新客户端<a href="' + urlAppmobileDownload + '" target="_self">立即更新</a></div><p class="warm-prompt">*温馨提示：离线推送的保存时间为7天，请您与7天内接收以免推送信息丢失</p></div>'
                    });
                    break;
                case -1:
                    $(".push-error-tips").text('联网失败，请检查网络后重试');
                    break;
                default:

                    if (typeof (data) == "object") {
                        var devicestr = "";
                        for (var i = 0; i < data.length; i++) {
                            var devicestatus = (data[i]["online_status"] == "on") ? "(在线)" : "(离线)";
                            var selected = (data[i]["bind_status"] == "1") ? 'selected="selected"' : "";
                            devicestr = devicestr + '<option value="' + data[i]["channel_id"] + '__' + data[i]["online_status"] + '" ' + selected + ">" + data[i]["device_name"] + devicestatus + "</option>";
                        }
                        showDialog({
                            title:'\u767e\u5ea6\u4e91\u63a8\u9001',
                            content:'<p class="inner-title">' + username + '</p><div class="inner-push"><div class="fleft push-main"><p>\u4f7f\u7528\u4e91\u63a8\u9001\u4e0b\u8f7d</p><p>\u63a8\u9001\u5230\uff1a<form  class="cloudpush"><select name="channel_id" id="data-pushid">' + devicestr + '</select></form></p><a href="javascript:;" target="_self" class="btn-push">\u63a8\u0020\u0020\u9001</a><p class="push-tips">\u002a\u63a8\u9001\u529f\u80fd\u9700\u8981\u624b\u673a\u767b\u5f55\u540c\u4e00\u8d26\u53f7\u65b9\u53ef\u4f7f\u7528</p></div><div class="fright app-info"><table><tbody><tr><td><img src="' + cur_logo + '" alt="" /></td><td><p>' + cur_appname + '</p><p class="color-green">\u514d\u8d39</p></td></tr><tr><td colspan="2">\u7248\u672c\uff1a' + cur_vname + '</td></tr><tr><td colspan="2">\u5e94\u7528\u5927\u5c0f\uff1a' + cur_size + '</td></tr><tr><td colspan="2">\u66f4\u65b0\u65e5\u671f\uff1a' + cur_updatetime + '</td></tr></tbody></table></div><div class="push-error-tips"></div><div class="tips-update-appmobile" style="padding:10px 0;">\u5b89\u88c5\u65b0\u7248\u5ba2\u6237\u7aef\u624d\u80fd\u4f7f\u7528\u4e91\u63a8\u9001<a href="' + urlAppmobileDownload + '" target="_self">\u7acb\u5373\u66f4\u65b0</a></div></div>'
                        });
                    } else {
                        alert('System busy');
                    }
                    break;
            }
        }
		
		
			//第三方账号微博云推送
		$('#push_login_weibo').live('click',function(){
		//function push_app_weibo(name,logo,url,size,desc,platform,ct){
			var urlDom = $('.col-content .data-push');
			var downurl = $('#as_durl').val();//免费下载地址
            var cur_vname = $('.params-vname:first').text(); //版本号
            var cur_updatetime = $('.params-updatetime:first').text(); //更新时间
            var cur_size = $('.params-size:first').text(); //应用大小
            var cur_logo = $('#app-logo').attr('src'); //应用icon
            var cur_appname = (function (appname) { //截断后的应用名称
                if (appname.length > 15) {
                    appname = appname.substring(0, 13) + '...';
                }
                return appname;
            })($('#appname').text());
			cur_appname = encodeURIComponent(cur_appname);
			cur_logo = encodeURIComponent(cur_logo);
			downurl = encodeURIComponent(downurl);
			
			var arr = cur_updatetime.split("-");
			var datum = new Date(Date.UTC(arr[0],arr[1]-1,arr[2],0,0,0));
			cur_updatetime = datum.getTime()/1000;
			if(cur_updatetime<1){
				cur_updatetime = 1351050041;
			}
			cur_size = parseFloat(cur_size)*1024*1024;
			cur_size = parseInt(cur_size);
			if(cur_size<1){
				cur_size = 3121152;
			}
			var platform = "android";
			var baseurl = "http://jisuchuansong.igexin.com/push.htm";
			var url = baseurl + "?name="+cur_appname+"&logo="+cur_logo+"&url="+downurl+"&size="+cur_size+"&desc="+cur_appname+"&platform="+platform+"&ct="+cur_updatetime;
			window.open (url, "newwindow", "height=450, width=650, toolbar= no, menubar=no, scrollbars=no, resizable=no, location=no, status=no,top=100,left=300");
			closeDialog();
		});

        //云推送
        function push_app_action(action) {
            var urlDom = $('.col-content .data-push');
            var username = $('#com_userbar .user').text();
            var tjurl = urlDom.attr("data-baidu-appdowntj"); //免费下载统计
            var downurl = urlDom.attr("data-baidu-appdownurl"); //免费下载地址
            var updateurl = urlDom.attr("data-push-update-url"); //绑定更新
            var datasend = "";
            if (action == 'push') {
                var acturl = $('.col-content .data-push').attr("data-push-url") + "?ver=" + (new Date().getTime());
                datasend = $("form.cloudpush").serialize() + "&" + $("form.apppushdata").serialize()
            } else if (action == 'update') {
                var acturl = $('.col-content .data-push').attr("data-push-update-url");
            }            
            $.ajax({
                type:"POST",
                url:acturl,
                data:datasend,
                error:function () {
                    alert('System busy');
                },
                success:push_callback_action
            });
        }

        $('.inner-push .btn-push').live('click', function () {
            push_app_action('push');
        });


        $('#push_login').live('click', function () {
			var username = $('#com_userbar .user').html();
			if(username!=null){
				var urlDom = $('.col-content .data-push');
				var url = urlDom.attr("data-push-check-url");
				var ctime = new Date().getTime();
				url = url + "&ver=" + ctime;
				$.ajax({
				type:"GET",
				url:url,
				data:"",
				success:push_callback_action
				});
			}else{
				closeDialog();
				loginBox();
			}
            
        });

        //刷新推送
        $('.btn-refresh-push').live('click', function () {
                closeDialog();
                push_app_action('update');
            });

        //举报
        $('.report_login').live('click',function(){
            show_report();    
            change_vcode();
        });
        //更换验证码 
        function change_vcode(){
            var reportdom = $(".report_login");
            var vcodeurl = reportdom.attr("ajax-vcode-url");
            vcodeurl = vcodeurl+"?type=getvcode&v="+new Date().getTime();
            $.ajax({
			    type: 'GET',
			    url: vcodeurl,
			    success: function (data){
					var json = $.parseJSON(data);
                    if(json['status']==1000){
                         var vcode_str = json['vcode_str'];
                         var imgurl = json['imgurl'];
                         $("#vcode_str").val(vcode_str);
                         $("#vcode_img").attr("src",imgurl);
                    }
                }
            });

        }

        $("#change_img").live('click',function(){
            change_vcode(); 
        });

        $("#vcode_img").live('click',function(){
            change_vcode();
        });

        $(".report_send").live('click',function(){
            send_report(); 
        });

        $("#user_report_content").live('focus',function(){
             $(this).css("color","#333"); 
			 $(this).css("border","1px #C3C3C1 solid"); 
             var content = $(this).text();
             if(content=='最少输入5个字符'){
                 $(this).text(''); 
             }
        });

        $("#user_report_content").live('keyup',function(){
             $(".report-left-word-tip").text('');
             checkWord();
        });

        $("#user_report_content").live('blur',function(){
             $(".report-left-word-tip").text('');
             check_report();
        });

        $(".report-user-vcode").live('blur',function(){
             if($(this).val()==""){
                 $(".report-vcode-tip").text('验证码不为空！');
                 $(".report-user-vcode").css('border','1px red solid');
             }
        });

        $(".report-user-vcode").live('keyup',function(){
                 $(".report-vcode-tip").text('');
                 $(".report-user-vcode").css('border','1px #c3c3c1 solid');
        });

        $(".report-result-close").live('click',function(){
               closeDialog();
        });

        function setTimeCloseDialog(){
           var wait = 3; 
           var sec =  $(".report-result-close .report-close-btn span").text();
           if(sec<=wait && sec>0){
                sec = sec-1; 
           }
           $(".report-result-close .report-close-btn span").text(sec);
           if(sec=='0'){
              closeDialog(); 
           }
        }
        
        function checkWord(){
            var maxstrlen=200;
            var c = $("#user_report_content"); 
            var zlen = getStrleng(c.val());
            var wck=$("#report-left-word-num");
			var lcontent = c.val();
            var llen = lcontent.length;
            if(zlen>maxstrlen+1){
                $(".report-bottom button").attr('class','report_send_disable');
                $("#user_report_content").css('border','1px red solid');
                var maxcontent = getSubContent(lcontent,maxstrlen);
                c.val(maxcontent);
                c.attr('maxlength',maxcontent.length);
            }
            else{
                c.attr('maxlength',maxstrlen);
                if(zlen>=6){
                    $(".report-bottom button").attr('class','report_send');
                }else{
                    $(".report-bottom button").attr('class','report_send_disable');
                }
            }
            var remain = maxstrlen-zlen;
            if(remain<0) remain=0;
            if(remain==0){
                c.attr('maxlength',llen);
                $(".report-left-word-tip").text('最多输入'+maxstrlen+'个字符！');
            }
            wck.html(remain);
        }
        function getSubContent(str,maxl){
            var myLen =0;
            for(var i=0;i<str.length;i++){
                if(str.charCodeAt(i)>0&&str.charCodeAt(i)<128){
                    myLen++;
                }else{
                    myLen = myLen+2;
                }
                if(myLen>maxl){
                    return str.substring(0,i);
                    break;
                }
            }
            return str;
        }
        function getStrleng(str){
            var myLen =0;
            for(var i=0;i<str.length;i++){
                if(str.charCodeAt(i)>0&&str.charCodeAt(i)<128){
                    myLen++;
                }else{
                    myLen = myLen+2;
                }
            }
            return myLen;
        }
        //举报弹层
        function show_report(){
               closeDialog();
               showDialog({
                        title:'举报',
                        content:'<p class="inner-title-2">请填写举报内容：</p><div class="report-content"><textarea id="user_report_content" maxlength="200">最少输入5个字符</textarea></div><div class="report-left-word"><span class="report-left-word-tip"></span>还可输入<span id="report-left-word-num">200</span>字符</div><div class="report-middle"><span>验证码：<input type="text" id="user_vcode" name="user_vcode" class="report-user-vcode"><input type="hidden" name="vcode_str" id="vcode_str" value=""></span><span class="vcode_img_span"><img src="" id="vcode_img" class="report-vcode-img"></span><span><a href="javascript:void(0);" target="_self" id="change_img">看不清，换一张</a></span><div class="report-vcode-tip"></div></div><div class="report_update">您的举报信息将会同步到12321举报平台</div><div class="report-bottom"><button class="report_send_disable"></button></div>',
                         height: '420'
                });
        }
        //举报成功
        function report_result(){
                closeDialog();
               showDialog({
                        title:'举报',
                        content:'<p class="inner-title-2"></p><div class="report-result-info"><span>举报成功</span></div><div class="report-result-thx">感谢您的举报！</div><div class="report-result-close"><span class="report-close-btn"><span>3</span>秒后关闭</span></div>',
                         height: '280'
                });
                setInterval(setTimeCloseDialog,1000); 
        
        }

        function check_report(){
             var maxstrlen = 200;
             var user_report_content = $("#user_report_content").val(); 
             $("#user_report_content").css('border','1px #C3C3C1 solid');
             var strlen = getStrleng(user_report_content);
             if(strlen<1 || user_report_content=='最少输入5个字符'){
                 $(".report-left-word-tip").text('举报内容不能为空！');
                 $("#user_report_content").css('border','1px red solid');
                 return false;
             }
             if(strlen<6){
                 $(".report-left-word-tip").text('最少输入5个字符！');
                 $("#user_report_content").css('border','1px red solid');
                 return false;
             }
             if(strlen>maxstrlen){
                 $(".report-left-word-tip").text('最多输入'+maxstrlen+'个字符！');
                 $("#user_report_content").css('border','1px red solid');
                 return false;
             }
             return true;
        }
        function check_vcode(){
             var user_vcode = $("#user_vcode").val();
             var vcode_str = $("#vcode_str").val();
             if(user_vcode.length<1){
                 $(".report-vcode-tip").text('验证码不为空！');
                 $(".report-user-vcode").css('border','1px red solid');
                 return false;
             }
            if(user_vcode.length!=4){
                 $(".report-vcode-tip").text('验证码有误！');
                 $(".report-user-vcode").css('border','1px red solid');
                 return false;
             }
             return true;
        }
        

        function send_report(){
             var ch = check_report();
             if(ch==false) return false;
             var vch = check_vcode();
             if(vch==false) return false;
             
             var user_vcode = $("#user_vcode").val();
             var vcode_str = $("#vcode_str").val();
             var user_report_content = $("#user_report_content").val(); 
             var urlDom = $('.col-content .data-push');
			 var downurl = $('#as_durl').val();//免费下载地址
             var cur_vname = $('.apppushdata input[name=sname]').val();
             var reportdom = $(".report_login");
             var reporturl = reportdom.attr("ajax-report-url");
			 $(".report-vcode-tip").text('');

             $.ajax({
                 type: 'GET',
                data: 'vcode_str='+vcode_str+'&input='+user_vcode+'&packageurl='+downurl+'&packagename='+cur_vname+'&content='+user_report_content, 
			    url: reporturl,
			    success: function (data){
					var json = $.parseJSON(data);
                    if(json['status']==1000){
                       report_result(); 
                    }else if(json['status']==1005){
					    $(".report-vcode-tip").text('验证码有误！');
						$(".report-user-vcode").css('border','1px red solid');
					}else{
					    $(".report-vcode-tip").text('举报提交失败！');
					}
                }
            });

        
        }

        //截图,评论页面,参数, TAB切换事件
        $('.data-tabnav').live('click', function () {
            var that = $(this);
            if (!that.hasClass('on')) {
                $('.data-tabcon').hide();
                var arrCons = that.attr('data-con').split(' ');
                for (var i = 0,
                         len = arrCons.length; i < len; i++) {
                    $('.' + arrCons[i]).show();
                }
                $('.data-tabnav').removeClass('on');
                that.addClass('on');
            }
        });

        //简介折叠事件
        $('.data-fold').live('click', function () {
            var that = $(this);
            that.parent().hide();
            $('.' + that.attr('data-show')).show();
        });

        //评分事件-获得评分
        function getScore() {
            var ulDom = $('#data-score-top'),
                url = ulDom.attr('df') + '&type=g';

            $.ajax({
                url:url,
                success:function (data) {
                    var data = $.parseJSON(data);
                    if (data['returncode'] == '-1') {
                        $('.data-tips-score').text('获取评分失败，请稍后重试.');
                    } else {
                        var averageScore = Math.round(data['display_score'] / 10),
                        //目前平均分
                            participants = data['display_count']; //参与者人数
                        $('#score-num').text(averageScore + '\u5206');
                        $('#score-participants').text('(已有' + participants + '人评分)');
                        ulDom.attr('class', 'com-star data-score score-' + averageScore);
                    }
                }
            });
        }

        //评分事件
        $('.data-score li a').live({
            click:function () {
                if (!isLogin()) {
                    loginBox();
                } else {
                    var that = $(this),
                        mark = that.attr('data-score'),
                        tenPointMark = mark / 10,
                        ulDom = $('.data-score'),
                        url = $('#data-score-top').attr('df') + '&type=s&score=' + mark; //表示获得评分


                    $('.data-tips-score').text('感谢打分！您的评分是' + tenPointMark + '分');

                    $('#data-score-top').attr('data-selfmark', tenPointMark);

                    //评分成功后,提示是否写评论
                    if ($('#data-score-top').attr('data-hassent') == 'false' && that.parent().parent().attr('id') == 'data-score-top') {
                        showDialog({
                            title:'评星成功',
                            content:'<div><div class="inner-message ">评星成功！你还可以去写评论</div><a href="javascript:" target="_self" class="inner-center-button mod-supernatant-write-comment">去写评论</a></div>',
                            height:'260'
                        });
                    }

                    if ($('.commentbox .data-score').attr('data-hastip') == 'true') {
                        $('.comments .attention-word').html('还能输入' + $('.comments .attention-word').attr('data-length') + '个字');
                        $('.commentbox .data-score').attr('data-hastip', 'false');
                    }

                    if ($('#data-score-top').attr('data-hasmark') == 'false') {
                        ulDom.attr('class', 'com-star data-score score-' + tenPointMark);
                        $.ajax({
                            url:url,
                            success:function (data) {

                                var data = $.parseJSON(data);
                                if (data['returncode'] == 0) {
                                    $('#data-score-top').attr('data-hasmark', 'true');
                                    $('#data-score-top').attr('data-score', tenPointMark);
                                    getScore();
                                } else {
                                    $('.data-tips-score').text('系统繁忙，请稍后再评分。');
                                }
                            }
                        });
                    }
                }
            }
        });

        $('.data-score2').bind({
            mouseover:function () {
                $(this).attr('class', 'com-star data-score');
            },

            mouseout:function () {

                var score = Math.round($('#data-score-top').attr('data-score')),
                    that = $(this),
                    domId = that.attr('id'),
                    scoreSelfMark = $('#data-score-top').attr('data-selfmark');

                switch (domId) {
                    case 'data-score-top':
                        that.attr('class', 'com-star data-score score-' + score);
                        break;
                    case 'data-score-bottom':
                        that.attr('class', 'com-star data-score score-' + scoreSelfMark);
                        break;
                }

            }

        });

        //截图滑动事件
        function initScreenshotsEvent() {
            var ulDom = $('.data-screenshots'),
                offset = ulDom.attr('data-offset'),
                size = ulDom.attr('data-size'),
                ceilSize = Math.ceil(size / 2),
                availableRight = ceilSize - 1,
                arrowLeft = $('.data-arrow-left'),
                arrowRight = $('.data-arrow-right');

            if (size > 2) {
                arrowRight.show();
            }

            arrowRight.attr('data-available', availableRight);
            arrowRight.attr('data-totaltime', availableRight);

            arrowRight.click(function () {
                if (arrowRight.attr('data-available') > 0) {
                    var offset = ulDom.attr('data-offset') - 0 - 644,
                        rightAvailable = arrowRight.attr('data-available') - 0 - 1,
                        leftAvailable = arrowRight.attr('data-totaltime') - 0 - rightAvailable;
                    ulDom.attr('data-offset', offset);
                    arrowRight.attr('data-available', rightAvailable);
                    arrowLeft.attr('data-available', leftAvailable);
                    ulDom.animate({
                        marginLeft:offset + 'px'
                    });
                    if (rightAvailable < 1) {
                        arrowRight.hide();
                    }
                    if (leftAvailable > 0) {
                        arrowLeft.show();
                    }
                }
            });

            $('.data-arrow-left').click(function () {
                if ($('.data-arrow-left').attr('data-available') > 0) {
                    var offset = ulDom.attr('data-offset') - 0 + 644,
                        leftAvailable = arrowLeft.attr('data-available') - 0 - 1,
                        rightAvailable = arrowRight.attr('data-totaltime') - 0 - leftAvailable;
                    ulDom.attr('data-offset', offset);
                    arrowRight.attr('data-available', rightAvailable);
                    arrowLeft.attr('data-available', leftAvailable);
                    ulDom.animate({
                        marginLeft:offset + 'px'
                    });
                    if (leftAvailable < 1) {
                        arrowLeft.hide();
                    }
                    if (rightAvailable > 0) {
                        arrowRight.show();
                    }
                }
            });
        }


        initScreenshotsEvent();

        function loginFail() {
            showDialog({
                title:'登陆异常',
                content:'<div><div class="inner-message ">您的账号异常，请稍候再试</div><a href="javascript:" class="inner-center-button mod-supernatant-close">确定</a></div>',
                height:'260'
            });
        }
      
        function getTheFirstPageComments() {
            var pn = 1,
                groupid = $('.devidepage').attr('data-groupid');

        pageTurn(groupid, pn);
    }
	
	getTheFirstPageComments();
	
	

	$('.devidepage a').live('click', function () {
		var pn = $(this).attr('data-page'),
			groupid = $('.devidepage').attr('data-groupid');

		pageTurn(groupid, pn);
	});

	function getDoubleScore(userId, score){
		var score = score - 0;
		if(userId == '758861490' && score<6){
			score = score * 2;
		}
		
		return score;
	}
	
	function oneDigitFormatToDouble(number){
		if(number - 0 < 10){
			number = '0' + number;
		}
		
		return number;
	}
	
	function userNameProtect(username){		
		var mail = '',mailArr,suffix;
		if(/\w+@\w+\.\w+/.test(username)){			
			try{
				mail = /\w+@\w+\.\w+/.exec(username)[0];
				mailArr = mail.split('@');
				if(mailArr.length == 2){					
					suffix = mailArr[0].substr(0,4) + '***@' + mailArr[1];					
					return username.replace(mail,suffix);
				}else{
					return username;
				}				
			}catch(e){
				return username;
			}
		}else{		
			return username;
		}
	}
	
   function pageTurn(groupid, pn) {
        var arrHtml = [],
            strHtmlPage = '',			
            pn = pn - 0,
			uid = $('.apppushdata input[name=uid]').val(),
			username = $('.apppushdata input[name=username]').val(),

            url = '/a/comment?action_type=getCommentList&groupid=' + groupid + '&pn=' + pn + '&uid=' + uid + '&r=' + Math.random();

        $.get(url, function (data) {
                var htmlStrComments = '',
                    strHtmlHasWrite = '',
                    json = $.parseJSON(data),
                    data = json['data'],
                    total = Math.ceil(json['total_count'] / 10) - 0,
                    vcode = $('.params-vname:first').text();

                if (json['err_no'] == '0') {

                    if (data.length == 0) {
                        $('#comments-none').show();
                    } else {
                        for (var i = 0, len = data.length; i < len; i++) {
						var reserved2 = getDoubleScore(data[i]['user_id'], data[i]['reserved2']),
                                date = new Date(data[i]['create_time'] + '000' - 0),
							strDate = date.getFullYear() + '-' + oneDigitFormatToDouble(date.getMonth() + 1) + '-' + oneDigitFormatToDouble(date.getDate()) + ' ' + oneDigitFormatToDouble(date.getHours()) + ':' + oneDigitFormatToDouble(date.getMinutes());
                        if(reserved2>10){
                           resvered2 = 10;
                        }
                        if(reserved2<0){
                           resvered2 = 0;
                        }
						htmlStrComments += '<li class="comment" data-replyid="'+data[i]['reply_id']+'"><div><span>' + userNameProtect(data[i]['user_name']) + '</span><span class="score score-' + reserved2 + '" data-score="' + reserved2 + '"></span>' + (reserved2/2) + '分</div><div><p class="msgcontent">' + data[i]['content'].replace(/\n/g, '<br />') + '</p></div><div><span class="fleft info">版本:&nbsp;' + vcode + '&nbsp;&nbsp;&nbsp;' + strDate + '&nbsp;发表</span></div></li>'
                        }
                    }

                    if (json['self_send'].length == undefined) {
                        $('.not-write').hide();
                        $('.write-commnet').hide();
                        var selfScore = json['self_send']['reserved2'],
                            selfDate = new Date(json['self_send']['create_time'] + '000' - 0),
                        selfStrDate = selfDate.getFullYear() + '-' + oneDigitFormatToDouble(selfDate.getMonth() + 1) + '-' + oneDigitFormatToDouble(selfDate.getDate()) + ' ' + oneDigitFormatToDouble(selfDate.getHours()) + ':' + oneDigitFormatToDouble(selfDate.getMinutes());

                        strHtmlHasWrite = '<div class="banner"><div class="wodepinglun fleft" data-replyid="' + json['self_send']['reply_id'] + '">我的评论:</div><a class="changebutton fright" href="javascript:;" name="changebutton" target="_self">修改</a></div><div class="comment"><div><span>' + json['self_send']['user_name'] + '</span><span class="myscore score-' + selfScore + '" data-score="' + selfScore + '"></span><span>' + selfScore + '分</span></div> <div><p class="msgcontent">' + json['self_send']['content'].replace(/\n/g, '<br />') + '</p></div><div><span class="fleft info">版本:&nbsp;' + vcode + '&nbsp;&nbsp;&nbsp;' + selfStrDate + '</span></div></div>';
                    }

                    if (json['self_send'].length == 0) {
                        $('.already-write').hide();
                        $('.check-my-comment').hide();
                    }

                    if (pn > 5) {
                    arrHtml[arrHtml.length] = '<a href="javascript:;" target="_self" class="prev" data-page="' + (pn - 1) + '">上一页</a>';
                    }

                if(total > 1){
                    if(pn == 1){
                        arrHtml[arrHtml.length] = '<a href="javascript:;" target="_self" class="select" data-page="1">1</a>';
                    }else{
                        arrHtml[arrHtml.length] = '<a href="javascript:;" target="_self" data-page="1">1</a>';   
                    }
                }

                if (pn >= 5) {
                    arrHtml[arrHtml.length] = '<a href="javascript:;" target="_self" class="dot" data-page="' + (pn - 1) + '">上五页</a>';
                }

                if (total < 7) {
                    for (var i = 2; i < total; i++) {
                        if (i == pn) {
                            arrHtml[arrHtml.length] = '<a href="javascript:;" target="_self" class="select" data-page="' + i + '">' + i + '</a>';
                        } else {
                            arrHtml[arrHtml.length] = '<a href="javascript:;" target="_self" data-page="' + i + '">' + i + '</a>';
                        }
                    }
                } else if (pn < 4) {
                    for (var i = 2; i < 6; i++) {
                        if (i == pn) {
                            arrHtml[arrHtml.length] = '<a href="javascript:;" target="_self" class="select" data-page="' + i + '">' + i + '</a>';
                        } else {
                            arrHtml[arrHtml.length] = '<a href="javascript:;" target="_self" data-page="' + i + '">' + i + '</a>';
                        }
                    }
                } else if ((total - pn) < 3) {
                    for (var i = total - 5; i < total; i++) {
                        if (i == pn) {
                            arrHtml[arrHtml.length] = '<a href="javascript:;" target="_self" class="select" data-page="' + i + '">' + i + '</a>';
                        } else {
                            arrHtml[arrHtml.length] = '<a href="javascript:;" target="_self" data-page="' + i + '">' + i + '</a>';
                        }
                    }
                } else {
                    for (var i = pn - 2; i < pn+3; i++) {
                        if (i == pn) {
                            arrHtml[arrHtml.length] = '<a href="javascript:;" target="_self" class="select" date-page="' + i + '">' + i + '</a>';
                        } else {
                            arrHtml[arrHtml.length] = '<a href="javascript:;" target="_self" data-page="' + i + '">' + i + '</a>';
                        }
                    }
                }

                if ((total - pn) >= 4) {
                    arrHtml[arrHtml.length] = '<a href="javascript:;" target="_self" class="dot" data-page="' + (pn - 1) + '">下五页</a>';
                }

                if (pn == total && total > 1) {
                    arrHtml[arrHtml.length] = '<a href="javascript:;" target="_self" class="select" data-page="' + total + '">' + total + '</a>';
                } else if (total > 1) {
                    arrHtml[arrHtml.length] = '<a href="javascript:;" target="_self" data-page="' + total + '">' + total + '</a>';
                }

                if ((pn + 4) < total) {
                    arrHtml[arrHtml.length] = '<a href="javascript:;" target="_self" class="next" data-page="' + (pn + 1) + '">下一页</a>';
                }

                    htmlStrPage = arrHtml.join('');

                    $('.already-write').html(strHtmlHasWrite);
                    $('#coment-list').html(htmlStrComments);
                    $('.devidepage').html(htmlStrPage);
                }
            });
        }
    } //ready
);
