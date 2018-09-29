window.onload=function(){
//	导航
 	let li=document.querySelectorAll(".nav>ul>.ipnone");
	let list=document.querySelectorAll(".nav>ul>li>.nav-item");
	console.log(li);
	 for (let i = 0; i < li.length; i++) {
       li[i].onmouseover = function () {
           list[i].style.display = "block"
           list[i].style.zIndex=666;
        };
      li[i].onmouseout = function () {
            list[i].style.display = "none"
        };
    }
	 
	let banner = document.querySelectorAll(".banner .bannerimg ul")[0];
    let dots = document.querySelectorAll(".dot");
    let img = document.querySelectorAll(".bannerimg>ul>li");
    let lbnt = document.querySelector(".leftbtn");
    let rbnt = document.querySelector(".rightbtn");
    bannerr(banner,dots,img,lbnt,rbnt,"active",1500);
	 
	let back=document.querySelector(".back")
	back.onclick=function(){
		animate(document.body,{scrollTOP:0});
		animate(document.documentElement,{scrollTop:0})
	}
}
