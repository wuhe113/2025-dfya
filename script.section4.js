//refer to 24fall next-level coding course: https://www.notion.so/Intro-to-Firebase-14855da29c23809daa20d715106c795e
const firebaseConfig = {
    apiKey: "AIzaSyDDaQBUlFNUNu6nTAd4ptTIZJsAsxfpK5k",
    authDomain: "dfya-369ce.firebaseapp.com",
    projectId: "dfya-369ce",
    storageBucket: "dfya-369ce.firebasestorage.app",
    messagingSenderId: "213926618801",
    appId: "1:213926618801:web:1d542838255e06ef07e490"
  };


  firebase.initializeApp(firebaseConfig); 
const database = firebase.database();
const ref = database.ref("chat");



const comment = document.getElementById("comment-input");
const sendButton = document.getElementById("send-button");
const chat = document.getElementById("chat");

sendButton.onclick = function (event) {
	// this is to prevent the default operation of a form (aka going to a different page, you can try taking it out
	event.preventDefault();

	// get the values from user input
	const text = comment.value;
    const color = document.getElementById("color-picker").value;

	// clear the message
	comment.value = "";

	// push the data to firebase
	ref.push({ comment: text, color: color});
};


ref.on("value", (snapshot) => {
	// get the data from firebase
	const data = snapshot.val();

	// clear out the old chatroom HTML
	chat.innerHTML = "";


	// use a for ... in loop to populate the chatroom
	for (const key in data) {
		// chat.innerHTML += `
		// 	<p>
		// 	${data[key].comment}
		// 	</p>`;

        const commentData = data[key];
        const commentText = commentData.comment;
        const fontColor = commentData.color || "#ffffff";

        const  commentChat = document.createElement('div');
        commentChat.textContent = commentText;
        commentChat.style.color = fontColor;
        commentChat.classList.add("bullet-chat");


        const topPosition = Math.random() * (chat.clientHeight - 20);
        commentChat.style.top = `${topPosition}px`;
        
        const animationDuration = Math.random() * 5 + 8;
        commentChat.style.animationDuration = `${animationDuration}s`;

        const randomSize = Math.random()*3 + 1;
        commentChat.style.fontSize = `${randomSize}vw`;

        chat.appendChild(commentChat);
        


	}
});


const closeButton = document.getElementById("closeChat-button");
const open = document.getElementById("open");


closeButton.onclick = function(event){
    event.preventDefault();

    let currentVisibility = window.getComputedStyle(chat).visibility;

    if (currentVisibility === "visible") {
        chat.style.visibility = "hidden";
        open.style.visibility = "hidden";
    } else {
        chat.style.visibility = "visible";
        open.style.visibility = "visible";
    }

}


const sectionButton = document.getElementById("section-button");
const sectionChoice = document.getElementById("sections");


sectionButton.onclick = function(event){
    event.preventDefault();

    let currentDisplay = window.getComputedStyle(sectionChoice).display;

    if (currentDisplay === "none"){
        sectionChoice.style.display = "block";
    }else{
        sectionChoice.style.display = "none";
    }

}



function openPopup(url, width, height) {
    let left = (screen.width - width) / 2;
    let top = (screen.height - height) / 2;
    window.open(url, '_blank', `width=${width},height=${height},left=${left},top=${top}`);
}












window.onload = function () {
    const end = document.getElementById("end");
    const credits = document.getElementById("ending-credits")
    const slider = document.getElementById("myRange");

    // credits.style.top = "";



    if (end) {
        setTimeout(() => {
        end.style.display = "block";
        end.classList.add("disappear");
    }, 6000);
}


if (credits) {
    setTimeout(() => {
    credits.style.visibility = "visible";
    credits.style.top = "200%";
    startScrolling();
    // credits.classList.add("scrolling-animation");
}, 8500);
}


function startScrolling() {
    let duration = 60000;
    let startTop = 200;
    let endTop = -500;
    let isManualControl = false; 

    function animateScroll() {
        if (isManualControl) return;
        let start = Date.now();

        function loopAnimation(){
        if (isManualControl) return;

        let elapsed = Date.now() - start;
        let progress = Math.min(elapsed / duration, 1); // Limit to 1
        let newTop = startTop + (endTop - startTop) * progress;
        credits.style.top = newTop + "%";
        slider.value = -newTop;

        if (progress < 1) {
            requestAnimationFrame(loopAnimation);
        }else {
            setTimeout(() => {
                credits.style.top = startTop + "%";
                requestAnimationFrame(animateScroll);
            }, 5000);
        }
    }

    loopAnimation();
}

    animateScroll();

    slider.oninput = function () {
        isManualControl = true;
        updateCreditsPosition(this.value);
        // credits.style.top = -this.value + "%";
    };
}



function updateCreditsPosition(value) {
    credits.style.top = -value + "%";
}

updateCreditsPosition(slider.value);





};




// var slider = document.getElementById("myRange");
// var output = document.getElementById("ending-credits");
// slider.value = -150;
// output.style.top = -slider.value + "%";


// slider.oninput = function() {
    
//   output.style.top = -this.value + "%";
// }

