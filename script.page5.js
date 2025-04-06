const p = document.querySelector('#side-text p');
  const text = p.innerText.trim().split('\n');
  p.innerHTML = '';

  text.forEach((line, i) => {
    if (line.trim() === '') {
      p.appendChild(document.createElement('br'));
    } else {
      const span = document.createElement('span');
      span.textContent = line.trim();
      span.style.animationDelay = `${i * 0.1}s`;
      span.style.animationDuration = `1s`;
      p.appendChild(span);
      p.appendChild(document.createElement('br'));
    }
});

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

  