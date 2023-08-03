

function showShareContent() {
    let shareContainer = document.querySelector(".social-media-container");
    shareContainer.classList.toggle("social-media-container-active"); 
}


let shareButton = document.getElementById("share");
shareButton.addEventListener("click", showShareContent);
