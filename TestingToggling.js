 $("#next").click(function(){
        if ($(".divs div:visible").next().length != 0)
            $(".divs div:visible").fadeOut(function(){
                $(this).next().fadeIn();
            });
        else {
            $(".divs div:visible").fadeOut(function(){
                $(".divs div:first").fadeIn();
            });
        }
        return false;
    });

    $("#prev").click(function(){
        if ($(".divs div:visible").prev().length != 0)
            $(".divs div:visible").fadeOut(function(){
                $(this).prev().fadeIn();
            });
        else {
            $(".divs div:visible").fadeOut(function(){
                $(".divs div:last").fadeIn();
            });
        }
        return false;
    });
});
