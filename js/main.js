/* =========================
   ELEMENTS
========================= */

const startBtn =
document.getElementById("startBtn");

const introScreen =
document.getElementById("introScreen");

const storyScreen =
document.getElementById("storyScreen");

const memoriesScreen =
document.getElementById("memoriesScreen");

const mergeScreen =
document.getElementById("mergeScreen");

const blastScreen =
document.getElementById("blastScreen");

const heartbeatScreen =
document.getElementById("heartbeatScreen");

const proposalScreen =
document.getElementById("proposalScreen");

const finalScreen =
document.getElementById("finalScreen");

const storyPhoto =
document.getElementById("storyPhoto");

const storyLetter =
document.getElementById("storyLetter");

const nextBtn =
document.getElementById("nextBtn");

const yesBtn =
document.getElementById("yesBtn");

const noBtn =
document.getElementById("noBtn");

const funnyMessage =
document.getElementById("funnyMessage");

const bgMusic =
document.getElementById("bgMusic");

const heartbeat =
document.getElementById("heartbeat");

/* =========================
   STORY DATA
========================= */

const story = [

{
photo:"assets/photos/photo1.jpg",
letter:`
Dear Kittu ❤️

Pata nahi tumhe ye sab dekh kar kaisa lag raha hoga, lekin mujhe itna pata hai ki jab se tum meri life me aayi ho, tab se har din thoda zyada accha lagne laga hai.

Tumse baat karna, tumhari messages ka wait karna, aur bina wajah smile kar dena... ye sab meri daily routine ka part ban gaya hai.❤️
`
},

{
photo:"assets/photos/photo2.jpg",
letter:`
 Kabhi kabhi kuch log zindagi me bahut jaldi special ban jaate hain.

Unke saath waqt kitna guzra hai ye important nahi hota, unke saath guzra hua waqt kitna accha tha ye important hota hai.

Aur tum unhi logon me se ho.

Tumhari smile, tumhari baatein mujhe bohot achi lgti hai

Sach kahun toh tumhari ek notification bhi mera mood accha kar deti hai.❤️
`
},

{
photo:"assets/photos/photo3.jpg",
letter:`
Main perfect nahi hoon.

Mujhse galtiyan hoti hongi

Lekin ek cheez ka promise kar sakta hoon...

Main hamesha tumhari respect karunga, tumhari care karunga aur dil se tumhare saath rahunga or loyal rhunga.❤️
`
},

{
photo:"assets/photos/photo4.jpg",
letter:`
Tumhare saath aur baatein karni hain.
Aur yaadein banani hain.
Aur har naye din me tumhe aur achhe se jaana hai.

Isliye aaj main tumse ek simple sa sawaal poochna chahta hoon...

Kittu...❤️
`
}

];

let currentIndex = 0;

/* =========================
   START
========================= */

startBtn.addEventListener(
"click",
() => {

    bgMusic.volume = 0.2;

    bgMusic.play();

    introScreen.classList.add(
    "hidden"
    );

    storyScreen.classList.remove(
    "hidden"
    );

    loadStory(0);

}
);

/* =========================
   LOAD STORY
========================= */

function loadStory(index){

    const item =
    story[index];

    storyPhoto.src =
    item.photo;

    storyLetter.innerHTML =
    item.letter;

}/* =========================
   NEXT BUTTON
========================= */

nextBtn.addEventListener(
"click",
() => {

    currentIndex++;

    if(
        currentIndex <
        story.length
    ){

        loadStory(
        currentIndex
        );

    }

    else{

        startMemories();

    }

}
);

/* =========================
   MEMORIES
========================= */

function startMemories(){

    storyScreen.classList.add(
    "hidden"
    );

    memoriesScreen.classList.remove(
    "hidden"
    );

    setTimeout(() => {

        startMerge();

    },4000);

}/* =========================
   MERGE
========================= */

function startMerge(){

    memoriesScreen.classList.add(
    "hidden"
    );

    mergeScreen.classList.remove(
    "hidden"
    );

    const photos =
    document.querySelectorAll(
    ".mergePhoto"
    );

    photos.forEach(photo => {

        photo.style.left =
        "50%";

        photo.style.top =
        "50%";

        photo.style.transform =
        "translate(-50%,-50%) scale(.7)";

    });

    setTimeout(() => {

        startBlast();

    },3000);

}/* =========================
   BLAST
========================= */

function startBlast(){

    mergeScreen.classList.add(
    "hidden"
    );

    blastScreen.classList.remove(
    "hidden"
    );

    if(
        typeof createHeartExplosion
        === "function"
    ){

        createHeartExplosion();

    }

    setTimeout(() => {

        blastScreen.classList.add(
        "hidden"
        );

        fadeMusic();

        startHeartbeat();

    },3500);

}/* =========================
   MUSIC FADE
========================= */

function fadeMusic(){

    const fade =
    setInterval(() => {

        if(
            bgMusic.volume > 0.02
        ){

            bgMusic.volume -= 0.02;

        }

        else{

            bgMusic.pause();

            clearInterval(
            fade
            );

        }

    },100);

}/* =========================
   HEARTBEAT
========================= */

function startHeartbeat(){

    heartbeatScreen.classList.remove(
    "hidden"
    );

    heartbeat.volume = 0.05;

    heartbeat.play();

    let volume = 0.05;

    const grow =
    setInterval(() => {

        volume += 0.03;

        heartbeat.volume =
        volume;

        if(volume >= 0.8){

            clearInterval(
            grow
            );

        }

    },300);

    setTimeout(() => {

        showProposal();

    },7000);

}/* =========================
   PROPOSAL
========================= */

function showProposal(){

    heartbeatScreen.classList.add(
    "hidden"
    );

    proposalScreen.classList.remove(
    "hidden"
    );

}/* =========================
   NO BUTTON
========================= */

function moveNoButton(){

    const maxX =
    window.innerWidth - 150;

    const maxY =
    window.innerHeight - 80;

    noBtn.style.position =
    "fixed";

    noBtn.style.left =
    Math.random()*maxX + "px";

    noBtn.style.top =
    Math.random()*maxY + "px";

}

noBtn.addEventListener(
"mouseenter",
moveNoButton
);

noBtn.addEventListener(
"touchstart",
moveNoButton
);

noBtn.addEventListener(
"click",
() => {

    noBtn.style.display =
    "none";

    funnyMessage.innerHTML =
    "Ab na nahi bol sakti tum 🙂❤️";

    yesBtn.style.transform =
    "scale(1.4)";

    yesBtn.classList.add(
    "pulse"
    );

}
);/* =========================
   YES BUTTON
========================= */

yesBtn.addEventListener(
"click",
() => {

    proposalScreen.classList.add(
    "hidden"
    );

    if(
        typeof createLoveRain
        === "function"
    ){

        createLoveRain();

    }

    setTimeout(() => {

        finalScreen.classList.remove(
        "hidden"
        );

    },1500);

}
);

console.log(
"❤️ Project Ready ❤️"
);