function readMore(){
    
    let moreProjects = document.getElementById("more");
    let btnMore = document.getElementById("btnMoreProjects");

    if(moreProjects.style.display == "none"){
        moreProjects.style.display ="inline";
        btnMore.innerHTML = "See less";
    }else if(moreProjects.style.display == "inline") {
        moreProjects.style.display ="none";
        btnMore.innerHTML = "See more";
    }
}