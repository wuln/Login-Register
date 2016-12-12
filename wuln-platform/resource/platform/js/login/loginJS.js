
$(document).ready(function () {

    if ($.cookie('GuserName') != null && $.cookie('GpassWord') != null) {
        $("#rememberMe").attr("checked", true);
        $("#username")[0].value = $.cookie('GuserName');
        $("#password")[0].value = $.cookie('GpassWord');
        $("#username").val($.cookie('GuserName'));
        $("#password").val($.cookie('GpassWord'));
        $("rememberMe").attr("checked", false);
    } else {
        $("#rememberMe").attr("checked", false);
    }

    $("#rememberMe").click(function () {
        var isCheck = $("#rememberMe").is(":checked");
        if (isCheck) {
            // var r = confirm("您确定要记录当前账号和密码吗？");
            // if (r == true) {
            $.cookie('GuserName', $("#username").val(), {expires: 7});
            $.cookie('GpassWord', $("#password").val(), {expires: 7});
            // }
            // else {
            //     $("#rememberMe").attr("checked", false);
            // }
        }
        if (isCheck == false) {
            // var r = confirm("您确定要取消记录功能吗？");
            // if (r == true) {
            $.cookie('GuserName', null);
            $.cookie('GpassWord', null);
            // }
            // else {
            //     $("#rememberMe").attr("checked", true);
            // }
        }
    })
})
