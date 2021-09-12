var $tab = $("#tab");
var $btns = $tab.find(".btns li a");
var $boxs = $tab.find(".boxs div");
var speed = 5000;
var enableClick = true;

$btns.on("click", function(e){
    e.preventDefault();

    var isOn = $(this).hasClass("on");
    if(isOn) return;

    if(enableClick){
        enableClick = false;
        activation(this);
    }    
});

function activation(el){
    console.log("activaiton");
    var target = $(el).attr("href");

    $boxs.fadeOut(speed);
    $(target).fadeIn(speed,function(){
        enableClick = true;
    });

    $btns.removeClass("on");
    $(el).addClass("on");
}


