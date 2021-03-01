var btnNumber = document.querySelectorAll(".drum").length;

for(var i=0; i<btnNumber; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        
        var drumx = this.innerHTML;
        switch(drumx) {
            case "w":
                var dw = new Audio('sounds/crash.mp3')
                dw.play();
                break;

            case "a":
                var da = new Audio('sounds/kick-bass.mp3')
                da.play();
                break;

            case "s":
                var ds = new Audio('sounds/snare.mp3')
                ds.play();
                break;

            case "d":
                var dd = new Audio('sounds/tom-1.mp3')
                dd.play();
                break;

            case "j":
                var dj = new Audio('sounds/tom-2.mp3')
                dj.play();
                break;

            case "k":
                var dk = new Audio('sounds/tom-3.mp3')
                dk.play();
                break;

            case "l":
                var dl = new Audio('sounds/tom-4.mp3')
                dl.play();
                break;

            default:
                console.log(drumx);
        }
    });
}
