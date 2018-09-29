//banner
window.onload = function () {
    let banner = document.querySelector(".banner-p");
    let imgs = document.querySelectorAll(".banner-p>ul>li");
    let dots = document.querySelectorAll(".yuan>ul>li");
    let left = document.querySelector(".banner-bnt-l");
    let right = document.querySelector(".banner-bnt-r");
    let wid = parseInt(getComputedStyle(imgs[0],null).width);
    let title = document.querySelectorAll(".banner-t");
    // let text = document.querySelector()
    banner2(banner,imgs,dots,left,right,wid,"active",3000,title);


    left.onmouseover=function () {
        left.style.opacity = "1";
    };
    right.onmouseover=function () {
        right.style.opacity = "1";
    };
    left.onmouseout = function () {
        left.style.opacity = "0";
    };
    right.onmouseout = function () {
        right.style.opacity = "0";
    };


    let header = document.querySelector(".header");
    let text = document.querySelectorAll(".header-list ul a li");
    // console.log(text);
    window.addEventListener("scroll",function () {
        let bodyTop = document.body.scrollTop || document.documentElement.scrollTop;
        if (bodyTop > 0) {
            header.style.backgroundColor = "#fff";
            for (let i = 1; i < text.length; i++) {
                text[i].style.color = "#000";
                text[i].onmouseover = function () {
                    text[i].style.color = "#16B0DC";
                };
                text[i].onmouseout = function () {
                    text[i].style.color = "black";
                }
            }
        }
        if(bodyTop==0){
            header.style.backgroundColor = "rgba(0,0,0,0.15)";
            for(let i =1; i<text.length; i++){
                text[i].style.color = "#fff";
                text[i].onmouseout = function () {
                    text[i].style.color = "#fff";
                }
            }
        }
    },false);

    //banner2
    // let con = document.querySelector(".h-b-content");
    // let bntl = document.querySelector(".left-btn");
    // let bntr = document.querySelector(".right-btn");
    // let widths = parseInt(getComputedStyle(con,null).width)/5;
    // console.log(widths);


    //向中间平移

    let lil = document.querySelectorAll(".transx");
    let lir = document.querySelectorAll(".transr");
    let yu = document.querySelector(".huayu");
    // let picture = document.querySelectorAll(".huayu-b-l-p");
    // console.log(picture);
    let yutop = yu.offsetTop;
    // console.log(lil);
    // console.log(lir);
    let arr = [];
    for(let i = 0; i < lil.length; i++){
        // lil[i].style.transform = "translateX(-80px)";
        arr.push(lil[i].offsetTop+yutop);
        // lir[i].style.transform = "translateX(80px)";
    }
    // console.log(arr);
    window.addEventListener("scroll",function () {
        let bodytop = document.body.scrollTop||document.documentElement.scrollTop;
        // console.log(bodytop);
        arr.forEach((val,index)=>{
            if(bodytop+innerHeight>=val){
                lil[index].style.transform = "translateX(80px)";
                lir[index].style.transform = "translateX(-80px)";
                let img1 = lil[index].querySelector(".huayu-b-l-p>a>img");
                let img2 = lir[index].querySelector(".huayu-b-l-p>a>img");
                // console.log(img1);
                let url1 = img1.getAttribute("imgsrc");
                let url2 = img2.getAttribute("imgsrc");
                // console.log(url1);
                img1.setAttribute("src",url1);
                img2.setAttribute("src",url2);
            }
        })
    },false);

    let top = document.querySelector(".back");
    window.addEventListener("scroll",function () {
        let bodytop = document.body.scrollTop||document.documentElement.scrollTop;
        if(bodytop>800){
            top.style.bottom = "20px"
        }
        if(bodytop<=800){
            top.style.bottom = "-36px"
        }
        top.onclick=function () {
            animate(document.documentElement,{scrollTop:0});
            animate(document.body,{scrollTop:0});
        }
    },false);

    let title1 = document.querySelector(".huayi>.h-t1");
    let text1 = document.querySelector(".huayi>.h-t2");
    let body = document.querySelector(".huayi");
    let heig = body.offsetTop;
    // console.log(heig);
    // console.log(title1);
    // console.log(text1);
    window.addEventListener("scroll",function () {
        let bodytop = document.body.scrollTop||document.documentElement.scrollTop;
        if(bodytop+innerHeight>=heig){
            title1.style.top = "50px";
            text1.style.opacity = "1"
        }
    },false);
    function xiahua(title,heights) {
        window.addEventListener("scroll",function () {
            let bodytop = document.body.scrollTop||document.documentElement.scrollTop;
            if(bodytop+innerHeight>=heights){
                title.style.top = "50px";
            }
        },false)
    }

    let title2 = document.querySelector(".title2");
    let body2 = document.querySelector(".huayu-b");
    console.log(title2);
    let heights = body2.offsetTop;
    console.log(heights);
    xiahua(title2,heights);

    let title3 = document.querySelector(".title3");
    let body3 = document.querySelector(".about");
    let height3 = body3.offsetTop;
    xiahua(title3,height3);

    let aboutcon = document.querySelector(".about-content");
    window.addEventListener("scroll",function () {
        let bodytop = document.body.scrollTop||document.documentElement.scrollTop;
        if(bodytop+innerHeight-200>=height3){
            aboutcon.style.bottom = "50px";
        }
    },false);



    var mySwiper = new Swiper ('.h-b-wraper', {
        slidesPerView: 3,
        centeredSlides: true,
        spaceBetween: 30,
        autoplay:true,
//        direction: 'vertical',
        loop: true,

        // 如果需要分页器
        pagination: {
            el: '.swiper-pagination',
        },

        // 如果需要前进后退按钮
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // 如果需要滚动条
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    })

};