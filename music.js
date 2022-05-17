console.log("omm namah shivay")
let songindex = 0;
let audioElement0 = new Audio('songs/1.mp3');
let audioElement1 = new Audio('songs/2.mp3');
let audioElement2 = new Audio('songs/3.mp3');
let audioElement3 = new Audio('songs/4.mp3');
let audioElement4 = new Audio('songs/5.mp3');
let audioElement5 = new Audio('songs/6.mp3');
let audioElement6 = new Audio('songs/7.mp3');
let masterplay = document.getElementById('masterplay');
let pbar = document.getElementById('mypbar');
let fontawesome = document.getElementsByClassName('fontawesome0');
let fontawesome1 = document.getElementsByClassName('fontawesome1');
let fontawesome2 = document.getElementsByClassName('fontawesome2');
let fontawesome3 = document.getElementsByClassName('fontawesome3');
let fontawesome4 = document.getElementsByClassName('fontawesome4');
let fontawesome5 = document.getElementsByClassName('fontawesome5');
let songs = [
    { songname: "let me down slowly", filepath: "songs/1.mp3", coverpath: "covers.1/jpg" },
    { songname: "let me down slowly", filepath: "songs/2.mp3", coverpath: "covers.1/jpg" },
    { songname: "let me down slowly", filepath: "songs/3.mp3", coverpath: "covers.1/jpg" },
    { songname: "let me down slowly", filepath: "songs/4.mp3", coverpath: "covers.1/jpg" },
    { songname: "let me down slowly", filepath: "songs/5.mp3", coverpath: "covers.1/jpg" },
    { songname: "let me down slowly", filepath: "songs/6.mp3", coverpath: "covers.1/jpg" },
    { songname: "let me down slowly", filepath: "songs/7.mp3", coverpath: "covers.1/jpg" },
]
masterplay.addEventListener('click', () => {
    if (audioElement0.paused || audioElement0.currenttime <= 0) {
        audioElement0.play('1.mp3');
        masterplay.classList.remove('fa-play')
        masterplay.classList.add('fa-pause')
    }
    else {
        audioElement0.pause('1.mp3');
        masterplay.classList.remove('fa-pause')
        masterplay.classList.add('fa-play')
    }
})

audioElement0.addEventListener('timeupdate', () => {
    console.log('timeupdate');
    progress = parseInt((audioElement0.currentTime / audioElement0.duration) * 100);
    console.log('progress');
    pbar.value = progress;
})
pbar.addEventListener('change', () => {
    audioElement0.currentTime = pbar.value * audioElement0.duration / 100;
}
)
fontawesome.addEventListener('click', () => {
    audioElement0.play();
})
fontawesome1.addEventListener('click', () => {
    audioElement1.play();
})
fontawesome2.addEventListener('click', () => {
    audioElement2.play();
})
fontawesome3.addEventListener('click', () => {
    audioElement3.play();
})
fontawesome4.addEventListener('click', () => {
    audioElement4.play();
})
fontawesome5.addEventListener('click', () => {
    audioElement5.play();
})


