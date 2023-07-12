var imgs = Array.from( document.querySelectorAll(`.item img` ))
var BoxContainer= document.querySelector("#BoxContainer")
var InnerBox= document.querySelector("#InnerBox")
var ClosePage= document.querySelector("#close")
var NextPage= document.querySelector("#next")
var PrevPage= document.querySelector("#prev")
var CurrnetIndex;
for(var i=0;i<imgs.length;i++){

imgs[i].addEventListener("click",function(e){
BoxContainer.style.display="flex"

var imgsrc= e.target.getAttribute("src")
 InnerBox.style.backgroundImage= `url(${imgsrc})`
 CurrnetIndex = imgs.indexOf(e.target)
 console.log(CurrnetIndex);
})
}


ClosePage.addEventListener("click", CloseSlide)

function CloseSlide(){
    BoxContainer.style.display="none"
}


NextPage.addEventListener("click",NextSlide)

function NextSlide(e){
CurrnetIndex++
if( CurrnetIndex === imgs.length){
CurrnetIndex=0
}
var imgsrc= imgs[CurrnetIndex].getAttribute("src")
InnerBox.style.backgroundImage= `url(${imgsrc})`

}

PrevPage.addEventListener("click",PrevSlide)


function PrevSlide(e){
CurrnetIndex--
if( CurrnetIndex <0){
CurrnetIndex=imgs.length-1
}
var imgsrc= imgs[CurrnetIndex].getAttribute("src")
InnerBox.style.backgroundImage= `url(${imgsrc})`
}

BoxContainer.addEventListener("click",function(e){
if(e.target.getAttribute("id")=="BoxContainer"){
CloseSlide()
}
} )


document.addEventListener("keyup",function(e){
if( e.code==="ArrowRight"){
NextSlide()
}
else if( e.code==="ArrowLeft"){
PrevSlide()
}
else if( e.code==="Escape"){
CloseSlide()
}

})

