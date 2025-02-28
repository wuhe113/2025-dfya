const scrollScenes = document.getElementById("scenes");

scrollScenes.addEventListener("wheel", (event) => {
    event.preventDefault(); 
});

document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight") {
        scrollScenes.scrollLeft += 50;
    } else if (event.key === "ArrowLeft") {
        scrollScenes.scrollLeft -= 50;
    }
});

const music = document.getElementsByTagName("audio")[0];
const muteButton = document.getElementById("mute");

let isToggled = true;

muteButton.onclick = function(e){

    if (isToggled){
        muteButton.src = "assets/PNG/mute2.png";
        music.pause();
    }else{
        muteButton.src = "assets/PNG/mute1.png";
        music.play();
    }

    isToggled = !isToggled;

}


