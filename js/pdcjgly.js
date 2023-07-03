function GetQueryString(name)
					{
					     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
					     var r = window.location.search.substr(1).match(reg);
					      if(r!=null)return  unescape(r[2]); return "未登录";
					}
					 var user = decodeURI(GetQueryString("user")); 
					 if (user) {
					   var h3 = document.getElementById("user1"); 
					   if (user === "1320") {
					     h3.textContent = "超级管理员"+user+"号";
					   } else {
					     h3.textContent = "用户：" + user; 
					   }
					 } else {
					   console.log("无有用户"); 
					 }