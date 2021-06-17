let left = document.getElementById("prew")
let right = document.getElementById("next")
let body = document.getElementsByClassName("slider-buner-body")
let position=0, max=-760;

left.onclick = function () {

    if (position>=0){
        position=max;
    }
    else {
        position+=380;
    }
    body[0].style = "left: "+position+"px";
    console.log(body)

}
right.onclick = function () {
    if (position<=max){
        position=0;
    }
    else {
        position-=380;
    }


    body[0].style = "left: "+position+"px";
}