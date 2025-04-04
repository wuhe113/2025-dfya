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
