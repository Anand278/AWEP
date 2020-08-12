let counter = 1; 

function Increment() {
    let counterEle = document.querySelector('#counterid');
    counter = counter + 1;
    counterEle.innerHTML = counter;

}

function Decrement() {
    let counterEle = document.querySelector('#counterid');
    counter = counter - 1;
    counterEle.innerHTML = counter;

}
