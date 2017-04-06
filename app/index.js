// var player = document.getElementById('player');
// setTimeout(function(){
//     player.play();
//
//     setTimeout(function(){
//         player.pause();
//         player.currentTime = 0;
//     }, 2000);
// }, 1000);

var play = function(){
        var audio = document.createElement("audio");
        audio.src = "../music/nights.mp3";
        audio.play();
        audio.addEventListener("canplaythrough", function () {
                setTimeout(function(){
                    audio.pause();
                    console.log("Audio Stop Successfully");
                },
                1000);
        }, false);
}
