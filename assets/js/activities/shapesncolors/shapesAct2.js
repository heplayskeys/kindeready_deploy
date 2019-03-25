var progress = 0;

$(document).ready(function() {
    
    start();
    
    $("select").change(function() {
        var selectId = this.id

        if ($(this).val() === this.name) {
            $("#incorrect" + selectId).hide();
            $("#correct" + selectId).show();
            $(this).hide();
            progress++;
            checkProgress();
        } else  {
            $("#incorrect" + selectId).show();

            if ($(window).width() <= 767) {
                $("#" + selectId).css("width", "98px");
            }
        }
    });
    
    function start() {
        $("#nextAct").hide();
        for ( var i = 1 ; i < 9 ; i++ ) {
            $("#incorrect" + i).hide();
            $("#correct" + i).hide();
        }
    }
    
    function checkProgress() {
        if (progress === 8) {
            $("#nextAct").show();
        }
    }
});