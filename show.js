var projectDivs = document.getElementsByClassName("projectDiv");
var currentIndex = 0;
document.getElementById("projectBtn").addEventListener("click", function(){
    projectDivs[currentIndex].style.display = "none";
    currentIndex = (currentIndex + 1) % projectDivs.length;
    projectDivs[currentIndex].style.display = "block";    
});