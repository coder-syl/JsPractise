let bts=document.getElementsByTagName('button');
let tabs=document.getElementsByClassName('tab');
let dyTabs=document.getElementsByClassName('dynamicTab');
// let dybtns=document.getElementsByClassName('dynamicBtn');
let dyBtns=document.getElementsByClassName('dynamicBtn');
let closeTabs=document.getElementsByClassName('close');
// console.log(dybtns);
// console.log(closeTabs);
// for(let i =0;i<bts.length;i++){
//     bts[i].onclick=function () {
//         for(let tab of tabs){
//             console.log(tab);
//             tab.style.display='none';
//         }
//         tabs[i].style.display='block';
//     };
// }
for(let i= 0 ;i<dyBtns.length;i++){
    dyBtns[i].onclick=function () {
        for(let dyTab of dyTabs){
            console.log(dyTab);
            dyTab.style.display='none';
        }
        dyTabs[i].style.display='block';
        console.log('open');
    }
}
for(let i= 1 ;i<closeTabs.length;i++){
    closeTabs[i].onclick=function () {
        dyTabs[i].style.display='none';
        dyBtns[i].style.display='none';
        dyTabs[0].style.display='block';
        console.log('close');
        window.event?window.event.cancelBubble=true:event.stopPropagation();//阻止事件冒泡
    }

}

