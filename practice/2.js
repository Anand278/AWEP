let likecounter = 1;

function CommentHere() {
    
    // to take input value from input tag

    let Inputvalue = document.querySelector('#inputid').value;

    // create new div for comment to display

    let Element = document.createElement('div');
    Element.textContent = Inputvalue;

    //div styling

    Element.style.background = "black";
    Element.style.color = "gold";
    Element.style.margin = "4px";

    // making connection between created div and comment box
    
    let CommentBox = document.querySelector('#CommentBox');
   // CommentBox.appendChild('Element');
  // CommentBox.appendChild(Element );

     CommentBox.insertBefore(Element, CommentBox.firstChild);

    // clear the recent input in input tag
    document.querySelector('#inputid').value = "";
}

function LikeHere() {
    likecounter++;

    document.querySelector('#btn1').innerHTML = "Like " + likecounter;
}



