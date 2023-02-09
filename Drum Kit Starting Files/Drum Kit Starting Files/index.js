var drumsButton = document.querySelectorAll(".drum");
for (let i = 0; i < drumsButton.length; i++) 
{
    drumsButton[i].addEventListener("click", function(){
    var ButtonInerHTML = drumsButton[i].innerHTML;
    setSound(ButtonInerHTML);
    buttonPress(ButtonInerHTML);
    }    );
}
document.addEventListener("keypress",function(event)
{
   setSound(event.key);
   buttonPress(event.key);
});
function setSound(key){
       switch (key) {
        case  "w":
            var audi = new Audio("sounds/tom-1.mp3");
            audi.play();
            break;
        case  "a":
            var audi = new Audio("sounds/tom-2.mp3");
            audi.play();
            break;
        case  "s":
            var audi = new Audio("sounds/tom-3.mp3");
            audi.play();
            break;
        case  "d":
            var audi = new Audio("sounds/tom-4.mp3");
            audi.play();
            break;
        case  "j":
            var audi = new Audio("sounds/kick-bass.mp3");
            audi.play();
            break;
        case  "k":
            var audi = new Audio("sounds/snare.mp3");
            audi.play();
            break;
        case  "l":
            var audi = new Audio("sounds/crash.mp3");
            audi.play();
            break;
        default:
            break;
        }
    }
    function buttonPress(key){
        var button = document.querySelector("."+ key );
        button.classList.add("pressed");
        setTimeout(function(){
            button.classList.remove("pressed");
        }, 100);
    }
