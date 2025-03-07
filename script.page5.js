// window.open('page5.html', '_blank', 'width=922,height=663,resizable=no,scrollbars=no');


const scrollScenes = document.getElementById("scenes");

const nextButton = document.getElementById("next");

scrollScenes.addEventListener("wheel", (event) => {
    event.preventDefault(); 
});

document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight") {
        scrollScenes.scrollLeft += 50;
    } else if (event.key === "ArrowLeft") {
        scrollScenes.scrollLeft -= 50;
    }

    if (scrollScenes.scrollLeft + scrollScenes.clientWidth >= scrollScenes.scrollWidth - 5) {
        nextButton.style.display = "block"; 
    } else {
        nextButton.style.display = "none"; 
    }

});

function openPopup(url, width, height) {
    let left = (screen.width - width) / 2;
    let top = (screen.height - height) / 2;
    window.open(url, '_blank', `width=${width},height=${height},left=${left},top=${top}`);
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

const section = document.getElementById("section-button");
const sectionChoice = document.getElementById("section-choice");

section.onclick = function(e){

    if (isToggled){
        sectionChoice.style.visibility = "visible";
    }else{
        sectionChoice.style.visibility = "hidden";
    }

    isToggled = !isToggled;

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

const trigger2 = document.getElementById("trigger2");
const characterImg1 = document.getElementById("character1-img");
const textbox1 = document.getElementById("textbox1");
const character1 = document.getElementById("character1");

const textElement = document.getElementById("text1");

const choice1 = document.getElementById("choice1");
const choiceContainer1 = document.getElementById("choice-container1");

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

let textIndex1 = 0;
let choiceIndex1 = 0;

let timeout1, timeout2;


const choiceText = document.getElementById("choicetext1");

const facial1 = ["assets/PNG/penny1.png", "assets/PNG/penny2.png", "assets/PNG/penny3.png"];

const closeDialogue = document.getElementById("close-dialogue");

closeDialogue.onclick = function () {


    clearTimeout(timeout1);
    clearTimeout(timeout2);

    textElement.innerText = ""; 
    choiceText.innerText = "";

    resetElements();
};

function resetElements() {
    console.log("Resetting elements...");

    // Hide elements
    character1.style.visibility = "hidden";
    choice1.style.visibility = "hidden";
    choiceContainer1.style.visibility = "hidden";
    closeDialogue.style.visibility = "hidden";

    // **Reset text completely before setting new text**
    textElement.innerText = "";  
    textElement.dataset.text = "Hi, I’m Penny, 21 years old, my pronouns are she/her, and I'm currently a senior illustration student.";
    choiceText.innerText = "Before you were selected as the interviewee, I learned that you have experience building parasocial relationships with fictional characters. Could you briefly describe through which mediums (manga/comics, anime/animation, games, novels, movies, TV dramas, etc.) you primarily establish such relationships with fictional characters?";

    textIndex1 = 0;
    choiceIndex1 = 0;

    // **Set Default Image (No More Random First Image)**
    characterImg1.setAttribute("src", "assets/PNG/penny1.png");

    // **Reset Typing Effect (Fixing Double Text Issue)**
    clearTimeout(timeout1); // Ensure no ongoing typing process
    textElement.innerText = "";  // Force clear before starting again

    setTimeout(() => {
        typeEffect(textElement, 80);
    }, 50);
    
    textbox1.onclick = null;
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

    timeout1 = setTimeout(() => {
        typeEffect(textElement, 80);
    });

    timeout2 = setTimeout(() => {
        choice1.style.visibility = "visible";
        choiceContainer1.style.visibility = "visible";
    }, 3500);
};


const trigger3 = document.getElementById("trigger3");
const objects = document.getElementById("objects");
const closeObject = document.getElementById("close-object");

trigger3.onclick = function () {
    objects.style.visibility = "visible";
}

closeObject.onclick = function () {
    objects.style.visibility = "hidden";
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
                    clickCount1 = -1;
                    choice1.style.visibility = "visible";
                    choiceContainer1.style.visibility = "visible";
                    choiceText.innerText = choiceTexts1[choiceIndex1];
                    choiceIndex1 = (choiceIndex1 + 1) % choiceTexts1.length;
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
                    clickCount2 = -1;
                    choice1.style.visibility = "visible";
                    choiceContainer1.style.visibility = "visible";
                    choiceText.innerText = choiceTexts1[choiceIndex1];
                    choiceIndex1 = (choiceIndex1 + 1) % choiceTexts1.length;
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
                    clickCount3 = -1;
                    choice1.style.visibility = "visible";
                    choiceContainer1.style.visibility = "visible";
                    choiceText.innerText = choiceTexts1[choiceIndex1];
                    choiceIndex1 = (choiceIndex1 + 1) % choiceTexts1.length;
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
                    clickCount4 = -1;
                    choice1.style.visibility = "visible";
                    choiceContainer1.style.visibility = "visible";
                    choiceText.innerText = choiceTexts1[choiceIndex1];
                    choiceIndex1 = (choiceIndex1 + 1) % choiceTexts1.length;
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
                    clickCount5 = -1;
                    choice1.style.visibility = "visible";
                    choiceContainer1.style.visibility = "visible";
                    choiceText.innerText = choiceTexts1[choiceIndex1];
                    choiceIndex1 = (choiceIndex1 + 1) % choiceTexts1.length;
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
                    clickCount6 = -1;
                    choice1.style.visibility = "visible";
                    choiceContainer1.style.visibility = "visible";
                    choiceText.innerText = choiceTexts1[choiceIndex1];
                    choiceIndex1 = (choiceIndex1 + 1) % choiceTexts1.length;
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
                            
                    setTimeout(() => {choice1.style.visibility = "visible";
                    choiceContainer1.style.visibility = "visible";
                    choiceText.innerText = choiceTexts1[choiceIndex1];
                    choiceIndex1 = (choiceIndex1 + 1) % choiceTexts1.length;
                    },4500);

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
                    clickCount7 = -1;
                    choice1.style.visibility = "hidden";
                    choiceContainer1.style.visibility = "hidden";
                    choiceText.innerText = choiceTexts1[choiceIndex1];
                    choiceIndex1 = (choiceIndex1 + 1) % choiceTexts1.length;
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









function changeText() {
    if (textIndex1 >= texts1.length) {
        textIndex1 = 0;
    }
    textElement.innerText = ""; 
    textElement.dataset.text = texts1[textIndex1];

    textIndex1 = (textIndex1 + 1) % texts1.length; 

    typeEffect(textElement, 80);
}

function typeEffect(element, delay = 80) {
    let text = element.dataset.text || element.innerText.trim(); // Get text to display
    if (!text) return; // Stop if no text

    element.innerText = ""; // **Ensure text is fully cleared before typing**
    clearTimeout(timeout1); // Stop any existing typing process (if re-clicked)

    const words = text.split(" ");
    let i = 0;

    function addWord() {
        if (i < words.length) {
            element.innerHTML += words[i] + " "; // Type words one by one
            i++;
            timeout1 = setTimeout(addWord, delay); // Store timeout to clear on next click
        }
    }
    addWord();
}



window.onload = function () {
    textElement.innerText = "";
    textElement.dataset.text = ""; 
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