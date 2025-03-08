const REVIEW_CON1 =document.getElementById("review-con1");
const REVIEW_CON2 =document.getElementById("review-con2");
let timer = null
let allow_click = true

intervalManager(true) //Sets the timer when the page loads in

//This function is for right
function changeReviewClickRight(){
    intervalManager(false)
    if (allow_click){
        changeReviewRight();
    }
    intervalManager(true)
}
function changeReviewClickLeft(){
    intervalManager(false)
    if (allow_click){
        changeReviewRight();
    }
    intervalManager(true)
}
function changeReviewLeft(){
    allow_click = false;
    if(REVIEW_CON1.classList.contains("active")){
        REVIEW_CON1.classList.remove("active");
        REVIEW_CON2.classList.toggle("active");
    }
    else if(REVIEW_CON2.classList.contains("active")){
        REVIEW_CON2.classList.remove("active");
    }
}
function changeReviewRight(){
    allow_click = false;
    if(REVIEW_CON1.classList.contains("active")){
        REVIEW_CON2.style.transition = "left 1s ease-in-out";
        REVIEW_CON1.classList.remove("active");
        REVIEW_CON1.classList.toggle("hide");
        REVIEW_CON2.classList.toggle("active");
        setTimeout(resetReview1, 1000)
    }
    else if(REVIEW_CON2.classList.contains("active")) {
        REVIEW_CON1.style.transition = "left 1s ease-in-out";
        REVIEW_CON2.classList.remove("active");
        REVIEW_CON2.classList.toggle("hide");
        REVIEW_CON1.classList.toggle("active");
        setTimeout(resetReview2, 1000)
    }
}
function resetReview1(){
    if(REVIEW_CON1.classList.contains("hide")){
        REVIEW_CON1.classList.remove("hide");
    }
    allow_click = true;
    REVIEW_CON1.style.transition = "none";
}
function resetReview2(){
    if(REVIEW_CON2.classList.contains("hide")){
        REVIEW_CON2.classList.remove("hide");
    }
    allow_click = true;
    REVIEW_CON2.style.transition = "none";
}
function intervalManager(start){
    if (start){
        timer = setInterval(changeReviewRight, 5000)
    }
    else{
        clearInterval(timer)
    }
}