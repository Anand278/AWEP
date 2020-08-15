let counter = 1;
let counterlike = 1;

function CommentHere() {
    let NewElement = document.createElement('div')
    NewElement.textContent = "Comment " + counter;

    NewElement.style.background = "royalblue";
    NewElement.style.color = "yellow";
    NewElement.style.margin = "4px";

    let CommentBox = document.querySelector('#CommentBox');
    CommentBox.appendChild(NewElement);

    counter++;
}

function LikeHere() {
    counterlike++;

   document.querySelector('#Likeid').innerHTML = "Like " + counterlike;
   
}