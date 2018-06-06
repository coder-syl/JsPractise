var cur=1;
console.log("设置不可见");
show();
function minus() {
    cur--;
    show();
}
function plus() {
    cur++;
    show();
}
function show() {
    var sliders=document.getElementsByClassName("myslider");
    if(cur>sliders.length){cur=1;}
    if(cur<1){cur=sliders.length;}
    for(var i=0;i<sliders.length;i++ ){
        console.log("设置不可见");
        sliders[i].style.display="none";
    }
    sliders[cur-1].style.display="block";
}
