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
let maxNEW, maxSEASON=1080, maxBRANDS=810;
let paddingItem = ((this.innerWidth*0.95)-270)/2

/////////////////////////////////

openMenu.onclick = function(){
    document.getElementsByTagName("body")[0].style = "overflow: hidden";
    console.log(document.getElementsByTagName("body"));
    Menu[0].style = "right: 0px";
    openMenu.style = "display: none";
    closeMenu.style = "display: block";
}
closeMenu.onclick = function(){
    document.getElementsByTagName("body")[0].style = "overflow-y: scroll";
    Menu[0].style = "right: 100%";
    openMenu.style = "display: block";
    closeMenu.style = "display: none";
}

leftNEW.onclick = function () {
    let max=maxNEW;
    if(window.innerWidth<=768){
      max =  maxNEW+270;
    }

    if (positionNEW<=-540-270){
        positionNEW+=270;

    bodyNew[0].style = "transition: 0.5s; left: "+positionNEW+"px";
    }
    else {
        positionNEW+=270;
        bodyNew[0].style = "transition: 0.5s; left: "+positionNEW+"px";
        setTimeout(function (){positionNEW=max-270
        bodyNew[0].style = "left: "+positionNEW+"px"},500)


    }


}
rightNEW.onclick = function () {
    let min=-540;
    if(window.innerWidth<=768){
        min -=270;
    }

    if (positionNEW>=maxNEW){
        positionNEW-=270;
        bodyNew[0].style = "transition: 0.5s; left: "+positionNEW+"px";
    }
    else {
        positionNEW-=270;
        bodyNew[0].style = "transition: 0.5s; left: "+positionNEW+"px";
        setTimeout(function (){positionNEW=min
            bodyNew[0].style = "left: "+positionNEW+"px"},500)
    }

}



/////////////////////////////////

let wight = function(){
    if (this.innerWidth<=1024&&this.innerWidth>768){
        maxNEW=-2160;
    }
    if(this.innerWidth<=769&&this.innerWidth>425){
        maxNEW=-2430;
    }
    if(this.innerWidth<=425) {
        maxNEW=-2700;
    }

}

let newScroll = function(event){
    positionNEW-=Math.ceil(newOLD - event.targetTouches[0].clientX )
    bodyNew[0].style = "left: "+positionNEW+"px";
    newOLD=event.targetTouches[0].clientX;
}
let newStabiliti = function(event){
    let abc = Math.ceil( positionNEW/270);
    if(positionNEW>=-810){
        positionNEW = -540+paddingItem;
        bodyNew[0].style = " transition: 0.5s; left: "+positionNEW+"px";
        setTimeout(function () {
            positionNEW = maxNEW+paddingItem;
            bodyNew[0].style = "left: "+positionNEW+"px";
        }, 500)

    }
    else if (positionNEW <= -810 &&positionNEW > maxNEW) {

        positionNEW = (abc*-270)-paddingItem;
        if (positionNEW>0){
            positionNEW+=270;
        }
        else {
            positionNEW-=270;
        }
        positionNEW *= -1
        bodyNew[0].style = " transition: 0.5s; left: "+positionNEW+"px";
    }
    else if (positionNEW <= maxNEW){
        positionNEW = maxNEW + 270 +paddingItem;
        bodyNew[0].style = " transition: 0.5s; left: "+positionNEW+"px";
        setTimeout(function () {
            positionNEW = -810+paddingItem;
            bodyNew[0].style = "left: "+positionNEW+"px";
        },500)

    }

}

let seasonScroll = function(event){
    positionSEASON+=Math.ceil(seasonOLD - event.targetTouches[0].clientX)
    bodySEASON[0].style = "right: "+positionSEASON+"px";
    seasonOLD = event.targetTouches[0].clientX

}
let seasonStabiliti = function(event){
        let abc = Math.ceil( positionSEASON/270);
    if(positionSEASON<=540){
        positionSEASON = 270-paddingItem;
        bodySEASON[0].style = " transition: 0.5s; right: "+positionSEASON+"px";

        setTimeout(function () {
            positionSEASON = maxSEASON-paddingItem;
            bodySEASON[0].style = "right: "+positionSEASON+"px";
        },500)

    }
    else if (positionSEASON>=0&&positionSEASON<maxSEASON) {

       positionSEASON= (abc*270)-paddingItem;
        if (positionNEW>0){
            positionNEW+=270;
        }
        else {
            positionNEW-=270;
        }
        bodySEASON[0].style = " transition: 0.5s; right: "+positionSEASON+"px";
    }
    else if (positionSEASON=>maxSEASON){
        positionSEASON = maxSEASON + 270-paddingItem;
       bodySEASON[0].style = " transition: 0.5s; right: "+positionSEASON+"px";
       setTimeout(function () {
            positionSEASON = 540-paddingItem;
            bodySEASON[0].style = "right: "+positionSEASON+"px";
        },500)
    }



}

let brandsScroll = function(event){
    positionBrands+=Math.ceil(brandsOLD - event.targetTouches[0].clientX)
    bodyBrands[0].style = "right: "+positionBrands+"px";
    brandsOLD = event.targetTouches[0].clientX

}
let brandsStabiliti = function(){
    let bac = Math.ceil( positionBrands/270);
    if(positionBrands<=540){
        positionBrands = 270-paddingItem;
        bodyBrands[0].style = "transition: 0.5s; right: "+positionBrands+"px";

        setTimeout(function () {
            positionBrands = 540-paddingItem;
            bodyBrands[0].style = "right: "+positionBrands+"px";
        },500)

    }
    else {

        positionBrands = 540 + 270-paddingItem;
        bodyBrands[0].style = "transition: 0.5s; right: "+positionBrands+"px";
        setTimeout(function () {
            positionBrands = 540-paddingItem;
            bodyBrands[0].style = "right: "+positionBrands+"px";
        },500)


    }


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
positionNEW-=810;
bodyNew[0].style = "left: "+positionNEW+"px";
if(this.innerWidth<625){
    positionNEW=-810+paddingItem;
    bodyNew[0].style = "left: "+positionNEW+"px";
    positionSEASON+=540-paddingItem;
    bodySEASON[0].style = "right: "+positionSEASON+"px";
    positionBrands = 540-paddingItem;
    bodyBrands[0].style = "right: "+positionBrands+"px";
}
},1)