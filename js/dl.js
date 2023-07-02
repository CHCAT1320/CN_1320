document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault(); // 阻止表单默认提交行为

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // 创建一个新的用户对象
    var user = {
        "username": username,
        "password": password
    };

    // 将用户对象转换为JSON字符串
    var userJson = JSON.stringify(user);

    // 发送POST请求，将用户信息保存到json文件中
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "users.json", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            alert("注册成功！");
        }
    };
    xhr.send(userJson);
});

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // 阻止表单默认提交行为

    var username = document.getElementById("loginUsername").value;
    var password = document.getElementById("loginPassword").value;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
    // 发送GET请求，获取json文件中的用户信息
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "js/json/users.json", true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var users = JSON.parse(xhr.responseText);

            // 遍历用户数组，判断用户名和密码是否匹配
            var loggedIn = false;
            for (var i = 0; i < users.length; i++) {
                if (users[i].username === username && users[i].password === password) {
                    loggedIn = true;
                    break;
                }
            }

            if (loggedIn) {
                alert("登录成功！");
            } else {
                alert("用户名或密码错误！");
            }
        }
    };
    xhr.send();
});
document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault(); // 阻止表单默认提交行为

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // 创建一个新的用户对象
    var user = {
        "username": username,
        "password": password
    };

    // 将用户对象转换为JSON字符串
    var userJson = JSON.stringify(user);

    // 发送POST请求，将用户信息保存到json文件中
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "js/json/users.json", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            alert("注册成功！");
        }
    };
    xhr.send(userJson);
});

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // 阻止表单默认提交行为

    var username = document.getElementById("loginUsername").value;
    var password = document.getElementById("loginPassword").value;

    // 发送GET请求，获取json文件中的用户信息
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "users.json", true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var users = JSON.parse(xhr.responseText);

            // 遍历用户数组，判断用户名和密码是否匹配
            var loggedIn = false;
            for (var i = 0; i < users.length; i++) {
                if (users[i].username === username && users[i].password === password) {
                    loggedIn = true;
                    break;
                }
            }

            if (loggedIn) {
                alert("登录成功！");
            } else {
                alert("用户名或密码错误！");
            }
        }
    };
    xhr.send();
});
