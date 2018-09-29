    //双下标轮播
    /*
    1.需要移动的box
    2.轮播点
    3.左箭头
    4.右箭头
    5.需要移动的box的大小
    6.轮播点选中的样式
     */
function banner2(banner,body,dot2,bnt1,bnt2,wid,hot,time,title){
    body[0].style.left = "0";
    // title[0].style.height = "74px";
    title[0].style.opacity = "1";
    title[0].style.transform = "translateY(-50px)"
    for (let i = 0; i < body.length; i++){
        dot2[i].onclick = function(){
                    // for(let j=0;j<body.length;j++){
                    //     dot2[j].classList.remove(hot);
                    //     body[j].style.left = -wid+"px";
                    // }
                    // now = i;
                    // next = i;
                    // dot2[i].classList.add(hot);
                    // body[i].style.left = "0";
                    if(i > now){
                        move();
                    }
                    if (i<now){
                        movel();
                    }
                }
            }
    let now = 0;
    let next = 0;
    let flag = true;
    let t = setInterval(move,time);
    function move() {
        next++;
        if(next >= body.length){
            // flag = true;
            next = 0;
            // return;
        }
        body[now].style.left = "0";
        body[next].style.left = wid + "px";
        animate(body[now],{left:-wid},function() {
            for (let i = 0; i < body.length; i++) {
                dot2[i].classList.remove(hot);
                // title[i].style.opacity = "0";
                // title[i].style.height = "0";
                title[i].style.opacity = "0";
                title[i].style.transform = "translateY(50px)"
            }
        });
        animate(body[next],{left:0},function () {
            dot2[now].classList.add(hot);
            // title[now].style.opacity = "1";
            // title[now].style.height = "74px;";
            title[now].style.opacity = "1";
            title[now].style.transform = "translateY(-50px)";
            flag = true;
        });
        now = next;
    }
    bnt1.onclick = function(){
        if(!flag){
            return;
        }
        flag = false;
        movel();
    };
    function movel(){
        next--;
        if(next < 0){
            // flag = true;
            next = body.length-1;
            // return;
        }
        body[now].style.left = "0";
        body[next].style.left = -wid + "px";
        animate(body[now],{left:wid},function() {
            for (let i = 0; i < body.length; i++) {
                dot2[i].classList.remove(hot);
                title[i].style.opacity = "0";
                title[i].style.transform = "translateY(50px)"
            }
        });
        animate(body[next],{left:0},function () {
            dot2[now].classList.add(hot);
            title[now].style.opacity = "1";
            title[now].style.transform = "translateY(-50px)"
            flag = true;
        });
        now = next;
    }
    bnt2.onclick = function () {
        if(!flag){
            return;
        }
        flag = false;
        move();
    };

    banner.onmouseover = function () {
        clearInterval(t);
    };
    banner.onmouseout = function () {
        t = setInterval(move,time);
    };
}