let left = document.getElementById("prew")
let right = document.getElementById("next")
let openMenu = document.getElementById("open")
let closeMenu = document.getElementById("close")
let Menu = document.getElementsByClassName("mobileNav")
let body = document.getElementsByTagName("body")
let bodyBuner = document.getElementsByClassName("slider-buner-body")
let bodyOur = document.getElementsByClassName("slider-our-body")
let bodyPartner = document.getElementsByClassName("slider-partner-body")
let leftLine = document.getElementsByClassName("leftLine")
let positionBuner,positionOur,positionPartner,  OLD;


/////////////////////////////////

openMenu.onclick = function(){
    Menu[0].style = "left: 0px";
}
closeMenu.onclick = function(){
    Menu[0].style = "left: -300px";
}

left.onclick = function () {
    positionBuner+=380
    bodyBuner[0].style = "transition: 0.5s; left: "+positionBuner+"px";
    setTimeout(function (){positionBuner=-380
        bodyBuner[0].style = "left: "+positionBuner+"px"},500)
}
right.onclick = function () {
    positionBuner-=380
    bodyBuner[0].style = "transition: 0.5s; left: "+positionBuner+"px";
    setTimeout(function (){positionBuner=-380
        bodyBuner[0].style = "left: "+positionBuner+"px"},500)
}

/////////////////////////////////

let ourScroll = function(event){

    let a = 0;
    if (event.type=="touchmove"){
    a= Math.ceil(OLD - event.targetTouches[0].clientX)}
    else {
        if ( event.which==1){
        a= Math.ceil(OLD - event.clientX)}
    }
    if (a!=0) {
        positionOur -= a;
        bodyOur[0].style = "left: " + positionOur + "px";
        if (event.type == "touchmove") {
            OLD = event.targetTouches[0].clientX;
        } else {
            OLD = event.clientX;
        }
    }
    else {
        body[0].style = "overflow-y: scroll;";
    }
}
let ourStabiliti = function(){

    if (positionOur>-1640){
        positionOur-=1640
    }
    if (positionOur<-1640*2){
        positionOur+=1640
    }
    bodyOur[0].style = "left: "+positionOur+"px";
    if(window.innerWidth<=425){
        let abc = Math.ceil( positionOur/350);
        positionOur=(abc*410)+Math.ceil( (window.innerWidth-410)/2);
        bodyOur[0].style = "transition: 0.5s; left: "+positionOur+"px";
    }
    body[0].style = "overflow-y: scroll;";
}
let partnerScroll = function(event){

    let a = 0;
    a= Math.ceil(OLD - event.targetTouches[0].clientX)
    if(a!=0) {
        positionPartner -= a;
        bodyPartner[0].style = "left: " + positionPartner + "px";
        OLD = event.targetTouches[0].clientX;
    }
    else{
        body[0].style = "overflow-y: scroll;";
    }

}
let partnerStabiliti = function(){

    if (positionPartner>-440){
        positionPartner-=480
    }
    if (positionPartner<-440*2){
        positionPartner+=480
    }
    bodyPartner[0].style = "left: "+positionPartner+"px";
    body[0].style = "overflow-y: scroll;";
}

/////////////////////////////////

bodyOur[0].addEventListener("touchmove",ourScroll)
bodyOur[0].addEventListener("touchend",ourStabiliti)
bodyOur[0].addEventListener("touchstart",function (event) {
    OLD = event.targetTouches[0].clientX;
    body[0].style = "overflow-y: hidden;";
})

bodyPartner[0].addEventListener("touchmove",partnerScroll)
bodyPartner[0].addEventListener("touchend",partnerStabiliti)
bodyPartner[0].addEventListener("touchstart",function (event) {
    OLD = event.targetTouches[0].clientX;
    body[0].style = "overflow-y: hidden;";
})


bodyOur[0].addEventListener("mousemove",ourScroll)
bodyOur[0].addEventListener("mouseup",ourStabiliti)
leftLine[0].addEventListener("mouseup",ourStabiliti)
bodyOur[0].addEventListener("mousedown",function (event) {
    OLD = event.clientX;
})

setTimeout(function (){
    positionBuner=-380
    bodyBuner[0].style = "left: "+positionBuner+"px"
    positionOur=-1640
    if(window.innerWidth<=425){
        let abc = Math.ceil( (window.innerWidth-410)/2);
        positionOur+=abc;
    }
    bodyOur[0].style = "left: "+positionOur+"px"
    positionPartner=-480
    bodyPartner[0].style = "left: "+positionPartner+"px"
},1)