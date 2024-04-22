var position = 0;

$(document).ready(
    () => {
        var interval = setInterval(() => {
            // Update position
            position += .5;
            // Update background position
            $('.background').css('background-position', `${position}px ${position}px`);
            $('#background2').css('background-position', `${position/2}px ${position/4}px`);
            $('#interests').css('background-position', `${position/2}px ${position/4}px`);
            $('#dislikes').css('background-position', `${position/2}px ${position/4}px`);

        }, 10);
    }
)
