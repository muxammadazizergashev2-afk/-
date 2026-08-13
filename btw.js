/* =================================
   КНОПКИ
================================= */

const buttons = document.querySelector("#buttons");

const buttonData = [
    {
        text: "Telegram канал",
        link: "https://t.me/shoxa312012",
        primary: true
    },
    {
        text: "Telegram",
        link: "https://t.me/ashox1",
        primary: false
    },
    {
        text: "TikTok",
        link: "https://www.tiktok.com/@_ashox1",
        primary: false
    }
];

buttonData.forEach(({ text, link, primary }) => {

    const button = document.createElement("a");

    button.textContent = text;
    button.href = link;
    button.target = "_blank";
    button.rel = "noopener noreferrer";

    button.classList.add("js-button");

    if (primary) {
        button.classList.add("primary");
    }

    buttons.appendChild(button);
});


/* =================================
   TYPING EFFECT
================================= */

const subtitle = document.querySelector(".hero__subtitle");

const words = [
    "любитель футбола",
    "любитель волейбола",
    "любитель книг"
];

let wordIndex = 0;
let letterIndex = 0;
let deleting = false;

const typingElement = document.createElement("span");

typingElement.id = "typing";

subtitle.innerHTML = "Я ";
subtitle.appendChild(typingElement);

function typing() {

    const word = words[wordIndex];

    if (!deleting) {

        typingElement.textContent =
            word.slice(0, letterIndex + 1);

        letterIndex++;

        if (letterIndex === word.length) {
            deleting = true;

            setTimeout(typing, 1400);
            return;
        }

    } else {

        typingElement.textContent =
            word.slice(0, letterIndex - 1);

        letterIndex--;

        if (letterIndex === 0) {
            deleting = false;

            wordIndex++;

            if (wordIndex === words.length) {
                wordIndex = 0;
            }
        }
    }

    setTimeout(
        typing,
        deleting ? 45 : 80
    );
}

typing();


/* =================================
   SCROLL REVEAL
================================= */

const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }

        });

    },
    {
        threshold: 0.15
    }
);

sections.forEach(section => {

    section.style.opacity = "0";
    section.style.transform = "translateY(40px)";
    section.style.transition = "1s ease";

    observer.observe(section);
});


/* =================================
   3D CARD EFFECT
================================= */

const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mousemove", event => {

        const rect = card.getBoundingClientRect();

        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        const rotateX =
            (y - rect.height / 2) / 18;

        const rotateY =
            (rect.width / 2 - x) / 18;

        card.style.transform = `
            perspective(700px)
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
            translateY(-8px)
        `;
    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "perspective(700px) rotateX(0) rotateY(0)";

    });
});


/* =================================
   CURSOR GLOW
================================= */

const glow = document.createElement("div");

glow.classList.add("cursor-glow");

document.body.appendChild(glow);

document.addEventListener("mousemove", event => {

    glow.style.left = `${event.clientX}px`;
    glow.style.top = `${event.clientY}px`;

});


/* =================================
   SCROLL PROGRESS
================================= */

const progress = document.createElement("div");

progress.classList.add("progress");

document.body.appendChild(progress);

window.addEventListener("scroll", () => {

    const scrollTop = window.scrollY;

    const pageHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

    const percentage =
        (scrollTop / pageHeight) * 100;

    progress.style.width =
        `${percentage}%`;
});