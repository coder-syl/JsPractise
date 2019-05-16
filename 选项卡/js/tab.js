//获取普通标签页的按钮
let bts = document.getElementsByTagName('button');

//获取普通标签页的内容
let tabs = document.getElementsByClassName('tab');

//获取可动态增减的标签页的内容
let dyTabs = document.getElementsByClassName('dynamicTab');

//获取可动态增减的标签页的按钮
let dyBtns = document.getElementsByClassName('dynamicBtn');

//获取可动态增减的标签页的整块
let dyButs = document.getElementsByClassName('dynamicBut');
console.log(dyButs);

//获取可动态增减的标签页的关闭键
let closeTabs = document.getElementsByClassName('close');

// console.log(dyBtns);
// console.log(closeTabs);

for (let i = 0; i < bts.length; i++) {
    bts[i].onclick = function () {
        for (let tab of tabs) {
            console.log(tab);
            tab.style.display = 'none';
        }
        tabs[i].style.display = 'block';
    };
}
for (let i = 0; i < dyBtns.length; i++) {
    dyBtns[i].onclick = function () {
        for (let dyTab of dyTabs) {
            console.log(dyTab);
            dyTab.style.display = 'none';
        }
        dyTabs[i].style.display = 'block';
        console.log('open btn 序号', i);
    }
}
var len = closeTabs.length;
for (let i = 0; i < closeTabs.length; i++) {
    closeTabs[i].onclick = function () {
        if(--len<1){
            alert('标签页必须保留一个');
        }
        else{
            dyTabs[i].style.display = 'none';
            dyButs[i].style.display = 'none';
            console.log('close');
        }     
        window.event?window.event.cancelBubble=true:event.stopPropagation();//阻止事件冒泡
    }

}

//获取普通标签页的按钮
let beautyButs = document.getElementsByClassName('beautyBut');
// console.log(beautyButs)
//获取普通标签页的内容
let beautyTabs = document.getElementsByClassName('beautyTab');
let beautyLines = document.getElementsByClassName('beauty-line');
console.log(beautyLines);
var beautylen = beautyTabs.length;
for (let i = 0; i < beautyTabs.length; i++) {
    beautyButs[i].onclick = function () {
        for (let beautyTab of beautyTabs) {
           
            beautyTab.style.display = 'none';
        }
        console.log(i);
        console.log('width', beautyButs[i].offsetWidth)  
        if(0!=i){
            beautyLines[0].style.marginLeft = (i+1)*10+(i) * beautyButs[i].offsetWidth+"px";
            beautyLines[0].style.width = beautyButs[i].offsetWidth+"px";
            console.log(beautyLines[0].style.marginLeft);
        }else{
            beautyLines[0].style.marginLeft = "10px";
        }
        
        beautyTabs[i].style.display = 'block';
    };
}