const essayTitle = document.getElementById("essay-title");
const essay = document.getElementById("text-container");

const interview = document.getElementById("interview-container");


essay.onscroll = function(e){
    if (essay.scrollTop > 0) {
        essayTitle.style.opacity = "0";
    } else {
        essayTitle.style.opacity = "1";
    }
};

essay.addEventListener("wheel", function(event) {
    event.preventDefault(); // Prevent default scrolling behavior
    essay.scrollTop += event.deltaY * 0.3; // Adjust multiplier to slow down/speed up
}, { passive: false });

interview.addEventListener("wheel", function(event) {
    event.preventDefault();
    interview.scrollTop += event.deltaY * 0.3;
}, { passive: false });



document.querySelectorAll('.footnote').forEach(footnote => {
    footnote.onmouseenter = function() {
        const refId = this.getAttribute('data-id');
        const reference = document.getElementById(refId);
        if (reference) {
            const rect = this.getBoundingClientRect();
            reference.style.visibility = 'visible';
        }
    };

    footnote.onmouseleave = function() {
        const refId = this.getAttribute('data-id');
        const reference = document.getElementById(refId);
        if (reference) {
            reference.style.visibility = 'hidden';
        }
    };
});


document.querySelectorAll('.add2').forEach(imgEnlarge => {
    imgEnlarge.onclick = function(e) {

        event.stopPropagation();

        let img = this.closest('div').querySelector('img');
        img.classList.toggle('enlarged');
    };
});

document.onclick = function(e) {
    document.querySelectorAll('img').forEach(img => img.classList.remove('enlarged'));
};

const wallEssay = document.getElementById("fourth-wall-essay");
const interview1 = document.getElementById("interview3");
const wallNotion = document.getElementById("wall-notion");

wallEssay.addEventListener("wheel", function(event) {
    event.preventDefault();
    wallEssay.scrollTop += event.deltaY * 0.3;
}, { passive: false });


const openInterview1 = document.getElementById("a1");

const interview2 = document.getElementById("interview1");
const openInterview2 = document.getElementById("a2");

const interview3 = document.getElementById("interview2");
const openInterview3 = document.getElementById("a3");


let isToggled = false;

openInterview1.onclick = function(){
    
    if (isToggled){
        setTimeout(() => {
            wallEssay.style.height = "0%";
            wallEssay.style.opacity = "0";
        }, 300);

        interview1.style.display = "none";
        wallEssay.style.display = "none";
        wallNotion.style.display = "none";
        closeWall.style.display = "none";
        essay.style.visibility = "visible";
        essayTitle.style.visibility = "visible";
    }else{
        setTimeout(() => {
            wallEssay.style.height = "80%";
            wallEssay.style.opacity = "1";
        }, 300);

        interview1.style.display = "block";
        wallEssay.style.display = "block";
        wallNotion.style.display = "block";
        closeWall.style.display = "block"
        essay.style.visibility = "hidden";
        essayTitle.style.visibility = "hidden";
    }

    isToggled = !isToggled;

}

openInterview2.onclick = function(){
    if (isToggled){
        interview2.style.display = "none";
    }else{
        interview2.style.display = "block";
    }

    isToggled = !isToggled;

}

openInterview3.onclick = function(){
    if (isToggled){
        interview3.style.display = "none";
    }else{
        interview3.style.display = "block";
    }

    isToggled = !isToggled;

}

const closeWall = document.getElementById("close-wall");

closeWall.onclick = function(){
    setTimeout(() => {
        wallEssay.style.height = "0%";
        wallEssay.style.opacity = "0";
    }, 300);
    
    interview1.style.display = "none";
    interview3.style.display = "none";
    wallEssay.style.display = "none";
    wallNotion.style.display = "none";
    essay.style.visibility = "visible";
    essayTitle.style.visibility = "visible";
    closeWall.style.display = "none";
}




// function addLines(rows, cols) {
//     wallEssay.style.setProperty('--grid-rows', rows);
//     wallEssay.style.setProperty('--grid-cols', cols);

//     for (let i = 0; i < rows * cols; i++) {
//         let newDiv = document.createElement("div");
//         newDiv.classList.add("lines");
//         wallEssay.appendChild(newDiv);
//     }
// }

// addLines(10, 10);
