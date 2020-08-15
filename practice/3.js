let counter = 1;

function CommentHere() {

    let input = document.querySelector('#inputid').value;

    let Element = document.createElement('div');
    Element.style.display = "flex";
    Element.style.justifyContent = "space-between";
    Element.style.marginbottom = "8px";
    
    //  Element.style.background = "black";
    //  Element.style.color = "gold";

    let child1 = document.createElement('div');
    child1.textContent = input;

    let child2 = document.createElement('button');
    child2.textContent = "Delete";

    Element.appendChild(child1);
    Element.appendChild(child2);

    let CommentBox = document.querySelector('#CommentBox');
    CommentBox.insertBefore(Element, CommentBox.firstChild);

    document.querySelector('#inputid').value = "";
}



function LikeHere() {
    counter++;

    let like = document.querySelector('#likebtn');
    like.innerHTML = "Like " + counter;
}
