    //双下标轮播
    /*
    1.需要移动的box
    2.轮播点
    3.左箭头
    4.右箭头
    5.需要移动的box的大小
    6.轮播点选中的样式
     */
function banner2(body,bnt1,bnt2,wid){
    body[0].style.left = "0";
    let now = 0;
    let next = 0;
    let flag = true;
    function move() {
        next++;
        if(next >= body.length){
            flag = true;
            next = body.length-1;
            return;
        }
        body[now].style.left = "0";
        body[next].style.left = wid + "px";
        animate(body[now],{left:-wid},function() {
            for (let i = 0; i < body.length; i++) {
                dot2[i].classList.remove(hot);
            }
        });
        animate(body[next],{left:0},function () {
            dot2[now].classList.add(hot);
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
            flag = true;
            next = 0;
            return;
        }
        body[now].style.left = "0";
        body[next].style.left = -wid + "px";
        animate(body[now],{left:wid},function() {
            for (let i = 0; i < body.length; i++) {
                dot2[i].classList.remove(hot);

            }
        });
        animate(body[next],{left:0},function () {
            dot2[now].classList.add(hot);
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
}