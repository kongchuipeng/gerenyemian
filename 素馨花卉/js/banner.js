// 轮播图
//1.banner盒子
//2.轮播点元素集合
//3.图片元素集合
//4.左箭头
//5.右箭头
//6.轮播点选中类
//7.轮播间隔
function bannerr(banner,dots,img,lbnt,rbnt,active,time){
    // console.log(active);
    // console.log(dots[0].className);
    //img[0].style.zIndex = 5;
    img[0].style.opacity = 1;
    for (let i = 0; i < dots.length; i++) {
        dots[i].onmouseover = function () {
            for (let j = 0; j < dots.length; j++) {
                dots[j].classList.remove(active);
                //img[j].style.zIndex = 1;
                img[j].style.opacity = 0;
                num = i;
            }
            dots[i].classList.add(active);
            // img[i].style.zIndex = 5;
            img[i].style.opacity = 1;
        }
    }
    let num = 0;
    let t = setInterval(move,time);
    function move () {
        num++;
        if (num == dots.length ) {
            num = 0;
        }
        for (let j = 0; j < dots.length; j++) {
            dots[j].classList.remove(active);
            img[j].style.opacity = 0;
            //img[j].style.zIndex = 1;
        }
        dots[num].classList.add(active);
        //img[num].style.zIndex = 5;
        img[num].style.opacity = 1;
    }
    banner.onmouseover = function () {
        clearInterval(t);
    };
    banner.onmouseout = function () {
        t = setInterval(move,time);
    };

    rbnt.onclick = function () {
        move();
    };
    lbnt.onclick = function () {
        num--;
        if (num < 0) {
            num = (img.length-1);
        }
        for (let j = 0; j < dots.length; j++) {
            dots[j].classList.remove(active);
            //img[j].style.zIndex = 1;
            img[j].style.opacity = 0;
        }
        dots[num].classList.add(active);
        //img[num].style.zIndex = 5;
        img[num].style.opacity = 1;
    };
    window.onblur = function () {
        clearInterval(t);
    };
    window.onfocus = function () {
        t = setInterval(move,time);
    }
}
