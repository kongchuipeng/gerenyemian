/**
 * Created by Administrator on 2018/9/17.
 */
window.onload=function () {
    let text = document.querySelector(".mainContent-right>textarea");
    let num = document.querySelector(".mainContent-right>p>span");
    let name = document.querySelector(".name");
    let ul = document.querySelector(".mainContent-left>ul");
    let bnt = document.querySelector(".tijiao");
    console.log(bnt);
    console.log(ul);
    text.oninput = function () {
        let textnum = this.value.length;
        num.innerHTML = textnum;
    };
    let day = new Date();
    bnt.onclick = function () {
        if(name.value == ""){
            alert("请输入姓名");

        }else{
            if(text.value == ""){
                alert("请输入建议");
                // text.style.border = "red solid 1px"
            }else{

                let str = `<li><div class="picture"><img src="./img/头像.png"></div>
                            <h4><div class="data">${day.toLocaleString()}</div> <span>${name.value}</span> </h4>
                            <p>${text.value}</p>
                        </li>`
                ul.innerHTML+=str;
                name.value = "";
                text.value = "";
                num.innerHTML = 0;
            }
        }


    }
    //鼠标移入每个li进行样式变化
    // ul.onmouseover = function (e) {
    //     if(e.target=="li"){
    //         e.target.style.backgroundColor="#666"
    //     }else{
    //     console.log(e);
    //     e.target.parentElement.style.backgroundColor="#666"}
    // }
    // ul.onmouseout = function (e) {
    //     if(e.target == "li"){
    //         e.target.style.backgroundColor="#f2f2f2"
    //     }else{
    //     e.target.parentElement.style.backgroundColor="#F2F2F2"}
    // }

    ul.onmouseover = function (e) {
        let event = e.target;
        if(event.nodeName==="LI"/* && event.classList.contains("list")*/){
            event.style.backgroundColor = "#f2f2f2";
         }//else{
        //     event.parentElement.style.backgroundColor="#ccc"
        // }
    }
    ul.onmouseout = function (e) {
        let event = e.target;
        if(event.nodeName==="LI" /*&& event.classList.contains("list")*/){
            event.style.backgroundColor = "#fff";
         }//else{
        //     event.parentElement.style.backgroundColor="#f2f2f2"
        // }
    }

    let top1 = document.querySelector(".back");
    window.addEventListener("scroll",function () {
        let bodytop = document.body.scrollTop||document.documentElement.scrollTop;
        if(bodytop>600){
            top1.style.bottom = "20px"
        }
        if(bodytop<=600){
            top1.style.bottom = "-36px"
        }
        top1.onclick=function () {
            animate(document.documentElement,{scrollTop:0});
            animate(document.body,{scrollTop:0});
        }
    },false)

};
