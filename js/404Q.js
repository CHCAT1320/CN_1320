    let img = document.querySelector('img')
    let x = 0, y = 0                                    // 元素离页面水平、垂直方向距离 
    let xflag = true, yflag = true                      // 设置水平、垂直标志位
    setInterval(() => {
        // 获取页面宽高
        let w = document.body.offsetWidth
        let h = document.body.offsetHeight

        // 判断图片碰壁的四种情况
        if (x == 0) xflag = true                        // 碰到左边
        if (y == 0) yflag = true                        // 碰到上边
        if (x == w - img.offsetWidth) xflag = false     // 碰到右边
        if (y == h - img.offsetHeight) yflag = false    // 碰到下边

        // 根据碰壁情况进行改变x和y的值
        // 方法一
        // if (xflag && yflag) x++, y++                    // 浮动方向：右下
        // if (xflag && !yflag) x++, y--                   // 浮动方向：右上
        // if (!xflag && yflag) x--, y++                   // 浮动方向：左下
        // if (!xflag && !yflag) x--, y--                  // 浮动方向：左上
        
		// 方法二
        xflag ? x++ : x--
        yflag ? y++ : y--

        // 设置图片的位置
        img.style.left = x + 'px'
        img.style.top = y + 'px'
        console.log(x, y);
    }, 3)