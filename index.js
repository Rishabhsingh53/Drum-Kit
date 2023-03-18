/* 
anonymous functions can be used in addEventListener method 
anonymous functions are almost same as a regular function it just doesn't have a name 

for eg. 
function () { 
    code
} 
*/

for (let i = 0 ; i < document.querySelectorAll("button").length;i++) {
    document.querySelectorAll("button")[i].addEventListener("click",function () {
        alert("I got clicked!!");
    })
}