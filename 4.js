let count = 0;

function LikeHere() {
    count++;
     let likecount = document.querySelector('#LikeId');
     likecount.innerHTML = "Like " + count;
}

function CommentHere() {
    let usercomment = document.querySelector('#inputId').value;
     
    let clonecomment = document.querySelector('#CommentBox').cloneNode(true);

    clonecomment.removeAttribute('id');
    clonecomment.style.visibility = "visible";
    
    clonecomment.children[0].innerHTML = usercomment;

    let parentdiv = document.querySelector('#parentboxid')
    parentdiv.insertBefore(clonecomment, parentdiv.firstChild);

    document.querySelector('#inputId').value = "";
}

function deletecomment(deletebtn) {
    deletebtn.parentElement.remove();
}