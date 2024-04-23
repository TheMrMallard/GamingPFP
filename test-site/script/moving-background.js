var position = 0;

var xIncrement = 0;
var xPos = 0;

var yIncrement = 0;
var yPos = 0;

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
            $('#playlists').css('background-position', `${position/2}px ${position/4}px`);
            $('#likes').css('background-position', `${position/2}px ${position/4}px`);

            xPos = Math.sin(position * 0.01);
            yPos = 25 * Math.sin(position * 0.05);
            yPos2 = 25 * Math.sin(position * 0.07);
            yPos3 = 25 * Math.sin(position * 0.02);


            $('#sway').css('transform', `rotate(${xPos}deg)`);

            $('#wave').attr("d", `M0,32L48,${37.3 + yPos3}C96,${43 - yPos2},192,${53 + yPos},288,${53.3 - yPos}C384,${53 + yPos2},480,${43 - yPos},576,${58.7 + yPos3}C672,${75 - yPos},768,${117 + yPos2},864,${144 - yPos}C960,${171 + yPos3},1056,${181 - yPos},1152,176C1248,${171 + yPos2},1344,${149 - yPos},1392,${138.7 + yPos3}L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z`);
        }, 10);

    }
)
