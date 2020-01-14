// Adaptive menu
$(document).ready(function () {
    $(".burger").click(function () {
        if ($(".mobile_menu_links").is(":hidden")) {
            $(".mobile_menu_links").show("fast");
        } else {
            $(".mobile_menu_links").hide("fast");
        }
        return false;
    });
});
