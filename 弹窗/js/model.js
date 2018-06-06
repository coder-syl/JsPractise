document.getElementById("showModel").addEventListener('click', show);
console.log(showModel);
document.getElementById('close').addEventListener('click',function () {
    myModel.style.display = 'none';
});
document.getElementById('closeByBtn').addEventListener('click',function () {
    myModel.style.display = 'none';
});
function show() {
    let myModel = document.getElementById('myModel');
    console.log(myModel);
    myModel.style.display = 'block';
}