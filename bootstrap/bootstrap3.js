function LikeHere(btnlike) {
   let likeinp = btnlike.children[0].innerHTML;
   
   btnlike.children[0].style.display = "inline";
   let counterlike = parseInt(likeinp);

   counterlike++;
    
   btnlike.children[0].innerHTML =  counterlike;
}

let CommentHere = function(btncomment) {
   let commentbox = btncomment.parentElement.parentElement.parentElement.children[2];

   let newcommentbox = commentbox.children

   let commentinput = btncomment.parentElement.parentElement.children[1].value;

    let commentinp = commentbox.innerHTML = commentinput;

}