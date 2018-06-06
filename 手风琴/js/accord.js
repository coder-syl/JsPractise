alert('nihao');
var acc=document.getElementsByClassName('accordion');
console.log(acc);
for(let i=0;i<acc.length;i++){
    acc[i].onclick=function () {
        console.log('dianji');
        acc[i].classList.toggle('active');
        var panel=acc[i].nextElementSibling;
        if(panel.style.maxHeight){
            console.log('当前尺寸为！=0');
            panel.style.maxHeight=null;

        }else{
            panel.style.maxHeight="100%";
        }
    }

}