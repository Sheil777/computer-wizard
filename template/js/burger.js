$(document).ready(
    function(){
        $('.burger').click(
            function (event) {
                $('div.burger').toggleClass('burger_close');
                $('.header-bottom').toggleClass('open');
            }
        );
    }
);
