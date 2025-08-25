lucide.createIcons();

const startBtn = document.querySelector('.start-button');
const startScreen = document.getElementById('start-screen');
const mainContent = document.getElementById('main-content');

startBtn.addEventListener('click', () => {
  startScreen.classList.add('hidden');
  setTimeout(() => {
    startScreen.style.display = 'none';
    mainContent.style.display = 'block';
  }, 600);
    lucide.createIcons();

});

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

const toggle = document.querySelector('.toggle-input');

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  document.body.classList.add('dark');
  toggle.checked = true;
} else {
  document.body.classList.remove('dark');
  toggle.checked = false;
}

toggle.addEventListener('change', function() {
  if (this.checked) {
    document.body.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  } else {
    document.body.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  }
});

const gamesData = [
  {
    title: "Roll a ball",
    images: ["./GameImgs/RollABall/image1.png", "./GameImgs/RollABall/image2.png" , "./GameImgs/RollABall/image3.png"],
    shortDesc: "Gather points and avoid getting caught by the ai following you",
    longDesc: "My first game made in Unity, where you control a ball to collect objects while avoiding an AI that follows you. This game was made following a unity tutorial: \"https://learn.unity.com/project/roll-a-ball\".",
    tech: ["Unity", "C#"],
    credits: [
      { type: "Tutorial", links: ["https://learn.unity.com/project/roll-a-ball"] }
    ],
    github: "#",
    game: "https://mega.nz/file/PBciiKzA#2mT9-5u8S00eO3oMJfrT-DaYkDY6l5hXweg62UfPMcg"
  },

  {
    title: "Space Shooter",
    images: ["./GameImgs/Spaceshooter/spaceShooter.png", "./GameImgs/Spaceshooter/GameOver.png"],
    shortDesc: "Fast-paced space shooting with enemies!",
    longDesc: "A fast-paced 2D space shooting game where you dodge or shoot enemies, collect power-ups, and try to get a higher score. Designed using Unity and C#.",
    tech: ["Unity", "C#"],
    github: "https://github.com/KareemH-1/GameDevelopment/tree/main/Unity/SpaceGame",
    game: "https://mega.nz/file/mFFyDbDT#8G1kn2l_nwQ74BSL2S9537YM_WPPX0Fn6_Nac47gLYs"
  },

  {
    title: "Pong 3D",
    images: ["./GameImgs/Pong/main.png", "./GameImgs/Pong/menu.png" , "./GameImgs/Pong/AI_Diff.png" , "./GameImgs/Pong/GameSettings.png" , "./GameImgs/Pong/Pause.png"],
    shortDesc: "Pong but in 3D!",
    longDesc: "A 3D version of pong, this game was made by following a tutorial on youtube: \"https://www.youtube.com/watch?v=b3xgCUlst88\", then expanding upon it. The game features PvP and PvAI with 3 difficulty levels, and a variety of game panels.",
    tech: ["Unity", "C#"],
    credits: [{ type: "Tutorial", links: ["https://www.youtube.com/watch?v=b3xgCUlst88"] }],
    github: "https://github.com/KareemH-1/GameDevelopment/tree/main/Unity/Pong3D",
    game: "https://mega.nz/file/jE13yBLB#hnX6Q9JYT--i4LNeOXMAVLavUnpbPPXArNWby1Na8hM",
    mobileDownload: "https://mega.nz/file/mcUkwAID#OyinMBXW2Cns3RGH-EqBYXUVl3ErL859Eb29BMhqXeM"
  }
];

const gamesContainer = document.getElementById("games");
const modal = document.getElementById("game-modal");
const closeBtn = document.querySelector(".close-btn");
const carouselImg = document.querySelector(".carousel-img");
const modalTitle = document.getElementById("modal-title");
const modalTech = document.getElementById("modal-tech");
const modalDesc = document.getElementById("modal-desc");
const modalGithub = document.getElementById("modal-github");
const modalGame = document.getElementById("modal-game");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const creditH = document.getElementById("credH");

let currentImages = [];
let currentIndex = 0;

gamesData.forEach(game => {
  const card = document.createElement("div");
  card.className = "game-card";
card.innerHTML = `
  <img src="${game.images[0]}" alt="${game.title}">
  <h3>${game.title}</h3>
  <p>${game.shortDesc}</p>
  <button class="view-more-btn"><i data-lucide="info"></i> View More</button>
`;


  gamesContainer.appendChild(card);

  card.querySelector(".view-more-btn").addEventListener("click", () => {
    currentImages = game.images;
    currentIndex = 0;
    carouselImg.src = currentImages[currentIndex];
    modalTech.innerHTML = "";
    game.tech.forEach(element => {
      const techSpan = document.createElement("span");
      techSpan.className = "tech-item";
      techSpan.textContent = element;
      modalTech.appendChild(techSpan);
    });
    modalTitle.textContent = game.title;
    modalDesc.textContent = game.longDesc;
    modalGithub.href = game.github;
    modalGame.href = game.game;
    const creditsElem = document.getElementById("credits");
    creditsElem.innerHTML = "";
    const creditsCon = document.querySelector('.credits-con');
    if (Array.isArray(game.credits) && game.credits.length > 0) {
      creditH.textContent = "Credits";
      game.credits.forEach((credit, index) => {
      if (typeof credit === "object" && credit.type && Array.isArray(credit.links)) {
        const typeSpan = document.createElement("span");
        typeSpan.textContent = credit.type + ": ";
        creditsElem.appendChild(typeSpan);
        credit.links.forEach((link, linkIdx) => {
        const linkElem = document.createElement("a");
        linkElem.href = link;
        linkElem.textContent = link;
        linkElem.target = "_blank";
        creditsElem.appendChild(linkElem);
        if (linkIdx < credit.links.length - 1) {
          creditsElem.appendChild(document.createTextNode(", "));
        }
        });
      } else if (typeof credit === "string") {
        creditsElem.appendChild(document.createTextNode(credit));
      }
      if (index < game.credits.length - 1) {
        creditsElem.appendChild(document.createElement("br"));
      }
      });
      if (creditsCon) creditsCon.style.display = "block";
      creditsElem.style.display = "block";
      creditH.style.display = "block";
    } else {
      if (creditsCon) creditsCon.style.display = "none";
      creditsElem.style.display = "none";
      creditH.style.display = "none";
    }

    
    const oldMobileBtn = document.querySelector(".modal-mobile-download-btn");
    if (oldMobileBtn) oldMobileBtn.remove();
    
    const modalLinks = document.querySelector(".modal-links");
    if (game.mobileDownload && game.mobileDownload.trim() !== "") {
      const mobileBtn = document.createElement("a");
      mobileBtn.className = "modal-btn modal-mobile-download-btn";
      mobileBtn.href = game.mobileDownload;
      mobileBtn.textContent = "Download for Mobile";
      mobileBtn.target = "_blank";
      modalLinks.appendChild(mobileBtn);
    }

    modal.classList.remove("hidden");
    updateCarouselButtons();
    lucide.createIcons()
  });
});

closeBtn.addEventListener("click", () => {
  modal.classList.add("hidden");
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.add("hidden");
  }
});

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    modal.classList.add("hidden");
  }
});

function updateCarouselButtons() {
  if(currentImages.length <= 1){
    prevBtn.style.display = "none";
    nextBtn.style.display = "none";
  } else {
    prevBtn.style.display = currentIndex === 0 ? "none" : "block";
    nextBtn.style.display = currentIndex === currentImages.length - 1 ? "none" : "block";
  }
}

prevBtn.addEventListener("click", () => {
  if(currentIndex > 0){
    currentIndex--;
    carouselImg.src = currentImages[currentIndex];
    updateCarouselButtons();
  }
});

nextBtn.addEventListener("click", () => {
  if(currentIndex < currentImages.length - 1){
    currentIndex++;
    carouselImg.src = currentImages[currentIndex];
    updateCarouselButtons();
  }
});
