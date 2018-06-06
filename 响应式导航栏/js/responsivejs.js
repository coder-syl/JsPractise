function myFunction() {
    var x = document.getElementById("myNav");
    if (x.className === "nav") {

        x.className += " responsive";
        console.log(x.className);
    } else {
        x.className = "nav";
        console.log(x.className);
    }
}