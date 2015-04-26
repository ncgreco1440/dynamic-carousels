$(function () {
    /**
     * jQuery for navigation fixed position 
     */
    var menuOffset = $("#nav-bar")[0].offsetTop;
    $(document).on('scroll', function () {
        var docScroll = $(document).scrollTop();
        if (docScroll >= menuOffset) {
            $("#nav-bar").addClass("fixed-nav");
        } else {
            $("#nav-bar").removeClass("fixed-nav");
        }
    });


})();