(function($) { //($)防止$冲突
	$.fn.extend({ //jquery方法
		       
		　　　　　upload:function (myUrl) {
			    
				var that = this
				var btnArray = [{
					title: "照相机"
				}, {
					title: "相册"
				}]; //选择按钮  1 2 3
				plus.nativeUI.actionSheet({
					title: "请选择",
					cancel: "取消",
					buttons: btnArray
				}, function(e) {
					var index = e.index;
					switch(index) {
						case 1:
							that.camera(myUrl);
							break;
						case 2:
							that.album(myUrl);
							break;
					}
				});
			},
			camera:function (myUrl) {
				//				相机
				var that = this
				var cmr = plus.camera.getCamera();
				cmr.captureImage(function(p) {
					//成功
					plus.io.resolveLocalFileSystemURL(p, function(entry) {
						var img_name = entry.name;
						var img_path = entry.toLocalURL();
						//						that.upsrc = img_path
						that.upimg = !that.upimg
						that.upload_img(img_path,myUrl)
					}, function(e) {
						alert("读取拍照文件错误：" + e.message);
					});

				}, function(e) {
					alert("失败：" + e.message);
				}, {
					filename: '_doc/camera/',
					index: 1
				});
			},
			album:function (myUrl) {
				//				相册
				var that = this
				plus.gallery.pick(function(path) {
					//					that.upsrc = path
					that.upimg = !that.upimg
					that.upload_img(path,myUrl);
				}, function(e) {
					alert("取消选择图片");
				}, {
					filter: "image"
				});
			},
			upload_img:function (p,myUrl) {
				
				var thats = this
				var img = new Image();
				img.src = p; // 传过来的图片路径在这里用。
				
				img.onload = function() {
					var that = this;
					//生成比例 
					var w = that.width,
						h = that.height,
						scale = w / h;
					w = 480 || w; //480  你想压缩到多大，改这里
					h = w / scale;

					//生成canvas
					var canvas = document.createElement('canvas');
					var ctx = canvas.getContext('2d');
					$(canvas).attr({
						width: w,
						height: h
					});
					ctx.drawImage(that, 0, 0, w, h);

					$.ajax({
						type: 'post',
						url: url_url + myUrl,
						data: {
							imgStr: canvas.toDataURL('image/jpeg', 1 || 0.8)
						},
						success: function(res) {
							if(res.status == 200) {
								imglist.push(url_url + res.data)
								$('.img-box').append(`
									<img src="${url_url + res.data}"/>
								`)
							} else {
								alert(res.msg)
							}
						},
						error: function(res) {
							alert('网络连接失败，请检查网络后再试！')
						}
					})
				}
			}　
		
	});
})(jQuery)