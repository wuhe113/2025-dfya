const essayTitle = document.getElementById("essay-title");
const essay = document.getElementById("text-container");


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


document.querySelectorAll('.footnote').forEach(footnote => {
    footnote.onmouseenter = function(e) {
        const refId = this.getAttribute('data-id');
        const reference = document.getElementById(refId);
        if (reference) {
            const rect = this.getBoundingClientRect();
            reference.style.visibility = 'visible';
        }
    };

    footnote.onmouseleave = function(e) {
        const refId = this.getAttribute('data-id');
        const reference = document.getElementById(refId);
        if (reference) {
            reference.style.visibility = 'hidden';
        }
    };
});