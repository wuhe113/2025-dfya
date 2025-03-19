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

const next = document.getElementById("next");

next.onmouseenter = function(){
    cursor.textContent = "GO TO NEXT PAGE";
}

next.onmouseleave = function(){
    cursor.textContent = "ABOUT";
}


function openPopup1(url, width, height) {
    let left = (screen.width - width) / 2;
    let top = (screen.height - height) / 2;
    window.open(url, '_blank', `width=${width},height=${height},left=${left},top=${top}`);
}

function openPopup2(url) {
    window.open(url, '_blank', `width=${screen.width},height=${screen.height},top=0,left=0`);
}