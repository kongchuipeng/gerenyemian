function trans(cont,right,left,max,widt){
    let num = 0;
    right.onclick=function () {
        num++
        if(num == max){
            // cont.style.transform = "translateX("+(widt*(num-1))+"px)";
            num = 0;

            // return;
        }
        cont.style.transform = "translateX("+(-widt*num)+"px)";
    };
    left.onclick = function () {
        num--;
        if(num==-1){
            num = max;
            // return;
        }
        cont.style.transform = "translateX("+(-widt*num)+"px)";
    }
}