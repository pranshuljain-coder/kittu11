/* =========================
   FLOATING SPARKLES
========================= */

const particles =
document.getElementById(
"particles"
);

function createSparkle(){

    if(!particles) return;

    const sparkle =
    document.createElement("div");

    sparkle.classList.add(
    "sparkle"
    );

    const size =
    4 + Math.random() * 10;

    sparkle.style.width =
    size + "px";

    sparkle.style.height =
    size + "px";

    sparkle.style.left =
    Math.random() * 100 + "vw";

    sparkle.style.bottom =
    "-20px";

    sparkle.style.animationDuration =
    6 + Math.random() * 8 + "s";

    particles.appendChild(
    sparkle
    );

    setTimeout(() => {

        sparkle.remove();

    },15000);

}

/* =========================
   CONTINUOUS GENERATION
========================= */

for(let i=0;i<40;i++){

    setTimeout(() => {

        createSparkle();

    },i * 100);

}

setInterval(() => {

    createSparkle();

},250);

/* =========================
   HEART BLAST FUNCTION
========================= */

function createHeartExplosion(){

    for(let i=0;i<120;i++){

        const heart =
        document.createElement("div");

        heart.innerHTML =
        "❤";

        heart.style.position =
        "fixed";

        heart.style.left =
        "50%";

        heart.style.top =
        "50%";

        heart.style.fontSize =
        (15 + Math.random()*35)
        + "px";

        heart.style.pointerEvents =
        "none";

        heart.style.zIndex =
        "9999";

        document.body.appendChild(
        heart
        );

        const x =
        (Math.random()-0.5)
        * 1200;

        const y =
        (Math.random()-0.5)
        * 1200;

        heart.animate([

        {
            transform:
            "translate(0,0) scale(1)",

            opacity:1
        },

        {
            transform:
            `translate(${x}px,${y}px) scale(0)`,

            opacity:0
        }

        ],{

            duration:2500,

            easing:"ease-out"
        });

        setTimeout(() => {

            heart.remove();

        },2500);

    }

}

/* =========================
   LOVE RAIN
========================= */

function createLoveRain(){

    for(let i=0;i<200;i++){

        const heart =
        document.createElement("div");

        heart.innerHTML =
        "❤";

        heart.style.position =
        "fixed";

        heart.style.left =
        Math.random()*100
        + "vw";

        heart.style.top =
        "-50px";

        heart.style.fontSize =
        (12 + Math.random()*30)
        + "px";

        heart.style.zIndex =
        "9999";

        document.body.appendChild(
        heart
        );

        const duration =
        3000 +
        Math.random()*3000;

        heart.animate([

        {
            transform:
            "translateY(0)",

            opacity:1
        },

        {
            transform:
            `translateY(${window.innerHeight+200}px)`,

            opacity:0
        }

        ],{

            duration:
            duration,

            easing:
            "linear"
        });

        setTimeout(() => {

            heart.remove();

        },duration);

    }

}

/* =========================
   GLOBAL ACCESS
========================= */

window.createHeartExplosion =
createHeartExplosion;

window.createLoveRain =
createLoveRain;

console.log(
"✨ Effects Ready ✨"
);