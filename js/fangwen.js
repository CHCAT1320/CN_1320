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