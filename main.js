var $tab = $("#tab");
var $btns = $tab.find(".btns li a");
var $boxs = $tab.find(".boxs div");
var speed = 500;

$btns.on("click", function(e){
    e.preventDefault();

    //클릭한 요소의 href속성을 구함
    var target = $(this).attr("href");
    console.log(target);

    //순간적으로 모든 박스를 비활성화 시키고
    $boxs.fadeOut(speed);
    //target으로 받는 선택자만 활성화
    $(target).fadeIn(speed);

    
    //순간적으로 모든 버튼 비활성화
    $btns.removeClass("on");
    //클릭한 요소만 활성화
    $(this).addClass("on");
});


