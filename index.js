/* 
anonymous functions can be used in addEventListener method 
anonymous functions are almost same as a regular function it just doesn't have a name 

for eg. 
function () { 
    code
} 
*/

for (let i = 0 ; i < document.querySelectorAll("button.drum").length; i++) {
    document.querySelectorAll("button")[i].addEventListener("click",function () {
        if (i == 0) { 
            var audio = new Audio("sounds/w.mp3")
            audio.play();
        }
        else if (i == 1) {
            var audio = new Audio("sounds/a.mp3")
            audio.play();
        }
        else if (i == 2) {
            var audio = new Audio("sounds/s.mp3")
            audio.play();
        }
        else if (i == 3) {
            var audio = new Audio("sounds/d.mp3")
            audio.play();
        }
        else if (i == 4 ) {
            var audio = new Audio("sounds/j.mp3")
            audio.play();
        }
        else if (i == 5 ) {
            var audio = new Audio("sounds/k.mp3")
            audio.play();
        }
        else if (i == 6) {
            var audio = new Audio("sounds/l.mp3")
            audio.play();
        }
    })
    // for playing sound 
    var audio = new Audio("sounds/w.mp3");
}