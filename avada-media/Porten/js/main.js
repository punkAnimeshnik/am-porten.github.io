let leftNEW = document.getElementById("leftNewArrivals")
let rightNEW = document.getElementById("RightNewArrivals")
let bodyNew = document.getElementsByClassName("slider-body-new")
let bodySEASON = document.getElementsByClassName("slider-body-season")
let bodyBrands = document.getElementsByClassName("slider-body-brands")
let openMenu = document.getElementById("open")
let closeMenu = document.getElementById("close")
let Menu = document.getElementsByClassName("mobileNav")
let positionNEW = 0, positionSEASON=0,positionBrands;
let newOLD, seasonOLD,brandsOLD;
let maxNEW, maxSEASON=540, maxBRANDS=810;


/////////////////////////////////

openMenu.onclick = function(){
    Menu[0].style = "right: 0px";
    openMenu.style = "display: none";
    closeMenu.style = "display: block";
}
closeMenu.onclick = function(){
    Menu[0].style = "right: 100%";
    openMenu.style = "display: block";
    closeMenu.style = "display: none";
}

leftNEW.onclick = function () {
    if (positionNEW!=0){
        positionNEW+=270;
    }
    else {
        positionNEW=maxNEW
    }


    bodyNew[0].style = "left: "+positionNEW+"px";
}
rightNEW.onclick = function () {
    if (positionNEW!=maxNEW){
        positionNEW-=270;
    }
    else {
        positionNEW=0
    }
    bodyNew[0].style = "left: "+positionNEW+"px";
}

/////////////////////////////////

let wight = function(){
    if (this.innerWidth<=1024&&this.innerWidth>768){
        maxNEW=-1350;
    }
    if(this.innerWidth<=768&&this.innerWidth>425){
        maxNEW=-1620;
    }
    if(this.innerWidth<=425) {
        maxNEW=1890;
    }

}

let newScroll = function(event){
    positionNEW+=(newOLD - event.targetTouches[0].clientX)/5
    //console.log(positionSEASON)

    bodyNew[0].style = "right: "+positionNEW+"px";


}
let newStabiliti = function(event){
    let abc = Math.ceil( positionNEW/270);
    if(positionNEW<=0){
        positionNEW = 0;
    }
    else if (positionNEW>=0&&positionNEW<maxNEW) {

        positionNEW= abc*270;
    }
    else if (positionNEW=>maxNEW){
        positionNEW = maxNEW;
    }

    bodyNew[0].style = "right: "+positionNEW+"px";
    console.log(positionNEW)
}

let seasonScroll = function(event){
    positionSEASON+=(seasonOLD - event.targetTouches[0].clientX)/5
    //console.log(positionSEASON)

    bodySEASON[0].style = "right: "+positionSEASON+"px";


}
let seasonStabiliti = function(event){
        let abc = Math.ceil( positionSEASON/270);
    if(positionSEASON<=0){
        positionSEASON = 0;
    }
    else if (positionSEASON>=0&&positionSEASON<maxSEASON) {

       positionSEASON= abc*270;
    }
    else if (positionSEASON=>maxSEASON){
        positionSEASON = maxSEASON;
    }

    bodySEASON[0].style = "right: "+positionSEASON+"px";
    console.log(positionSEASON)
}

let brandsScroll = function(event){
    positionBrands+=(brandsOLD - event.targetTouches[0].clientX)/5

    bodyBrands[0].style = "right: "+positionBrands+"px";


}
let brandsStabiliti = function(event){
    let bac = Math.ceil( positionBrands/270);
    if(positionBrands<=0){
        positionBrands = 0;
    }
    else if (positionBrands>=0&&positionBrands<maxBRANDS) {

        positionBrands= bac*270;
    }
    else if (positionSEASON=>maxBRANDS){
        positionBrands = maxBRANDS;
    }

    bodyBrands[0].style = "right: "+positionBrands+"px";
    console.log(positionBrands)
}

////////////////////////////////////////

bodyNew[0].addEventListener("touchmove",newScroll)
bodyNew[0].addEventListener("touchend",newStabiliti)
bodyNew[0].addEventListener("touchstart",function (event) {
    newOLD = event.targetTouches[0].clientX;
})

bodySEASON[0].addEventListener("touchmove",seasonScroll)
bodySEASON[0].addEventListener("touchend",seasonStabiliti)
bodySEASON[0].addEventListener("touchstart",function (event) {
    seasonOLD = event.targetTouches[0].clientX;
})

bodyBrands[0].addEventListener("touchmove",brandsScroll)
bodyBrands[0].addEventListener("touchend",brandsStabiliti)
bodyBrands[0].addEventListener("touchstart",function (event) {
    brandsOLD = event.targetTouches[0].clientX;
})

////////////////////////////////////

setInterval(wight,1000)

setTimeout(function () {
positionNEW-=270;
positionNEW+=270;
    bodyNew[0].style = "left: "+positionNEW+"px";
},1)