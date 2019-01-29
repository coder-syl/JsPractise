! function(){
    var dropdown=document.getElementById("dropdown");
    console.log(dropdown)
    dropdown.addEventListener('click', function () {
        console.log('click');
        var dropdownMenu=document.getElementById('dropdown-menu');
        console.log(dropdownMenu)
        if(dropdownMenu.classList.contains('down')){
            dropdownMenu.classList.remove('down');
        }else{
            dropdownMenu.classList.add('down');
        }

        console.log(dropdownMenu.className);
        
    });
}();