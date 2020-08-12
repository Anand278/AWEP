function handlemouseover() {
    var idElement2 = document.querySelector('#id2');
    idElement2.style.background = "royalblue";
    idElement2.style.color = "yellow";

    idElement2.innerHTML = "Hello id Selector!!!";
}


function handlemouseout() {
    var idElement2 = document.querySelector('#id2');
    idElement2.style.background = "black";
    idElement2.style.color = "white";

    idElement2.innerHTML = "Hello World!!"
}