function handlemouseover() {
    var idElement2 = document.querySelector('.beautify');
    idElement2.style.background = "orange";
    idElement2.style.color = "black";

    idElement2.innerHTML = "Hello Class Selector!!!";
}


function handlemouseout() {
    var idElement2 = document.querySelector('.beautify');
    idElement2.style.background = "black";
    idElement2.style.color = "white";

    idElement2.innerHTML = "Hello World!!"
}