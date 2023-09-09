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

