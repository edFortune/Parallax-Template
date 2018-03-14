(function () {

    init();

    function init() {
        $navBar = $('#nav-bar');
        $navTop = $navBar.offset().top;

        $(window).scroll(function (event) {
            $scrollTop = $(this).scrollTop();

            if ($scrollTop > $navTop) {
                $navBar.addClass("sticky-nav-bar");
                $navBar.css("opacity", 1);
                $('#subtitle').removeClass("hidden");
            } else {
                $navBar.removeClass("sticky-nav-bar");
                $navBar.css("opacity", 0);
                $('#subtitle').addClass("hidden");
            }
        });

    }

})();