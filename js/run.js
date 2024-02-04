function setStorage(){
                if(localStorage.counter){
                    localStorage.counter=Number(localStorage.counter)+1;
                }else{
                    localStorage.counter=1;
                }
                return localStorage.counter;
            }
            var counter=setStorage();
            var oBox=document.getElementById('box5');
            oBox.innerHTML="你已经访问了此网站"+counter+"次";
			
			    // 获取加载条元素
			    var loadingBar = document.getElementById('loading-bar');
			    // 获取页面中所有图片元素
			    var images = document.getElementsByTagName('img');
			    // 记录图片加载完成的数量
			    var loadedCount = 0;
			    // 监听图片加载完成事件
			    for (var i = 0; i < images.length; i++) {
			        images[i].addEventListener('load', function() {
			            // 图片加载完成，计数加1
			            loadedCount++;
			            // 判断是否所有图片加载完成
			            if (loadedCount === images.length) {
			                // 所有图片加载完成，隐藏加载条
			                loadingBar.style.display = 'none';
			            }
			        });
			    }
			    // 监听页面加载完成事件
			    window.addEventListener('load', function() {
			        // 隐藏加载条
			        loadingBar.style.display = 'none';
			    });
			    // 监听DOM内容加载完成事件（不包括图片等资源）
			    document.addEventListener('DOMContentLoaded', function() {
			        // 显示加载条
			        loadingBar.style.display = 'block';
			    });

function createTap() {
  var tap = document.createElement("div");
  tap.setAttribute("id", "tap");
  document.getElementById("body").appendChild(tap);
  
  var containerHeight = document.getElementById("body").offsetHeight;
  var randomTop = Math.random() * containerHeight;
  tap.style.top = randomTop + "px";
  tap.style.marginLeft="-200px"

  var tapLeft = parseInt(tap.style.marginLeft) || 0;
  var startTime = performance.now();

  function move() {
    var currentTime = performance.now();
    var elapsedTime = currentTime - startTime;
    var distance = elapsedTime / 1500;
    tapLeft += distance;
    tap.style.marginLeft = tapLeft + "px";
    var containerWidth = document.getElementById("body").offsetWidth;
    if (tapLeft > containerWidth) {
      tap.remove();
    }
    requestAnimationFrame(move);
  }

  requestAnimationFrame(move);
}

setInterval(createTap, Math.floor(Math.random() * 9000) + 1000);

function createDrag() {
  var drag = document.createElement("div");
  drag.setAttribute("id", "drag");
  document.getElementById("body").appendChild(drag);
  
  var containerHeight = document.getElementById("body").offsetHeight;
  var randomTop = Math.random() * containerHeight;
  drag.style.top = randomTop + "px";
  drag.style.marginLeft = "-200px";

  var dragLeft = parseInt(drag.style.marginLeft) || 0;
  var startTime = performance.now();

  function moveDrag() {
    var currentTime = performance.now();
    var elapsedTime = currentTime - startTime;
    var distance = elapsedTime / 1500;
    dragLeft += distance;
    drag.style.marginLeft = dragLeft + "px";
    var containerWidth = document.getElementById("body").offsetWidth;
    if (dragLeft > containerWidth) {
      drag.remove();
    }
    requestAnimationFrame(moveDrag);
  }

  requestAnimationFrame(moveDrag);
}

setInterval(createDrag, Math.floor(Math.random() * 9000) + 1000);

function createFlick() {
  var flick = document.createElement("div");
  flick.setAttribute("id", "flick");
  document.getElementById("body").appendChild(flick);
  
  var containerHeight = document.getElementById("body").offsetHeight;
  var randomTop = Math.random() * containerHeight;
  flick.style.top = randomTop + "px";
  flick.style.marginLeft = "-200px";

  var flickLeft = parseInt(flick.style.marginLeft) || 0;
  var startTime = performance.now();

  function moveFlick() {
    var currentTime = performance.now();
    var elapsedTime = currentTime - startTime;
    var distance = elapsedTime / 1500;
    flickLeft += distance;
    flick.style.marginLeft = flickLeft + "px";
    var containerWidth = document.getElementById("body").offsetWidth;
    if (flickLeft > containerWidth) {
      flick.remove();
    }
    requestAnimationFrame(moveFlick);
  }

  requestAnimationFrame(moveFlick);
}

setInterval(createFlick, Math.floor(Math.random() * 9000) + 1000);

function createHold() {
  var hold = document.createElement("div");
  hold.setAttribute("id", "hold");
  document.getElementById("body").appendChild(hold);
  
  var containerHeight = document.getElementById("body").offsetHeight;
  var randomTop = Math.random() * containerHeight;
  hold.style.top = randomTop + "px";
  hold.style.marginLeft = "-200px";

  var holdLeft = parseInt(hold.style.marginLeft) || 0;
  var startTime = performance.now();

  function moveHold() {
    var currentTime = performance.now();
    var elapsedTime = currentTime - startTime;
    var distance = elapsedTime / 1500;
    holdLeft += distance;
    hold.style.marginLeft = holdLeft + "px";
    var containerWidth = document.getElementById("body").offsetWidth;
    if (holdLeft > containerWidth) {
      hold.remove();
    }
    requestAnimationFrame(moveHold);
  }

  requestAnimationFrame(moveHold);
}

setInterval(createHold, Math.floor(Math.random() * 9000) + 1000);
setInterval(function(){
	if (tap.length > 4) {
	    for (var i = 0; i < tap.length; i++) {
	        tap[i].remove();
	    }
	}
	if (drag.length > 4) {
	    for (var d = 0; d < drag.length; d++) {
	        drag[d].remove();
	    }
	}
	if (flick.length > 4) {
	    for (var f = 0; f < flick.length; f++) {
	        flick[f].remove();
	    }
	}
	if (hold.length > 4) {
	    for (var h = 0; h < hold.length; h++) {
	        hold[h].remove();
	    }
	}
},10)

							  var deleteInterval;
							  var deleteFlag = false;
							  
							  function toggleDelete() {
							      if (!deleteFlag) {
							          deleteFlag = true;
							          deleteInterval = setInterval(function() {
							              var tapDivs = document.querySelectorAll("#tap");
										  var dragDivs = document.querySelectorAll("#drag");
										  var flickDivs = document.querySelectorAll("#flick");
										  var holdDivs = document.querySelectorAll("#hold");
							              if (tapDivs.length > 0) {
							                  for (var i = 0; i < tapDivs.length; i++) {
							                      tapDivs[i].remove();
							                  }
							              }
										  if (dragDivs.length > 0) {
										      for (var i = 0; i < dragDivs.length; i++) {
										          dragDivs[i].remove();
										      }
										  }
										  if (flickDivs.length > 0) {
										      for (var i = 0; i < flickDivs.length; i++) {
										          flickDivs[i].remove();
										      }
										  }
										  if (holdDivs.length > 0) {
										      for (var i = 0; i < holdDivs.length; i++) {
										          holdDivs[i].remove();
										      }
										  }
							          }, 10);
							      } else {
							          clearInterval(deleteInterval);
							          deleteFlag = false;
							      }
							  }


					// 切换深色模式
					function openshense() {
					  var body = document.body;
					  body.classList.toggle("openshens");
					  var shensebut = document.getElementById("sensebut");
					  shensebut.classList.toggle("openshens");
					  var colorbox = document.getElementById("colorbox");
					  colorbox.classList.toggle("openshens");
					  var button = document.button;
					  button.classList.toggle("openshens");
					  var watermarkId = document.getElementById("watermarkId")
					  watermarkId.classList.toggle("openshens");
					  var githubimg = document.getElementById("githubimg")
					  githubimg.classList.toggle("openshens");
					}
					
					
					
					document.addEventListener("click", function(event) {
						event.stopPropagation(); // 阻止事件冒泡
					  var effect = document.getElementById("effect");
					  var x = event.clientX - 50; // 调整特效div位置居中
					  var y = event.clientY - 50;
					  var imageIndex = 1;
					  var animationInterval = setInterval(changeImage, 20);
					  effect.style.left = x + "px";
					  effect.style.top = y + "px";
					  effect.style.display = "none";
					  setTimeout(function() {
					      effect.style.display = "block"; // 延迟显示特效div
					      setTimeout(function() {
					        effect.style.display = "none"; // 延迟隐藏特效div
					        isAnimating = false; // 动画结束
					      }, 1000);
					    }, 100);
					  function changeImage() {
					    effect.style.backgroundImage = "url('img/gif/img-" + imageIndex + ".png')";
					    imageIndex++;
					    if (imageIndex > 31) {
					      clearInterval(animationInterval);
					      effect.style.display = "none";
					    }
					  }
					});