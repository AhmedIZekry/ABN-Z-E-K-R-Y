 $(document).ready(function(){
/////////////////////////////////////////////////////
////////////////////////////////////////////////////
/////////////////////////////////////////
//header
////////////////////////////////////////////////
//////////////////////////////////////////////////
/////////////////////////////////////////////////

 $(document).ready(function(){


/////////////////////
//1
$(".li-down:eq(0)").on("mouseenter",function(){
if($(".list-slide-one").hasClass("list-slide-one")){
$(".list-slide-one").addClass("list")
$(".list-slide-one").removeClass("list-slide-one");  
};

$(".fisrt-mem-one").css({display:"flex"})
$(".second-mem-one").css({display:"flex"})
$(".third-mem-one").css({display:"flex"})
$(".four-mem-one").css({display:"flex"})
$(".five-mem-one").css({display:"flex"})
   
})
    
$(".li-down:eq(0)").on("mouseleave",function(){
if($(".list").hasClass("list")){
$(".list").addClass("list-slide-one")
$(".list-slide-one").removeClass("list")




};

$(".fisrt-mem-one").css({display:"none"})
$(".second-mem-one").css({display:"none"})
$(".third-mem-one").css({display:"none"})
$(".four-mem-one").css({display:"none"})
$(".five-mem-one").css({display:"none"})


})

///////////////////////////////
//2

$(".li-down:eq(1)").on("mouseenter",function(){
if($(".list-slide-tow").hasClass("list-slide-tow")){
$(".list-slide-tow").addClass("list2")
$(".list-slide-tow").removeClass("list-slide-tow");  


$(".fisrt-mem-second").css({display:"flex"})
$(".second-mem-second").css({display:"flex"})
$(".third-mem-second").css({display:"flex"})
$(".four-mem-second").css({display:"flex"})
$(".five-mem-second").css({display:"flex"})


};     
})
        
$(".li-down:eq(1)").on("mouseleave",function(){
if($(".list2").hasClass("list2")){
$(".list2").addClass("list-slide-tow")
$(".list-slide-tow").removeClass("list2")
};

$(".fisrt-mem-second").css({display:"none"})
$(".second-mem-second").css({display:"none"})
$(".third-mem-second").css({display:"none"})
$(".four-mem-second").css({display:"none"})
$(".five-mem-second").css({display:"none"})






})
//////////////////////////////////
//3

$(".li-down:eq(2)").on("mouseenter",function(){
if($(".list-slide-three").hasClass("list-slide-three")){
$(".list-slide-three").addClass("list3")
$(".list-slide-three").removeClass("list-slide-three");  
};

$(".fisrt-mem-three").css({display:"flex"})
$(".second-mem-three").css({display:"flex"})
$(".third-mem-three").css({display:"flex"})
$(".four-mem-three").css({display:"flex"})
$(".five-mem-three").css({display:"flex"})


})
            
$(".li-down:eq(2)").on("mouseleave",function(){
if($(".list3").hasClass("list3")){
$(".list3").addClass("list-slide-three")
$(".list-slide-three").removeClass("list3")
};

$(".fisrt-mem-three").css({display:"none"})
$(".second-mem-three").css({display:"none"})
$(".third-mem-three").css({display:"none"})
$(".four-mem-three").css({display:"none"})
$(".five-mem-three").css({display:"none"})

})


//////////////////////////////////
//4

$(".li-down:eq(3)").on("mouseenter",function(){
if($(".list-slide-four").hasClass("list-slide-four")){
$(".list-slide-four").addClass("list4")
$(".list-slide-four").removeClass("list-slide-four");  
};  

$(".fisrt-mem-four").css({display:"flex"})
$(".second-mem-four").css({display:"flex"})
$(".third-mem-four").css({display:"flex"})
$(".four-mem-four").css({display:"flex"})
$(".five-mem-four").css({display:"flex"})

})
                
$(".li-down:eq(3)").on("mouseleave",function(){
if($(".list4").hasClass("list4")){
$(".list4").addClass("list-slide-four")
$(".list-slide-four").removeClass("list4")
};
$(".fisrt-mem-four").css({display:"none"})
$(".second-mem-four").css({display:"none"})
$(".third-mem-four").css({display:"none"})
$(".four-mem-four").css({display:"none"})
$(".five-mem-four").css({display:"none"})


})




//////////////////////////////////
//5

$(".li-down:eq(4)").on("mouseenter",function(){
if($(".list-slide-five").hasClass("list-slide-five")){
$(".list-slide-five").addClass("list5")
$(".list-slide-five").removeClass("list-slide-five");  
}; 
$(".fisrt-mem-five").css({display:"flex"})
$(".second-mem-five").css({display:"flex"})
$(".third-mem-five").css({display:"flex"})
$(".four-mem-five").css({display:"flex"})
$(".five-mem-five").css({display:"flex"})

})
                    
$(".li-down:eq(4)").on("mouseleave",function(){
if($(".list5").hasClass("list5")){
$(".list5").addClass("list-slide-five")
$(".list-slide-five").removeClass("list4")
};
$(".fisrt-mem-five").css({display:"none"})
$(".second-mem-five").css({display:"none"})
$(".third-mem-five").css({display:"none"})
$(".four-mem-five").css({display:"none"})
$(".five-mem-five").css({display:"none"})

})



//////////////////////////////////


$(".li-up:eq(0)").on("click",function(){  
 $(".lang-menue").slideToggle()

})




$("#list-header-icon").on("click",function(){  
 $(".list-header-phone").slideToggle() })
   


 $(".header-phone-mem:eq(0)").on("click",function(){  
$(".con-slide-phone:eq(0)").slideToggle() })


$(".header-phone-mem:eq(1)").on("click",function(){  
$(".con-slide-phone:eq(1)").slideToggle() })

$(".header-phone-mem:eq(2)").on("click",function(){  
$(".con-slide-phone:eq(2)").slideToggle() })

$(".header-phone-mem:eq(3)").on("click",function(){  
$(".con-slide-phone:eq(3)").slideToggle() })

$(".header-phone-mem:eq(4)").on("click",function(){  
$(".con-slide-phone:eq(4)").slideToggle() })

$(".header-phone-mem:eq(5)").on("click",function(){  
$(".con-slide-phone:eq(5)").slideToggle() })



$(".ser").on("click",function(){ 
$(".father10").css({display:"none"})
$(".felx-father4").css({display:"none"})
$(".flex-father").css({display:"none"})
$(".felx-father2").css({display:"none"})
$(".con-father-onne").css({display:"none"})
$(".con-father-onne").css({display:"none"})
$(".father-conect").css({display:"none"})
$(".last-last").css({display:"none"})
$(".con-header").css({display:"none"})
$(".con-last-div").css({display:"none"})
$(".fahter2-serv").css({display:"none"})
$(".father1-servse").css({display:"none"})


$(".fathrt-fqs-back").css({display:"none"})
$(".father-fqs").css({display:"none"})
$(".father-fqs2").css({display:"none"})
$(".fgs3").css({display:"none"})

$(".svgg").css({display:"none"})
$(".con-search").slideDown()
$(".con-search").css({display:"block"});
$(".heder-team2").css({display:"none"})
$(".father-team2").css({display:"none"})
 })


 $("#exite-search").on("click",function(){ 
$(".con-search").slideUp();

$(".heder-team2").css({display:"flex"})
$(".father-team2").css({display:"flex"})
$(".father10").css({display:"flex"})
$(".felx-father4").css({display:"flex"})
$(".flex-father").css({display:"flex"})
$(".felx-father2").css({display:"flex"})
$(".con-father-onne").css({display:"block"})
$(".father-conect").css({display:"flex"})
$(".last-last").css({display:"flex"})
$(".con-header").css({display:"flex"})
$(".con-last-div").css({display:"block"})
$(".father1-servse").css({display:"flex"})
$(".fahter2-serv").css({display:"flex"})
$(".svgg").css({display:"block"})
$(".fathrt-fqs-back").css({display:"flex"})
$(".father-fqs").css({display:"flex"})
$(".father-fqs2").css({display:"flex"})
$(".fgs3").css({display:"flex"})







})

 })

//////////////////////////////////////////////
/////////////////////////////////////////////
////////////////////////////////////////////
//end-header
////////////////////////////////////////////
////////////////////////////////////////


$(".go-up-now").on("click",function(){
$("body").animate({scrollTop:(0)})
})

$(".button-back10:eq(0)").on("click",function(){
$("body").animate({scrollTop:($(".father-conect").offset().top)})
})

$(".button-back10:eq(1)").on("click",function(){
$("body").animate({scrollTop:($(".felx-father4").offset().top)})
})

// $(window).on("load",function(){
// $("body").animate({scrollTop:($("html").offset().top)},)
// })


$(window).on("scroll",function(){

let scroll=$(window).scrollTop()
console.log(scroll)


if(scroll>=10){
{$(".con-header").css("position","fixed");
$(".con-header").css("top","0");
$("body").css("padding-top","125px","scroll-behavior","smooth")
}
}

if(scroll<10){
{$(".con-header").css("position","static");
$("body").css("padding-top","0px","scroll-behavior","smooth")
}
}


// if(scroll>=100){
// $("body").css("padding-top","125px")
// $(".con-header").css({position:"fixed",top:0})
// }
// if(scroll<100){
// $("body").css("padding-top","0px")
// $(".con-header").css({position:"relative"})
// }

if(scroll>=2431){
$(".h1-son-up1").animate({top:0,opacity:1},1000)
}
if(scroll>=2531){
$(".box-e1:eq(0)").animate({top:0,opacity:1},800)
$(".box-e1:eq(1)").animate({top:0,opacity:1},900)
$(".box-e1:eq(2)").animate({top:0,opacity:1},1000)
}

if(scroll>=1700){
$(".son-word2").animate({right:"0px",opacity: 1},500)
$(".son-img2").animate({left:0,opacity:1},500)
}

if(scroll>=1000){
$(".imgo").animate({right:0,},600)
$(".son-word").animate({left:0,},600)
}

if(scroll>=300){
$(".son-words4").animate({right:0,opacity:1},700)
$(".con-Grandsons-img-right").animate({top:0,opacity:1},700)
$(".con-Grandsons-img-left").animate({top:0,opacity:1},700)

}




if(scroll>=1000){
$(".go-up-now").fadeIn(900);
$(".go-up-now").css({display:"flex"})
}
if(scroll<1000){
$(".go-up-now").fadeOut(400);
}



if(scroll>=3800){
$(".right-header:eq(0)").animate({position: "relative",top:0,opacity: 1},700)
$(".right-header:eq(1)").animate({position: "relative",top:0,opacity: 1},800)
$(".right-header:eq(2)").animate({position: "relative",top:0,opacity: 1},900)
$(".center-header:eq(0)").animate({position: "relative",top:0,opacity: 1},700)
$(".center-header:eq(1)").animate({position: "relative",top:0,opacity: 1},800)
$(".center-header:eq(2)").animate({position: "relative",top:0,opacity: 1},900)
$(".center-header:eq(3)").animate({position: "relative",top:0,opacity: 1},700)
$(".center-header:eq(4)").animate({position: "relative",top:0,opacity: 1},800)
$(".left-header").animate({opacity: 1},800)







}


if(scroll>=4000){
$(".box-menue:eq(0)").animate({position: "relative",top:0,opacity: 1},700)
$(".box-menue:eq(1)").animate({position: "relative",top:0,opacity: 1},800)
$(".box-menue:eq(2)").animate({position: "relative",top:0,opacity: 1},900)
$(".box-menue:eq(3)").animate({position: "relative",top:0,opacity: 1},1000)
$(".box-menue:eq(4)").animate({position: "relative",top:0,opacity: 1},1100)
}
















});










































 })







 $(document).ready(function(){

$(".menue2").on("click",function(){
$(".menue1").css({background:"transparent",border:"1px solid white"})
$(".menue2").css({background:"rgb(9, 173, 102)",border:"none"})
$(".words:eq(0)").css({display:"none"})
$(".words:eq(1)").css({display:"block"})

$(".son-img").css({display:"none"})
$(".son-img").css({opacity:0})
$(".son-img2").css({display:"block"})
$(".son-img2").animate({opacity:1},500)


})

$(".menue1").on("click",function(){
$(".menue1").css({background:"rgb(9, 173, 102)",border:"none"})
$(".menue2").css({background:"transparent",border:"1px solid white"})
$(".words:eq(1)").css({display:"none"})
$(".words:eq(0)").css({display:"block"})


$(".son-img2").css({display:"none"})
$(".son-img2").css({opacity:0})
$(".son-img").css({display:"block"})
$(".son-img").animate({opacity:1},500)

})








 })






















  $(document).ready(function(){

$(".fqs:eq(0)").on("click",function(){
$(".slide-fqs:eq(0)").slideToggle()
})

$(".fqs:eq(1)").on("click",function(){
$(".slide-fqs:eq(1)").slideToggle()
})

$(".flex-fqs:eq(2)").on("click",function(){
$(".slide-fqs:eq(2)").slideToggle()
})

$(".flex-fqs:eq(3)").on("click",function(){
$(".slide-fqs:eq(3)").slideToggle()
})

$(".flex-fqs:eq(4)").on("click",function(){
$(".slide-fqs:eq(4)").slideToggle()
})

$(".flex-fqs:eq(5)").on("click",function(){
$(".slide-fqs:eq(5)").slideToggle()
})

$(".flex-fqs:eq(6)").on("click",function(){
$(".slide-fqs:eq(6)").slideToggle()
})

$(".flex-fqs:eq(7)").on("click",function(){
$(".slide-fqs:eq(7)").slideToggle()
})
$(".flex-fqs:eq(8)").on("click",function(){
$(".slide-fqs:eq(8)").slideToggle()
})

$(".flex-fqs:eq(9)").on("click",function(){
$(".slide-fqs:eq(9)").slideToggle()
})



$(window).on("scroll",function(){

let scroll=$(window).scrollTop()
console.log(scroll)


if(scroll>=164){
$(".fqs:eq(0)").animate({position: "relative",left:0,opacity: 1},700)
$(".fqs:eq(1)").animate({position: "relative",left:0,opacity: 1},900)
$(".fqs:eq(2)").animate({position: "relative",left:0,opacity: 1},1100)
$(".fqs:eq(3)").animate({position: "relative",left:0,opacity: 1},1300)
$(".fqs:eq(4)").animate({position: "relative",left:0,opacity: 1},1500)
$(".fqs:eq(5)").animate({position: "relative",left:0,opacity: 1},700)
$(".fqs:eq(6)").animate({position: "relative",left:0,opacity: 1},900)
$(".fqs:eq(7)").animate({position: "relative",left:0,opacity: 1},1100)
$(".fqs:eq(8)").animate({position: "relative",left:0,opacity: 1},1300)
$(".fqs:eq(9)").animate({position: "relative",left:0,opacity: 1},1500)
}


if(scroll>=764.7){
$(".box-fqs2:eq(0)").animate({position: "relative",top:0,opacity: 1},700)
$(".box-fqs2:eq(1)").animate({position: "relative",top:0,opacity: 1},900)
$(".box-fqs2:eq(2)").animate({position: "relative",top:0,opacity: 1},1100)

}
})



 })

