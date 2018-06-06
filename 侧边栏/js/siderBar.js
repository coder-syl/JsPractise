let siderBar=document.getElementById('siderBar');
let openBar=document.getElementById('openBar');
let openBar1=document.getElementById('openBar1');
let closrBar=document.getElementById('closeBar');
let trans=document.getElementById('trans');
openBar.addEventListener('click',function () {
    siderBar.style.width='250px';
});
openBar1.addEventListener('click',function () {
    siderBar.style.width='250px';
    trans.style.marginLeft='250px';
});
closrBar.addEventListener('click',function () {
   siderBar.style.width='0';
    trans.style.marginLeft='0';

});