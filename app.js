$(".fa-plus").click(function () {
    // alert("hell");
    $("input").slideToggle();
})
$("ul").on("click","li",function () {
    $(this).toggleClass("completed");
})
$("input").keypress(function (e) {
    if(e.keyCode==13)
    {
        var t=$(this).val();
        $(this).val("");
        $("ul").append("<li>\n" +
            "            <span><i class=\"fa fa-trash\" aria-hidden=\"true\"></i></span> "+t+"</li>");
    }
})
$("ul").on("click","span",function (e) {
    $(this).parent().fadeOut(500,function () {
        $(this).remove();
    });
    e.stopPropagation();

})