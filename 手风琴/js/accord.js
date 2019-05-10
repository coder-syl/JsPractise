var acc=document.getElementsByClassName('accordion');
console.log(acc);
for(let i=0;i<acc.length;i++){
    acc[i].onclick=function () {
        console.log('点击 的panel序号',i);
        acc[i].classList.toggle('active');
        //获取相邻的下一个元素，即panel
        var panel=acc[i].nextElementSibling;
        console.log(panel.style.maxHeight)
        if(panel.style.maxHeight!=0){
            panel.style.maxHeight=null;
            console.log('当前关闭的尺寸为',panel.style.maxHeight);

        }else{
            panel.style.maxHeight="500px";
            console.log('当前打开的尺寸为', panel.style.maxHeight);

        }
    }

}