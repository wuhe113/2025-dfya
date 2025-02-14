const block = document.getElementById("line8");
const windowWidth = window.innerWidth;

function adjustPosition(){
    const windowWidth = window.innerWidth;
    const fullScreenWidth = window.screen.width;
    const defaultTop = 52;
    const maxMoveUp = 145;


    let newTop = defaultTop - ((fullScreenWidth - windowWidth) / fullScreenWidth) * maxMoveUp;


    newTop = Math.max(5, newTop); 


    block.style.top = `${newTop}px`;

}

window.addEventListener('resize', adjustPosition);
window.addEventListener('load', adjustPosition);