const cursor = document.getElementById("cursor");

document.onmousemove = function(e){
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
}


const sections = document.querySelectorAll(".section");

sections.forEach(section =>{
    section.onmouseenter = function(){
        cursor.textContent = "GO TO THIS SECTION";
    }

    section.onmouseleave = function(){
        cursor.textContent = "ABOUT";
    }
});
