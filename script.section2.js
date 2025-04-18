// window.open('page5.html', '_blank', 'width=922,height=663,resizable=no,scrollbars=no');
// part of code is assisted with the help from ChatGPT for debugging and revising functions *especially the part that require user's clicking interaction and character's dialogue process
const cursor = document.getElementById("cursor");

document.onmousemove = function(e){
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
}

document.onclick = function(e){
    document.body.style.cursor = 'none';
}


const essayBox = document.getElementById("essay-box");

const essayContent1 = document.getElementById("essay-content1");
const essayContent2 = document.getElementById("essay-content2");

essayContent1.addEventListener("wheel", function(event) {
    event.preventDefault();
}, { passive: false });

essayContent2.addEventListener("wheel", function(event) {
    event.preventDefault();
}, { passive: false });

// function showEssayContent1() {
//     essayContent1.style.display = 'block';
//     essayContent1.focus();
// }

// showEssayContent1();

// essayContent1.addEventListener('keydown', function(event) {
    

//     if (event.key === 'ArrowDown') {
//         essayContent1.scrollTop += 10;
//     } else if (event.key === 'ArrowUp') {
//         essayContent1.scrollTop -= 10;
//     }
// });


const scrollScenes = document.getElementById("scenes");

const nextButton = document.getElementById("next");

scrollScenes.addEventListener("wheel", (event) => {
    event.preventDefault(); 
});

// document.addEventListener("keydown", (event) => {
//     if (event.key === "ArrowRight") {
//         scrollScenes.scrollLeft += 50;
//     } else if (event.key === "ArrowLeft") {
//         scrollScenes.scrollLeft -= 50;
//     }

//     if (scrollScenes.scrollLeft + scrollScenes.clientWidth >= scrollScenes.scrollWidth - 5) {
//         nextButton.style.visibility = "visible"; 
//     } else {
//         nextButton.style.visibility = "hidden"; 
//     }

// });



document.addEventListener("keydown", (event) => {
    const scrollScenesVisible = window.getComputedStyle(scrollScenes).display !== 'none';
    const essayContent1Visible1 = window.getComputedStyle(essayContent1).display !== 'none';
    const essayContent1Visible2 = window.getComputedStyle(essayContent2).display !== 'none';

    if (scrollScenesVisible) {
        if (event.key === "ArrowRight") {
            // scrollScenes.scrollLeft += 50;
            scrollScenes.scrollBy({ left: 50, behavior: "smooth" });
        } else if (event.key === "ArrowLeft") {
            // scrollScenes.scrollLeft -= 50;
            scrollScenes.scrollBy({ left: -50, behavior: "smooth" });
        }

        if (scrollScenes.scrollLeft + scrollScenes.clientWidth >= scrollScenes.scrollWidth - 5) {
            nextButton.style.visibility = "visible"; 
        } else {
            nextButton.style.visibility = "hidden"; 
        }
    }

    if (essayContent1Visible1) {
        if (event.key === "ArrowDown") {
            // essayContent1.scrollTop += 10;
            essayContent1.scrollBy({ top: 50, behavior: "smooth" });
        } else if (event.key === "ArrowUp") {
            essayContent1.scrollBy({ top: -50, behavior: "smooth" });
        }
    }

    if (essayContent1Visible2) {
        if (event.key === "ArrowDown") {
            // essayContent1.scrollTop += 10;
            essayContent2.scrollBy({ top: 50, behavior: "smooth" });
        } else if (event.key === "ArrowUp") {
            essayContent2.scrollBy({ top: -50, behavior: "smooth" });
        }
    }
});


const closeEssay = document.getElementById("close-essay");

closeEssay.onclick = function(e){
    essayBox.style.display = "none";
    essayContent1.style.display = "none";
    essayContent2.style.display = "none";

}


function openPopup1(url, width, height) {
    let left = (screen.width - width) / 2;
    let top = (screen.height - height) / 2;
    window.open(url, '_blank', `width=${width},height=${height},left=${left},top=${top}`);
}

function openPopup2(url) {
    window.open(url, '_blank', `width=${screen.width},height=${screen.height},top=0,left=0`);
}






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


// function clicking() {
//     var clickingSound = document.getElementById("clicking-sound");
//     clickingSound.play();
// }


const clicking = new Audio();
clicking.src = "assets/Music/clicking-sound.mp3";




const section = document.getElementById("section-button");
const sectionChoice = document.getElementById("section-choice");

section.onclick = function(event){
    event.preventDefault();

    let currentDisplay = window.getComputedStyle(sectionChoice).display;

    if (currentDisplay === "none"){
        sectionChoice.style.display = "block";
    }else{
        sectionChoice.style.display = "none";
    }

}



// document.addEventListener("DOMContentLoaded", function() {
//     const music = document.getElementById("bg-music");
//     const muteButton = document.getElementById("mute");

//     music.play().catch(error => console.log("Autoplay blocked:", error));

//     muteButton.onclick = function(e){

//         if (music.muted) {
//         music.muted = false;
//         muteButton.src = "assets/PNG/mute1.png";
//     } else {
//         music.muted = true;
//         muteButton.src = "assets/PNG/mute2.png";
//     }
//     }


// })



const startButton = document.getElementById("start");
const gameOpening = document.getElementById("game-opening");

startButton.onclick = function(){
    gameOpening.style.opacity = "0"; 
    setTimeout(() => {
        gameOpening.style.visibility = "hidden";
    }, 1000);
}

const trigger1 = document.getElementById("trigger1");
const trigger2 = document.getElementById("trigger2");
const trigger7 = document.getElementById("trigger7");
const trigger10 = document.getElementById("trigger10");
const trigger11 = document.getElementById("trigger11");

const characterImg1 = document.getElementById("character1-img");
const characterImg2 = document.getElementById("character2-img");
const characterImg3 = document.getElementById("character3-img");
const characterImg4 = document.getElementById("character4-img");
const characterImg5 = document.getElementById("character5-img");

const textbox1 = document.getElementById("textbox1");
const textbox2 = document.getElementById("textbox2");
const textbox3 = document.getElementById("textbox3");
const textbox4 = document.getElementById("textbox4");
const textbox5 = document.getElementById("textbox5");

const character1 = document.getElementById("character1");
const character2 = document.getElementById("character2");
const character3 = document.getElementById("character3");
const character4 = document.getElementById("character4");
const character5 = document.getElementById("character5");

const textElement = document.getElementById("text1");
const textElement2 = document.getElementById("text2");
const textElement3 = document.getElementById("text3");
const textElement4 = document.getElementById("text4");
const textElement5 = document.getElementById("text5");

const choice1 = document.getElementById("choice1");
const choice2 = document.getElementById("choice2");
const choice3 = document.getElementById("choice3");
const choice4 = document.getElementById("choice4");
const choice5 = document.getElementById("choice5");

const choiceContainer1 = document.getElementById("choice-container1");
const choiceContainer2 = document.getElementById("choice-container2");
const choiceContainer3 = document.getElementById("choice-container3");
const choiceContainer4 = document.getElementById("choice-container4");
const choiceContainer5 = document.getElementById("choice-container5");








const texts1 = [
    "I think the range is quite broad. It could be novels, games, or various projects on the internet, but for me, the main medium is definitely games.",
    "Because I am someone who really enjoys playing games, and I also like to find characters I like within the games.",
    "Because I think games offer more interaction. Unlike manga/comics or novels where you just read, in games, you can actively control certain things.",
    "I think a major reason is that most games I play have some form of storyline, and the character I like exists within the game's world, experiencing various events and having their own stories.",
    "Yes, it's Li Zeyan from the dating simulator mobile game Love: Queen's Choice.",
    "I think it's because the games I play are very immersive. Many game companies do things to help break the fourth wall, like having characters say things that make it seem like they're really talking to you through the game.",
    "Yes.",
    "There have indeed been changes.",
    "Yes, and my mindset has subtly shifted.",
    "Right, manga/comics and books feel like time is frozen at a moment, but games feel like time is stretched out over a long period.",
    "I think there have been some positive impacts.",
    "I think my main efforts have been spending money in the game to get cards of this character and buying related merchandise.",



];


const choiceTexts1 = [
    "Okay, since you mentioned games, why do you prefer this medium? Or is it that the relationships you build with fictional characters through this medium are the strongest for you? Do you think the nature of games itself encourages you to establish relationships with fictional characters?",
    "Then why do you think games are the medium that allows you to form the deepest connections with fictional characters?",
    "So, based on this medium, how do you establish parasocial relationships with fictional characters?",
    "Okay, since you mentioned a blind date, does this mean the relationship is romantic for you? Who is the character?",
    "Why do you think you established such a relationship with this character? How did the character move you emotionally or in other aspects?",
    "I see, so while it's ostensibly a dating simulator game, it provided you with more than just gameplay—it overlapped with real-life events, giving you a sense of constant companionship. This might be a characteristic of virtual characters; their virtual nature means they're always there, unaffected by time.",
    "From high school when you started playing this game and building a relationship with the character until now, how do you think your relationship with the character has changed over time?",
    "In high school, you were a high school student with a high schooler's mindset, while Li Zeyan was already a mature adult, creating an age gap. But as you've grown, reaching the age he was, your feelings have naturally changed.",
    "Exactly, I think time is a unique element in games. Many games are designed so that the in-game time progresses with real time, offering a more realistic experience. In contrast, novels, manga/comics, or movies are fixed in their story's time, not synchronized with real time.",
    "Do you think this relationship has had any impact on your real-life? Are these impacts positive, negative, or a mix of both?",
    "Have you made any efforts for this relationship? (Such as creating fanart, cosplay, buying merchandise, participating in related events, etc.)",






];














const texts2 = [
    "For me, the mediums that take up a large proportion are definitely games, followed by anime/animations and VTubers on the internet.",
    "I think it's because they don't require a huge amount of time investment from me, meaning the time I spend on these three mediums is flexible.",
    "I think it's about whether the character has something that attracts me, but mainly it starts with their appearance and personality.",
    "Right.",
    "Yes.",
    "Right, but also, for example, Lu Jinghe sometimes has situations that I think are completely like my past self or even my current self.",
    "I think it's like starting from being soulmates, then to the honeymoon phase, then to a steady flow, and now it feels like an old married couple.",
    "I think it's also about the character's personality, especially when I see characters that are somewhat like me, I really want to get to know that character.",
    "I think their existence and this relationship have made my real life more stable,",
    "For me, it might be drawing.",


];


const choiceTexts2 = [
    "So why do you think these three mediums are more capable of helping you establish relationships with fictional characters?",
    "Based on these mediums, how do you establish parasocial relationships with fictional characters?",
    "Alright, then why do you think you establish such relationships? For instance, here, you might have established a romantic relationship with a character in the game, which is a very intense relationship for you. Perhaps the character has touched you emotionally or in other aspects, right?",
    "From what I hear, I would think that some people might feel that a character has the same growth experience as them, and they can empathize, so the relationship is established through this so-called empathy.",
    "But for you, the parts of them that are different from you are what you desire. This prompts you to establish relationships with the characters, and they are also a place for you to escape from reality, but at the same time, through their character stories or behaviors, you find the strength to face reality.",
    "So you overlap his part of the plot with your past self, which brings you a greater emotional impact. From the time you started playing these games and established relationships with characters until now, after so many years, do you think your relationship with them has changed over time?",
    "Alright, besides games, you also mentioned anime/animations. How do you establish parasocial relationships with fictional characters in anime/animations?",
    "Do you think this relationship has had any impact on your real-life? Are these impacts positive, negative, or a mix of both?",
    "After saying so much, finally, I want to ask, have you made any efforts for this relationship? (creating fanart, cosplay, buying merchandise, participating in related events, etc.)",






];




const texts3 = [
    "Mainly through games.",
    "While playing the game, I first got to know the main storyline, and then through interactions with the characters in the game,",
    "The relationship established with the character is a romantic one, or a one-sided relationship that exceeds the usual boundaries of liking.",
    "When someone first got to know this character, people might think he was a bit rigid or old-fashioned, especially since he is the class monitor and always strives to do everything perfectly.",
    "It's been a long time.",
    "The impact has been huge, both positive and negative.",
    "I don't really agree with the idea that &ldquo;the more merchandise you buy, the more it proves your love for the character.&rdquo;",
    "Yes, exactly.",
    "Speaking of this, I feel like I'm a bit strange.",
    "For me, it might be drawing.",
    "Yes, due to my personality, I've never participated in such offline events."


];


const choiceTexts3 = [
    "Based on this medium, how did you establish a parasocial relationship with the fictional characters?",
    "Could you describe what kind of parasocial relationship this is? Who is the character?",
    "Why do you think you established such a relationship with this character? How did the character move you emotionally or in other aspects?",
    "As far as I know, this relationship has been maintained for a long time. When did it start exactly? Have you noticed any changes in this relationship over time?",
    "Do you think this relationship has had an impact on your real-life? Has it been positive, negative, or both?",
    "I see. Some people might say that the more merchandise you buy, the more it proves your love for the character. What do you think about this topic?",
    "I think so too. Buying merchandise should always be voluntary. I believe most fans initially buy merchandise to own something related to their favorite character and derive joy from it, not to compete with others.",
    "Besides buying merchandise, have you made any other efforts for this relationship? (For example, creating fan art, cosplay, participating in related events, etc.)",
    "I see. As far as I know, the basic setting of the mobile game Ensemble Stars is that the characters are idols, so they regularly hold offline &ldquo;concerts.&rdquo; Have you never participated in such official events? Do you feel regret about that?",






];


const texts4 = [
    "Games, specifically console games, not mobile games.",
    "I think games are inherently more immersive compared to other mediums.",
    "Firstly, the game allows players to build romantic relationships with characters.",
    "The turning point was replaying the game.",
    "Astarion’s humor, particularly his dark humorous jokes, resonated with me.",
    "It’s really complicated. I think there are both good and bad aspects to its impact on me.",
    "First and foremost, I’ve invested a significant amount of time into the game.",


];


const choiceTexts4 = [
    "Why do you think console games are the medium that allows you to feel the deepest connection with fictional characters?",
    "Based on this medium, how did you establish a parasocial relationship with the fictional character?",
    "What was the turning point that changed your perception of this character and made you want to establish a parasocial relationship with him?",
    "How did the character emotionally or otherwise resonate with you, making you genuinely like him?",
    "This storyline feels very realistic… So, do you think this relationship has had an impact on your real life? Is it positive, negative, or both?",
    "There are indeed many people who don’t understand such relationships, which is why I think it’s important to explore why people like us form these connections with fictional characters and what emotional dynamics accompany these relationships. After establishing this relationship, have you made any efforts to nurture it?",






];

const texts5 = [
    "When I was in middle school, I stumbled upon a fan comic of him online and was instantly drawn to him.",
    "I think it depends on the game.",
    "I think it was a natural emotional impulse—a feeling of love.",
    "At first, I enjoyed more about his interaction with other characters from the game and imagined fewer stories between us.",
    "Actually, I’ve been drawing him and myself since I first started making art.",
    "Both, I think.",
    "Yes…He’ll always be here."


];


const choiceTexts5 = [
    "Video game live streaming is an indirect way to engage with a game’s characters compared to playing the game yourself, yet people like you still form intense bonds with the fictional characters. Given this, how did you build such a strong connection with Kokichi Oma through this medium?",
    "Why do you think you formed this kind of relationship? How did the character resonate with you emotionally or in other ways?",
    "You mentioned that this relationship has been established for eight years and you said your love for him has only grown. Beyond that, how else do you feel this relationship has evolved over time?",
    "Since you brought it up, what inspired you to start creating art related to Kokichi Oma?",
    "Both a lover and a muse! Do you feel this relationship has impacted your real life? Positively, negatively, or both?",






];




let textIndex1 = 0;
let choiceIndex1 = 0;

let textIndex2 = 0;
let choiceIndex2 = 0;

let textIndex3 = 0;
let choiceIndex3 = 0;

let textIndex4 = 0;
let choiceIndex4 = 0;

let textIndex5 = 0;
let choiceIndex5 = 0;


let timeout1, timeout2, timeout3, timeout4, timeout5, timeout6, timeout7, timeout8, timeout9, timeout10;


const choiceText = document.getElementById("choicetext1");
const choiceText2 = document.getElementById("choicetext2");
const choiceText3 = document.getElementById("choicetext3");
const choiceText4 = document.getElementById("choicetext4");
const choiceText5 = document.getElementById("choicetext5");

const facial1 = ["assets/PNG/penny1.png", "assets/PNG/penny2.png", "assets/PNG/penny3.png"];
const facial2 = ["assets/PNG/catherine1.png", "assets/PNG/catherine2.png", "assets/PNG/catherine3.png"];
const facial3 = ["assets/PNG/sammi1.png", "assets/PNG/sammi2.png", "assets/PNG/sammi3.png"];
const facial4 = ["assets/PNG/tasty1.png", "assets/PNG/tasty2.png", "assets/PNG/tasty3.png"];
const facial5 = ["assets/PNG/skirua1.png", "assets/PNG/skirua2.png", "assets/PNG/skirua3.png"];

const closeDialogue = document.getElementById("close-dialogue");

closeDialogue.onclick = function () {


    clearTimeout(timeout1);
    clearTimeout(timeout2);

    clearTimeout(timeout3);
    clearTimeout(timeout4);

    clearTimeout(timeout5);
    clearTimeout(timeout6);

    clearTimeout(timeout7);
    clearTimeout(timeout8);

    clearTimeout(timeout9);
    clearTimeout(timeout10);

    textElement.innerText = ""; 
    choiceText.innerText = "";

    textElement2.innerText = ""; 
    choiceText2.innerText = "";

    textElement3.innerText = ""; 
    choiceText3.innerText = "";

    textElement4.innerText = ""; 
    choiceText4.innerText = "";

    textElement5.innerText = ""; 
    choiceText5.innerText = "";


    resetElements();
};

function resetElements() {
    console.log("Resetting elements...");

    // Hide elements
    character1.style.visibility = "hidden";
    choice1.style.visibility = "hidden";
    choiceContainer1.style.visibility = "hidden";

    character2.style.visibility = "hidden";
    choice2.style.visibility = "hidden";
    choiceContainer2.style.visibility = "hidden";


    character3.style.visibility = "hidden";
    choice3.style.visibility = "hidden";
    choiceContainer3.style.visibility = "hidden";

    character4.style.visibility = "hidden";
    choice4.style.visibility = "hidden";
    choiceContainer4.style.visibility = "hidden";

    character5.style.visibility = "hidden";
    choice5.style.visibility = "hidden";
    choiceContainer5.style.visibility = "hidden";


    closeDialogue.style.visibility = "hidden";

    // **Reset Typing Effect (Fixing Double Text Issue)**
    // Ensure no ongoing typing process
    // clearTimeout(timeout1); 
    // clearTimeout(timeout2); 
    // clearTimeout(timeout3);
    // clearTimeout(timeout4);

    // **Reset text completely before setting new text**
    textElement.innerText = "";  
    textElement.dataset.text = "Hi, I’m Penny, 21 years old, my pronouns are she/her, and I'm currently a senior illustration student.";
    choiceText.innerText = "Before you were selected as the interviewee, I learned that you have experience building parasocial relationships with fictional characters. Could you briefly describe through which mediums (manga/comics, anime/animation, games, novels, movies, TV dramas, etc.) you primarily establish such relationships with fictional characters?";

    textElement2.innerText = "";  
    textElement2.dataset.text = "Hi, My name is Catherine, pronouns she/her. I am 21 years old and a senior student majoring in fashion design.";
    choiceText2.innerText = "Before you were selected as the interviewee, I learned that you have experience building parasocial relationships with fictional characters. Could you briefly describe through which mediums (manga/comics, anime/animation, games, novels, movies, TV dramas, etc.) you primarily establish such relationships with fictional characters?";

    textElement3.innerText = "";  
    textElement3.dataset.text = "Hi, I'm Sammi, 22 years old, and I'm a student majoring in metal art & jewelry.";
    choiceText3.innerText = "Before you were selected as the interviewee, I learned that you have experience building parasocial relationships with fictional characters. Could you briefly describe through which mediums (manga/comics, anime/animation, games, novels, movies, TV dramas, etc.) you primarily establish such relationships with fictional characters?";

    textElement4.innerText = "";  
    textElement4.dataset.text = "Hi, you can call me tastycorpse, she/her, 21 years old, and I'm currently a student.";
    choiceText4.innerText = "Before you were selected as the interviewee, I learned that you have experience building parasocial relationships with fictional characters. Could you briefly describe through which mediums (manga/comics, anime/animation, games, novels, movies, TV dramas, etc.) you primarily establish such relationships with fictional characters?";

    textElement5.innerText = "";  
    textElement5.dataset.text = "Hello, I’m skirua. I use she/her pronouns, am 22 years old, and currently work as an artist—though not in the traditional sense. I do things I enjoy, like painting self-portraits and creating doll avatars that express my emotions.";
    choiceText5.innerText = "Before you were selected as the interviewee, I learned that you have experience building parasocial relationships with Kokichi Oma. Could you briefly describe through which mediums (manga/comics, anime/animation, games, novels, movies, TV dramas, etc.) you primarily establish such relationships with fictional characters?";

    textIndex1 = 0;
    choiceIndex1 = 0;

    textIndex2 = 0;
    choiceIndex2 = 0;

    textIndex3 = 0;
    choiceIndex3 = 0;

    textIndex4 = 0;
    choiceIndex4 = 0;

    textIndex5 = 0;
    choiceIndex5 = 0;

    // **Set Default Image (No More Random First Image)**
    characterImg1.setAttribute("src", "assets/PNG/penny1.png");
    characterImg2.setAttribute("src", "assets/PNG/catherine1.png");
    characterImg3.setAttribute("src", "assets/PNG/sammi1.png");
    characterImg4.setAttribute("src", "assets/PNG/tasty1.png");
    characterImg5.setAttribute("src", "assets/PNG/skirua1.png");


    clearTimeout(timeout1);
    clearTimeout(timeout3);
    clearTimeout(timeout5);
    clearTimeout(timeout7);
    clearTimeout(timeout9);


    textElement.innerText = "";  // Force clear before starting again
    textElement2.innerText = "";
    textElement3.innerText = "";
    textElement4.innerText = "";
    textElement5.innerText = "";

    // setTimeout(() => {
    //     typeEffect(textElement, timeout1, 80);
    //     typeEffect(textElement2, timeout3, 80);
    // }, 50);

    setTimeout(() => {
        typeEffect(textElement, 80);
        typeEffect(textElement2, 80);
        typeEffect(textElement3, 80);
        typeEffect(textElement4, 80);
        typeEffect(textElement5, 80);
    }, 50);
    
    textbox1.onclick = null;
    textbox2.onclick = null;
    textbox3.onclick = null;
    textbox4.onclick = null;
    textbox5.onclick = null;
}




// function resetElements() {
//     console.log("Resetting elements...");

//     character1.style.visibility = "hidden";
//     choice1.style.visibility = "hidden";
//     choiceContainer1.style.visibility = "hidden";
//     closeDialogue.style.visibility = "hidden";

//     textElement.innerText = "Hi, I’m Penny, 21 years old, my pronouns are she/her, and I'm currently a senior illustration student.";
//     choiceText.innerText = "Before you were selected as the interviewee, I learned that you have experience building parasocial relationships with fictional characters. Could you briefly describe through which mediums (manga/comics, anime/animation, games, novels, movies, TV dramas, etc.) you primarily establish such relationships with fictional characters?";


//     textIndex1 = 0;
//     choiceIndex1 = 0;

//     textbox1.onclick = null;
// }

trigger2.onclick = function () {
    resetElements();

    character1.style.visibility = "visible";
    closeDialogue.style.visibility = "visible";

    clearTimeout(timeout1);
    clearTimeout(timeout2);

    timeout1 = setTimeout(() => {
        typeEffect(textElement, timeout1, 80);
    });

    timeout2 = setTimeout(() => {
        choice1.style.visibility = "visible";
        choiceContainer1.style.visibility = "visible";
    }, 3500);
};

trigger1.onclick = function () {
    resetElements();

    character2.style.visibility = "visible";
    closeDialogue.style.visibility = "visible";

    clearTimeout(timeout3);
    clearTimeout(timeout4);

    timeout3 = setTimeout(() => {
        typeEffect(textElement2, timeout3, 80);
    });

    timeout4 = setTimeout(() => {
        choice2.style.visibility = "visible";
        choiceContainer2.style.visibility = "visible";
    }, 3500);
};

trigger7.onclick = function () {
    resetElements();

    character3.style.visibility = "visible";
    closeDialogue.style.visibility = "visible";

    clearTimeout(timeout5);
    clearTimeout(timeout6);

    timeout5 = setTimeout(() => {
        typeEffect(textElement3, timeout5, 80);
    });

    timeout6 = setTimeout(() => {
        choice3.style.visibility = "visible";
        choiceContainer3.style.visibility = "visible";
    }, 3500);
};

trigger10.onclick = function () {
    resetElements();

    character4.style.visibility = "visible";
    closeDialogue.style.visibility = "visible";

    clearTimeout(timeout7);
    clearTimeout(timeout8);

    timeout7 = setTimeout(() => {
        typeEffect(textElement4, timeout7, 80);
    });

    timeout8 = setTimeout(() => {
        choice4.style.visibility = "visible";
        choiceContainer4.style.visibility = "visible";
    }, 3500);
};

trigger11.onclick = function () {
    resetElements();

    character5.style.visibility = "visible";
    closeDialogue.style.visibility = "visible";

    clearTimeout(timeout9);
    clearTimeout(timeout10);

    timeout9 = setTimeout(() => {
        typeEffect(textElement5, timeout9, 80);
    });

    timeout10 = setTimeout(() => {
        choice5.style.visibility = "visible";
        choiceContainer5.style.visibility = "visible";
    }, 3500);
};





const trigger3 = document.getElementById("trigger3");
const trigger4 = document.getElementById("trigger4");
const trigger5 = document.getElementById("trigger5");
const trigger6 = document.getElementById("trigger6");
const trigger8 = document.getElementById("trigger8");
const trigger9 = document.getElementById("trigger9");
const trigger12 = document.getElementById("trigger12");
const trigger13 = document.getElementById("trigger13");
const trigger14 = document.getElementById("trigger14");
const trigger15 = document.getElementById("trigger15");
const trigger16 = document.getElementById("trigger16");
const trigger17 = document.getElementById("trigger17");
const trigger18 = document.getElementById("trigger18");
const trigger19 = document.getElementById("trigger19");


const textTrigger1 = document.getElementById("text-trigger1");
const textTrigger2 = document.getElementById("text-trigger2");

const object1 = document.getElementById("object1");
const object2 = document.getElementById("object2");
const object3 = document.getElementById("object3");
const object4 = document.getElementById("object4");
const object5 = document.getElementById("object5");
const object6 = document.getElementById("object6");
const object7 = document.getElementById("object7");
const object8 = document.getElementById("object8");
const object9 = document.getElementById("object9");
const object10 = document.getElementById("object10");
const object11 = document.getElementById("object11");
const object12 = document.getElementById("object12");
const object13 = document.getElementById("object13");
const object14 = document.getElementById("object14");


const postImg = document.getElementById("img-background");
const likeImg = document.getElementById("like");
const closeObject = document.getElementById("close-object");


const closeInstruction = document.getElementById("close-instruction");
const instruction = document.getElementById("game-instruction");


trigger3.onclick = function () {
    object1.style.visibility = "visible";
    postImg.style.visibility = "visible";
    likeImg.style.visibility = "visible";
    closeObject.style.display = "block";
}

trigger4.onclick = function () {
    object2.style.visibility = "visible";
    postImg.style.visibility = "visible";
    likeImg.style.visibility = "visible";
    closeObject.style.display = "block";
}

trigger5.onclick = function () {
    object3.style.visibility = "visible";
    postImg.style.visibility = "visible";
    likeImg.style.visibility = "visible";
    closeObject.style.display = "block";
}

trigger6.onclick = function () {
    object4.style.visibility = "visible";
    postImg.style.visibility = "visible";
    likeImg.style.visibility = "visible";
    closeObject.style.display = "block";
}

trigger8.onclick = function () {
    object5.style.visibility = "visible";
    postImg.style.visibility = "visible";
    likeImg.style.visibility = "visible";
    closeObject.style.display = "block";
}

trigger9.onclick = function () {
    object6.style.visibility = "visible";
    postImg.style.visibility = "visible";
    likeImg.style.visibility = "visible";
    closeObject.style.display = "block";
}

trigger12.onclick = function () {
    object7.style.visibility = "visible";
    postImg.style.visibility = "visible";
    likeImg.style.visibility = "visible";
    closeObject.style.display = "block";
}

trigger13.onclick = function () {
    object8.style.visibility = "visible";
    postImg.style.visibility = "visible";
    likeImg.style.visibility = "visible";
    closeObject.style.display = "block";
}

trigger14.onclick = function () {
    object9.style.visibility = "visible";
    postImg.style.visibility = "visible";
    likeImg.style.visibility = "visible";
    closeObject.style.display = "block";
}

trigger15.onclick = function () {
    object10.style.visibility = "visible";
    postImg.style.visibility = "visible";
    likeImg.style.visibility = "visible";
    closeObject.style.display = "block";
}

trigger16.onclick = function () {
    object11.style.visibility = "visible";
    postImg.style.visibility = "visible";
    likeImg.style.visibility = "visible";
    closeObject.style.display = "block";
}

trigger17.onclick = function () {
    object12.style.visibility = "visible";
    postImg.style.visibility = "visible";
    likeImg.style.visibility = "visible";
    closeObject.style.display = "block";
}

trigger18.onclick = function () {
    object13.style.visibility = "visible";
    postImg.style.visibility = "visible";
    likeImg.style.visibility = "visible";
    closeObject.style.display = "block";
}

trigger19.onclick = function () {
    object14.style.visibility = "visible";
    postImg.style.visibility = "visible";
    likeImg.style.visibility = "visible";
    closeObject.style.display = "block";
}







textTrigger1.onclick = function () {
    essayBox.style.display = "block";
    essayContent1.style.display = "block";

}

textTrigger2.onclick = function () {
    essayBox.style.display = "block";
    essayContent2.style.display = "block";

}


closeObject.onclick = function () {
    object1.style.visibility = "hidden";
    object2.style.visibility = "hidden";
    object3.style.visibility = "hidden";
    object4.style.visibility = "hidden";
    object5.style.visibility = "hidden";
    object6.style.visibility = "hidden";
    object7.style.visibility = "hidden";
    object8.style.visibility = "hidden";
    object9.style.visibility = "hidden";
    object10.style.visibility = "hidden";
    object11.style.visibility = "hidden";
    object12.style.visibility = "hidden";
    object13.style.visibility = "hidden";
    object14.style.visibility = "hidden";
    postImg.style.visibility = "hidden";
    likeImg.style.visibility = "hidden";
    likeImg.setAttribute("src", "assets/PNG/like1.png");
    closeObject.style.display = "none";
}

likeImg.onclick = function(){
    likeImg.setAttribute("src", "assets/PNG/like2.png");
}

closeInstruction.onclick = function(){
    instruction.style.display = "none";
    
}





choiceContainer1.onclick = function () {
    choice1.style.visibility = "hidden";
    choiceContainer1.style.visibility = "hidden";

    let characterFace1 = Math.floor(Math.random() * facial1.length);
    characterImg1.setAttribute("src", facial1[characterFace1]);

    let currentTextIndex = textIndex1;

    changeText();


    switch (currentTextIndex) {
        case 1: // Special case for the second text with multiple clicks
            let clickCount1 = 0;
            textbox1.onclick = function () {
                if (clickCount1 === 0) {
                    textElement.style.bottom = "14%";
                    textElement.dataset.text = "In many games I play, I always look for my favorite character, and as I delve deeper into the game or play it for a longer time, my affection for that character grows. However, I tend to look for characters I might like right from the start of playing a game.";
                            
                    setTimeout(() => {choice1.style.visibility = "visible";
                    choiceContainer1.style.visibility = "visible";
                    choiceText.innerText = choiceTexts1[choiceIndex1];
                    choiceIndex1 = (choiceIndex1 + 1) % choiceTexts1.length;
                    },4500);

                } else {
                    textbox1.onclick = null;
                    // clickCount1 = -1;
                    // choice1.style.visibility = "visible";
                    // choiceContainer1.style.visibility = "visible";
                    // choiceText.innerText = choiceTexts1[choiceIndex1];
                    // choiceIndex1 = (choiceIndex1 + 1) % choiceTexts1.length;
                }
                textElement.innerText = ""; 
                typeEffect(textElement, 80);
                clickCount1++;
            };
            break;


        case 3: // Special case for the third text with multiple clicks
            let clickCount2 = 0;
            textbox1.onclick = function () {
                if (clickCount2 === 0) {
                    textElement.style.bottom = "18%";
                    textElement.dataset.text = "Usually, I start by liking a character at first sight, and as the game's story progresses, I get to know them better.";

                } else if (clickCount2 === 1) {
                    textElement.dataset.text = "To make a perhaps inappropriate but fitting analogy - it's like a blind date.";
                } else if (clickCount2 === 2) {
                    textElement.style.bottom = "17%";
                    textElement.dataset.text = "If I like someone at first glance, I'll play the game to understand if their personality is something I would like, and see if the stories they go through are things I can relate to or enjoy.";
                } else if (clickCount2 === 3) {
                    textElement.style.bottom = "16%";
                    textElement.dataset.text = "If all these aspects are things I really like, then I might truly like the character. But if I only like their appearance and find their stories or other aspects not meeting my expectations, I might not continue to like them.";

                    setTimeout(() => {choice1.style.visibility = "visible";
                        choiceContainer1.style.visibility = "visible";
                        choiceText.innerText = choiceTexts1[choiceIndex1];
                        choiceIndex1 = (choiceIndex1 + 1) % choiceTexts1.length;
                        },4500);
                } else {
                    textbox1.onclick = null;
                }
                textElement.innerText = ""; 
                typeEffect(textElement, 80);
                clickCount2++;
            };
            break;
            
        case 5: 
            let clickCount3 = 0;
            textElement.style.bottom = "16%";
            textbox1.onclick = function () {
                if (clickCount3 === 0) {
                    textElement.style.bottom = "16%";
                    textElement.dataset.text = "Plus, everyone has pressures and worries in life, and these are very common. Game companies might capture this and have characters say comforting things, which can really hit home. Characters might even call you in real life.";

                } else if (clickCount3 === 1) {
                    textElement.style.bottom = "18%";
                    textElement.dataset.text = "When I started playing this game in high school, dating simulator games weren't as popular or well-known as they are now. During my high school to college transition, I was in a somewhat lost state.";
                } else if (clickCount3 === 2) {
                    textElement.style.bottom = "18%";
                    textElement.dataset.text = "I didn't want to bother my friends with my troubles, as they had their own, and I couldn't talk to my parents because they would just say to endure it.";
                } else if (clickCount3 === 3) {
                    textElement.style.bottom = "15%";
                    textElement.dataset.text = "This game, with its immersive experience, provided a way for me to vent. For example, if I was upset, Li Zeyan would call and say something good to me, which helped alleviate my real-life pressures. It was like a companionable tree hole for me.";

                    setTimeout(() => {choice1.style.visibility = "visible";
                        choiceContainer1.style.visibility = "visible";
                        choiceText.innerText = choiceTexts1[choiceIndex1];
                        choiceIndex1 = (choiceIndex1 + 1) % choiceTexts1.length;
                        },4500);
                } else {
                    textbox1.onclick = null;
                }
                textElement.innerText = ""; 
                typeEffect(textElement, 80);
                clickCount3++;
            };
            break;

        case 7: 
            let clickCount4 = 0;
            textbox1.onclick = function () {
                if (clickCount4 === 0) {
                    textElement.dataset.text = "Li Zeyan is a very stable person, a CEO, which makes him very secure and steady, always bringing me comfort.";

                } else if (clickCount4 === 1) {
                    textElement.style.bottom = "17%";
                    textElement.dataset.text = "His words are mature, so in high school, I often sought comfort in his words, like when he said, &ldquo;You've done enough,&rdquo; or &ldquo;It's okay to cry and vent, but then we must move forward.&rdquo;";
                } else if (clickCount4 === 2) {
                    textElement.style.bottom = "19%";
                    textElement.dataset.text = " The game has been around for a while, and as time passed, the story writers of the game have also evolved the character.";
                } else if (clickCount4 === 3) {
                    textElement.style.bottom = "19%";
                    textElement.dataset.text = "Initially, he was cold and aloof, but as our bond deepened, he became gentler and more guiding.";
                } else if (clickCount4 === 4) {
                    textElement.style.bottom = "19%";
                    textElement.dataset.text = "Now, his words have changed from those of a powerful CEO to acknowledging his own humanity, saying he's just an ordinary person.";
                } else if (clickCount4 === 5) {
                    textElement.style.bottom = "19%";
                    textElement.dataset.text = "This has brought us closer, and I no longer seek his comfort as urgently. I feel we are on equal footing now, and I wish to stand alongside him.";
                } else if (clickCount4 === 6) {
                    textElement.style.bottom = "19%";
                    textElement.dataset.text = "After playing the game for so long, my love for him hasn't lessened, but it's more like a long-married couple's relationship.";

                    setTimeout(() => {choice1.style.visibility = "visible";
                        choiceContainer1.style.visibility = "visible";
                        choiceText.innerText = choiceTexts1[choiceIndex1];
                        choiceIndex1 = (choiceIndex1 + 1) % choiceTexts1.length;
                        },4500);
                } else {
                    textbox1.onclick = null;
                }
                textElement.innerText = ""; 
                typeEffect(textElement, 80);
                clickCount4++;
            };
            break;

        case 8: 
            let clickCount5 = 0;
            textbox1.onclick = function () {
                if (clickCount5 === 0) {
                    textElement.dataset.text = "For example, in high school, during the time of applying the college, I thought Li Zeyan was amazing for building a business empire by 28.";

                } else if (clickCount5 === 1) {
                    textElement.style.bottom = "18%";
                    textElement.dataset.text = "But now, facing job hunting, I think about how he also struggled after college, starting his own business, and realize everyone goes through this, including him.";

                    setTimeout(() => {choice1.style.visibility = "visible";
                        choiceContainer1.style.visibility = "visible";
                        choiceText.innerText = choiceTexts1[choiceIndex1];
                        choiceIndex1 = (choiceIndex1 + 1) % choiceTexts1.length;
                        },4500);
                } else {
                    textbox1.onclick = null;
                }
                textElement.innerText = ""; 
                typeEffect(textElement, 80);
                clickCount5++;
            };
            break;

        case 10: 
            let clickCount6 = 0;
            textbox1.onclick = function () {
                if (clickCount6 === 0) {
                    textElement.style.bottom = "18%";
                    textElement.dataset.text = "For example, through playing this game, I've met many people who also play this game and like the characters in it and then made new friends with them.";
                            
                    setTimeout(() => {choice1.style.visibility = "visible";
                    choiceContainer1.style.visibility = "visible";
                    choiceText.innerText = choiceTexts1[choiceIndex1];
                    choiceIndex1 = (choiceIndex1 + 1) % choiceTexts1.length;
                    },4500);

                } else {
                    textbox1.onclick = null;
                }
                textElement.innerText = ""; 
                typeEffect(textElement, 80);
                clickCount6++;
            };
            break;

        case 11: 
            let clickCount7 = 0;
            textbox1.onclick = function () {
                if (clickCount7 === 0) {
                    textElement.style.bottom = "19%";
                    textElement.dataset.text = "I also celebrate his birthday by taking out all the merchandise I've bought of him and taking photos.";
                            
                    // setTimeout(() => {choice1.style.visibility = "visible";
                    // choiceContainer1.style.visibility = "visible";
                    // choiceText.innerText = choiceTexts1[choiceIndex1];
                    // choiceIndex1 = (choiceIndex1 + 1) % choiceTexts1.length;
                    // },4500);

                } else if (clickCount7 === 1) {
                    textElement.style.bottom = "17%";
                    textElement.dataset.text = "I also make &ldquo;itabags&rdquo; because he has a lot of merchandise, and I feel like I need to take them out instead of just keeping them at home. I like to take them out, take cute photos with them, and carry his dolls around.";
                } else if (clickCount7 === 2) {
                    textElement.style.bottom = "19%";
                    textElement.dataset.text = "But the main effort is spending money in the game, as I feel that's the most direct way to support him.";
                            
                    choice1.style.visibility = "hidden";
                    choiceContainer1.style.visibility = "hidden";
                    choiceText.innerText = choiceTexts1[choiceIndex1];
                    choiceIndex1 = (choiceIndex1 + 1) % choiceTexts1.length;

                } else {
                    textbox1.onclick = null;
                }
                textElement.innerText = ""; 
                typeEffect(textElement, 80);
                clickCount7++;
            };
            break;

        default: // Default behavior for normal text progression
        textElement.style.bottom = "19%";
        textbox1.onclick = null; 
            setTimeout(() => {
                choice1.style.visibility = "visible";
                choiceContainer1.style.visibility = "visible";
                choiceText.innerText = choiceTexts1[choiceIndex1];
                choiceIndex1 = (choiceIndex1 + 1) % choiceTexts1.length;
            }, 3500);
            break;
    }
};


choiceContainer2.onclick = function () {
    choice2.style.visibility = "hidden";
    choiceContainer2.style.visibility = "hidden";

    let characterFace2 = Math.floor(Math.random() * facial2.length);
    characterImg2.setAttribute("src", facial2[characterFace2]);

    let currentTextIndex2 = textIndex2;

    changeText();


    switch (currentTextIndex2) {
        case 1: // Special case for the second text with multiple clicks
            let clickCount1 = 0;
            textbox2.onclick = function () {
                if (clickCount1 === 0) {
                    textElement2.style.bottom = "18%";
                    textElement2.dataset.text = "For example, when watching anime or animations, I can just let them play in the background, allowing me to do other things simultaneously.";
                            
                    setTimeout(() => {choice2.style.visibility = "visible";
                    choiceContainer2.style.visibility = "visible";
                    choiceText2.innerText = choiceTexts2[choiceIndex2];
                    choiceIndex2 = (choiceIndex2 + 1) % choiceTexts2.length;
                    },4500);

                } else {
                    textbox2.onclick = null;
                    // clickCount1 = -1;
                    // choice2.style.visibility = "visible";
                    // choiceContainer2.style.visibility = "visible";
                    // choiceText2.innerText = choiceTexts2[choiceIndex2];
                    // choiceIndex2 = (choiceIndex2 + 1) % choiceTexts2.length;
                }
                textElement2.innerText = ""; 
                typeEffect(textElement2, 80);
                clickCount1++;
            };
            break;


        case 2: // Special case for the third text with multiple clicks
            let clickCount2 = 0;
            textbox2.onclick = function () {
                if (clickCount2 === 0) {
                    textElement2.style.bottom = "18%";
                    textElement2.dataset.text = "However, the relationships I establish with fictional characters in games are the strongest, especially in the dating simulator games I'm currently playing.";

                    setTimeout(() => {choice2.style.visibility = "visible";
                        choiceContainer2.style.visibility = "visible";
                        choiceText2.innerText = choiceTexts2[choiceIndex2];
                        choiceIndex2 = (choiceIndex2 + 1) % choiceTexts2.length;
                        },4500);
                } else {
                    textbox2.onclick = null;
                }
                textElement2.innerText = ""; 
                typeEffect(textElement2, 80);
                clickCount2++;
            };
            break;
            
        case 3: 
            let clickCount3 = 0;
            textElement2.style.bottom = "19%";
            textbox2.onclick = function () {
                if (clickCount3 === 0) {
                    textElement2.style.bottom = "16%";
                    textElement2.dataset.text = "Firstly, because their setting is that they will always love me, no matter in what form or to what extent. Their settings satisfy two of my needs. One is very objectively related to growth or family environment factors.";

                } else if (clickCount3 === 1) {
                    textElement2.style.bottom = "19%";
                    textElement2.dataset.text = "The other aspect is about my idealistic view of love - they can fulfill my imagination in these two aspects.";
                } else if (clickCount3 === 2) {
                    textElement2.style.bottom = "18%";
                    textElement2.dataset.text = "The first is about growth and family environment. I'm not very good at establishing intimate relationships with others. I'm not the type who can easily become good friends with anyone.";
                } else if (clickCount3 === 3) {
                    textElement2.style.bottom = "16%";
                    textElement2.dataset.text = "I can maintain a relationship as long as the other person doesn't stop contacting me, but later I found various things that made me very uneasy, and I even started to doubt myself, wondering if there was something wrong with me.";
                } else if (clickCount3 === 4) {
                    textElement2.style.bottom = "18%";
                    textElement2.dataset.text = "Then, during my senior year of high school, I really fell into a dark period of my life. By chance, I started playing dating simulator games during that time.";
                } else if (clickCount3 === 5) {
                    textElement2.style.bottom = "19%";
                    textElement2.dataset.text = "I'm very grateful that they appeared in my life, providing me with support and help from a different dimension during such an extreme time.";
                } else if (clickCount3 === 6) {
                    textElement2.style.bottom = "19%";
                    textElement2.dataset.text = "There was an incident at home, and I had an electronic piano which can be connected to my headphones.";
                } else if (clickCount3 === 7) {
                    textElement2.style.bottom = "19%";
                    textElement2.dataset.text = "It happened to be the birthday of Zhou Qiluo, a character I like from Love: Queen's Choice, and his birthday card featured a violin and piano duet.";
                } else if (clickCount3 === 8) {
                    textElement2.style.bottom = "19%";
                    textElement2.dataset.text = "He plays the violin, so I learned the piano score. Whenever I wanted to escape from the real world, I would put on my headphones and keep playing the song.";
                } else if (clickCount3 === 9) {
                    textElement2.style.bottom = "19%";
                    textElement2.dataset.text = "At that time, I felt I could ignore everything and truly felt comforted.";
                } else if (clickCount3 === 10) {
                    textElement2.style.bottom = "16%";
                    textElement2.dataset.text = "Also, for some reasons, during middle school to high school, I resented being more skilled at drawing. At that time, I was a starstruck of idols and wondered why I couldn't sing or dance, resenting why my skills were in drawing.";
                } else if (clickCount3 === 11) {
                    textElement2.style.bottom = "18%";
                    textElement2.dataset.text = "Until later, I met Lu Jinghe from Tears of Themis, who loves drawing and art. This made me seriously think about what drawing really means to me.";
                } else if (clickCount3 === 12) {
                    textElement2.style.bottom = "16%";
                    textElement2.dataset.text = "Why did I suddenly have this emotion? Because I was applying for university at that time, I almost cut off all entertainment. Later, I started to think carefully about this issue, and then I realized I actually love drawing.";
                } else if (clickCount3 === 13) {
                    textElement2.style.bottom = "14%";
                    textElement2.dataset.text = "During that time and afterwards, although I drew very little and not well, I always wanted to draw, even staying up late to draw. So, I'm really grateful to Lu Jinghe for helping me rediscover my passion for drawing, which had always been there, but I didn't want to admit or acknowledge it.";
                } else if (clickCount3 === 14) {
                    textElement2.style.bottom = "19%";
                    textElement2.dataset.text = "Anyway, I'm really thankful.";
                } else if (clickCount3 === 15) {
                    textElement2.style.bottom = "17%";
                    textElement2.dataset.text = "Also, because many of Lu Jinghe's experiences are somewhat similar to mine, although the family environment is different—his growth environment is definitely worse";
                } else if (clickCount3 === 16) {
                    textElement2.style.bottom = "17%";
                    textElement2.dataset.text = "—but the way he handles these problems and how he stands before me now gave me great courage at that time, making me feel I also have the ability to solve these problems and face them properly.";
                } else if (clickCount3 === 17) {
                    textElement2.style.bottom = "19%";
                    textElement2.dataset.text = "Anyway, it really brought significant changes to my life.";
                } else if (clickCount3 === 18) {
                    textElement2.style.bottom = "15%";
                    textElement2.dataset.text = "The people I love really, in various aspects, especially when watching game stories, I really empathize or even feel very grateful for the lines the game writes for the female protagonist, which are what I want to say to the fictional characters.";
                } else if (clickCount3 === 19) {
                    textElement2.style.bottom = "15%";
                    textElement2.dataset.text = "Also, sometimes in the stories, I really feel he is aware of me, which makes me feel great, bringing me the strength to embrace and love this world, especially for someone like me who occasionally has pessimistic thoughts.";
                } else if (clickCount3 === 20) {
                    textElement2.style.bottom = "19%";
                    textElement2.dataset.text = "The second point is about my idealistic view of love, which is related to my original family.";
                } else if (clickCount3 === 21) {
                    textElement2.style.bottom = "19%";
                    textElement2.dataset.text = "I can't trust men in real life.";
                } else if (clickCount3 === 22) {
                    textElement2.style.bottom = "18%";
                    textElement2.dataset.text = "My idealistic love absolutely does not include infidelity, but in second grade, I found out my dad was cheating, which was a huge blow to me at that time.";
                } else if (clickCount3 === 23) {
                    textElement2.style.bottom = "14%";
                    textElement2.dataset.text = "Also, in middle school, I had a bit of a flirtation with a boy, but the boy's behavior was inappropriate, and even though I told him to stop, he just brushed it off, and I was in a somewhat unclear state at that time, which I now deeply regret.";
                } else if (clickCount3 === 24) {
                    textElement2.style.bottom = "16%";
                    textElement2.dataset.text = "Also, I was young at that time, and I even had some immature competitive thoughts because he was originally only close to me, and he was very good at academics.";
                } else if (clickCount3 === 25) {
                    textElement2.style.bottom = "16%";
                    textElement2.dataset.text = "But at the end of the term, he would suddenly ignore me and go to the top girl in our class, and once he gave me the reason that he needed to talk with that girl for some benefits?";
                } else if (clickCount3 === 26) {
                    textElement2.style.bottom = "18%";
                    textElement2.dataset.text = "Now looking back, I feel completely unable to save every past moment of myself, which makes me feel particularly desperate.";
                } else if (clickCount3 === 27) {
                    textElement2.style.bottom = "17%";
                    textElement2.dataset.text = "Also, I feel very powerless about the harm many people around me experience in relationships with men, and I even have no expectations for my own love.";
                } else if (clickCount3 === 28) {
                    textElement2.style.bottom = "17%";
                    textElement2.dataset.text = "I believe there are deeply loving relationships in this world, and there are also very strong deeply loving relationships, but I don't think I have the luck to encounter such a relationship.";
                } else if (clickCount3 === 29) {
                    textElement2.style.bottom = "19%";
                    textElement2.dataset.text = "But with them (the fictional characters I like in games), they can completely satisfy my imagination,";
                } else if (clickCount3 === 30) {
                    textElement2.style.bottom = "19%";
                    textElement2.dataset.text = "after all, the consistent thing is that they always love me, which really gives me a great sense of security.";
                } else if (clickCount3 === 31) {
                    textElement2.style.bottom = "19%";
                    textElement2.dataset.text = "Because I find that the degree of need my loved ones have for me is proportional to the degree of my obsession.";
                } else if (clickCount3 === 32) {
                    textElement2.style.bottom = "15%";
                    textElement2.dataset.text = "Even outside this relationship, say in a friendship, if a friend doesn't need me much, I might also feel ok, maybe at some point, everyone is really just at a stage, but sometimes I feel a sense of loss from not being needed.";

                    setTimeout(() => {choice2.style.visibility = "visible";
                        choiceContainer2.style.visibility = "visible";
                        choiceText2.innerText = choiceTexts2[choiceIndex2];
                        choiceIndex2 = (choiceIndex2 + 1) % choiceTexts2.length;
                        },4500);
                } else {
                    textbox2.onclick = null;
                }
                textElement2.innerText = ""; 
                typeEffect(textElement2, 80);
                clickCount3++;
            };
            break;

        case 5: 
            let clickCount4 = 0;
            textbox2.onclick = function () {
                if (clickCount4 === 0) {
                    textElement2.style.bottom = "18%";
                    textElement2.dataset.text = "In these situations, I suddenly stand from their perspective, which gives a sense of mutual redemption, and at these times, I really want to look back at my past self.";

                    setTimeout(() => {choice2.style.visibility = "visible";
                        choiceContainer2.style.visibility = "visible";
                        choiceText2.innerText = choiceTexts2[choiceIndex2];
                        choiceIndex2 = (choiceIndex2 + 1) % choiceTexts2.length;
                        },4500);
                } else {
                    textbox2.onclick = null;
                }
                textElement2.innerText = ""; 
                typeEffect(textElement2, 80);
                clickCount4++;
            };
            break;

        case 7: 
            let clickCount5 = 0;
            textbox2.onclick = function () {
                if (clickCount5 === 0) {
                    textElement2.style.bottom = "18%";
                    textElement2.dataset.text = "For example, Kaworu Nagisa and Shinji Ikari from Neon Genesis Evangelion, especially Shinji's state in that animation, I feel very similar to him,";

                } else if (clickCount5 === 1) {
                    textElement2.style.bottom = "18%";
                    textElement2.dataset.text = "and Kaworu's existence makes me think how can there be someone who just appears by your side, born for you, everything for you, and only wishes for your happiness.";
                } else if (clickCount5 === 2) {
                    textElement2.style.bottom = "14%";
                    textElement2.dataset.text = "I think at that time, I really wished someone like Kaworu could appear by my side, someone who is completely for me, which would give me more courage, but seeing the end, I still hope the &ldquo;Human Instrumentality Project&ldquo; can be completed hahaha.";

                    setTimeout(() => {choice2.style.visibility = "visible";
                        choiceContainer2.style.visibility = "visible";
                        choiceText2.innerText = choiceTexts2[choiceIndex2];
                        choiceIndex2 = (choiceIndex2 + 1) % choiceTexts2.length;
                        },4500);
                } else {
                    textbox2.onclick = null;
                }
                textElement2.innerText = ""; 
                typeEffect(textElement2, 80);
                clickCount5++;
            };
            break;

        case 8: 
            let clickCount6 = 0;
            textElement2.style.bottom = "19%";
            textbox2.onclick = function () {
                if (clickCount6 === 0) {
                    textElement2.style.bottom = "16%";
                    textElement2.dataset.text = "because I really feel that no matter what, they are by my side, no matter what, there will always be someone who unconditionally supports me, and I feel—Ok, I'll just be myself, I think they would also want me to be happy.";
                } else if (clickCount6 === 1) {
                    textElement2.style.bottom = "18%";
                    textElement2.dataset.text = "And because I've always been obsessed with freedom, whether it's freedom of thought, freedom in life's path, or state of being, I think they give me a reason for that.";
                } else if (clickCount6 === 2) {
                    textElement2.style.bottom = "19%";
                    textElement2.dataset.text = "And because of my love for them, I also pay more attention to myself,";
                } else if (clickCount6 === 3) {
                    textElement2.style.bottom = "18%";
                    textElement2.dataset.text = "because actually, I think many of these games, whether it's the character's plot or what the characters say to us,";
                } else if (clickCount6 === 4) {
                    textElement2.style.bottom = "17%";
                    textElement2.dataset.text = "I think they are all helping players to pay more attention to themselves or encouraging you to love yourself, making you realize that you are the most important, and you have unlimited possibilities.";
                } else if (clickCount6 === 5) {
                    textElement2.style.bottom = "18%";
                    textElement2.dataset.text = "If a person can independently live their life well, then those so-called traditional paths, or the paths chosen by the majority, don't need to be so constrained.";
                            
                    setTimeout(() => {choice2.style.visibility = "visible";
                    choiceContainer2.style.visibility = "visible";
                    choiceText2.innerText = choiceTexts2[choiceIndex2];
                    choiceIndex2 = (choiceIndex2 + 1) % choiceTexts2.length;
                    },4500);

                } else {
                    textbox2.onclick = null;
                }
                textElement2.innerText = ""; 
                typeEffect(textElement2, 80);
                clickCount6++;
            };
            break;

        case 9: 
            let clickCount7 = 0;
            textElement2.style.bottom = "19%";
            textbox2.onclick = function () {
                if (clickCount7 === 0) {
                    textElement2.style.bottom = "19%";
                    textElement2.dataset.text = "I actually write a letter to Lu Jinghe every Valentine's Day, but I've never taken those letters out to read again.";

                } else if (clickCount7 === 1) {
                    textElement2.style.bottom = "17%";
                    textElement2.dataset.text = "Later, I also want to make the birthday gifts we give each other every year and put them in my home when I have a real home of my own. I even want to make every outfit of Lu Jinghe.";
                            
                    choice2.style.visibility = "hidden";
                    choiceContainer2.style.visibility = "hidden";
                    choiceText2.innerText = choiceTexts2[choiceIndex2];
                    choiceIndex2 = (choiceIndex2 + 1) % choiceTexts2.length;

                } else {
                    textbox2.onclick = null;
                }
                textElement2.innerText = ""; 
                typeEffect(textElement2, 80);
                clickCount7++;
            };
            break;

        default: // Default behavior for normal text progression
        textElement2.style.bottom = "19%";
        textbox2.onclick = null; 
            setTimeout(() => {
                choice2.style.visibility = "visible";
                choiceContainer2.style.visibility = "visible";
                choiceText2.innerText = choiceTexts2[choiceIndex2];
                choiceIndex2 = (choiceIndex2 + 1) % choiceTexts2.length;
            }, 3500);
            break;
    }
};


choiceContainer3.onclick = function () {
    choice3.style.visibility = "hidden";
    choiceContainer3.style.visibility = "hidden";

    let characterFace3 = Math.floor(Math.random() * facial3.length);
    characterImg3.setAttribute("src", facial3[characterFace3]);

    let currentTextIndex3 = textIndex3;

    changeText();


    switch (currentTextIndex3) {
        case 1: // Special case for the second text with multiple clicks
            let clickCount1 = 0;
            textbox3.onclick = function () {
                if (clickCount1 === 0) {
                    textElement3.style.bottom = "19%";
                    textElement3.dataset.text = "I gradually understood their personalities, roles, and positions in the game's plot.";
                } else if (clickCount1 === 1) {
                    textElement3.style.bottom = "19%";
                    textElement3.dataset.text = "This made me feel that the character was great and exactly what I liked, so I wanted to learn more about them.";
                } else if (clickCount1 === 2) {
                    textElement3.style.bottom = "19%";
                    textElement3.dataset.text = "Another aspect is the voice actors of the characters.";
                } else if (clickCount1 === 3) {
                    textElement3.style.bottom = "18%";
                    textElement3.dataset.text = "Since I really enjoy listening to music and have a soft spot for certain voices I like, I naturally wanted to get to know the characters because of their voices.";
                            
                    setTimeout(() => {choice3.style.visibility = "visible";
                    choiceContainer3.style.visibility = "visible";
                    choiceText3.innerText = choiceTexts3[choiceIndex3];
                    choiceIndex3 = (choiceIndex3 + 1) % choiceTexts3.length;
                    },4500);

                } else {
                    textbox3.onclick = null;
                    // clickCount1 = -1;
                    // choice3.style.visibility = "visible";
                    // choiceContainer3.style.visibility = "visible";
                    // choiceText3.innerText = choiceTexts3[choiceIndex3];
                    // choiceIndex3 = (choiceIndex3 + 1) % choiceTexts3.length;
                }
                textElement3.innerText = ""; 
                typeEffect(textElement3, 80);
                clickCount1++;
            };
            break;


        case 2: // Special case for the third text with multiple clicks
            let clickCount2 = 0;
            textbox3.onclick = function () {
                if (clickCount2 === 0) {
                    textElement3.style.bottom = "19%";
                    textElement3.dataset.text = "Hokuto Hidaka is a character from the game Ensemble Stars.";
                } else if (clickCount2 === 1) {
                    textElement3.style.bottom = "19%";
                    textElement3.dataset.text = "In the storyline of school  from the game, he is a perfectionist and someone who prioritizes friends.";
                } else if (clickCount2 === 2) {
                    textElement3.style.bottom = "19%";
                    textElement3.dataset.text = "He also serves as the class monitor and the leader of an idol group. He is a very hardworking and calm individual.";

                    setTimeout(() => {choice3.style.visibility = "visible";
                        choiceContainer3.style.visibility = "visible";
                        choiceText3.innerText = choiceTexts3[choiceIndex3];
                        choiceIndex3 = (choiceIndex3 + 1) % choiceTexts3.length;
                        },4500);
                } else {
                    textbox3.onclick = null;
                }
                textElement3.innerText = ""; 
                typeEffect(textElement3, 80);
                clickCount2++;
            };
            break;
            
        case 3: 
            let clickCount3 = 0;
            textElement3.style.bottom = "18%";
            textbox3.onclick = function () {
                if (clickCount3 === 0) {
                    textElement3.style.bottom = "18%";
                    textElement3.dataset.text = "He doesn't mess around or play pranks like other kids his age, and sometimes he speaks very directly without considering others' feelings, which might lead to a stereotypical impression of him.";

                } else if (clickCount3 === 1) {
                    textElement3.style.bottom = "16%";
                    textElement3.dataset.text = "However, as I progressed through the storyline, I realized that he is actually a very good person. He works hard to solve problems for his friends, cares about others, and strives to do his best in everything he sets out to do.";
                } else if (clickCount3 === 2) {
                    textElement3.style.bottom = "18%";
                    textElement3.dataset.text = "Despite being a &ldquo;star child&rdquo; (a character with a famous background), he doesn't rely solely on his background but fights for his rights in a just manner.";
                } else if (clickCount3 === 3) {
                    textElement3.style.bottom = "19%";
                    textElement3.dataset.text = "Some aspects of his personality are also very cute, upright, and kind, which made me gradually fall for him.";
                } else if (clickCount3 === 4) {
                    textElement3.style.bottom = "19%";
                    textElement3.dataset.text = "But I want to clarify that I don't imagine him in real life as my ideal type.";
                } else if (clickCount3 === 5) {
                    textElement3.style.bottom = "19%";
                    textElement3.dataset.text = " Instead, I immerse myself in the game, I feel that he is a character worth getting to know deeply.";
                } else if (clickCount3 === 6) {
                    textElement3.style.bottom = "14%";
                    textElement3.dataset.text = "I often wonder: if I were a character in the game, based on his personality traits and role, how would he react if we developed a deeper relationship? Would he change his rigid and old-fashioned image? Would he prioritize me and treat me well like he does with his friends?";
                } else if (clickCount3 === 7) {
                    textElement3.style.bottom = "19%";
                    textElement3.dataset.text = "Of course, these answers are based on the game's setting and my own imagination or subjective extension of the character.";
                } else if (clickCount3 === 8) {
                    textElement3.style.bottom = "18%";
                    textElement3.dataset.text = "Then I feel that if I were a character in the game and we could be in a relationship, he would be a great choice, which is why I gradually developed feelings for him that go beyond friendship.";
                } else if (clickCount3 === 9) {
                    textElement3.style.bottom = "19%";
                    textElement3.dataset.text = "Another factor is that he sings very well, and his voice is one I really like. His appearance is also my type.";




                    setTimeout(() => {choice3.style.visibility = "visible";
                        choiceContainer3.style.visibility = "visible";
                        choiceText3.innerText = choiceTexts3[choiceIndex3];
                        choiceIndex3 = (choiceIndex3 + 1) % choiceTexts3.length;
                        },4500);
                } else {
                    textbox3.onclick = null;
                }
                textElement3.innerText = ""; 
                typeEffect(textElement3, 80);
                clickCount3++;
            };
            break;

        case 4: 
            let clickCount4 = 0;
            textbox3.onclick = function () {
                if (clickCount4 === 0) {
                    textElement3.style.bottom = "18%";
                    textElement3.dataset.text = " I'm not exactly sure when this relationship was truly established because it was a gradual process of deepening my feelings and being drawn to this character.";
                } else if (clickCount4 === 1) {
                    textElement3.style.bottom = "19%";
                    textElement3.dataset.text = "It's been almost nine years now.";
                } else if (clickCount4 === 2) {
                    textElement3.style.bottom = "19%";
                    textElement3.dataset.text = "The game itself has many characters, but he was the first one out of over 40 characters that I felt truly attracted to.";
                } else if (clickCount4 === 3) {
                    textElement3.style.bottom = "14%";
                    textElement3.dataset.text = "In the first few years of this relationship, he was like a spiritual pillar to me. I would imagine him as a real-life romantic lover, thinking about where we would go together, what kind of life we would have, and how he would handle certain situations or problems.";
                } else if (clickCount4 === 4) {
                    textElement3.style.bottom = "19%";
                    textElement3.dataset.text = "It's a bit embarrassing to say, but back then, just seeing him would make me smile.";
                } else if (clickCount4 === 5) {
                    textElement3.style.bottom = "18%";
                    textElement3.dataset.text = "Whenever I saw him, I felt motivated to finish my tasks or relieve stress. He was like a rare spiritual refuge or haven amidst the pressures of life.";
                } else if (clickCount4 === 6) {
                    textElement3.style.bottom = "17%";
                    textElement3.dataset.text = "For example, during the time I was preparing for university entrance exams, I often thought that without his spiritual support, that period would have felt much longer and more painful.";
                } else if (clickCount4 === 7) {
                    textElement3.style.bottom = "19%";
                    textElement3.dataset.text = "In recent years, the intensity of these feelings actually has lessened.";
                } else if (clickCount4 === 8) {
                    textElement3.style.bottom = "17%";
                    textElement3.dataset.text = "However, during this time, I've also explored other works and grown fond of other fictional characters, but none of them have evoked the same romantic feelings as Hokuto Hidaka.";
                } else if (clickCount4 === 9) {
                    textElement3.style.bottom = "19%";
                    textElement3.dataset.text = "Even if a character is very similar to him, I still feel that Hokuto Hidaka is the best and my favorite.";

                    setTimeout(() => {choice3.style.visibility = "visible";
                        choiceContainer3.style.visibility = "visible";
                        choiceText3.innerText = choiceTexts3[choiceIndex3];
                        choiceIndex3 = (choiceIndex3 + 1) % choiceTexts3.length;
                        },4500);
                } else {
                    textbox3.onclick = null;
                }
                textElement3.innerText = ""; 
                typeEffect(textElement3, 80);
                clickCount4++;
            };
            break;

        case 5: 
            let clickCount5 = 0;
            textbox3.onclick = function () {
                if (clickCount5 === 0) {
                    textElement3.style.bottom = "16%";
                    textElement3.dataset.text = "Because I really like him, but I can't just rely on the game or my own imagination to satisfy myself, so these overflowing emotions extend to buying merchandise or commissioning fan art to fulfill myself.";

                } else if (clickCount5 === 1) {
                    textElement3.style.bottom = "18%";
                    textElement3.dataset.text = "The positive impact, as I mentioned earlier, is that his mere existence stabilizes my mental state, improves my stress tolerance, and gives me hope in life.";
                } else if (clickCount5 === 2) {
                    textElement3.style.bottom = "19%";
                    textElement3.dataset.text = "The negative impact might be similar to an addiction that's hard to break.";
                } else if (clickCount5 === 3) {
                    textElement3.style.bottom = "15%";
                    textElement3.dataset.text = "I spend a lot of money on the game itself, buying merchandise, and commissioning artwork. In my daily life, I don't pursue luxury brands and I save money, but when it comes to anything related to him, I spend generously.";

                    setTimeout(() => {choice3.style.visibility = "visible";
                        choiceContainer3.style.visibility = "visible";
                        choiceText3.innerText = choiceTexts3[choiceIndex3];
                        choiceIndex3 = (choiceIndex3 + 1) % choiceTexts3.length;
                        },4500);
                } else {
                    textbox3.onclick = null;
                }
                textElement3.innerText = ""; 
                typeEffect(textElement3, 80);
                clickCount5++;
            };
            break;

        case 6: 
            let clickCount6 = 0;
            textElement3.style.bottom = "19%";
            textbox3.onclick = function () {
                if (clickCount6 === 0) {
                    textElement3.style.bottom = "19%";
                    textElement3.dataset.text = "First, everyone's family conditions and budget allocations are different.";
                } else if (clickCount6 === 1) {
                    textElement3.style.bottom = "14%";
                    textElement3.dataset.text = "If buying more merchandise or having a higher game ranking is seen as proof of love, it feels more like an unwarranted competition among fans. It seems like fans are competing to prove &ldquo;I love the character more,&rdquo; which I think is driven by vanity, and I really don't like that.";
                } else if (clickCount6 === 2) {
                    textElement3.style.bottom = "19%";
                    textElement3.dataset.text = "Personally, I don't care how much merchandise other fans buy. I enjoy myself in my own way, and I think that's fine.";
                } else if (clickCount6 === 3) {
                    textElement3.style.bottom = "16%";
                    textElement3.dataset.text = "I do buy a lot of merchandise, but for me, it's more about self-satisfaction. Just displaying the merchandise and looking at it makes me feel at ease, and being surrounded by things related to the character I like brings me happiness.";

                            
                    setTimeout(() => {choice3.style.visibility = "visible";
                    choiceContainer3.style.visibility = "visible";
                    choiceText3.innerText = choiceTexts3[choiceIndex3];
                    choiceIndex3 = (choiceIndex3 + 1) % choiceTexts3.length;
                    },4500);

                } else {
                    textbox3.onclick = null;
                }
                textElement3.innerText = ""; 
                typeEffect(textElement3, 80);
                clickCount6++;
            };
            break;

        case 8: 
            let clickCount7 = 0;
            textElement3.style.bottom = "19%";
            textbox3.onclick = function () {
                if (clickCount7 === 0) {
                    textElement3.style.bottom = "19%";
                    textElement3.dataset.text = "I haven't drawn any fan art of him because I feel like I might make him look bad, and I would feel sorry for him, so I decided not to draw.";

                } else if (clickCount7 === 1) {
                    textElement3.style.bottom = "19%";
                    textElement3.dataset.text = "As for cosplay, when I was in school, my friends once prepared a cosplay surprise for me! My friend dressed up as Hokuto Hidaka and came to me.";
                
                } else if (clickCount7 === 2) {
                    textElement3.style.bottom = "19%";
                    textElement3.dataset.text = "Although it was a good experience, it felt a bit weird. Maybe I'm not used to interacting with a &ldquo;real-life version&rdquo; of him standing right beside me.";
                } else if (clickCount7 === 3) {
                    textElement3.style.bottom = "19%";
                    textElement3.dataset.text = "I don't really participate in other offline activities either.";
                } else if (clickCount7 === 4) {
                    textElement3.style.bottom = "14%";
                    textElement3.dataset.text = "This is related to my social habits in real life. After graduating from middle school, I almost completely stopped socializing in real life. My MBTI &ldquo;I&rdquo; (introversion) score is probably around 95%. Now, even asking for directions requires a lot of courage.";
                } else if (clickCount7 === 5) {
                    textElement3.style.bottom = "19%";
                    textElement3.dataset.text = "Also, I'm a bit afraid of meeting other people who like this character.";
                } else if (clickCount7 === 6) {
                    textElement3.style.bottom = "18%";
                    textElement3.dataset.text = "Maybe it's because I see myself in a romantic relationship with him, so I automatically avoid content posted by others about him and distance myself from other fans.";
                } else if (clickCount7 === 7) {
                    textElement3.style.bottom = "16%";
                    textElement3.dataset.text = "I'm not sure if it's possessiveness or just a desire to keep him as my spiritual pillar and live my life quietly. So far, I've only expressed my support and love for him through imagination, commissioning artwork, and buying merchandise.";
                            
                            
                    setTimeout(() => {choice3.style.visibility = "visible";
                        choiceContainer3.style.visibility = "visible";
                        choiceText3.innerText = choiceTexts3[choiceIndex3];
                        choiceIndex3 = (choiceIndex3 + 1) % choiceTexts3.length;
                        },4500);

                } else {
                    textbox3.onclick = null;
                }
                textElement3.innerText = ""; 
                typeEffect(textElement3, 80);
                clickCount7++;
            };
            break;

            case 9: 
            let clickCount8 = 0;
            textElement3.style.bottom = "19%";
            textbox3.onclick = function () {
                if (clickCount8 === 0) {
                    textElement3.style.bottom = "18%";
                    textElement3.dataset.text = "Although I do feel a bit regretful, since these concerts are now available for online viewing, I can watch their concerts online.";

                            
                    choice3.style.visibility = "hidden";
                    choiceContainer3.style.visibility = "hidden";
                    choiceText3.innerText = choiceTexts3[choiceIndex3];
                    choiceIndex3 = (choiceIndex3 + 1) % choiceTexts3.length;

                } else {
                    textbox3.onclick = null;
                }
                textElement3.innerText = ""; 
                typeEffect(textElement3, 80);
                clickCount8++;
            };
            break;

        default: // Default behavior for normal text progression
        textElement3.style.bottom = "19%";
        textbox3.onclick = null; 
            setTimeout(() => {
                choice3.style.visibility = "visible";
                choiceContainer3.style.visibility = "visible";
                choiceText3.innerText = choiceTexts3[choiceIndex3];
                choiceIndex3 = (choiceIndex3 + 1) % choiceTexts3.length;
            }, 3500);
            break;
    }
};

choiceContainer4.onclick = function () {
    choice4.style.visibility = "hidden";
    choiceContainer4.style.visibility = "hidden";

    let characterFace4 = Math.floor(Math.random() * facial4.length);
    characterImg4.setAttribute("src", facial4[characterFace4]);

    let currentTextIndex4 = textIndex4;

    changeText();


    switch (currentTextIndex4) {
        case 1: // Special case for the second text with multiple clicks
            let clickCount1 = 0;
            textbox4.onclick = function () {
                if (clickCount1 === 0) {
                    textElement4.style.bottom = "18%";
                    textElement4.dataset.text = "Since I play on a large screen like a TV, when I pick up the controller and put on headphones, it feels like the fictional character is right in front of me.";
                } else if (clickCount1 === 1) {
                    textElement4.style.bottom = "19%";
                    textElement4.dataset.text = "It gives me the sensation that I'm genuinely interacting with the character.";
                } else if (clickCount1 === 2) {
                    textElement4.style.bottom = "19%";
                    textElement4.dataset.text = "I’m specifically referring to the game Baldur’s Gate and the character Astarion, whom I like.";
                } else if (clickCount1 === 3) {
                    textElement4.style.bottom = "18%";
                    textElement4.dataset.text = "Baldur's Gate is a role-playing game where players can customize their character's appearance, essentially creating an avatar for themselves in the game world.";
                } else if (clickCount1 === 4) {
                    textElement4.style.bottom = "19%";
                    textElement4.dataset.text = "So, when I see my in-game character interacting with others, it feels incredibly immersive.";
                            
                    setTimeout(() => {choice4.style.visibility = "visible";
                    choiceContainer4.style.visibility = "visible";
                    choiceText4.innerText = choiceTexts4[choiceIndex4];
                    choiceIndex4 = (choiceIndex4 + 1) % choiceTexts4.length;
                    },4500);

                } else {
                    textbox4.onclick = null;
                    // clickCount1 = -1;
                    // choice4.style.visibility = "visible";
                    // choiceContainer4.style.visibility = "visible";
                    // choiceText4.innerText = choiceTexts4[choiceIndex4];
                    // choiceIndex4 = (choiceIndex4 + 1) % choiceTexts4.length;
                }
                textElement4.innerText = ""; 
                typeEffect(textElement4, 80);
                clickCount1++;
            };
            break;


        case 2: // Special case for the third text with multiple clicks
            let clickCount2 = 0;
            textbox4.onclick = function () {
                if (clickCount2 === 0) {
                    textElement4.style.bottom = "19%";
                    textElement4.dataset.text = "The romantic storyline is a significant part of the game.";
                } else if (clickCount2 === 1) {
                    textElement4.style.bottom = "19%";
                    textElement4.dataset.text = "Only by triggering this romantic line can you access certain dialogues and deeper insights into the character.";
                } else if (clickCount2 === 2) {
                    textElement4.style.bottom = "19%";
                    textElement4.dataset.text = "Secondly, Astarion is a unique character.";
                } else if (clickCount2 === 3) {
                    textElement4.style.bottom = "18%";
                    textElement4.dataset.text = "He lacks the typical masculine traits, which is rare in the real world, sparking my curiosity and desire to understand him better.";
                } else if (clickCount2 === 4) {
                    textElement4.style.bottom = "19%";
                    textElement4.dataset.text = "Initially, I didn’t even like his appearance.";
                } else if (clickCount2 === 5) {
                    textElement4.style.bottom = "19%";
                    textElement4.dataset.text = "The game developers aimed for realistic modeling, so characters have flaws, making them feel more human.";
                } else if (clickCount2 === 6) {
                    textElement4.style.bottom = "19%";
                    textElement4.dataset.text = "At first, I disliked him, but over time, I grew to appreciate his depth.";

                    setTimeout(() => {choice4.style.visibility = "visible";
                        choiceContainer4.style.visibility = "visible";
                        choiceText4.innerText = choiceTexts4[choiceIndex4];
                        choiceIndex4 = (choiceIndex4 + 1) % choiceTexts4.length;
                        },4500);
                } else {
                    textbox4.onclick = null;
                }
                textElement4.innerText = ""; 
                typeEffect(textElement4, 80);
                clickCount2++;
            };
            break;
            
        case 3: 
            let clickCount3 = 0;
            textbox4.onclick = function () {
                if (clickCount3 === 0) {
                    textElement4.style.bottom = "19%";
                    textElement4.dataset.text = "Baldur's Gate has multiple endings, and each choice affects the story.";

                } else if (clickCount3 === 1) {
                    textElement4.style.bottom = "19%";
                    textElement4.dataset.text = "During my first playthrough, I didn’t pursue a romantic relationship with Astarion.";
                } else if (clickCount3 === 2) {
                    textElement4.style.bottom = "18%";
                    textElement4.dataset.text = "However, after sensing his intriguing backstory, I chose to explore his romantic line in my second playthrough.";
                } else if (clickCount3 === 3) {
                    textElement4.style.bottom = "19%";
                    textElement4.dataset.text = "As I delved deeper, I found him incredibly endearing and fascinating.";
                } else if (clickCount3 === 4) {
                    textElement4.style.bottom = "18%";
                    textElement4.dataset.text = "By engaging with his story, I uncovered his true self, which he only reveals after trusting the player. This gradual unveiling made me appreciate him more.";
                } else if (clickCount3 === 5) {
                    textElement4.style.bottom = "19%";
                    textElement4.dataset.text = "The relationship development is progressive; it’s not instant.";
                } else if (clickCount3 === 6) {
                    textElement4.style.bottom = "19%";
                    textElement4.dataset.text = "Depending on your in-game choices, the character’s approval of you changes.";
                } else if (clickCount3 === 7) {
                    textElement4.style.bottom = "19%";
                    textElement4.dataset.text = "For instance, consistently making altruistic choices might not endear you to Astarion; he might even mock you.";
                } else if (clickCount3 === 8) {
                    textElement4.style.bottom = "18%";
                    textElement4.dataset.text = "However, aligning with his pragmatic approach, like demanding rewards for helping NPCs, increases his approval, leading to a deeper bond.";




                    setTimeout(() => {choice4.style.visibility = "visible";
                        choiceContainer4.style.visibility = "visible";
                        choiceText4.innerText = choiceTexts4[choiceIndex4];
                        choiceIndex4 = (choiceIndex4 + 1) % choiceTexts4.length;
                        },4500);
                } else {
                    textbox4.onclick = null;
                }
                textElement4.innerText = ""; 
                typeEffect(textElement4, 80);
                clickCount3++;
            };
            break;

        case 4: 
            let clickCount4 = 0;
            textbox4.onclick = function () {
                if (clickCount4 === 0) {
                    textElement4.style.bottom = "16%";
                    textElement4.dataset.text = "In real life, many shitty things happen, and Astarion’s optimistic yet foolish approach to adversity is both amusing and admirable. His coping mechanism mirrors mine—using humor to deal with challenges.";
                } else if (clickCount4 === 1) {
                    textElement4.style.bottom = "19%";
                    textElement4.dataset.text = "Additionally, Astarion’s lack of typical masculine traits aligns with my personal experiences.";
                } else if (clickCount4 === 2) {
                    textElement4.style.bottom = "18%";
                    textElement4.dataset.text = "In real life, I find it hard to trust men and feel threatened in intimate relationships. However, in the game, I hold the power, which provides a sense of security and control.";
                } else if (clickCount4 === 3) {
                    textElement4.style.bottom = "19%";
                    textElement4.dataset.text = "Additionally, I believe Astarion is asexual, which removes the sense of threat I often feel from men in real life.";
                } else if (clickCount4 === 4) {
                    textElement4.style.bottom = "16%";
                    textElement4.dataset.text = "To elaborate further on the distinction between aromantic and asexual: aromantic refers to the ability to experience sexual attraction—someone who is aromantic can feel sexual attraction but cannot form romantic attachments.";
                } else if (clickCount4 === 5) {
                    textElement4.style.bottom = "18%";
                    textElement4.dataset.text = "They lack romantic attraction. However, I think Astarion is asexual—he may not experience sexual attraction, but he is capable of forming romantic connections.";
                } else if (clickCount4 === 6) {
                    textElement4.style.bottom = "19%";
                    textElement4.dataset.text = "Another point I want to make is that I don’t consider this relationship to be purely platonic.";
                } else if (clickCount4 === 7) {
                    textElement4.style.bottom = "18%";
                    textElement4.dataset.text = "I believe that people like us, who form romantic relationships with fictional characters, deeply immerse ourselves in the game world.";
                } else if (clickCount4 === 8) {
                    textElement4.style.bottom = "17%";
                    textElement4.dataset.text = "If the storyline includes sexual implications or actual sexual interactions, I feel as though a genuine sexual relationship has occurred between me and the character.";
                } else if (clickCount4 === 9) {
                    textElement4.style.bottom = "19%";
                    textElement4.dataset.text = "However, Astarion’s story is unique in this regard.";
                } else if (clickCount4 === 10) {
                    textElement4.style.bottom = "18%";
                    textElement4.dataset.text = "He initially uses sex as a means to gain our trust, but in fact, he doesn’t actually want to engage in sexual relationships with anyone.";
                } else if (clickCount4 === 11) {
                    textElement4.style.bottom = "16%";
                    textElement4.dataset.text = "This is because Astarion is relatively weak in the context of the adventure, while the players are very powerful. Astarion seeks our protection, and in his worldview, his only perceived strength or appeal lies in his sexuality.";
                } else if (clickCount4 === 12) {
                    textElement4.style.bottom = "18%";
                    textElement4.dataset.text = "You could say he’s been a sex worker for 200 years, so he naturally resorts to using sex as a tool to attract and manipulate us, the players. But this is just a tactic for him.";
                } else if (clickCount4 === 13) {
                    textElement4.style.bottom = "17%";
                    textElement4.dataset.text = "When he truly opens up and sheds his facade, he confesses that his earlier sexual interactions with us weren’t driven by genuine feelings. He admits that he didn’t actually like us at the time.";
                } else if (clickCount4 === 14) {
                    textElement4.style.bottom = "17%";
                    textElement4.dataset.text = "However, after this confession, he says something like, &ldquo;Now I’ve started to develop feelings for you,&rdquo; and adds, &ldquo;I never expected I’d come to like you like this.&rdquo;";
                } else if (clickCount4 === 15) {
                    textElement4.style.bottom = "14%";
                    textElement4.dataset.text = "At this point, I’ll stop saying &ldquo;we&rdquo; and just say &ldquo;I,&rdquo; because, of course, it’s my perspective. After hearing Astarion’s confession, we’re given a dialogue option: &ldquo;Okay, I understand now. We don’t have to engage in anything sexual unless you explicitly want to. Otherwise, I won’t ask for it.&rdquo;";
                } else if (clickCount4 === 16) {
                    textElement4.style.bottom = "18%";
                    textElement4.dataset.text = "However, there’s another option where we can disregard his feelings and say, &ldquo;But I’m with you because I want to have a sexual relationship.&rdquo;";
                } else if (clickCount4 === 17) {
                    textElement4.style.bottom = "16%";
                    textElement4.dataset.text = "If we choose this option, Astarion will answer with a sad face, saying &ldquo;If that’s what you want, then I shall provide.&rdquo; But after the act, he’ll say, &ldquo;I’m sorry, I don’t want this relationship anymore,&rdquo; and he’ll break up with us.";
                } else if (clickCount4 === 18) {
                    textElement4.style.bottom = "18%";
                    textElement4.dataset.text = "At that point, it’s like a classic &ldquo;chasing your lover to the crematorium&rdquo; scenario—there’s no turning back. Once he breaks up with you, it’s over.";

                    setTimeout(() => {choice4.style.visibility = "visible";
                        choiceContainer4.style.visibility = "visible";
                        choiceText4.innerText = choiceTexts4[choiceIndex4];
                        choiceIndex4 = (choiceIndex4 + 1) % choiceTexts4.length;
                        },4500);
                } else {
                    textbox4.onclick = null;
                }
                textElement4.innerText = ""; 
                typeEffect(textElement4, 80);
                clickCount4++;
            };
            break;

        case 5: 
            let clickCount5 = 0;
            textbox4.onclick = function () {
                if (clickCount5 === 0) {
                    textElement4.style.bottom = "18%";
                    textElement4.dataset.text = "On the positive side, my relationship with him has genuinely influenced my mindset in a constructive way.";

                } else if (clickCount5 === 1) {
                    textElement4.style.bottom = "16%";
                    textElement4.dataset.text = "For example, when I encounter difficult situations, I might think about how Astarion would react in a similar scenario, and that motivates me. His way of coping essentially provides me with a solution.";
                } else if (clickCount5 === 2) {
                    textElement4.style.bottom = "19%";
                    textElement4.dataset.text = "Additionally, his companionship has brought me a lot of joy.";
                } else if (clickCount5 === 3) {
                    textElement4.style.bottom = "17%";
                    textElement4.dataset.text = "Creating fanart has also been a challenge for me, as I’m not naturally skilled at it. But because I want to do it well, I’ve put in effort to improve, which has helped me grow as an artist.";
                } else if (clickCount5 === 4) {
                    textElement4.style.bottom = "19%";
                    textElement4.dataset.text = "Furthermore, by tagging my fanart and sharing it with other fans, I’ve received positive feedback and compliments.";
                } else if (clickCount5 === 5) {
                    textElement4.style.bottom = "14%";
                    textElement4.dataset.text = "I believe that those who appreciate my fanart resonate with my interpretation of the character, which has helped me build friendly connections with more people in this community. I think this is something the character and this relationship have brought into my life.";
                } else if (clickCount5 === 6) {
                    textElement4.style.bottom = "17%";
                    textElement4.dataset.text = "On the negative side, though it’s not something I feel the need to dwell on, the reality is that being in a relationship with this character isn’t all sweetness and good — it’s bittersweet.";
                } else if (clickCount5 === 7) {
                    textElement4.style.bottom = "18%";
                    textElement4.dataset.text = "But I think it’s precisely this bittersweet that makes it feel more like a real relationship to me.";
                } else if (clickCount5 === 8) {
                    textElement4.style.bottom = "17%";
                    textElement4.dataset.text = "However, the negative aspects often come from external factors. The world can be quite hostile toward people like us who form relationships with fictional characters.";
                } else if (clickCount5 === 9) {
                    textElement4.style.bottom = "17%";
                    textElement4.dataset.text = "Many people don’t understand, and while it’s neither the character’s fault nor ours, it makes me feel a sense of shame to talk about this relationship.";
                } else if (clickCount5 === 10) {
                    textElement4.style.bottom = "16%";
                    textElement4.dataset.text = "It’s hard for me to openly tell people who don’t understand the character or the relationship that I’m in a romantic relationship with him. Often, when you say something like that, people think you’re being childish."
                } else if (clickCount5 === 11) {
                    textElement4.style.bottom = "17%";
                    textElement4.dataset.text = "What I really want to say is that even though the character we love isn’t a real person and doesn’t have human rights, the emotions we invest in this relationship are undeniably real."

                    setTimeout(() => {choice4.style.visibility = "visible";
                        choiceContainer4.style.visibility = "visible";
                        choiceText4.innerText = choiceTexts4[choiceIndex4];
                        choiceIndex4 = (choiceIndex4 + 1) % choiceTexts4.length;
                        },4500);
                } else {
                    textbox4.onclick = null;
                }
                textElement4.innerText = ""; 
                typeEffect(textElement4, 80);
                clickCount5++;
            };
            break;

        case 6: 
            let clickCount6 = 0;
            textElement4.style.bottom = "19%";
            textbox4.onclick = function () {
                if (clickCount6 === 0) {
                    textElement4.style.bottom = "19%";
                    textElement4.dataset.text = "I’ve played for over 800 hours so far.";
                } else if (clickCount6 === 1) {
                    textElement4.style.bottom = "15%";
                    textElement4.dataset.text = "Because the character reacts differently depending on the relationships you build and the storylines you create, I’ve replayed the game multiple times, making different choices each time to hear all of his dialogue and understand him better.";
                } else if (clickCount6 === 2) {
                    textElement4.style.bottom = "19%";
                    textElement4.dataset.text = "This is the first major effort I’ve made.";
                } else if (clickCount6 === 3) {
                    textElement4.style.bottom = "19%";
                    textElement4.dataset.text = "Secondly, I’ve purchased a lot of merchandise related to him.";
                } else if (clickCount6 === 4) {
                    textElement4.style.bottom = "19%";
                    textElement4.dataset.text = "Thirdly, I’ve created fanart.";
                } else if (clickCount6 === 5) {
                    textElement4.style.bottom = "18%";
                    textElement4.dataset.text = "As an illustrator, I have the skills to express my stories with him and my interpretation of him through my art.";
                } else if (clickCount6 === 6) {
                    textElement4.style.bottom = "15%";
                    textElement4.dataset.text = "Additionally, I’ve participated in related events like Comic-Con, attended interviews with the actors from Baldur’s Gate, and met the actors in person to express my appreciation for their work and praise their performances.";


                            
                    setTimeout(() => {choice4.style.visibility = "visible";
                        choiceContainer4.style.visibility = "visible";
                        choiceText4.innerText = choiceTexts4[choiceIndex4];
                        choiceIndex4 = (choiceIndex4 + 1) % choiceTexts4.length;
                        },4500);
                } else {
                    textbox4.onclick = null;
                }
                textElement4.innerText = ""; 
                typeEffect(textElement4, 80);
                clickCount6++;
            };
            break;


        default: // Default behavior for normal text progression
        textElement4.style.bottom = "19%";
        textbox4.onclick = null; 
            setTimeout(() => {
                choice4.style.visibility = "visible";
                choiceContainer4.style.visibility = "visible";
                choiceText4.innerText = choiceTexts4[choiceIndex4];
                choiceIndex4 = (choiceIndex4 + 1) % choiceTexts4.length;
            }, 3500);
            break;
    }
};

choiceContainer5.onclick = function () {
    choice5.style.visibility = "hidden";
    choiceContainer5.style.visibility = "hidden";

    let characterFace5 = Math.floor(Math.random() * facial5.length);
    characterImg5.setAttribute("src", facial5[characterFace5]);

    let currentTextIndex5 = textIndex5;

    changeText();


    switch (currentTextIndex5) {
        case 1: // Special case for the second text with multiple clicks
            let clickCount1 = 0;
            textbox5.onclick = function () {
                if (clickCount1 === 0) {
                    textElement5.style.bottom = "18%";
                    textElement5.dataset.text = "I then watched a live-streaming playthrough of the game Danganronpa V3 and fell in love with the character. It was love at first sight.";
                } else if (clickCount1 === 1) {
                    textElement5.style.bottom = "18%";
                    textElement5.dataset.text = "Back then, the concept of &ldquo;yumejoshi&rdquo; wasn’t as widespread, but I’d actually been forming relationships with fictional characters since kindergarten.";
                } else if (clickCount1 === 2) {
                    textElement5.style.bottom = "19%";
                    textElement5.dataset.text = "And my first love was Evil Snake from the Chinese animation The Adventures of Little Carp.";
                } else if (clickCount1 === 3) {
                    textElement5.style.bottom = "18%";
                    textElement5.dataset.text = " From kindergarten to middle school, I developed crushes on many characters, but Kokichi Oma was the first I loved this deeply.";
                } else if (clickCount1 === 4) {
                    textElement5.style.bottom = "17%";
                    textElement5.dataset.text = "I later created an original character named &ldquo;Tai&rdquo; to interact with him across different settings and timelines… Now, eight years later, my love for him has only grown stronger.";
                            
                    setTimeout(() => {choice5.style.visibility = "visible";
                    choiceContainer5.style.visibility = "visible";
                    choiceText5.innerText = choiceTexts5[choiceIndex5];
                    choiceIndex5 = (choiceIndex5 + 1) % choiceTexts5.length;
                    },4500);

                } else {
                    textbox5.onclick = null;
                    // clickCount1 = -1;
                    // choice4.style.visibility = "visible";
                    // choiceContainer4.style.visibility = "visible";
                    // choiceText4.innerText = choiceTexts4[choiceIndex4];
                    // choiceIndex4 = (choiceIndex4 + 1) % choiceTexts4.length;
                }
                textElement5.innerText = ""; 
                typeEffect(textElement5, 80);
                clickCount1++;
            };
            break;


        case 2: // Special case for the third text with multiple clicks
            let clickCount2 = 0;
            textElement5.style.bottom = "19%";
            textbox5.onclick = function () {
                if (clickCount2 === 0) {
                    textElement5.style.bottom = "19%";
                    textElement5.dataset.text = "For highly interactive games like otome/dating sims, playing firsthand offers more engagement.";
                } else if (clickCount2 === 1) {
                    textElement5.style.bottom = "19%";
                    textElement5.dataset.text = "But Danganronpa is more like a visual novel, so watching a live streaming of the game felt just as immersive to me!";
                } else if (clickCount2 === 2) {
                    textElement5.style.bottom = "19%";
                    textElement5.dataset.text = "For me, it was love at first sight with Kokichi.";
                } else if (clickCount2 === 3) {
                    textElement5.style.bottom = "19%";
                    textElement5.dataset.text = "From the start of the game to his death and the ending, my love for him only deepened.";
                } else if (clickCount2 === 4) {
                    textElement5.style.bottom = "17%";
                    textElement5.dataset.text = "I began imagining myself as &ldquo;Tai&rdquo; interacting with him in worlds where he didn’t die…Over time, this expanded into multiple timelines, settings, and character dynamics.";
                } else if (clickCount2 === 5) {
                    textElement5.style.bottom = "17%";
                    textElement5.dataset.text = "For example, in a fantasy AU, he’s a noble and I’m a dragon. As time passed, our interactions became more fluid—he could be male or female, human or monster… and so could I.";
                } else if (clickCount2 === 6) {
                    textElement5.style.bottom = "19%";
                    textElement5.dataset.text = "My mind tends to wander, so I imagine all sorts of scenarios.";
                } else if (clickCount2 === 7) {
                    textElement5.style.bottom = "18%";
                    textElement5.dataset.text = "I once wondered, If he turned into a cockroach, would I still love him? I think I would—then I’d probably be a cockroach or maybe cockroach poison.";
                    
                    setTimeout(() => {choice5.style.visibility = "visible";
                        choiceContainer5.style.visibility = "visible";
                        choiceText5.innerText = choiceTexts5[choiceIndex5];
                        choiceIndex5 = (choiceIndex5 + 1) % choiceTexts5.length;
                        },4500);
                } else {
                    textbox5.onclick = null;
                }
                textElement5.innerText = ""; 
                typeEffect(textElement5, 80);
                clickCount2++;
            };
            break;
            
        case 3: 
            let clickCount3 = 0;
            textbox5.onclick = function () {
                if (clickCount3 === 0) {
                    textElement5.style.bottom = "19%";
                    textElement5.dataset.text = "Seeing him made my heart race, my chest tighten, and even stirred desire.";

                } else if (clickCount3 === 1) {
                    textElement5.style.bottom = "17%";
                    textElement5.dataset.text = "I adore how freely he lies, how he refuses to be controlled, his ability to pivot from Plan A to Plan B effortlessly, his relentless drive to win, and that elusive, almost transient aura.";
                } else if (clickCount3 === 2) {
                    textElement5.style.bottom = "19%";
                    textElement5.dataset.text = "But once I fell for him, I loved everything about him.";
                } else if (clickCount3 === 3) {
                    textElement5.style.bottom = "19%";
                    textElement5.dataset.text = "When I first fell for him, I was just a nerd who only knew about study.";
                } else if (clickCount3 === 4) {
                    textElement5.style.bottom = "18%";
                    textElement5.dataset.text = "But he’s such a free-spirited character that he gradually changed me—I became freer too.";


                    setTimeout(() => {choice5.style.visibility = "visible";
                        choiceContainer5.style.visibility = "visible";
                        choiceText5.innerText = choiceTexts5[choiceIndex5];
                        choiceIndex5 = (choiceIndex5 + 1) % choiceTexts5.length;
                        },4500);
                } else {
                    textbox5.onclick = null;
                }
                textElement5.innerText = ""; 
                typeEffect(textElement5, 80);
                clickCount3++;
            };
            break;

        case 4: 
            let clickCount4 = 0;
            textbox5.onclick = function () {
                if (clickCount4 === 0) {
                    textElement5.style.bottom = "19%";
                    textElement5.dataset.text = "But over time, my self-insert narratives took over.";
                } else if (clickCount4 === 1) {
                    textElement5.style.bottom = "18%";
                    textElement5.dataset.text = "Five years ago, I got a life-sized genderbent doll of him, dressing &ldquo;her&rdquo; up and sleeping together every night—it felt like we’d become family.";
                } else if (clickCount4 === 2) {
                    textElement5.style.bottom = "16%";
                    textElement5.dataset.text = "Later, I wanted to marry &ldquo;her,&rdquo; so two years ago, we held a wedding. Now, it’s like we’re in the honeymoon phase, growing even more in love… Recently, I’ve also wanted to incorporate &ldquo;her&rdquo; into my artwork.";


                    setTimeout(() => {choice5.style.visibility = "visible";
                        choiceContainer5.style.visibility = "visible";
                        choiceText5.innerText = choiceTexts5[choiceIndex5];
                        choiceIndex5 = (choiceIndex5 + 1) % choiceTexts5.length;
                        },4500);
                } else {
                    textbox5.onclick = null;
                }
                textElement5.innerText = ""; 
                typeEffect(textElement5, 80);
                clickCount4++;
            };
            break;

        case 5: 
            let clickCount5 = 0;
            textElement5.style.bottom = "19%";
            textbox5.onclick = function () {
                if (clickCount5 === 0) {
                    textElement5.style.bottom = "19%";
                    textElement5.dataset.text = "Even in older pieces, there are subtle details referencing us.";

                } else if (clickCount5 === 1) {
                    textElement5.style.bottom = "17%";
                    textElement5.dataset.text = "But lately, I’ve wanted to focus entirely on works about &ldquo;us,&rdquo; including installations. Our wedding was fully documented as a video piece.";
                } else if (clickCount5 === 2) {
                    textElement5.style.bottom = "18%";
                    textElement5.dataset.text = "There’s also that body performance art—years ago, I had the idea to pierce my skin with his badge goods but planned to fake it with blood props.";
                } else if (clickCount5 === 3) {
                    textElement5.style.bottom = "19%";
                    textElement5.dataset.text = "Last year, I suddenly decided to actually do it, maybe because my mental state wasn’t great at the time.";
                } else if (clickCount5 === 4) {
                    textElement5.style.bottom = "19%";
                    textElement5.dataset.text = "There wasn’t a specific trigger—he’s just become part of me, so naturally, he influences my work.";


                    setTimeout(() => {choice5.style.visibility = "visible";
                        choiceContainer5.style.visibility = "visible";
                        choiceText5.innerText = choiceTexts5[choiceIndex5];
                        choiceIndex5 = (choiceIndex5 + 1) % choiceTexts5.length;
                        },4500);
                } else {
                    textbox5.onclick = null;
                }
                textElement5.innerText = ""; 
                typeEffect(textElement5, 80);
                clickCount5++;
            };
            break;

        case 6: 
            let clickCount6 = 0;
            textElement5.style.bottom = "19%";
            textbox5.onclick = function () {
                if (clickCount6 === 0) {
                    textElement5.style.bottom = "17%";
                    textElement5.dataset.text = "In middle school, my mental health was terrible—I’d hide and cry alone at school, imagining him beside me, attending classes together, even conjuring our conversations.";
                } else if (clickCount6 === 1) {
                    textElement5.style.bottom = "17%";
                    textElement5.dataset.text = "Since he got me through my hardest times, our bond deepened. The positives are obvious: thinking of him brings me joy, and we’ve done so much together.";
                } else if (clickCount6 === 2) {
                    textElement5.style.bottom = "18%";
                    textElement5.dataset.text = "The downside is the sudden realization that he doesn’t exist in this world…There’s always a barrier between us, and that hurts.";
                } else if (clickCount6 === 3) {
                    textElement5.style.bottom = "19%";
                    textElement5.dataset.text = "Sometimes I even doubt if I love him enough.";
                } else if (clickCount6 === 4) {
                    textElement5.style.bottom = "17%";
                    textElement5.dataset.text = "Years ago, when I was suicidal, I fantasized that dying would take me to a beautiful world where he’d be waiting—we’d marry and live an ordinary, happy life.";
                } else if (clickCount6 === 5) {
                    textElement5.style.bottom = "19%";
                    textElement5.dataset.text = "Our relationship has painful aspects too, both emotionally and physically.";
                } else if (clickCount6 === 6) {
                    textElement5.style.bottom = "17%";
                    textElement5.dataset.text = "Tattooing him on my skin and piercing his badge into my flesh were attempts to merge him into my body. Even in fantasies, I imagine dark themes like mind control, BDSM, and gore.";


                            
                    setTimeout(() => {choice5.style.visibility = "visible";
                        choiceContainer5.style.visibility = "visible";
                        choiceText5.innerText = choiceTexts5[choiceIndex5];
                        choiceIndex5 = (choiceIndex5 + 1) % choiceTexts5.length;
                        },4500);
                } else {
                    textbox5.onclick = null;
                }
                textElement5.innerText = ""; 
                typeEffect(textElement5, 80);
                clickCount6++;
            };
            break;


        default: // Default behavior for normal text progression
        textElement5.style.bottom = "19%";
        textbox5.onclick = null; 
            setTimeout(() => {
                choice5.style.visibility = "visible";
                choiceContainer5.style.visibility = "visible";
                choiceText5.innerText = choiceTexts5[choiceIndex5];
                choiceIndex5 = (choiceIndex5 + 1) % choiceTexts5.length;
            }, 3500);
            break;
    }
};









function changeText() {
    if (textIndex1 >= texts1.length) textIndex1 = 0;
    if (textIndex2 >= texts2.length) textIndex2 = 0;
    if (textIndex3 >= texts3.length) textIndex3 = 0;
    if (textIndex4 >= texts4.length) textIndex4 = 0;
    if (textIndex5 >= texts5.length) textIndex5 = 0;

    // clearTimeout(timeout1);
    // clearTimeout(timeout2);
    // clearTimeout(timeout3);
    // clearTimeout(timeout4);

    textElement.innerText = ""; 
    textElement.dataset.text = texts1[textIndex1];

    textIndex1 = (textIndex1 + 1) % texts1.length; 

    textElement2.innerText = ""; 
    textElement2.dataset.text = texts2[textIndex2];

    textIndex2 = (textIndex2 + 1) % texts2.length; 


    textElement3.innerText = ""; 
    textElement3.dataset.text = texts3[textIndex3];

    textIndex3 = (textIndex3 + 1) % texts3.length; 

    textElement4.innerText = ""; 
    textElement4.dataset.text = texts4[textIndex4];

    textIndex4 = (textIndex4 + 1) % texts4.length; 

    textElement5.innerText = ""; 
    textElement5.dataset.text = texts5[textIndex5];

    textIndex5 = (textIndex5 + 1) % texts5.length; 

    // typeEffect(textElement, 80);
    // typeEffect(textElement2, 80);
    typeEffect(textElement, 80);
    typeEffect(textElement2, 80);
    typeEffect(textElement3, 80);
    typeEffect(textElement4, 80);
    typeEffect(textElement5, 80);

}


// function typeEffect(element, timeoutRef, delay = 80) {
//     // Clear any previous timeout before starting

//     let text = element.dataset.text || element.innerText.trim();
//     if (!text) return;

//     element.innerText = ""; // Ensure full reset before typing starts

//     clearTimeout(timeoutRef); 

//     let words = text.split(" ");
//     let i = 0;

//     function addWord() {
//         if (i < words.length) {
//             element.innerHTML += words[i] + " ";
//             i++;
//             timeoutRef = setTimeout(addWord, delay);
//         }
//     }

//     addWord();
// }



// function typeEffect(element, timeoutVar, delay = 80) {
//     let text = element.dataset.text || element.innerText.trim(); 
//     if (!text) return; 

//     element.innerText = "";

//     clearTimeout(timeoutVar); 

//     let words = text.split(" ");
//     let i = 0;

//     function addWord() {
//         if (i < words.length) {
//             element.innerHTML += words[i] + " ";  
//             i++;
//             timeoutVar = setTimeout(addWord, delay);  
//         }
//     }

//     addWord();
// }



function typeEffect(element, delay = 80) {
    let text = element.dataset.text || element.innerText.trim(); // Get text to display
    if (!text) return; // Stop if no text


    if (element === textElement) {
        clearTimeout(timeout1);
    } else if (element === textElement2) {
        clearTimeout(timeout3);
    } else if (element === textElement3) {
        clearTimeout(timeout5);
    } else if (element === textElement4) {
        clearTimeout(timeout7);
    } else if (element === textElement5) {
        clearTimeout(timeout9);
    }

    element.innerText = ""; // **Ensure text is fully cleared before typing**

    // Stop any existing typing process (if re-clicked)

    // clearTimeout(timeout1); 
    // clearTimeout(timeout3);



    const words = text.split(" ");
    let i = 0;

    function addWord() {
        if (i < words.length) {
            element.innerHTML += words[i] + " "; // Type words one by one
            i++;

            
            if (element === textElement) {
                timeout1 = setTimeout(addWord, delay);
            } else if (element === textElement2) {
                timeout3 = setTimeout(addWord, delay);
            } else if (element === textElement3) {
                timeout5 = setTimeout(addWord, delay);
            } else if (element === textElement4) {
                timeout7 = setTimeout(addWord, delay);
            } else if (element === textElement5) {
                timeout9 = setTimeout(addWord, delay);
            }
            
            
            // Store timeout to clear on next click
        }
    }
    addWord();
}



window.onload = function () {
    textElement.innerText = "";
    textElement.dataset.text = ""; 

    textElement2.innerText = "";
    textElement2.dataset.text = ""; 

    textElement3.innerText = "";
    textElement3.dataset.text = ""; 

    textElement4.innerText = "";
    textElement4.dataset.text = ""; 

    textElement5.innerText = "";
    textElement5.dataset.text = ""; 
};


console.log("textElement:", textElement.innerText);
console.log("dataset.text:", textElement.dataset.text);

// function typeEffect(element, delay = 80) {
//     const text = element.dataset.text || element.innerText.trim();
//     const words = text.split(" ");
//     element.innerText = "";

//     let i = 0;
//     function addWord() {
//         if (i < words.length) {
//             element.innerHTML += words[i] + " ";
//             i++;
//             setTimeout(addWord, delay);
//         }
//     }
//     addWord();
// }


// choiceContainer1.onclick = function () {
//     choice1.style.visibility = "hidden";
//     choiceContainer1.style.visibility = "hidden";

//     changeText();

//     let characterFace1 = Math.floor(Math.random() * facial1.length);
//     characterImg1.setAttribute("src", facial1[characterFace1]);

//         setTimeout(() => {
//         choice1.style.visibility = "visible";
//         choiceContainer1.style.visibility = "visible";

//         choiceText.innerText = choiceTexts1[choiceIndex1];
//         choiceIndex1 = (choiceIndex1 + 1) % choiceTexts1.length;
//     }, 3500);

// };


// choiceContainer1.onclick = function () {
//     choice1.style.visibility = "hidden";
//     choiceContainer1.style.visibility = "hidden";

//     changeText();

//     let characterFace1 = Math.floor(Math.random() * facial1.length);
//     characterImg1.setAttribute("src", facial1[characterFace1]);

//         setTimeout(() => {
//         choice1.style.visibility = "visible";
//         choiceContainer1.style.visibility = "visible";

//         choiceText.innerText = choiceTexts1[choiceIndex1];
//         choiceIndex1 = (choiceIndex1 + 1) % choiceTexts1.length;
//     }, 3500);

// };



// function checkTextAndEnableClick() {

//         if (textElement.innerText.trim() === texts1[1]) {
//             choice1.style.visibility = "hidden";
//             choiceContainer1.style.visibility = "hidden";

//             textbox1.onclick = function () {
//                 textElement.style.bottom = "14%";
//                 textElement.innerText = "";
//                 textElement.dataset.text = texts1[2];

//                 typeEffect(textElement, 80, () => {
//                     if (textElement.innerText.trim() === texts1[2]) {
//                         setTimeout(() => {
//                             choice1.style.visibility = "visible";
//                             choiceContainer1.style.visibility = "visible";

//                             choiceText.innerText = choiceTexts1[choiceIndex1];
//                             choiceIndex1 = (choiceIndex1 + 1) % choiceTexts1.length;
//                         }, 3500);
//                     }
//                 });
//             };
//         } else if(textElement.innerText.trim() === texts1[2]){
//             textbox1.onclick = null;
//         }
// }