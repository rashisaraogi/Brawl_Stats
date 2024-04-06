let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick=()=>{
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};
const sr=ScrollReveal({
    distance: '65px',
    duration: 2600,
    delay: 450,
    reset: true
});

sr.reveal('.hero-text',{delay:200, origin:'top'});
sr.reveal('.hero-img',{delay:450, origin:'left'});
sr.reveal('.icons',{delay:500, origin:'left'});
sr.reveal('.scroll-down',{delay:500, origin:'right'});

// const theme=new Theme();
// theme.src=".theme.mp3"

// const audio =new Audio();
// audio.src="./Shelly_start_02.ogg";

function playRandomMusic() {
    var musicList = [
        "MShelly/Shelly_start_01.ogg",
        "MShelly/Shelly_start_02.ogg",
        "MShelly/Shelly_start_03.ogg",
        "MShelly/Shelly_start_04.ogg",
        "MShelly/Shelly_lead_01.ogg",
        "MShelly/Shelly_lead_02.ogg",
        "MShelly/Shelly_lead_02.ogg",
        "MShelly/Shelly_lead_03.ogg",
        "MShelly/Shelly_lead_04.ogg",
        "MShelly/Shelly_kill_01.ogg",
        "MShelly/Shelly_kill_02.ogg",
        "MShelly/Shelly_kill_03.ogg",
        "MShelly/Shelly_kill_04.ogg",
        "MShelly/Shelly_kill_05.ogg",
        "MShelly/Shelly_die_01.ogg",
      "MShelly/Shelly_die_02.ogg",
      "MShelly/Shelly_die_03.ogg",
      "MShelly/Shelly_die_04.ogg",
      "MShelly/Shelly_hurt_01.ogg",
      "MShelly/Shelly_hurt_02.ogg",
      "MShelly/Shelly_hurt_03.ogg",
      "MShelly/Shelly_hurt_04.ogg",
      "MShelly/Shelly_hurt_05.ogg",
      "MShelly/Shelly_ulti_01.ogg",
      "MShelly/Shelly_ulti_02.ogg",
      "MShelly/Shelly_ulti_03.ogg",
      "MShelly/Shelly_ulti_04.ogg"
    ];

    var randomIndex = Math.floor(Math.random() * musicList.length);
    var musicFile = musicList[randomIndex];

    var audio = new Audio(musicFile);
    audio.play();
}
var audio = document.getElementById("musicc");
var isPlaying = true;

function toggleAudio() {
  if (isPlaying) {
    audio.pause();
    isPlaying = false;
  } else {
    audio.play();
    isPlaying = true;
  }
}
function contact(){
    // window.open("contact.html" ,"_blank");
    window.location.href="contact.html";
}
function about(){
  window.open("about.html","_blank");
  window.location.href="about.html";
}
function home(){
  // window.open("index.html","_blank");
  window.location.href="index.html";
}
function brawler(){
  window.location.href="brawler.html"
}

