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
        var whichDrumToPlay = this.textContent;

        switch (whichDrumToPlay) {
            case "w": 
                var audio = new Audio("sounds/w.mp3")
                audio.play()
                break
            case "s": 
                var audio = new Audio("sounds/s.mp3")
                audio.play()
                break
            case "a": 
                var audio = new Audio("sounds/a.mp3")
                audio.play()
                break
            case "d": 
                var audio = new Audio("sounds/d.mp3")
                audio.play()
                break
            case "j": 
                var audio = new Audio("sounds/j.mp3")
                audio.play()
                break
            case "k": 
                var audio = new Audio("sounds/k.mp3")
                audio.play()
                break
            case "l": 
                var audio = new Audio("sounds/l.mp3")
                audio.play()
                break
        }
    })
}