const playSongBtn = document.querySelector('.fa-play');
const pauseSongBtn = document.querySelector('.fa-pause');
const nextSongBtn = document.querySelector('.fa-step-forward');
const albumImg = document.querySelector('.albumImg');
const preSongBtn = document.querySelector('.fa-step-backward');
const randomBtn = document.querySelector('.fa-random');

const musicFile = new Audio();

let isPlaying = false;
let isRandom = false;
let currentNumber = 0;

const songs = [
  {
    songNme: 'Circles',
    artistName: "Manfred Mann's Earth Band",
    audioSrc: '../audio/circles.mp3',
    imgSrc: '../img/circles.webp',
  },
  {
    songNme: 'Blackbird',
    artistName: 'Miles Davis',
    audioSrc: '../audio/blackbird.mp3',
    imgSrc: '../img/blackbird.jpg',
  },
  {
    songNme: 'Hella',
    artistName: 'No Doubt',
    audioSrc: '../audio/hella.mp3',
    imgSrc: '../img/hella.jpg',
  },
  {
    songNme: 'Mustard',
    artistName: 'Beatles',
    audioSrc: '../audio/mustard.mp3',
    imgSrc: '../img/mustard.jpg',
  },
];

let currentSong = songs[currentNumber];

const playSong = () => {
  currentSong = songs[currentNumber];
  console.log(currentNumber);
  if (isPlaying === false) {
    isPlaying = true;
    musicFile.src = currentSong.audioSrc;
    albumImg.src = currentSong.imgSrc;
    musicFile.play();
    playSongBtn.classList.add('hide');
    pauseSongBtn.classList.remove('hide');
  } else {
  }
};

const pauseSong = () => {
  if (isPlaying) {
    isPlaying = false;
    pauseSongBtn.classList.add('hide');
    playSongBtn.classList.remove('hide');
    musicFile.pause();
  }
};

const nextSong = () => {
  if (!isPlaying) {
    return;
  }

  if (currentNumber === songs.length - 1) {
    currentNumber = 0;
    isPlaying = false;
    playSong();
  } else {
    currentSong = songs[++currentNumber];
    isPlaying = false;
    playSong();
  }
};

const preSong = (e) => {
  if (!isPlaying) {
    return;
  }
  if (currentNumber === 0) {
    currentNumber = songs.length - 1;
    isPlaying = false;
    playSong();
  } else {
    currentSong = songs[--currentNumber];
    isPlaying = false;
    playSong();
  }
};

const randomSong = () => {
  let randomNumber = Math.floor(Math.random() * 4);
};

playSongBtn.addEventListener('click', playSong);
pauseSongBtn.addEventListener('click', pauseSong);
nextSongBtn.addEventListener('click', nextSong);
preSongBtn.addEventListener('click', preSong);
randomBtn.addEventListener('click', randomSong);
