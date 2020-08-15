function LikeHere(btnlike) {
   let likeinp = btnlike.children[0].innerHTML;
   
   btnlike.children[0].style.display = "inline";
   let counterlike = parseInt(likeinp);

   counterlike++;
    
   btnlike.children[0].innerHTML =  counterlike;
}