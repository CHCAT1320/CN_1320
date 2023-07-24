$(document).ready(function() {
    // 注册表单提交事件
    $("#registerForm").submit(function(e) {
        e.preventDefault(); // 阻止表单提交

        var username = $("#username").val();
        var password = $("#password").val();

        // 创建一个包含用户名和密码的对象
        var user = {
            "username": username,
            "password": password
        };

        // 读取已存在的用户列表
        var users = [];
        if (localStorage.getItem("users")) {
            users = JSON.parse(localStorage.getItem("users"));
        }

        // 将新用户添加到列表中
        users.push(user);

        // 将用户列表保存到本地存储
        localStorage.setItem("users", JSON.stringify(users));

        alert("注册成功！");
        $("#registerForm")[0].reset(); // 重置表单
    });

    // 登录表单提交事件
    $("#loginForm").submit(function(e) {
        e.preventDefault(); // 阻止表单提交

        var username = $("#loginUsername").val();
        var password = $("#loginPassword").val();

        // 读取用户列表
        var users = [];
        if (localStorage.getItem("users")) {
            users = JSON.parse(localStorage.getItem("users"));
        }

        // 验证用户名和密码
        var success = false;
        for (var i = 0; i < users.length; i++) {
            if (users[i].username === username && users[i].password === password) {
                success = true;
                break;
            }
        }

        if (success) {
            alert("登录成功！");
            $("#loginForm")[0].reset(); // 重置表单
        } else {
            alert("用户名或密码错误！");
        }
    });
});
