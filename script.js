const paragraphs = [
  "Hey love, after reading everything you wrote, I just want to say this from my heart — you mean so much more to me than I probably show sometimes.",

  "You came into my life when I was at my lowest, when almost everyone else had walked away, and somehow you held me together. Honestly, I feel like I’m still standing strong today largely because of you.",

  "And something I couldn’t even express properly for the last two years, you made me finally say it out loud — how deeply I love you and how important you are to me. That alone shows how much you understand me.",

  "You’re not just a part of my life — you’re everything to me. When I think about my future, I only see two possibilities: either it’s with you, or it doesn’t feel meaningful at all.",

  "You’ve become my comfort, my safe place, my strength. I love you genuinely, deeply, and without conditions.",

  "When I say I can do anything for you, I don’t mean it casually — I mean I’ll always stand by you, support you, protect what we have, and keep choosing you no matter what comes our way.",

  "So please don’t ever doubt your place in my life or my feelings. I’m here, I’m not going anywhere, and what we share is real and precious to me.",

  "I love you more than words can properly explain, and I always will — just trust that, okay?"
];

let pIndex = 0;
let charIndex = 0;
let currentP;

function goToQ2(){
  document.getElementById("q1").classList.remove("active");
  document.getElementById("q2").classList.add("active");
}

function startLetter(){
  document.getElementById("q2").classList.remove("active");
  document.getElementById("letter").classList.add("active");
  createParagraph();
}

function createParagraph(){
  currentP = document.createElement("p");
  currentP.className = "line";
  document.getElementById("letterBox").appendChild(currentP);
  charIndex = 0;
  typeChar();
}

function typeChar(){
  if(charIndex < paragraphs[pIndex].length){
    currentP.innerHTML += paragraphs[pIndex].charAt(charIndex);
    charIndex++;

    // auto-scroll for mobile
    currentP.scrollIntoView({ behavior: "smooth", block: "end" });

    setTimeout(typeChar, 25);
  } else {
    pIndex++;
    if(pIndex < paragraphs.length){
      setTimeout(createParagraph, 500);
    } else {
      setTimeout(()=>{
        document.getElementById("okayBtn").style.display = "inline-block";
      }, 1000);
    }
  }
}

function showFinal(){
  document.getElementById("letter").classList.remove("active");
  document.getElementById("final").classList.add("active");
}

/* Floating hearts */
setInterval(()=>{
  const heart = document.createElement("span");
  const kiss = document.createElement("span");
  kiss.innerHTML = "💋";
  heart.innerHTML = "❤️";
  heart.style.left = Math.random()*100 + "vw";
  heart.style.fontSize = Math.random()*20 + 10 + "px";
  kiss.style.left = Math.random()*100 + "vw";
  kiss.style.fontSize = Math.random()*20 + 10 + "px";
  document.getElementById("hearts").appendChild(heart);
  document.getElementById("hearts").appendChild(kiss);
  setTimeout(()=>heart.remove(),8000);
},300);
