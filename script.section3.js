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


const interview3a = document.getElementById("interview3-a");

const insertAnswers = document.getElementById("insert-answers");



wallEssay.addEventListener("scroll", function () {
    const scrollBottom = wallEssay.scrollHeight - wallEssay.scrollTop - wallEssay.clientHeight;
    
    if (scrollBottom < 5) {
        interview3a.style.width = "50%";
        interview3a.style.height = "80%";
        interview3a.style.visibility = "visible";
        interview3a.style.pointerEvents = "auto";
    } else{
        interview3a.style.width = "0";
        interview3a.style.height = "0";
        interview3a.style.visibility = "hidden";
        interview3a.style.pointerEvents = "none";
    }

});


interview3a.addEventListener("wheel", function(event) {
    event.preventDefault();
    interview3a.scrollTop += event.deltaY * 0.3;

}, { passive: false });





const openInterview1 = document.getElementById("a1");

const interview2 = document.getElementById("interview1");
const openInterview2 = document.getElementById("a2");

const interview3 = document.getElementById("interview2");
const openInterview3 = document.getElementById("a3");


openInterview1.onclick = function () {
    const isVisible = interview1.style.display === "block";

    if (isVisible) {
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
        interview3a.style.display = "none";
    } else {
        setTimeout(() => {
            wallEssay.style.height = "80%";
            wallEssay.style.opacity = "1";
        }, 300);

        interview1.style.display = "block";
        wallEssay.style.display = "block";
        wallNotion.style.display = "block";
        closeWall.style.display = "block";
        essay.style.visibility = "hidden";
        essayTitle.style.visibility = "hidden";
        interview3a.style.display = "block";
    }
};



openInterview2.onclick = function () {
    interview2.style.display = (interview2.style.display === "block") ? "none" : "block";
    interview3.style.display = "none";
};

openInterview3.onclick = function () {
    interview3.style.display = (interview3.style.display === "block") ? "none" : "block";
    interview2.style.display = "none";
};

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
    interview3a.style.display = "none";
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


function openPopup1(url, width, height) {
    let left = (screen.width - width) / 2;
    let top = (screen.height - height) / 2;
    window.open(url, '_blank', `width=${width},height=${height},left=${left},top=${top}`);
}


function openPopup2(url) {
    window.open(url, '_blank', `width=${screen.width},height=${screen.height},top=0,left=0`);
}