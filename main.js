var $tab = $("#tab");
var $btns = $tab.find(".btns li a");
var $boxs = $tab.find(".boxs div");
var speed = 500;
var ease = "easeOutBounce";
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
    var target = $(el).attr("href");
    var targetHT = $(target).height();
    
    $tab.animate({height : targetHT}, speed, ease);

    $boxs.fadeOut(speed);
    $(target).fadeIn(speed,function(){
        enableClick = true;
    });

    $btns.removeClass("on");
    $(el).addClass("on");
}


