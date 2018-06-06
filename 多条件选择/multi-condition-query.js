var places=document.getElementsByClassName('country');
for(var j=0;j<places.length;j++){
    places[j].addEventListener('click',getAllpalce);
}
function getPlace() {
    var classVal;
    for(var j=0;j<places.length;j++) {
        classVal = 'country';
        places[j].setAttribute('class',classVal);
    }
    classVal = this.getAttribute("class");
    if(classVal==='country'){
        classVal = classVal.concat(" active");
        this.setAttribute("class",classVal);
    }else{
        classVal = 'country';
        this.setAttribute('class',classVal);
    }
    console.log(this.textContent);
}
function getAllpalce() {
    var classVal;
    classVal = this.getAttribute("class");
    if(classVal==='country'){
        // console.log(classVal);
        classVal = classVal.concat(" active");
        // console.log(classVal);
        this.setAttribute("class",classVal);
    }else{
        classVal = 'country';
        this.setAttribute('class',classVal);
    }
    var palceArr= new Array();
    for(let j=0;j<places.length;j++) {

        let Val=places[j].getAttribute('class');

        if(Val==='country active')
        {
            palceArr.push(places[j].textContent);

        }
    }
        console.log(palceArr);
}
