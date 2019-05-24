//mui.init();
//
//	mui.plusReady(function(){
//		//获取当前的窗口对象
//		var zhuye=plus.webview.currentWebview();
//		
//		var ziyemian=[
//			{
//				url:'index.html',
//				id:'index'
//			},
//			{
//				url:'Order_receipt.html',
//				id:'Order_receipt'
//			},
//			{
//				url:'shop.html',
//				id:'shop'
//			} 
//		];
//		
//		
//		for (var i=0,l=ziyemian.length;i<l;i++) {
//			var url=ziyemian[i].url;
//			var id=ziyemian[i].id;
//			console.info(url);console.info(id);
//			
//			if (plus.webview.getWebviewById(url,id)){
//				return;
//			}
//			
//			var ziye=plus.webview.create(url,id,{
//						bottom:'50px',
//						top:'0px',
//						popGesture:'none',//隐藏导航条
//						scrollIndicator:'none'//关闭侧滑关闭
//			})
//			if(i==0) {
//				ziye.show();
//			}else{
//				ziye.hide();
//			}
//				//三步表达式
//			i===0?ziye.show():ziye.hide();
//			
//			zhuye.append(ziye);	
//		}		
//	})
////	//设置默认显示的窗口
//	var ziyeid="index";
//	mui('.mui-bar').on("tap",'.mui-tab-item',function(e){
//		var ziyemianId=this.dataset.id;
//		if(ziyeid==ziyemianId){
//			console.log(ziyeid);
//			return; 
//		}
//		var storeinfoid=localStorage.getItem("storeinfoid");
//		if(storeinfoid == '' || storeinfoid == 'null' || storeinfoid == null || storeinfoid == undefined) {
//			mui.toast("请登录");
//			dui.jump('Login.html', 'Login.html');
//			return;
//		}
//		
//		plus.webview.getWebviewById(ziyeid).hide();//隐藏当前正在显示的窗口
//		plus.webview.getWebviewById(ziyemianId).show();//显示即将点击的窗口
//		ziyeid=ziyemianId;//点击之后更新当前正在显示的ID
//	})
//	//自定义事件，模拟点击“首页选项卡”  接受通知的意思
//		document.addEventListener('gohome', function() {
//			var defaultTab = document.getElementById("defaultTab");
//			//模拟首页点击
//			mui.trigger(defaultTab, 'tap');
//			//切换选项卡高亮
//			var current = document.querySelector(".mui-bar-tab>.mui-tab-item.mui-active");
//			if (defaultTab !== current) {
//				current.classList.remove('mui-active');
//				defaultTab.classList.add('mui-active');
//			}
//		});


		